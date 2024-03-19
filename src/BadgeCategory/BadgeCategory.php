<?php

namespace Gtdxyz\Badges\BadgeCategory;

use Flarum\Database\AbstractModel;
use Gtdxyz\Badges\Models\Badge;

class BadgeCategory extends AbstractModel
{
    protected $table = 'badge_category';

    protected $dates = ['created_at'];

    public static function build($name, $description, $isEnabled, $isTable = true)
    {
        $badgeCategory = new static();
        $badgeCategory->name = $name;
        $badgeCategory->description = $description;
        $badgeCategory->is_enabled = $isEnabled;
        $badgeCategory->is_table = $isTable;

        return $badgeCategory;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function badges()
    {
        return $this->hasMany(Badge::class);
    }
}
