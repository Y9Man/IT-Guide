export const frameworksData = [
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    language: 'JavaScript',
    year: '2013',
    icon: 'devicon-react-original colored',
    description: 'Самая популярная библиотека для создания интерфейсов. Использует компонентный подход и виртуальный DOM.',
    code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Нажато {count} раз
    </button>
  );
}`,
    pros: ['Огромное сообщество и экосистема', 'React Native для мобилок', 'Востребованность в РФ'],
    cons: ['Нужно много доп. библиотек', 'Частые обновления'],
    recommendation: 'Идеален для старта карьеры и SPA.',
    complexity: 3,
    trend: 'up',
    salary: '200k+',
    link: 'https://ru.reactjs.org/'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'frontend',
    language: 'JavaScript',
    year: '2014',
    icon: 'devicon-vuejs-plain colored',
    description: 'Прогрессивный фреймворк, который легче изучить, чем React. Очень популярен в малом и среднем бизнесе.',
    code: `<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Счет: {{ count }}</button>
</template>`,
    pros: ['Простой старт', 'Понятная документация', 'Двустороннее связывание'],
    cons: ['Меньше вакансий в энтерпрайзе', 'Меньше готовых решений чем у React'],
    recommendation: 'Лучший выбор для новичков и фриланса.',
    complexity: 2,
    trend: 'stable',
    salary: '180k+',
    link: 'https://vuejs.org/'
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'frontend',
    language: 'TypeScript',
    year: '2016',
    icon: 'devicon-angularjs-plain colored',
    description: 'Мощный фреймворк от Google "все включено". Используется в крупных банках и корпорациях.',
    code: `@Component({
  selector: 'app-hello',
  template: '<h1>Привет, {{name}}!</h1>'
})
export class HelloComponent {
  name: string = 'Angular';
}`,
    pros: ['Строгая архитектура', 'TypeScript из коробки', 'Мощный CLI'],
    cons: ['Высокий порог входа', 'Многословный код'],
    recommendation: 'Для крупных корпоративных проектов.',
    complexity: 5,
    trend: 'stable',
    salary: '220k+',
    link: 'https://angular.io/'
  },
  {
    id: 'svelte',
    name: 'Svelte',
    category: 'frontend',
    language: 'JavaScript',
    year: '2016',
    icon: 'devicon-svelte-plain colored',
    description: 'Радикально новый подход: исчезает при компиляции, превращаясь в чистый быстрый JS код.',
    code: `<script>
  let count = 0;
</script>

<button on:click={() => count += 1}>
  Нажато {count} раз
</button>`,
    pros: ['Невероятная скорость', 'Нет виртуального DOM', 'Мало кода'],
    cons: ['Мало вакансий в РФ', 'Небольшая экосистема'],
    recommendation: 'Для пет-проектов и стартапов.',
    complexity: 2,
    trend: 'up',
    salary: '190k+',
    link: 'https://svelte.dev/'
  },

  {
    id: 'django',
    name: 'Django',
    category: 'backend',
    language: 'Python',
    year: '2005',
    icon: 'devicon-django-plain colored',
    description: 'Фреймворк "для перфекционистов с дедлайнами". Включает админку, ORM и аутентификацию.',
    code: `# models.py
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(...)

# views.py
def product_list(request):
    products = Product.objects.all()
    return render(request, 'list.html', {'products': products})`,
    pros: ['Админка из коробки', 'Безопасность', 'Быстрая разработка'],
    cons: ['Медленнее асинхронных фреймворков', 'Монолитная структура'],
    recommendation: 'Для быстрых запусков MVP и контентных сайтов.',
    complexity: 3,
    trend: 'stable',
    salary: '200k+',
    link: 'https://www.djangoproject.com/'
  },
  {
    id: 'spring',
    name: 'Spring Boot',
    category: 'backend',
    language: 'Java',
    year: '2014',
    icon: 'devicon-spring-plain colored',
    description: 'Стандарт индустрии для Java. На нем работает бэкенд большинства банков и крупных систем.',
    code: `@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello Spring!";
    }
}`,
    pros: ['Надежность', 'Огромная экосистема', 'Много вакансий в банках'],
    cons: ['Сложная конфигурация', 'Потребляет много памяти'],
    recommendation: 'Если цель — работа в крупной компании (Сбер, Тинькофф).',
    complexity: 5,
    trend: 'stable',
    salary: '250k+',
    link: 'https://spring.io/'
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    language: 'Python',
    year: '2018',
    icon: 'devicon-fastapi-plain colored',
    description: 'Современный, быстрый (как Node.js) веб-фреймворк для создания API. Автоматически создает документацию.',
    code: `from fastapi import FastAPI
app = FastAPI()

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id, "name": "Item"}`,
    pros: ['Очень быстрый', 'Авто-документация (Swagger)', 'Асинхронный'],
    cons: ['Молодой (меньше библиотек чем у Django)'],
    recommendation: 'Для микросервисов и ML-проектов.',
    complexity: 2,
    trend: 'up',
    salary: '230k+',
    link: 'https://fastapi.tiangolo.com/'
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'backend',
    language: 'PHP',
    year: '2011',
    icon: 'devicon-laravel-plain colored',
    description: 'Самый популярный PHP фреймворк. Элегантный синтаксис и мощные инструменты для всего.',
    code: `Route::get('/users', function () {
    return User::all();
});

// Controller
public function store(Request $request) {
    return User::create($request->all());
}`,
    pros: ['Очень прост в освоении', 'Огромное сообщество', 'Дешевый хостинг'],
    cons: ['Производительность ниже компилируемых языков'],
    recommendation: 'Для фриланса и веб-студий.',
    complexity: 2,
    trend: 'stable',
    salary: '160k+',
    link: 'https://laravel.com/'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    language: 'JavaScript',
    year: '2010',
    icon: 'devicon-express-original',
    description: 'Минималистичный фреймворк для Node.js. Стандарт для MERN стека.',
    code: `const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)`,
    pros: ['Один язык на фронте и бэке', 'Очень быстрый', 'Гибкий'],
    cons: ['Нужно самому выбирать структуру', 'Callback hell (если не уметь готовить)'],
    recommendation: 'Для фулстек-разработчиков на JS.',
    complexity: 2,
    trend: 'down',
    salary: '200k+',
    link: 'https://expressjs.com/'
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'backend',
    language: 'TypeScript',
    year: '2017',
    icon: 'devicon-nestjs-plain colored',
    description: 'Прогрессивный Node.js фреймворк. Использует архитектуру Angular (модули, контроллеры).',
    code: `@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}`,
    pros: ['Отличная архитектура', 'TypeScript', 'Растет популярность'],
    cons: ['Сложнее чем Express'],
    recommendation: 'Современный стандарт для Node.js бэкенда.',
    complexity: 4,
    trend: 'up',
    salary: '240k+',
    link: 'https://nestjs.com/'
  },

  {
    id: 'flutter',
    name: 'Flutter',
    category: 'mobile',
    language: 'Dart',
    year: '2017',
    icon: 'devicon-flutter-plain colored',
    description: 'UI-кит от Google. Позволяет создавать красивые нативные приложения для iOS и Android из одного кода.',
    code: `class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('Hello Flutter'),
      color: Colors.blue,
    );
  }
}`,
    pros: ['Один код на все платформы', 'Высокая производительность', 'Красивые виджеты'],
    cons: ['Язык Dart (нужно учить)', 'Большой размер приложения'],
    recommendation: 'Лучший выбор для кроссплатформенной разработки.',
    complexity: 3,
    trend: 'up',
    salary: '210k+',
    link: 'https://flutter.dev/'
  },
  {
    id: 'reactnative',
    name: 'React Native',
    category: 'mobile',
    language: 'JavaScript',
    year: '2015',
    icon: 'devicon-react-original colored',
    description: 'Фреймворк от Meta. Использует React для создания нативных мобильных приложений.',
    code: `import { Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Hello Mobile!</Text>
    </View>
  );
}`,
    pros: ['Если знаешь React - знаешь RN', 'Огромное сообщество'],
    cons: ['Сложнее отладка чем в вебе', 'Иногда нужен нативный код (Swift/Kotlin)'],
    recommendation: 'Для веб-разработчиков, идущих в мобайл.',
    complexity: 3,
    trend: 'stable',
    salary: '220k+',
    link: 'https://reactnative.dev/'
  },

  {
    id: 'unity',
    name: 'Unity',
    category: 'game',
    language: 'C#',
    year: '2005',
    icon: 'devicon-unity-original colored',
    description: 'Самый популярный игровой движок в мире. От мобильных игр до VR.',
    code: `void Update() {
    if (Input.GetButtonDown("Jump")) {
        rb.AddForce(Vector3.up * jumpForce);
    }
}`,
    pros: ['Огромный Asset Store', 'Много обучающих материалов', 'Кроссплатформенность'],
    cons: ['Производительность хуже C++', 'Закрытый исходный код'],
    recommendation: 'Для старта в GameDev.',
    complexity: 3,
    trend: 'stable',
    salary: '160k+',
    link: 'https://unity.com/'
  },
  {
    id: 'electron',
    name: 'Electron',
    category: 'desktop',
    language: 'JavaScript',
    year: '2013',
    icon: 'devicon-electron-original colored',
    description: 'Создание десктопных приложений (Windows, Mac, Linux) с помощью веб-технологий. VS Code написан на нем.',
    code: `const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({ width: 800, height: 600 })
  win.loadFile('index.html')
}`,
    pros: ['Веб-стек для десктопа', 'Один код везде'],
    cons: ['Тяжелые приложения (много памяти)'],
    recommendation: 'Если нужно быстро сделать программу для ПК.',
    complexity: 3,
    trend: 'stable',
    salary: '200k+',
    link: 'https://www.electronjs.org/'
  },
  {
    id: 'dotnet',
    name: '.NET (ASP.NET)',
    category: 'backend',
    language: 'C#',
    year: '2016',
    icon: 'devicon-dotnetcore-plain colored',
    description: 'Мощная платформа от Microsoft для создания всего: от веба до облачных сервисов.',
    code: `[HttpGet]
public IEnumerable<WeatherForecast> Get() {
    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
    {
        Date = DateTime.Now.AddDays(index),
        TemperatureC = Random.Shared.Next(-20, 55)
    });
}`,
    pros: ['Производительность', 'Отличная типизация', 'Инструменты VS'],
    cons: ['Привязка к экосистеме Microsoft (исторически)'],
    recommendation: 'Для крупного энтерпрайза.',
    complexity: 4,
    trend: 'stable',
    salary: '230k+',
    link: 'https://dotnet.microsoft.com/'
  }
];