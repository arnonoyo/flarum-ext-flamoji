<?php

namespace TheTurk\Flamoji\Commands;

use TheTurk\Flamoji\Models\Emoji;
use TheTurk\Flamoji\Event\Saving;
use Flarum\Foundation\DispatchEventsTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class ImportEmojiHandler
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
     * @param  ImportEmoji $command
     * @return Emoji
     */
    public function handle(ImportEmoji $command)
    {
        $actor = $command->actor;
        $data = $command->data;
        $emoji = null;
        
        foreach ($data as $emojiData) {
            $emoji = Emoji::build(
                Arr::get($emojiData, 'title'),
                Arr::get($emojiData, 'text_to_replace'),
                Arr::get($emojiData, 'path'),
                Arr::get($emojiData, 'category'),
            );
    
            $this->events->dispatch(
                new Saving($emoji, $actor)
            );

            $emoji->save();
        }

        return $emoji;
    }
}
