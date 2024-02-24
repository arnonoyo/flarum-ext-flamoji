<?php

namespace TheTurk\Flamoji\Commands;

use TheTurk\Flamoji\Models\Emoji;
use TheTurk\Flamoji\Event\Saving;
use Flarum\Foundation\DispatchEventsTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class CreateEmojiHandler
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
     * @param  CreateEmoji $command
     * @return Emoji
     */
    public function handle(CreateEmoji $command)
    {
        $actor = $command->actor;
        $actor->assertAdmin();

        $data = $command->data;

        $emoji = Emoji::build(
            Arr::get($data, 'attributes.title'),
            Arr::get($data, 'attributes.textToReplace'),
            Arr::get($data, 'attributes.path'),
            Arr::get($data, 'attributes.category'),
        );

        $this->events->dispatch(
            new Saving($emoji, $actor)
        );

        $emoji->save();

        return $emoji;
    }
}
