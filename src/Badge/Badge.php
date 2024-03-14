<?php

namespace Gtdxyz\UserBadges\Badge;

use Flarum\Database\AbstractModel;
use Gtdxyz\UserBadges\BadgeCategory\BadgeCategory;
use Gtdxyz\UserBadges\UserBadge\UserBadge;

class Badge extends AbstractModel
{
    protected $table = 'badges';

    protected $dates = ['created_at'];

    public static function build($icon, $name, $image, $order = 0, $description = null, $isVisible = 0, $backgroundColor = null, $iconColor = null, $labelColor = null)
    {
        $badge = new static();
        $badge->icon = $icon;
        $badge->name = $name;
        $badge->order = $order;
        $badge->image = $image;
        $badge->description = $description;
        $badge->is_visible = $isVisible;
        $badge->background_color = $backgroundColor;
        $badge->icon_color = $iconColor;
        $badge->label_color = $labelColor;

        return $badge;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(BadgeCategory::class, 'badge_category_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function users()
    {
        return $this->hasMany(UserBadge::class, 'badge_id');
    }

    /**
     * User count
     */
    public function earnedCount()
    {
        return $this->hasMany(UserBadge::class, 'badge_id')->count();
    }
}
