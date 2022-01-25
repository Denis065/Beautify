module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rewiews', [
      {
        name: 'DarkMoon', text: 'Суперский салон в котором работают профессионалы своего дела. Мой любимый салон красоты', isValid: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'NightFuri', text: 'Атмосферное место, сервис на самом высоком уровне. Делала макияж глаз в стиле cut-crease у мастера Елены, результат получился выше всяких похвал. Мастерство очевидно', isValid: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Кусачая Муха', text: 'Прекрасный салон, индивидуальный подход. Наверно не очень внятно объяснила, что хотела, но мастер Оксана разобралась и сделала классный маникюр, все 5 баллов', isValid: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'MichaelexahYJ', text: 'Приятное место, куда хочется возвращаться! Нравится интерьер, удобное расположение студии, доброжелательность персонала. Хочу отметить профессиональные качества стилиста Владимира. Он отлично умеет «видеть, слышать, чувствовать» клиента, и со всей душой относится к работе) Очень довольна результатом стрижки!', isValid: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Romantico', text: 'Первый раз в студии, очень милая и хорошая девушка, как мастер тоже супер, теперь у меня отличная креативная стрижка и модный лук, я очень довольна! Стоит отметить, что уютная студия с хорошим расположением. Спасибо ️', isValid: true, createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rewiews');
  },
};
