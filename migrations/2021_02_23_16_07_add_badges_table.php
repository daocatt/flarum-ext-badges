<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('badges')) {
            $schema->create('badges', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('badge_category_id')->unsigned()->nullable();
                $table->string('name', 46);
                $table->string('icon', 100)->nullable();
                $table->string('icon_color', 50)->nullable();
                $table->string('label_color', 50)->nullable();
                $table->string('background_color', 50)->nullable();
                $table->integer('order')->default(0);
                $table->text('image')->nullable();
                $table->text('description')->nullable();
                $table->integer('points')->default(0);
                $table->boolean('is_visible')->default(1);
                $table->dateTime('created_at');

                $table->foreign("badge_category_id")->references('id')->on('badge_category')->onDelete('set null');
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->drop('badges');
    },
];
