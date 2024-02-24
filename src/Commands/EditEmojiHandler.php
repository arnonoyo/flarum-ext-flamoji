<?php

namespace TheTurk\Flamoji\Commands;

use TheTurk\Flamoji\Models\Emoji;
use TheTurk\Flamoji\Event\Saving;
use Flarum\Foundation\DispatchEventsTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class EditEmojiHandler
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
     * @param  EditEmoji $command
     * @return Emoji
     */
    public function handle(EditEmoji $command)
    {
        $actor = $command->actor;
        $actor->assertAdmin();

        $data = $command->data;

        $emoji = Emoji::findOrFail($command->emojiId);

        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['title'])) {
            $emoji->title = $attributes['title'];
        }

        if (isset($attributes['textToReplace'])) {
            $emoji->text_to_replace = $attributes['textToReplace'];
        }

        if (isset($attributes['path'])) {
            $emoji->path = $attributes['path'];
        }
        
        if (isset($attributes['category'])) {
            $emoji->category = $attributes['category'];
        }

        $this->events->dispatch(
            new Saving($emoji, $actor)
        );

        $emoji->save();

        return $emoji;
    }
}
