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

const MainPromo =  {
  main_promo: {
    slug: { type: String, hidden: true },
    headline: { label: 'Заголовок', type: Types.Text, dependsOn: { 'main_promo.media': ['image', 'video', 'audio'] } },
    subline: { label: 'Подзаголовок', type: Types.Text, dependsOn: { 'main_promo.media': ['image', 'video', 'audio'] } },
    text: { label: 'Текст', type: Types.Html, wysiwyg: true, dependsOn: { 'main_promo.media': ['image', 'video', 'audio'] } },
    align: { label: 'Расположение', type: Types.Select, dependsOn: { 'main_promo.media': ['image', 'video', 'audio'] }, options: [
      { label: '↖', value : 'top-left' },
      { label: '↑', value: 'top-center' },
      { label: '↗', value: 'right-top' },
      { label: '←', value : 'middle-left' },
      { label: '·', value: 'middle-center' },
      { label: '→', value: 'middle-right' },
      { label: '↙', value: 'bottom-left' },
      { label: '↓', value: 'bottom-center' },
      { label: '↘', value: 'bottom-right' },
    ]},
    media: { label: 'Медиа', type: Types.Select, options: [
      { label: 'Отсутствует', value : 'null' },
      { label: 'Изображение', value: 'image' },
      { label: 'Видео', value: 'video' },
      { label: 'Аудио', value: 'audio' },
    ], default: 'null' },
    alt: { label: 'Альтернативный текст', type: Types.Text, dependsOn: { 'main_promo.media': 'image' } },
    image: {
      label: 'Изображение',
      type: Types.CloudinaryImage,
      dependsOn: { 'main_promo.media': 'image' },
      uploadOptions: { use_filename: true, unique_filename: false },
      generateFilename: function(file, attemptNumber, callback) {
        callback(null, file.originalname);
      },
    },
    audio: {
      label: '.mp3',
      type: Types.File,
      dependsOn: { 'main_promo.media': 'audio' },
      storage: storage,
    },
    video: {
      webm: { label: '.webm', type: Types.File, dependsOn: { 'main_promo.media': 'video' },  storage: storage },
      mp4: { label: '.mp4', type: Types.File, dependsOn: { 'main_promo.media': 'video' },  storage: storage },
      ogv: { label: '.ogv', type: Types.File, dependsOn: { 'main_promo.media': 'video' },  storage: storage },
    },
  },
};

const Methods = {
  toJSON: function(ret) {
    delete ret.__v;
    delete ret._id;

    if(ret.main_promo.media == 'null') {
      delete ret.main_promo;
    }

    return ret;
  },
  save: function () {
    const cloudinary = /(http|https):\/\/res.cloudinary.com\/vessna\/image\/upload\/.*\//;
    const local = '/images/';

    if (this.main_promo.image.url) {
      this.main_promo.image.url = this.main_promo.image.url.replace(cloudinary, local);
    }

    if (this.main_promo.image.secure_url) {
      this.main_promo.image.secure_url = this.main_promo.image.url.replace(cloudinary, local);
    }
  },
};

module.exports = { schema: MainPromo, methods: Methods };
