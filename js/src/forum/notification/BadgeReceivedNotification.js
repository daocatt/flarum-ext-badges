import Notification from 'flarum/forum/components/Notification';

export default class BadgeReceivedNotification extends Notification {
  icon() {
    return '';
  }

  href() {
    return app.route('user.badges', {
      username: app.session.user.username(),
    });
  }

  content() {
    return app.translator.trans('gtdxyz-flarum-badges.forum.notification.title');
  }

  excerpt() {
    const subject = this.attrs.notification.subject();

    return (
      <div>
        <i className={`icon ${subject.attribute('icon')}`} />

        {subject.attribute('name')}
      </div>
    );
  }
}
