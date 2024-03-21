<?php

namespace Gtdxyz\Badges\Models;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
use Gtdxyz\Badges\Models\Badge;

class UserBadge extends AbstractModel
{
    protected $table = 'badge_user';

    protected $dates = ['assigned_at'];


    protected $appends = [
        'name',
        'icon',
    ];

    public static function build($userId, $badgeId, $description = null)
    {
        $userBadge = new static();
        $userBadge->user_id = $userId;
        $userBadge->badge_id = $badgeId;
        $userBadge->description = $description;
        $userBadge->assigned_at = time();

        return $userBadge;
    }

    public function getNameAttribute(){
        return $this->badge()->first()->name;
    }

    public function getIconAttribute(){
        return $this->badge()->first()->icon;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function badge()
    {
        return $this->belongsTo(Badge::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
