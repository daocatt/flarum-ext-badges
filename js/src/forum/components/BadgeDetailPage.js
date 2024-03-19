import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import LinkButton from 'flarum/components/LinkButton';
import BadgeDetailContent from './BadgeDetailContent';

import UserBadge from '../../common/components/UserBadge';

export default class BadgeDetailPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    this.bodyClass = 'App--index';

    const found = app.store.getById('badges', m.route.param('id'));

    this.loading = !found;

    if (!found) {
      // Load badge categories
      app.store.find(`badges/${m.route.param('id')}`).then((badge) => {
        this.loading = false;

        app.history.push('badgeDetailPage', badge.name());

        this.setTitle(badge);

        m.redraw();
      });
    } else {
      app.history.push('badgeDetailPage', found.name());

      this.setTitle(found);
    }
  }

  setTitle(badge) {
    app.setTitle(`${badge.name()} - ${app.translator.trans('gtdxyz-flarum-badges.forum.badge.badges')}`);
  }

  view() {
    const badge = app.store.getById('badges', m.route.param('id'));

    return (
      <div className="IndexPage">
        {/* {IndexPage.prototype.hero()} */}

        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <div className="IndexPage-results sideNavOffset">
              {/* <LinkButton href={app.route('badges')} icon={'fas fa-chevron-left'} className={'Button BadgesOverviewButton'}>
                {app.translator.trans('gtdxyz-flarum-badges.forum.badge.badges')}
              </LinkButton> */}

              {this.loading && <LoadingIndicator size={'large'} />}

              {!this.loading && (
                <div className={'BadgeDetailContent-Info'}>
                  <UserBadge badge={badge} tooltip={false} />

                  <div className={'BadgeDetailContent-Info-meta'}>
                    <h3>{badge.name()}</h3>
                    <p>{badge.description()}</p>
                  </div>
                </div>
              )}

              {badge && app.forum.attribute('canViewDetailedBadgeUsers') && (
                <h3>
                  {app.translator.trans('gtdxyz-flarum-badges.forum.badge.earned_by_count', {
                    count: badge.earnedAmount(),
                  })}
                </h3>
              )}

              {!this.loading && app.forum.attribute('canViewDetailedBadgeUsers') && (
                <BadgeDetailContent state={app.badgeUserListState} badgeId={badge.id()} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
