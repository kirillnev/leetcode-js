"use strict";
// Функция, возвращающая приветственное сообщение
function greetUser(user) {
    return `Привет, ${user.name}! Тебе уже ${user.age} лет!`;
}
// Создаем объект пользователя
const user = {
    name: "Алексей",
    age: 30
};
// Вызываем функцию и выводим результат
console.log(greetUser(user));
console.log(greetUser(user));
//# sourceMappingURL=test.js.map