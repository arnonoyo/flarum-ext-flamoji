<?php

namespace TheTurk\Flamoji\Commands;

use TheTurk\Flamoji\Models\Emoji;
use TheTurk\Flamoji\Event\Deleting;
use Flarum\Foundation\DispatchEventsTrait;
use Illuminate\Contracts\Events\Dispatcher;

class DeleteEmojiHandler
{
    use DispatchEventsTrait;

    /**
     * @param Dispatcher $events
     */
    public function __construct(Dispatcher $events)
    {
        $this->events = $events;
    }

    /**
     * @param  DeleteEmoji $command
     * @return Emoji
     */
    public function handle(DeleteEmoji $command)
    {
        $actor = $command->actor;
        $actor->assertAdmin();

        $emoji = Emoji::findOrFail($command->emojiId);

        $this->events->dispatch(
            new Deleting($emoji, $actor)
        );

        $emoji->delete();

        return $emoji;
    }
}
