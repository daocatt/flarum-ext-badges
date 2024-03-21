import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import type dayjs from 'dayjs';
import ItemList from 'flarum/utils/ItemList';
import LinkButton from 'flarum/components/LinkButton';
import GiveBadgeModal from './GiveBadgeModal';
import hextorgba from '../utils/hextorgba';

export default class BadgeModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.loading = false;
  }

  className() {
    return 'Modal--small BadgeModal BadgeModal-plain';
  }

  title() {
    // return app.translator.trans('gtdxyz-flarum-badges.forum.badge_information');
  }

  content() {
    return (
      <div>
        <div className="Modal-body">{this.data().toArray()}</div>
        <div className="Modal-footer">
          <LinkButton
            href={app.route('badges.detail', {
              id: this.attrs.badge.id(),
            })}
            className={'Button'}
            style={{
              margin: '0 10px',
            }}
          >
            {app.translator.trans('gtdxyz-flarum-badges.forum.badge.badge_details')}
          </LinkButton>

          {this.attrs.userBadgeData && app.forum.attribute('canGiveBadge') && (
            <Button
              className={'Button Button--primary'}
              onclick={() => {
                if (confirm(app.translator.trans('gtdxyz-flarum-badges.forum.moderation.remove_badge_confirm'))) {
                  this.loading = true;
                  this.attrs.userBadgeData.delete().then(() => this.hide());
                }
              }}
              loading={this.loading}
            >
              {app.translator.trans('gtdxyz-flarum-badges.forum.moderation.remove_badge')}
            </Button>
          )}
        </div>
      </div>
    );
  }

  data() {
    const items = new ItemList();
    const radials = hextorgba(this.attrs.badge.backgroundColor(), 0.7);
    const radiale = hextorgba(this.attrs.badge.backgroundColor(), 1);

    // Badge name
    items.add(
      'name',
      <div
        className={'BadgeModalListItem name'}
        style={{
          background: 'radial-gradient(' + radials + ',' + radiale + ')',
        }}
      >
        {this.attrs.badge.image() ? (
          <img src={this.attrs.badge.image()} className="icon" />
        ) : (
          <i className={this.attrs.badge.icon()} style={'color:' + this.attrs.badge.iconColor()}></i>
        )}
      </div>
    );

    // Badge description
    items.add(
      'description',
      <div className={'BadgeModalListItem description'}>
        <p className="name">{this.attrs.badge.name()}</p>
        <p>{this.attrs.badge.description()}</p>
      </div>
    );

    // Badge category
    if (this.attrs.userBadgeData) {
      items.add(
        'category',
        <div className={'BadgeModalListItem category'}>
          {/* <p>
            <b>{app.translator.trans('gtdxyz-flarum-badges.forum.badge.category')}:</b>
          </p> */}
          <p>
            {this.attrs.badge.category() && this.attrs.badge.category().name()}

            {/* Uncategorized */}
            {!this.attrs.badge.category() && app.translator.trans('gtdxyz-flarum-badges.forum.uncategorized')}
            {/* <Link
              href={app.route("badges.category", {
                category: this.attrs.badge.category().id(),
              })}
            >
              {app.translator.trans(
                "gtdxyz-flarum-badges.forum.all_badges"
              )}
            </Link> */}
          </p>
        </div>
      );
    }

    // Badge amount
    // if (this.attrs.badge && this.attrs.badge.earnedAmount()) {
    //   items.add(
    //     'earned_amount',
    //     <div className={'BadgeModalListItem'}>
    //       <p>
    //         {app.translator.trans('gtdxyz-flarum-badges.forum.badge.earned_count', {
    //           count: this.attrs.badge.earnedAmount(),
    //         })}
    //       </p>
    //     </div>
    //   );
    // }

    // Badge earned on
    if (this.attrs.userBadgeData) {
      const earned_at = dayjs(this.attrs.userBadgeData.assignedAt()).format('YYYY-MM-DD');
      items.add(
        'earned_date',
        <div className={'BadgeModalListItem earned-on'}>
          <p>{earned_at}</p>
        </div>
      );
    }

    // Badge earning reason
    const earning_reason = false;
    if (earning_reason && this.attrs.userBadgeData && (this.attrs.userBadgeData.description() || app.forum.attribute('canGiveBadge'))) {
      items.add(
        'earning_reason',
        <div className={'BadgeModalListItem'}>
          <p>
            <b>{app.translator.trans('gtdxyz-flarum-badges.forum.badge.earning_reason')}:</b>
          </p>

          <p>
            {this.attrs.userBadgeData.description() ? (
              this.attrs.userBadgeData.description()
            ) : (
              <i>{app.translator.trans('gtdxyz-flarum-badges.forum.badge.no_earning_reason')}</i>
            )}
          </p>
          <p>
            {app.forum.attribute('canGiveBadge') && (
              <a
                href={'#'}
                onclick={(e) => {
                  e.preventDefault();
                  app.modal.show(GiveBadgeModal, {
                    badge: this.attrs.userBadgeData,
                  });
                }}
              >
                {app.translator.trans('gtdxyz-flarum-badges.forum.badge.update_earning_reason')}
              </a>
            )}
          </p>
        </div>
      );
    }

    return items;
  }
}
