import UserPage from 'flarum/components/UserPage';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import UserBadgeList from './UserBadgeList';

export default class BadgesProfilePage extends UserPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.user = null;

    this.loading = true;

    this.loadUser(m.route.param('username'));
  }

  content() {
    if (!this.user || this.loading) {
      return <LoadingIndicator size={46} />;
    }
    
    if(app.session.user){
      return UserBadgeList.component({
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

    app.store
      .find('users', user.id(), {
        include: 'userBadges,userBadges.badge,userBadges.badge.category',
      })
      .then(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
