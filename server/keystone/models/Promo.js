const keystone = require('keystone');
const Types = keystone.Field.Types;

//TODO: REMOVE ME
keystone.set('cloudinary config', 'cloudinary://973344584935212:qmo8nmPl9pORLT-AjS4UEWgrcqM@vessna' );

var Promo = new keystone.List('Promo', {
  label: 'Промо',
  autokey: { path: 'slug', from: 'name', unique: true },
  hidden: true,
  // noedit: true,
  // nocreate: true,
  // nodelete: true
});

Promo.add('Промо', {
  headline: { label: 'Заголовок', type: Types.Text },
  subline: { label: 'Подзаголовок', type: Types.Text },
  media: { label: 'Медиа', type: Types.Select, options: [{ label: 'Изображение', value: 'image' }, { label: 'Видео', value: 'video' }, { label: 'Аудио', value: 'audio' }], default: 'image' },
  text: { label: 'Текст', type: Types.Html, wysiwyg: true },
  image: { label: 'Изображение', type: Types.CloudinaryImage, dependsOn: { media: 'image' } }
});

Promo.defaultColumns = '';
Promo.register();

module.exports = Promo;