import Component from 'flarum/common/Component';
import UserBadge from '../../common/components/UserBadge';
import categorizeUserBadges from '../utils/categorizeUserBadges';
import BadgeModal from './BadgeModal';

export default class UserBadgesContent extends Component {
  view() {
    const badgesList = app.userBadges.cache || [];

    const categories = categorizeUserBadges(badgesList);

    return (
      <div className="UserBadges">
        {categories.length === 0 && (
          <div className={'Placeholder'}>
            <p>{app.translator.trans('gtdxyz-flarum-badges.forum.user_no_badges')}</p>
          </div>
        )}

        {categories.length >= 1 &&
          categories.map(({ name, category, badges }) => {
            if (category && !category.isEnabled()) return null;

            return (
              <div className={'UserBadgesCategory'}>
                <h3>{name}</h3>

                {category && category.description() && <p>{category.description()}</p>}
                <div className="badgeList">
                {badges
                  .sort((a, b) => a.badge().order() - b.badge().order())
                  .map((userBadge) => (
                    <UserBadge
                      badge={userBadge.badge()}
                      onclick={() =>
                        app.modal.show(BadgeModal, {
                          badge: userBadge.badge(),
                          userBadgeData: userBadge,
                        })
                      }
                    />
                  ))}
                  </div>
              </div>
            );
          })}
      </div>
    );
  }
}
