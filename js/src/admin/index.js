import { extend, override } from 'flarum/common/extend';

import app from 'flarum/common/app';
import AdminPage from 'flarum/admin/components/AdminPage';
import CustomEmojiSection from './components/CustomEmojiSection';
import Emoji from '../common/models/Emoji';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import getEmojiCategories from '../common/utils/getEmojiCategories';
import Select from 'flarum/common/components/Select';
import Stream from 'flarum/common/utils/Stream';
import Switch from 'flarum/common/components/Switch';

app.initializers.add('the-turk-flamoji', (app) => {
  app.store.models.emojis = Emoji;

  let initialCategoryOptions = {};

  getEmojiCategories().forEach((category) => {
    initialCategoryOptions[category] = app.translator.trans('the-turk-flamoji.admin.settings.emoji_categories.' + category);
  });

  let emojiDataOptions = {};
  emojiDataOptions['zh'] = 'zh';

  extend(ExtensionPage.prototype, ['oncreate', 'onupdate'], function () {
    if (this.extension.id != 'tk-flamoji') return;

    const $recentsCountSetting = this.$('.recentsCountSetting');

    if (!this.setting(['the-turk-flamoji.show_recents'])()) {
      $recentsCountSetting.hide();
    } else {
      $recentsCountSetting.show();
    }
  });

  extend(ExtensionPage.prototype, 'oninit', function () {
    if (this.extension.id != 'tk-flamoji') return;

    this.specifiedCategories = Stream(JSON.parse(this.setting(['the-turk-flamoji.specify_categories'])() || []))();
    this.customCategories = Stream(JSON.parse(this.setting(['the-turk-flamoji.custom_categories'])() || []))();
  });

  extend(ExtensionPage.prototype, 'sections', function (items) {
    if (this.extension.id != 'tk-flamoji') return;

    items.has('permissions') ? items.remove('permissions') : '';

    items.add('customFlamoji',
      <CustomEmojiSection 
        categories = {this.customCategories}
      />
    );
  });

  override(AdminPage.prototype, 'dirty', function (original) {
    if (!this.extension || this.extension.id != 'tk-flamoji') return original();

    const dirty = {};

    const specifiedCategories = JSON.stringify(this.specifiedCategories);
    const customCategories = JSON.stringify(this.customCategories);

    if (specifiedCategories !== this.setting(['the-turk-flamoji.specify_categories'])()) {
      dirty['the-turk-flamoji.specify_categories'] = specifiedCategories;
    }
    if (customCategories !== this.setting(['the-turk-flamoji.custom_categories'])()) {
      dirty['the-turk-flamoji.custom_categories'] = customCategories;
    }

    Object.keys(this.settings).forEach((key) => {
      const value = this.settings[key]();

      if (value !== app.data.settings[key]) {
        dirty[key] = value;
      }
    });

    return dirty;
  });

  app.extensionData.for('tk-flamoji').registerSetting(function () {
    return (
      <div className="Flamoji--settingsContainer">
        <div className="Flamoji--generalUISettingsContainer">
          <h3>{app.translator.trans('the-turk-flamoji.admin.settings.general_ui_settings_heading')}</h3>
          <hr />
          <div className="Flamoji--generalUISetting">
            <div className="Form-group">
              <Switch
                state={!!this.setting(['the-turk-flamoji.auto_hide'])() && this.setting(['the-turk-flamoji.auto_hide'])() !== '0'}
                onchange={this.settings['the-turk-flamoji.auto_hide']}
              >
                {app.translator.trans('the-turk-flamoji.admin.settings.auto_hide_label')}
              </Switch>
            </div>
            <div className="helpText">{app.translator.trans('the-turk-flamoji.admin.settings.auto_hide_text')}</div>
          </div>
          <div className="Flamoji--generalUISetting">
            <div className="Form-group">
              <Switch
                state={!!this.setting(['the-turk-flamoji.show_preview'])() && this.setting(['the-turk-flamoji.show_preview'])() !== '0'}
                onchange={this.settings['the-turk-flamoji.show_preview']}
              >
                {app.translator.trans('the-turk-flamoji.admin.settings.show_preview_label')}
              </Switch>
            </div>
            <div className="helpText" />
          </div>
          <div className="Flamoji--generalUISetting">
            <div className="Form-group">
              <Switch
                state={!!this.setting(['the-turk-flamoji.show_search'])() && this.setting(['the-turk-flamoji.show_search'])() !== '0'}
                onchange={this.settings['the-turk-flamoji.show_search']}
              >
                {app.translator.trans('the-turk-flamoji.admin.settings.show_search_label')}
              </Switch>
            </div>
            <div className="helpText" />
          </div>
        </div>

        <div className="Flamoji--emojiSettingsContainer">
          <h3>{app.translator.trans('the-turk-flamoji.admin.settings.emoji_settings_heading')}</h3>
          <hr />
          <div className="Flamoji--emojiSetting">
            <div className="Form-group">
              <Switch
                state={!!this.setting(['the-turk-flamoji.show_variants'])() && this.setting(['the-turk-flamoji.show_variants'])() !== '0'}
                onchange={this.settings['the-turk-flamoji.show_variants']}
              >
                {app.translator.trans('the-turk-flamoji.admin.settings.show_variants_label')}
              </Switch>
            </div>
            <div className="helpText">{app.translator.trans('the-turk-flamoji.admin.settings.show_variants_text')}</div>
          </div>
          <div className="Flamoji--emojiSetting">
            <div className="Form-group">
              <label>{app.translator.trans('the-turk-flamoji.admin.settings.emoji_style_label')}</label>
              <Select
                value={this.setting(['the-turk-flamoji.emoji_style'])() || 'twemoji'}
                options={{
                  native: app.translator.trans('the-turk-flamoji.admin.settings.emoji_style_native_option'),
                  twemoji: 'Twemoji',
                }}
                buttonClassName="Button"
                onchange={this.settings['the-turk-flamoji.emoji_style']}
              />
            </div>
            <div className="helpText" />
          </div>
          <div className="Flamoji--emojiSetting">
            <div className="Form-group">
              <label>{app.translator.trans('the-turk-flamoji.admin.settings.emoji_data_label')}</label>
              <Select
                value={this.setting(['the-turk-flamoji.emoji_data'])() || 'en'}
                options={emojiDataOptions}
                buttonClassName="Button"
                onchange={this.settings['the-turk-flamoji.emoji_data']}
              />
            </div>
            <div className="helpText">{app.translator.trans('the-turk-flamoji.admin.settings.emoji_data_text')}</div>
          </div>
          <div className="Flamoji--emojiSetting">
            <div className="Form-group">
              <label>{app.translator.trans('the-turk-flamoji.admin.settings.emoji_version_label')}</label>
              <Select
                value={this.setting(['the-turk-flamoji.emoji_version'])() || '12.1'}
                options={{
                  '14.0.2': '14.0.2',
                }}
                buttonClassName="Button"
                onchange={this.settings['the-turk-flamoji.emoji_version']}
              />
            </div>
            <div className="helpText">{app.translator.trans('the-turk-flamoji.admin.settings.emoji_version_text')}</div>
          </div>
        </div>

        <div className="Flamoji--categorySettingsContainer">
          <h3>{app.translator.trans('the-turk-flamoji.admin.settings.category_settings_heading')}</h3>
          <hr />
          <div className="Flamoji--categorySetting">
            <div className="Form-group">
              <label>{app.translator.trans('the-turk-flamoji.admin.settings.initial_category_label')}</label>
              <Select
                value={this.setting(['the-turk-flamoji.initial_category'])() || 'smileys'}
                options={initialCategoryOptions}
                buttonClassName="Button"
                onchange={this.settings['the-turk-flamoji.initial_category']}
              />
            </div>
            <div className="helpText">{app.translator.trans('the-turk-flamoji.admin.settings.initial_category_text')}</div>
          </div>
          <div className="Flamoji--categorySetting">
            <div className="Form-group">
              <Switch
                state={
                  !!this.setting(['the-turk-flamoji.show_category_buttons'])() && this.setting(['the-turk-flamoji.show_category_buttons'])() !== '0'
                }
                onchange={this.settings['the-turk-flamoji.show_category_buttons']}
              >
                {app.translator.trans('the-turk-flamoji.admin.settings.show_category_buttons_label')}
              </Switch>
            </div>
            <div className="helpText" />
          </div>
          <div className="Flamoji--categorySetting">
            <div className="Form-group">
              <Switch
                state={!!this.setting(['the-turk-flamoji.show_recents'])() && this.setting(['the-turk-flamoji.show_recents'])() !== '0'}
                onchange={this.settings['the-turk-flamoji.show_recents']}
              >
                {app.translator.trans('the-turk-flamoji.admin.settings.show_recents_label')}
              </Switch>
            </div>
            <div className="helpText" />
          </div>
          <div className="Flamoji--categorySetting recentsCountSetting">
            <div className="Form-group recentsCountGroup">
              <label>{app.translator.trans('the-turk-flamoji.admin.settings.recents_count_label')}</label>
              <input className="FormControl" type="number" bidi={this.setting('the-turk-flamoji.recents_count')} />
            </div>
            <div className="helpText">{app.translator.trans('the-turk-flamoji.admin.settings.recents_count_text')}</div>
          </div>
          <div className="Flamoji--categorySetting specifyCategoriesSetting">
            <div className="Form-group specifyCategoriesGroup">
              <label>{app.translator.trans('the-turk-flamoji.admin.settings.specify_categories_label')}</label>
              <div className="helpText">{app.translator.trans('the-turk-flamoji.admin.settings.specify_categories_text')}</div>
              <div className="options">
                {getEmojiCategories().map((category) => {
                  return (
                    <div className="cat-checkbox">
                      <input
                        type="checkbox"
                        name="specifyCats[]"
                        checked={this.specifiedCategories.indexOf(category) > -1}
                        onchange={(change) => {
                          if (change.target.checked) {
                            this.specifiedCategories.push(category);
                          } else {
                            const index = this.specifiedCategories.indexOf(category);

                            if (index > -1) {
                              this.specifiedCategories.splice(index, 1);
                            }
                          }
                        }}
                      />
                      <label for={category}>{app.translator.trans('the-turk-flamoji.admin.settings.emoji_categories.' + category)}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="Flamoji--categorySetting specifyCategoriesSetting">
            <div className="Form-group specifyCategoriesGroup">
              <label>{app.translator.trans('the-turk-flamoji.admin.settings.custom_categories_label')}</label>
              <div className="helpText">{app.translator.trans('the-turk-flamoji.admin.settings.custom_categories_text')}</div>
              <div className="options">
                {Object.keys(this.customCategories||{}).map((category) => {
                  return (
                    <div className="cat-checkbox">
                    <input
                      type="checkbox"
                      name="customCats[]"
                      checked={this.customCategories[category].is_enabled == 1}
                      onchange={(change) => {
                        this.customCategories[category].is_enabled = change.target.checked ? 1 : 0;
                      }}
                    />
                    <label for={category}>{category ? category : "无分类"}</label>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
});
