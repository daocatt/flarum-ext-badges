import Component from 'flarum/common/Component';
import Link from 'flarum/components/Link';
import UserBadge from '../../../common/components/UserBadge';

export default class BlockListView extends Component {
  view() {
    if (!this.attrs.badges) {
      return null;
    }

    const badges = this.attrs.badges;

    return (
      <ul className={'BadgeCategoryList'}>
        {badges.map((badge) => {
          return (
            <li>
              <Link href={app.route('badges.detail', { id: badge.id() })} className={'BadgeContainer'}>
                <div className={'BadgeContainerInfo'}>
                  <UserBadge badge={badge} tooltip={false} />

                  {/* <p className={'BadgeDescription'}>{badge.description()}</p> */}

                  {app.forum.attribute('canViewDetailedBadgeUsers') && (
                    <p>
                      {app.translator.trans('gtdxyz-flarum-badges.forum.badge.earned_count', {
                        count: badge.earnedAmount(),
                      })}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
