const keystone = require('keystone');
const Types = keystone.Field.Types;
const storage = new keystone.Storage({
  adapter: require('keystone-storage-adapter-azure'),
  azure: {
    accountName: 'vessna',
    accountKey: 'Xzbwifn7ktI8OQEeOdsgehUrfEWac7LPXc91mx15d0OI9ki4qu3VEKpvlZI8dV17NSi9eM1kghDfS9FEeTLTCw==',
    container: 'vessna',
    generateFilename: keystone.Storage.originalFilename,
  },
  schema: { container: true, etag: true, url: true },
});

keystone.set('cloudinary config', 'cloudinary://973344584935212:qmo8nmPl9pORLT-AjS4UEWgrcqM@vessna' );

const Promo = new keystone.List('Promo', {
  label: 'Промо',
  hidden: true
});

Promo.add('Промо', {
  promo: {
    slug: { type: String, hidden: true },
    headline: { label: 'Заголовок', type: Types.Text },
    subline: { label: 'Подзаголовок', type: Types.Text },
    media: { label: 'Медиа', type: Types.Select, options: [
      { label: 'Изображение', value: 'image' },
      { label: 'Видео', value: 'video' },
      { label: 'Аудио', value: 'audio' }
    ], default: 'image' },
    image: { label: 'Изображение', type: Types.CloudinaryImage, dependsOn: { 'promo.media': 'image' } },
    audio: {  label: '.mp3', type: Types.File, dependsOn: { 'promo.media': 'audio' },  storage: storage },
    video: {
      webm: { label: '.webm', type: Types.File, dependsOn: { 'promo.media': 'video' },  storage: storage },
      mp4: { label: '.mp4', type: Types.File, dependsOn: { 'promo.media': 'video' },  storage: storage },
      ogv: { label: '.ogv', type: Types.File, dependsOn: { 'promo.media': 'video' },  storage: storage }
    },
    text: { label: 'Текст', type: Types.Html, wysiwyg: true },
  },
}, 'Большое промо', {
  main_promo: {
    slug: { type: String, hidden: true },
    headline: { label: 'Заголовок', type: Types.Text },
    subline: { label: 'Подзаголовок', type: Types.Text },
    media: { label: 'Медиа', type: Types.Select, options: [
      { label: 'Изображение', value: 'image' },
      { label: 'Видео', value: 'video' },
      { label: 'Аудио', value: 'audio' }
    ], default: 'image' },
    image: { label: 'Изображение', type: Types.CloudinaryImage, dependsOn: { 'main_promo.media': 'image' } },
    audio: {  label: '.mp3', type: Types.File, dependsOn: { 'main_promo.media': 'audio' },  storage: storage },
    video: {
      webm: { label: '.webm', type: Types.File, dependsOn: { 'main_promo.media': 'video' },  storage: storage },
      mp4: { label: '.mp4', type: Types.File, dependsOn: { 'main_promo.media': 'video' },  storage: storage },
      ogv: { label: '.ogv', type: Types.File, dependsOn: { 'main_promo.media': 'video' },  storage: storage }
    },
    text: { label: 'Текст', type: Types.Html, wysiwyg: true },
  }
});

Promo.defaultColumns = '';
Promo.register();

module.exports = Promo;
