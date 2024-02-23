<?php

namespace TheTurk\Flamoji;

use TheTurk\Flamoji\Models\Emoji;
use Illuminate\Database\Eloquent\Builder;

class EmojiRepository
{
    /**
     * Get a new query builder for the discussions table.
     *
     * @return Builder<Emoji>
     */
    public function query()
    {
        return Emoji::query();
    }

    public function getCategory()
    {
        return $this->query()
            ->groupBy('category')
            ->pluck('category')
            ->toArray();
    }
}