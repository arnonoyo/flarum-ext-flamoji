# flarum-ext-flamoji

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-flamoji/blob/master/LICENSE)

> 基于`the-turk/flarum-flamoji`魔改，与原扩展冲突，安装前需卸载原扩展（原emoji配置数据可提前备份&导出）  
> 暂只支持从源码库安装

以下两项仅列出与原扩展中较大的差异，具体差异请对比[代码变更](https://github.com/the-turk/flarum-flamoji/compare/main...arnonoyo:flarum-ext-flamoji:main)

## Features

- 自定义表情包支持分类显示`Custom categories`
- 只保留zh，移除emoji-button-locale-data依赖
  - `js/src/emoji-button-locale-data/zh.js`
- 只支持14.0.2版本twemoji
  - 原`twemoji.maxcdn.com`地址失效，替换为`cdn.jsdelivr.net`
  - 暂移除部分显示为方块的emoji
- `custom_emojis`表`text_to_replace`新增唯一索引
- 为解决自定义分类排序错乱的问题，依赖包[picmo](https://github.com/arnonoyo/picmo)为forked后修改的

## Fixes

- `Specify categories`设置不显示但emoji还是显示了
- `Initial category`对应`Specify categories`分类设置不显示时报错
- 相关接口越权行为
- 删除`map.js`

## Installation

先在`composer.json`中添加`repositories`源，再执行以下命令
```bash
composer require tk/flarum-ext-flamoji
```

## Updating

```bash
composer update tk/flarum-ext-flamoji
php flarum migrate
php flarum assets:publish
php flarum cache:clear
```