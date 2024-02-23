<?php

namespace TheTurk\Flamoji\Commands;

use Flarum\User\User;

class DeleteEmoji
{
    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * The ID of the emoji to delete.
     *
     * @var int
     */
    public $emojiId;

    /**
     * @param int $emojiId The ID of the emoji to delete.
     * @param User $actor The user performing the action.
     */
    public function __construct($emojiId, User $actor)
    {
        $this->emojiId = $emojiId;
        $this->actor = $actor;
    }
}
