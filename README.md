# Unit-тестирование
---
## Чистые функции

### Легенда

Во время игры вам необходимо будет отображать полоску жизни над игровым персонажем. Для сигнализации пользователю вы решили ввести цветовую индикацию:
1. Здоровье более 50 - зелёный;
1. Здоровье от 50 и до 15 - жёлтый;
1. Менее 15 - красный.

### Описание

Реализуйте функцию, которая на вход принимает объект вида:
```javascript
{name: 'Маг', health: 90}
```
И возвращает ответ в виде одной из строк: `healthy`, `wounded`, `critical`

Сгенерируйте проект на базе `npm`. Подключите туда `jest` и напишите авто-тесты, которые обеспечивают 100% покрытие вашей функции по строкам.

Убедитесь, что вы обеспечили 100% покрытие тестами.

---
## Ссылки на выполненные задачи блока Unit-тестирование

1. [Чистые функции](https://github.com/Turovae/test-ci-clear-function)
2. [Matchers](https://github.com/Turovae/test-ci-matchers)
3. [Mocking](https://github.com/Turovae/test-ci-mocking)

---

[![Build status](https://ci.appveyor.com/api/projects/status/veeyp2l6outbag6g?svg=true)](https://ci.appveyor.com/project/Turovae/test-ci-clear-function)
