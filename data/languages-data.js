const languagesData = [
    {
        id: "python",
        name: "Python",
        year: 1991,
        categories: ["backend", "datascience", "ai"],
        iconClass: "devicon-python-plain colored",
        description: "Идеальный язык для новичков. Используется везде: от веб-сайтов до искусственного интеллекта.",
        fullDescription: "Python — это высокоуровневый язык программирования общего назначения. Его философия дизайна подчеркивает читаемость кода. Python поддерживает несколько парадигм программирования, включая процедурное, объектно-ориентированное и функциональное программирование.",
        helloWorld: `print("Привет, мир!")`,
        pros: ["Простой синтаксис", "Огромное сообщество", "Много библиотек"],
        cons: ["Медленнее компилируемых языков", "Слабый в мобильной разработке"],
        links: [
            { name: "Официальный сайт", url: "https://www.python.org/" },
            { name: "Python для начинающих", url: "https://pythonworld.ru/" }
        ]
    },
    {
        id: "javascript",
        name: "JavaScript",
        year: 1995,
        categories: ["frontend", "backend", "mobile"],
        iconClass: "devicon-javascript-plain colored",
        description: "Язык интернета. Позволяет создавать интерактивные сайты, серверы и мобильные приложения.",
        fullDescription: "JavaScript (JS) — это легкий, интерпретируемый язык со множеством функций. Он наиболее известен как язык сценариев для Web-страниц, но также используется во многих небраузерных средах, таких как Node.js.",
        helloWorld: `console.log("Привет, мир!");`,
        pros: ["Работает в любом браузере", "Огромная экосистема", "Востребованность"],
        cons: ["Странное поведение типов", "Сложная экосистема для новичка"],
        links: [
            { name: "MDN Web Docs", url: "https://developer.mozilla.org/ru/docs/Web/JavaScript" },
            { name: "Учебник JS", url: "https://learn.javascript.ru/" }
        ]
    },
    {
        id: "java",
        name: "Java",
        year: 1995,
        categories: ["backend", "mobile", "enterprise"],
        iconClass: "devicon-java-plain colored",
        description: "Надежный язык для крупных корпоративных систем и Android-разработки.",
        fullDescription: "Java — это строго типизированный объектно-ориентированный язык программирования. Приложения Java обычно транслируются в байт-код, который может выполняться на любой виртуальной машине Java (JVM).",
        helloWorld: `public class Main {
    public static void main(String[] args) {
        System.out.println("Привет, мир!");
    }
}`,
        pros: ["Строгая типизация", "Кроссплатформенность", "Надежность"],
        cons: ["Многословный код", "Потребляет много памяти"],
        links: [
            { name: "Java Oracle", url: "https://www.java.com/ru/" }
        ]
    },
    {
        id: "cpp",
        name: "C++",
        year: 1985,
        categories: ["gamedev", "system"],
        iconClass: "devicon-cplusplus-plain colored",
        description: "Мощь и скорость. Основа для игр, движков и операционных систем.",
        fullDescription: "C++ — компилируемый, статически типизированный язык программирования общего назначения. Поддерживает различные парадигмы программирования.",
        helloWorld: `#include <iostream>

int main() {
    std::cout << "Привет, мир!" << std::endl;
    return 0;
}`,
        pros: ["Высокая производительность", "Контроль над памятью"],
        cons: ["Сложный синтаксис", "Легко допустить ошибку"],
        links: [
            { name: "Справочник C++", url: "https://cppreference.com/" }
        ]
    },
    {
        id: "csharp",
        name: "C#",
        year: 2000,
        categories: ["gamedev", "backend", "desktop"],
        iconClass: "devicon-csharp-plain colored",
        description: "Язык от Microsoft. Главный инструмент для разработки игр на Unity.",
        fullDescription: "C# — объектно-ориентированный язык программирования. Разработан группой инженеров компании Microsoft как основной язык разработки приложений для платформы Microsoft .NET.",
        helloWorld: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Привет, мир!");
    }
}`,
        pros: ["Удобный инструментарий", "Unity", "Поддержка Microsoft"],
        cons: ["Привязка к Windows (исторически)", "Сложность для старта"],
        links: [
            { name: "Документация Microsoft", url: "https://docs.microsoft.com/ru-ru/dotnet/csharp/" }
        ]
    }
];

export default languagesData;