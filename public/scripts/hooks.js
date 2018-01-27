const locale = {
  'Search': 'Поиск',
  'Create': 'Создать',
  'Upload Image': 'Загрузить изображение',
  'Upload Images': 'Загрузить изображения',
  'Save': 'Сохранить',
  'reset': 'Сбросить',
  'delete': 'Удалить',
  'Select...': 'Выбрать...',
};

setInterval(() => {
  document.querySelectorAll('button, .Select-placeholder').forEach(element => {
    if(locale[element.textContent]) {
        element.textContent = locale[element.textContent];
    }
  });
}, 1000);
