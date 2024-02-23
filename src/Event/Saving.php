<?php

namespace TheTurk\Flamoji\Event;

use TheTurk\Flamoji\Models\Emoji;
use Flarum\User\User;

class Saving
{
    /**
     * @var \TheTurk\Flamoji\Models\Emoji
     */
    public $emoji;

    /**
     * @var User
     */
    public $actor;

        /**
     * The attributes to update on the post.
     *
     * @var array
     */
    public $data;

    /**
     * @param \TheTurk\Flamoji\Models\Emoji $emoji
     * @param User $actor
     * @param array $data
     */
    public function __construct(Emoji $emoji, User $actor, array $data = [])
    {
        $this->emoji = $emoji;
        $this->actor = $actor;
        $this->data = $data;
    }
}