const keystone = require('keystone');
const Types = keystone.Field.Types;

const FeedbackGroup = new keystone.List('FeedbackGroup', {
  label: 'Группа отзывов',
  plural: 'Группы отзывов',
  singular: 'Группа отзывов',
  perPage: 25,
  hidden: false,
  autokey: {
    path: 'slug',
    from: 'name',
    unique: true,
  },
});

FeedbackGroup.add('Параметры', {
  name: {
    label: 'Название',
    type: String,
    initial: true,
  },
  href: {
    label: 'Ссылка',
    type: String,
    initial: true,
  },
});

FeedbackGroup.relationship({ path: 'feedbacks', ref: 'Feedback', refPath: 'group' });

FeedbackGroup.defaultColumns = 'name|25%, href|75%';
FeedbackGroup.register();

module.exports = FeedbackGroup;
