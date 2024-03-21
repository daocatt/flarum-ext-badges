import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import Link from 'flarum/common/components/Link';
import UserCardBadge from './components/UserCardBadge';
import UserCardBadgeModal from './components/UserCardBadgeModal';
import SelectUserCardBadgesModal from './components/SelectUserCardBadgesModal';
import Tooltip from 'flarum/common/components/Tooltip';

export default function addBadgesToUserCard() {
  extend(UserCard.prototype, 'infoItems', function (items) {
    // Get user
    const user = this.attrs.user;

    // Don't show badges
    if (!app.forum.attribute('showBadgesOnUserCard') || !user.attribute('badges')) return;

    const visibleBadges = user.attribute('badges') ?? [];

    // No badges to show
    // if (visibleBadges.length < 1 || !visibleBadges) return;
    if (user.attribute('badges_count') <= 0) return;

    const limit = app.forum.attribute('numberOfBadgesOnUserCard');
    
    const badges = [];

    visibleBadges.forEach((badgeItem, indx) => {
      badges.push(
        <UserCardBadge
          badge={badgeItem.badge}
          onclick={() =>
            app.modal.show(UserCardBadgeModal, {
              badge: badgeItem.badge,
              badgeData: badgeItem,
            })
          }
        />
      );
    });

    // Manage badges
    if ((user.id() === app.session.user.id() && app.forum.attribute('editOwnUserCardBadges')) || app.forum.attribute('editUserCardBadges')) {
      badges.push(
        <Tooltip text={app.translator.trans('gtdxyz-flarum-badges.forum.badges_in_card.manage_badges')}>
          <a
            href={'#'}
            className="UserBadge more-badges"
            onclick={(e) => {
              e.preventDefault();
              app.modal.show(SelectUserCardBadgesModal, { user: user });
            }}
          >
            <i className={'fas fa-pencil-alt BadgeIconOnly'} />
          </a>
        </Tooltip>
      );
    }

    items.add('badges', badges);
    
  });
}
