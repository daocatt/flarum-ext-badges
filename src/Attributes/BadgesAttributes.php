<?php

namespace Gtdxyz\Badges\Attributes;

use Illuminate\Database\ConnectionInterface;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;
use Gtdxyz\Badges\Models\UserBadge;

class BadgesAttributes
{   
    protected $settings;
    protected $events;
    protected $userBadge;
    protected $db;

    public function __construct(SettingsRepositoryInterface $settings, ConnectionInterface $connection, UserBadge $userBadge,  Dispatcher $events)
    {
        $this->settings = $settings;
        $this->events = $events;
        $this->userBadge = $userBadge;
        $this->db = $connection;
    }
    
    public function __invoke(UserSerializer $serializer, User $user)
    {
        
        $show_badges_on_user_card = $this->settings->get('gtdxyz-badges.show_badges_on_user_card', false);
        $number_of_badges_on_user_card = $this->settings->get('gtdxyz-badges.number_of_badges_on_user_card', 3);
        if(!$show_badges_on_user_card)
        {
            return [];
        }
        
        $attributes = [];

        $userID = $user->id;

        $badges = UserBadge::where('user_id',$user->id)
            ->where('in_user_card',1)
            ->with(['badge' => function($query){
                $query->with('category');
            }])
            ->orderBy('assigned_at','desc')
            ->limit($number_of_badges_on_user_card)
            ->get();
        
        $attributes['badges'] = $badges;

        $attributes['badges_count'] = UserBadge::where('user_id',$user->id)->count();

        return $attributes;
    }
}
