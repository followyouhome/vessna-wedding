setInterval(() => {
  const translation = {
    'Search': 'Поиск',
    'Create': 'Создать',
    'Upload Image': 'Загрузить изображение',
    'Upload Images': 'Загрузить изображения',
    // 'Save': 'Сохранить',
    'reset': 'Сбросить',
    'delete': 'Удалить',
    'Select...': 'Выбрать...',
  };

  document.querySelectorAll('button, .Select-placeholder').forEach(element => {
    if(translation[element.textContent]) {
        element.textContent = translation[element.textContent];
    }
  });
}, 1000);
