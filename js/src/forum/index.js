import { extend } from 'flarum/common/extend';

import app from 'flarum/common/app';
import getEmojiCategories from '../common/utils/getEmojiCategories';
import TextEditorButton from './components/TextEditorButton';
import TextEditor from 'flarum/common/components/TextEditor';
import urlChecker from '../common/utils/urlChecker';

// Make translation calls shorter
const t = 'the-turk-flamoji.forum.';
const t_p = t + 'emoji-button.';

app.initializers.add(
  'the-turk-flamoji',
  () => {
    // localization of the `emoji-button` package
    let i18n = {
      search: app.translator.trans(t_p + 'search_placeholder'),
      notFound: app.translator.trans(t_p + 'no_emojis_found_message'),
      categories: {
        recents: app.translator.trans(t_p + 'categories.recents'),
        smileys: app.translator.trans(t_p + 'categories.smileys'),
        people: app.translator.trans(t_p + 'categories.people'),
        animals: app.translator.trans(t_p + 'categories.animals'),
        food: app.translator.trans(t_p + 'categories.food'),
        activities: app.translator.trans(t_p + 'categories.activities'),
        travel: app.translator.trans(t_p + 'categories.travel'),
        objects: app.translator.trans(t_p + 'categories.objects'),
        symbols: app.translator.trans(t_p + 'categories.symbols'),
        flags: app.translator.trans(t_p + 'categories.flags'),
        custom: app.translator.trans(t_p + 'categories.custom'),
      },
    };

    extend(TextEditor.prototype, 'oncreate', function () {
      this.flamojiButton = document.querySelector('.Button-flamoji');
      this.flamojiContainer = document.createElement('div');
      this.flamojiContainer.classList.add('ComposerBody-flamojiContainer');

      this.flamojiButton.after(this.flamojiContainer);
    });

    extend(TextEditor.prototype, 'oninit', function () {
      this.isPickerLoading = this.isPickerLoaded = false;

      // https://v4.webpack.js.org/guides/public-path/#on-the-fly
      __webpack_public_path__ = app.forum.attribute('baseUrl') + '/assets/extensions/tk-flamoji/dist/';

      // dyanmically load translated emoji keyword files
      this.emojiData = (lang) => {
        this.isPickerLoading = true;
        return import(/* webpackChunkName: "emoji-button-message-[request]" */ `@roderickhsiao/emoji-button-locale-data/dist/${lang}`);
      };
    });

    extend(TextEditor.prototype, 'toolbarItems', function (items) {
      items.add(
        'flamoji',
        TextEditorButton.component({
          onclick: () => {
            if (this.isPickerLoading == true) return;

            if (this.isPickerLoaded == false) {
              this.emojiData(app.forum.attribute('flamoji.emoji_data')).then((localeData) => {
                app
                  .request({
                    method: 'GET',
                    url: app.forum.attribute('apiUrl') + '/the-turk/emojis',
                  })
                  .then((response) => {
                    const baseUrl = app.forum.attribute('baseUrl');

                    let specifiedCategories = JSON.parse(app.forum.attribute('flamoji.specify_categories'));
                    let customCategories = JSON.parse(app.forum.attribute('flamoji.custom_categories'));
                    let emoji_version = app.forum.attribute('flamoji.emoji_version');

                    // so if we don't sort `specifiedCategories` array
                    // based on `sortingArr`, some categories are
                    // obviously not working. It seems like a bug
                    // in the `emoji-button` repository.
                    let sortingArr = getEmojiCategories();
                    specifiedCategories.sort(function (a, b) {
                      return sortingArr.indexOf(a) - sortingArr.indexOf(b);
                    });

                    // 为""会导致默认选中报错
                    customCategories = customCategories.map(c => c ? c : "无分类");

                    let specifiedCategoryCount = specifiedCategories.length;
                    let customEmojis = [];
                    let customEmojiReplacers = {};
                    response['data'].map((customEmoji) => {
                      const path = customEmoji['attributes']['path'];
                      const categoryName = customEmoji['attributes']['category'] ? customEmoji['attributes']['category'] : "无分类";
                      customEmojiReplacers[path] = customEmoji['attributes']['text_to_replace'];

                      if(customCategories.findIndex(c => c == categoryName) >= 0){
                        customEmojis.push({
                          emoji: urlChecker(path) ? path : baseUrl + path,
                          category: specifiedCategoryCount + customCategories.findIndex(c => c == categoryName),
                          categoryName,
                          name: customEmoji['attributes']['title'],
                          version: emoji_version,
                          custom: true,
                        });
                      }
                    });

                    // 过滤掉不显示的emoji(emoji.category存的是索引)
                    let specifiedCategoryIndex = [];
                    specifiedCategories.map(s => {
                      if(sortingArr.findIndex(sa => sa == s) >= 0){
                        specifiedCategoryIndex.push(sortingArr.findIndex(sa => sa == s));
                      }
                    })

                    let emojiData = {
                      emoji : JSON.parse(JSON.stringify(localeData.default.emoji.filter(e => {
                        return specifiedCategoryIndex.length != 0 && specifiedCategoryIndex.findIndex(s => s == e.category) >= 0;
                      }))),
                      categories : specifiedCategories.concat(customCategories)
                    };
                    emojiData.emoji = emojiData.emoji.map(e => {
                      e.category = specifiedCategoryIndex.findIndex(s => s == e.category);
                      return e;
                    })
                    emojiData.emoji = emojiData.emoji.concat(customEmojis);

                    let initialCategory = specifiedCategories.findIndex(s => s == app.forum.attribute('flamoji.initial_category')) >= 0 ? 
                      app.forum.attribute('flamoji.initial_category') : 
                      emojiData.categories[0];

                    let icons = {
                      categories : {}
                    };
                    customCategories.map(customCategory => {
                      icons.categories[customCategory] = customEmojis.find(c => c.categoryName == customCategory)?.emoji;
                      i18n.categories[customCategory] = customCategory;
                    })

                    import(/* webpackChunkName: "emoji-button" */ '@joeattardi/emoji-button').then(({ EmojiButton }) => {
                      this.picker = new EmojiButton({
                        theme: 'light', // based on Flarum's less variables 
                        autoFocusSearch: false,
                        rootElement: this.flamojiContainer,
                        style: app.forum.attribute('flamoji.emoji_style'),
                        recentsCount: app.forum.attribute('flamoji.recents_count'),
                        showRecents: app.forum.attribute('flamoji.show_recents'),
                        showVariants: app.forum.attribute('flamoji.show_variants'),
                        autoHide: app.forum.attribute('flamoji.auto_hide'),
                        showPreview: app.forum.attribute('flamoji.show_preview'),
                        showCategoryButtons: app.forum.attribute('flamoji.show_category_buttons'),
                        showSearch: app.forum.attribute('flamoji.show_search'),
                        emojiVersion: app.forum.attribute('flamoji.emoji_version'),
                        initialCategory,
                        categories: emojiData.categories,
                        emojiData,
                        icons, 
                        i18n,
                      });
  
                      this.picker.on('emoji', (selection) => {
                        let insert = selection.emoji;
  
                        // Handle custom emoji.
                        // Since we can't pass a third argument into EmojiButton's emojiData
                        // option, we can use an array which stores emoji path as its key and
                        // its replacer text as its value. We're using emoji paths because
                        // they tend to be unique.
                        if (!insert) insert = customEmojiReplacers[selection.url.replace(baseUrl, '')];
  
                        this.attrs.composer.editor.insertAtCursor(insert);
                      });
  
                      this.isPickerLoaded = true;
                      this.isPickerLoading = false;
                      m.redraw();
  
                      this.picker.togglePicker(this.flamojiButton);
                    });
                  });
              });
            } else {
              this.picker.togglePicker(this.flamojiButton);
            }
          },
          icon: this.isPickerLoading ? 'fas fa-spinner fa-pulse' : 'far fa-smile-wink',
          title: app.translator.trans(t + 'composer.emoji_tooltip'),
        })
      );
    });

    extend(TextEditor.prototype, 'toolbarItems', function (items) {
      items.has('emoji') ? items.remove('emoji') : '';
    });
  },
  -150 // initialize before flarum/emoji
);
