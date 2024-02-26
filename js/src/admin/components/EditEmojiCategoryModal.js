import Alert from 'flarum/common/components/Alert';
import Button from 'flarum/components/Button';
import SettingsModal from 'flarum/admin/components/SettingsModal';
import ItemList from 'flarum/utils/ItemList';
import Stream from 'flarum/utils/Stream';

export default class EditEmojiCategoryModal extends SettingsModal {
  oninit(vnode) {
    super.oninit(vnode);

    this.customCategories = Stream(JSON.parse(this.setting(['the-turk-flamoji.custom_categories'])() || []))();
  }

  className() {
    return 'EditEmojiModal Modal--small';
  }

  title() {
    return this.attrs.model;
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form">{this.fields().toArray()}</div>
      </div>
    );
  }

  fields() {
    const items = new ItemList();

    items.add(
      'path',
      <div className="Form-group">
        <label>{app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji_category.path_or_url_label')}</label>
        <input className="FormControl" placeholder="/assets/emojis/batman.png" 
          value={this.customCategories[this.attrs.model].path}
          oninput={e => {
            this.customCategories[this.attrs.model].path = e.target.value;
          }} 
        />
      </div>,
      20
    );

    items.add(
      'submit',
      <div className="Form-group">
        {Button.component(
          {
            type: 'submit',
            className: 'Button Button--primary EditEmojiModal-save',
            loading: this.loading,
          },
          app.translator.trans('the-turk-flamoji.admin.custom_emojis_section.edit_emoji_category.submit_button')
        )}
      </div>,
      -10
    );

    return items;
  }

  onsubmit(e) {
    e.preventDefault();
    this.loading = true;

    let settings = { 
      'the-turk-flamoji.custom_categories' : JSON.stringify(this.customCategories)
    };
    app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/settings',
      body: settings,
    }).then((res) => {
      Object.assign(app.data.settings, settings);

      this.hide();
      this.loading = false;
      this.showSuccessMessage();
    });;
  }

  showSuccessMessage() {
    return app.alerts.show(Alert, { type: 'success' }, app.translator.trans('core.admin.settings.saved_message'));
  }
}
