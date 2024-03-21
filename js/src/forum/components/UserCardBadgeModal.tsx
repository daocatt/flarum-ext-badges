import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import type dayjs from 'dayjs';
import ItemList from 'flarum/utils/ItemList';
import LinkButton from 'flarum/components/LinkButton';
import hextorgba from '../utils/hextorgba';

export default class UserCardBadgeModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.loading = false;
    this.badgeItem = this.attrs.badge;
    this.badgeData = this.attrs.badgeData;
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
          {/* detail button */}
          <LinkButton
            href={app.route('badges.detail', {
              id: this.badgeItem.id,
            })}
            className={'Button'}
            style={{
              margin: '0 10px',
            }}
          >
            {app.translator.trans('gtdxyz-flarum-badges.forum.badge.badge_details')}
          </LinkButton>

          {/* remove button */}
          {this.badgeData && app.forum.attribute('canGiveBadge') && (
            <Button
              className={'Button Button--primary'}
              onclick={() => {
                if (confirm(app.translator.trans('gtdxyz-flarum-badges.forum.moderation.remove_badge_confirm'))) {
                  this.loading = true;
                  const that = this;
                  // this.badgeData.delete().then(() => this.hide());

                  app.request({
                    method: 'DELETE',
                    url: app.forum.attribute('apiUrl') + '/user-badges/' + this.badgeData.id,
                    body: {},
                  }).then(() => {
                    that.hide();
                  });
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
    const radials = hextorgba(this.badgeItem.background_color, 0.7);
    const radiale = hextorgba(this.badgeItem.background_color, 1);

    // Badge name
    items.add(
      'name',
      <div
        className={'BadgeModalListItem name'}
        style={{
          background: 'radial-gradient(' + radials + ',' + radiale + ')',
        }}
      >
        {this.badgeItem.image ? (
          <img src={this.badgeItem.image} className="icon" />
        ) : (
          <i className={this.badgeItem.icon} style={'color:'+this.badgeItem.icon_color}></i>
        )}
      </div>
    );

    // Badge description
    items.add(
      'description',
      <div className={'BadgeModalListItem description'}>
        <p className="name">{this.badgeItem.name}</p>
        <p>{this.badgeItem.description}</p>
      </div>
    );

    // // Badge category
    // if (this.badgeItem) {
    //   items.add(
    //     'category',
    //     <div className={'BadgeModalListItem category'}>
    //       <p>
    //         {this.badgeItem.category && this.badgeItem.category.name}

    //         {/* Uncategorized */}
    //         {!this.badgeItem.category && app.translator.trans('gtdxyz-flarum-badges.forum.uncategorized')}
    //         {/* <Link
    //           href={app.route("badges.category", {
    //             category: this.badgeItem.category.id,
    //           })}
    //         >
    //           {app.translator.trans(
    //             "gtdxyz-flarum-badges.forum.all_badges"
    //           )}
    //         </Link> */}
    //       </p>
    //     </div>
    //   );
    // }

    // Badge earned on
    if (this.badgeData) {
      const earned_at = dayjs(this.badgeData.assigned_at).format('YYYY-MM-DD');
      items.add(
        'earned_date',
        <div className={'BadgeModalListItem earned-on'}>
          <p>{earned_at}</p>
        </div>
      );
    }

    return items;
  }
}
