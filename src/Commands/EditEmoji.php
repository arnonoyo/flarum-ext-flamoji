<?php

namespace TheTurk\Flamoji\Commands;
use Flarum\User\User;

class EditEmoji
{
    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * The ID of the emoji to edit.
     *
     * @var int
     */
    public $emojiId;

    /**
     * The attributes to update on the emoji.
     *
     * @var array
     */
    public $data;

    /**
     * @param int   $tagId The ID of the emoji to edit.
     * @param User $actor The user performing the action.
     * @param array $data  The attributes to update on the emoji.
     */
    public function __construct($emojiId, User $actor, array $data)
    {
        $this->emojiId = $emojiId;
        $this->actor = $actor;
        $this->data = $data;
    }
}
