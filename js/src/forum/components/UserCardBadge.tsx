import Component from 'flarum/common/Component';
import Tooltip from 'flarum/common/components/Tooltip';

export default class UserCardBadge extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.tooltip = this.attrs.tooltip !== false;
    this.forceVisibility = this.attrs.forceVisibility === true;

    this.item = this.attrs.badge;
  }

  view() {
    // Hide badge when not enabled
    if (!this.item.isVisible && !this.forceVisibility) {
      return null;
    }

    // Just show badge
    if (this.tooltip === false) return this.badge();

    return <Tooltip text={`${this.item.description ? this.item.description : ''}`}>{this.badge()}</Tooltip>;
  }

  badge() {
    const isPartlyHidden = !this.item.isVisible && this.forceVisibility;

    // This badge is an image
    if (this.item.image) {
      return (
        <img
          src={this.item.image}
          className={'UserBadgeImage'}
          onclick={() => {
            if (this.attrs.onclick) {
              this.attrs.onclick();
            }
          }}
          style={{
            opacity: isPartlyHidden ? 0.5 : undefined,
          }}
        />
      );
    }

    return (
      <span
        className={`UserBadge UserBadge-${this.item.id}`}
        onclick={() => {
          if (this.attrs.onclick) {
            this.attrs.onclick();
          }
        }}
        style={{
          backgroundColor: this.item.backgroundColor,
          color: this.item.labelColor,
          borderColor: this.item.backgroundColor,
          opacity: isPartlyHidden ? 0.5 : undefined,
        }}
      >
        <i className={this.item.icon} style={{ color: this.item.iconColor }} /> {this.item.name}
      </span>
    );
  }
}
