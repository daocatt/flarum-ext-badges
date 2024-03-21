import UserPage from 'flarum/components/UserPage';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import UserBadgesContent from './UserBadgesContent';

export default class UserBadgesPage extends UserPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.user = null;

    this.loading = true;

    this.loadUser(m.route.param('username'));
    app.userBadges.load(m.route.param('username'));
  }

  content() {
    if (!this.user || this.loading) {
      return <LoadingIndicator size={46} />;
    }

    if (app.session.user) {
      return UserBadgesContent.component({
        user: this.user,
      });
    } else {
      return (
        <div className={'Placeholder'}>
          <p>{app.translator.trans('gtdxyz-flarum-badges.forum.hidden_badges')}</p>
        </div>
      );
    }
  }

  show(user) {
    super.show(user);
    this.user = user;

    this.loading = false;

    // app.store
    //   .find('user-badges', {
    //     filter: {user: this.user.username()}
    //   })
    //   .then(() => {
    //     this.loading = false;
    //     m.redraw();
    //   });
  }
}
