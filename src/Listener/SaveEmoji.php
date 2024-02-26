<?php

namespace TheTurk\Flamoji\Listener;

use TheTurk\Flamoji\EmojiRepository;
use TheTurk\Flamoji\Event\Deleting;
use TheTurk\Flamoji\Event\Saving;
use Flarum\Settings\DatabaseSettingsRepository;
use Illuminate\Contracts\Events\Dispatcher;

class SaveEmoji
{
    /**
     * @var EmojiRepository
     */
    protected $emojis;

    /**
     * @var DatabaseSettingsRepository
     */
    protected $settings;

    public function __construct(EmojiRepository $emojis, DatabaseSettingsRepository $settings)
    {
        $this->emojis = $emojis;
        $this->settings = $settings;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Deleting::class, [$this, 'handleDeleting']);
        $events->listen(Saving::class, [$this, 'handleSaving']);
    }

    public function handleDeleting(Deleting $event)
    {
        $emoji = $event->emoji;
        $emoji->afterDelete(function($emoji){
            $this->refreshCategory();
        });
    }

    public function handleSaving(Saving $event)
    {
        $emoji = $event->emoji;
        $emoji->afterSave(function($emoji){
            $this->refreshCategory();
        });
    }

    function refreshCategory()
    {
        $key = "the-turk-flamoji.custom_categories";
        $categories = $this->emojis->getCategory();
        $custom_categories = json_decode($this->settings->get($key, []));

        $data = [];
        foreach ($categories as $category) 
        {
            $data[$category] = isset($custom_categories->$category) ? $custom_categories->$category : [
                'is_enabled' => 0,
                'path'       => ''
            ];;
        }

        $this->settings->set($key, json_encode($data));
    }
}