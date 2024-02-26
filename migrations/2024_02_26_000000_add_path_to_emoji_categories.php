<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $query = $schema->getConnection()->table('settings')->where('key', 'the-turk-flamoji.custom_categories');
        if(is_null($value = $query->value('value'))){
            return;
        }
        $categories = json_decode($value);

        $data = [];
        foreach ($categories as $key => $value){
            $data[$key] = isset($value->is_enabled) ?
                $value:
                [
                    'is_enabled' => $value,
                    'path'       => ''
                ];
        }

        $query->update(['value' => json_encode($data)]);
    },
    'down' => function (Builder $schema) {
    },
];
