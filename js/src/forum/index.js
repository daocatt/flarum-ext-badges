import app from 'flarum/forum/app';
import { extend } from 'flarum/extend';
import Model from 'flarum/Model';
import User from 'flarum/models/User';
import UserPage from 'flarum/components/UserPage';
import UserControls from 'flarum/utils/UserControls';
import LinkButton from 'flarum/components/LinkButton';
import Button from 'flarum/components/Button';
import Badge from '../common/models/Badge';
import BadgeCategory from '../common/models/BadgeCategory';
import UserBadge from '../common/models/UserBadge';
import UserBadgesPage from './components/UserBadgesPage';
import BadgesPage from './components/BadgesPage';
import BadgeDetailPage from './components/BadgeDetailPage';
import GiveBadgeModal from './components/GiveBadgeModal';
import addSidebarNav from './addSidebarNav';
import BadgeUsersState from './states/BadgeUsersState';
import BadgeReceivedNotification from './notification/BadgeReceivedNotification';
import NotificationGrid from 'flarum/forum/components/NotificationGrid';
import addBadgesToUserCard from './addBadgesToUserCard';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';
import UserBadgesState from "./states/UserBadgesState";

app.initializers.add('gtdxyz-flarum-badges', () => {
  app.store.models.badges = Badge;
  app.store.models.badgeCategories = BadgeCategory;
  
  app.store.models.userBadges = UserBadge;
  // User.prototype.userBadges = Model.hasMany('userBadges');

  // User.prototype.userPrimaryBadge = Model.hasOne('userPrimaryBadge');

  app.userBadges = new UserBadgesState(app);

  // Add user badges to the user profile
  app.routes['user.badges'] = {
    path: '/u/:username/badges',
    component: UserBadgesPage,
  };

  // Badges overview page
  app.routes.badges = {
    path: '/badges',
    component: BadgesPage,
  };

  // Future
  // // Badges overview page
  // app.routes["badges.category"] = {
  //   path: "/badges/category/:id",
  //   component: BadgesPage,
  // };

  // Badge detail page
  app.routes['badges.detail'] = {
    path: '/badges/:id',
    component: BadgeDetailPage,
  };

  addSidebarNav();

  app.badgeUserListState = new BadgeUsersState({});

  // Badge received notification
  app.notificationComponents.badgeReceived = BadgeReceivedNotification;

  // Enable badge notifications?
  extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
    items.add('badgeReceived', {
      name: 'badgeReceived',
      icon: 'fas fa-user-tag',
      label: app.translator.trans('gtdxyz-flarum-badges.forum.notification.settings'),
    });
  });

  // Add uploads to user page menu items
  extend(UserPage.prototype, 'navItems', function (items) {
    if (!app.session.user) {
      return;
    }
    items.add(
      'badges',
      LinkButton.component(
        {
          href: app.route('user.badges', {
            username: this.user.username(),
          }),
          name: 'badges',
          icon: 'fas fa-user-tag',
        },
        [app.translator.trans('gtdxyz-flarum-badges.forum.badge.badges')]
      ),
      15
    );
  });

  extend(UserControls, 'moderationControls', function (items, user) {
    // User can give badges
    if (app.forum.attribute('canGiveBadge')) {
      items.add(
        'test',
        <Button
          icon="fas fa-user-tag"
          onclick={() =>
            app.modal.show(GiveBadgeModal, {
              user: user,
            })
          }
        >
          {app.translator.trans('gtdxyz-flarum-badges.forum.give_badge')}
        </Button>
      );
    }
  });

  addBadgesToUserCard();


  // For what???
  // extend(DiscussionListState.prototype, 'requestParams', function (params) {
  //   if (typeof params.include === 'string') {
  //     params.include = [params.include];
  //   } else {
  //     params.include?.push('user.userBadges', 'user.userBadges.badge');
  //   }
  // });
});
