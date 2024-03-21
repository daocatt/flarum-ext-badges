import Component from 'flarum/common/Component';
import Tooltip from 'flarum/common/components/Tooltip';

export default class UserCardBadge extends Component {
  view() {
    const item = this.attrs.badge;
    const tooltip = this.attrs.tooltip !== false;
    const forceVisibility = this.attrs.forceVisibility === true;

    // Hide badge when not enabled
    if (!item.isVisible && !forceVisibility) {
      return null;
    }

    // Just show badge
    if (tooltip === false) return this.badge();

    return <Tooltip text={`${item.description ? item.description : ''}`}>{this.badge(item, forceVisibility)}</Tooltip>;
  }

  badge(item, forceVisibility) {
    const isPartlyHidden = !item.isVisible && forceVisibility;

    // This badge is an image
    if (item.image) {
      return (
        <img
          src={item.image}
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
        className={`UserBadge UserBadge-${item.id}`}
        onclick={() => {
          if (this.attrs.onclick) {
            this.attrs.onclick();
          }
        }}
        style={{
          backgroundColor: item.backgroundColor,
          color: item.labelColor,
          borderColor: item.backgroundColor,
          opacity: isPartlyHidden ? 0.5 : undefined,
        }}
      >
        <i className={item.icon} style={{ color: item.iconColor }} /> {item.name}
      </span>
    );
  }
}
