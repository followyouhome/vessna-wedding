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
// keystone.set('cloudinary upload options', { backup: true, use_filename: true } );
// keystone.set('cloudinary secure', true);
// keystone.set('cloudinary use_filename', true);

const Promo = new keystone.List('Promo', {
  label: 'Промо',
  hidden: true
});

Promo.add('Промо', {
  promo: {
    slug: { type: String, hidden: true },
    headline: { label: 'Заголовок', type: Types.Text, dependsOn: { 'promo.media': ['image', 'video', 'audio'] } },
    subline: { label: 'Подзаголовок', type: Types.Text, dependsOn: { 'promo.media': ['image', 'video', 'audio'] } },
    text: { label: 'Текст', type: Types.Html, wysiwyg: true, dependsOn: { 'promo.media': ['image', 'video', 'audio'] } },
    media: { label: 'Медиа', type: Types.Select, options: [
      { label: 'Отсутствует', value : 'null' },
      { label: 'Изображение', value: 'image' },
      { label: 'Видео', value: 'video' },
      { label: 'Аудио', value: 'audio' },
    ], default: 'null' },
    image: {
      label: 'Изображение',
      type: Types.CloudinaryImage,
      dependsOn: { 'promo.media': 'image' },
      uploadOptions: { use_filename: true, unique_filename: false },
      generateFilename: function(file, attemptNumber, callback) {
        callback(null, file.originalname);
      }
    },
    audio: {
      label: '.mp3',
      type: Types.File,
      dependsOn: { 'promo.media': 'audio' },
      storage: storage
    },
    video: {
      webm: { label: '.webm', type: Types.File, dependsOn: { 'promo.media': 'video' },  storage: storage },
      mp4: { label: '.mp4', type: Types.File, dependsOn: { 'promo.media': 'video' },  storage: storage },
      ogv: { label: '.ogv', type: Types.File, dependsOn: { 'promo.media': 'video' },  storage: storage }
    },
  },
}, 'Большое промо', {
  main_promo: {
    slug: { type: String, hidden: true },
    headline: { label: 'Заголовок', type: Types.Text, dependsOn: { 'main_promo.media': ['image', 'video', 'audio'] } },
    subline: { label: 'Подзаголовок', type: Types.Text, dependsOn: { 'main_promo.media': ['image', 'video', 'audio'] } },
    text: { label: 'Текст', type: Types.Html, wysiwyg: true, dependsOn: { 'main_promo.media': ['image', 'video', 'audio'] } },
    media: { label: 'Медиа', type: Types.Select, options: [
      { label: 'Отсутствует', value : 'null' },
      { label: 'Изображение', value: 'image' },
      { label: 'Видео', value: 'video' },
      { label: 'Аудио', value: 'audio' },
    ], default: 'null' },
    image: {
      label: 'Изображение',
      type: Types.CloudinaryImage,
      dependsOn: { 'main_promo.media': 'image' },
      uploadOptions: { use_filename: true, unique_filename: false },
      generateFilename: function(file, attemptNumber, callback) {
        callback(null, file.originalname);
      }
    },
    audio: {
      label: '.mp3',
      type: Types.File,
      dependsOn: { 'main_promo.media': 'audio' },
      storage: storage
    },
    video: {
      webm: { label: '.webm', type: Types.File, dependsOn: { 'main_promo.media': 'video' },  storage: storage },
      mp4: { label: '.mp4', type: Types.File, dependsOn: { 'main_promo.media': 'video' },  storage: storage },
      ogv: { label: '.ogv', type: Types.File, dependsOn: { 'main_promo.media': 'video' },  storage: storage }
    },
  }
});

Promo.schema.pre('save', function(next) {
  const cloudinary = /(http|https):\/\/res.cloudinary.com\/vessna\/image\/upload\/.*\//;
  const local = '/images/';

  this.promo.image.url = this.promo.image.url.replace(cloudinary, local);
  this.promo.image.secure_url = this.promo.image.url.replace(cloudinary, local);

  console.log(this.promo.image)
  // console.log(keystone);


  next(this);
});

Promo.defaultColumns = '';
Promo.register();

module.exports = Promo;
