import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import Switch from 'flarum/components/Switch';
import Tooltip from 'flarum/common/components/Tooltip';

import UserBadge from '../../common/components/UserBadge';


export default class SelectUserCardBadgesModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.loading = false;

    this.limit = app.forum.attribute('numberOfBadgesOnUserCard');
    // this.selectedBadges = this.attrs.user.attribute('badges');

    
    this.selectedBadges = this.attrs.user.attribute('badges')
      .filter((item) => item.in_uer_card!=0)
      .map((item) => item.id);

    app.userBadges.load(this.attrs.user.attribute('username'));
    
  }

  className() {
    return 'Modal--big UserCardBadgesModal';
  }

  title() {
    return app.translator.trans('gtdxyz-flarum-badges.forum.badges_in_card.title');
  }

  content() {
    return (
      <div>
        <div className="Modal-body">{this.data().toArray()}</div>
        <div className="Modal-footer">
          <Button className={'Button Button--primary'} onclick={() => this.save()} loading={this.loading}>
            {app.translator.trans('gtdxyz-flarum-badges.forum.save_changes')}
          </Button>
        </div>
      </div>
    );
  }

  data() {
    const items = new ItemList();
    const badgesList = app.userBadges.cache || [];

    // const categories = categorizeUserBadges(badgesList);

    // Badge name
    items.add(
      'info',
      <div className={'BadgeModalListItem'}>
        <p>{app.translator.trans('gtdxyz-flarum-badges.forum.badges_in_card.description')}</p>
        <p>
          {app.translator.trans('gtdxyz-flarum-badges.forum.badges_in_card.select_limit', {
            limit: app.forum.attribute('numberOfBadgesOnUserCard'),
          })}
        </p>
      </div>
    );

    // Loop through all badge categories
    
    items.add(
      'badge-list',
      <div className={'UserCardBadgesModalCategory'}>

        {/* Loop through the badges */}
        {badgesList
          // .sort((a, b) => a.badge().order - b.badge().order)
          .map((ubItem) => {
            const ubItemId = parseInt(ubItem.id());
            const disabled = this.selectedBadges.length >= this.limit && this.selectedBadges.indexOf(ubItemId) === -1;
            
            return (
              <Tooltip
                text={
                  disabled
                    ? app.translator.trans('gtdxyz-flarum-badges.forum.badges_in_card.hit_limit', {
                        limit: app.forum.attribute('numberOfBadgesOnUserCard'),
                      })
                    : ''
                }
                position="bottom"
              >
                <div
                  className={'UserCardBadgesModalCategory-badge'}
                  onclick={() => {
                    if (disabled) {
                      return;
                    }

                    const currentIndex = this.selectedBadges.indexOf(ubItemId);

                    // Remove from selected list
                    if (currentIndex >= 0) {
                      this.selectedBadges.splice(currentIndex, 1);
                    } else {
                      // Add to list
                      this.selectedBadges.push(ubItemId);
                    }
                  }}
                >
                  <div className={'UserCardBadgesModalCategory-badge-preview'}>
                    <UserBadge badge={ubItem.badge()} onclick={() => {}} />
                    <div className="preview-name">{ubItem.badge().name()}</div>
                  </div>
                  
                  <div className={'UserCardBadgesModalCategory-badge-switch'}>
                    {Switch.component({
                      state: this.selectedBadges.indexOf(ubItemId) >= 0,
                      disabled,
                    })}
                  </div>

                </div>
              </Tooltip>
            );
          })}
      </div>
    );
    

    return items;
  }

  save() {
    this.loading = true;

    this.attrs.user
      .save({ userCardBadges: this.selectedBadges })
      .then(() => {
        // Update current user badges store
        
        this.attrs.user.attribute('badges').map((badgeItem) => {
          
          badgeItem.in_user_card = this.selectedBadges.indexOf(parseInt(badgeItem.id)) >= 0;
          // badgeItem.pushAttributes({
          //   in_user_card: this.selectedBadges.indexOf(parseInt(badgeItem.id)) >= 0,
          // });
          
        });
        
        this.hide();
      })
      .catch(() => {})
      .then(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
