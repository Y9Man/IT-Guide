const languagesData = [
    {
        id: "python",
        name: "Python",
        year: 1991,
        tags: ["web", "ai"],
        icon: "devicon-python-plain colored",
        description: "Идеальный язык для новичков. Используется везде: от веб-сайтов до искусственного интеллекта.",
        codeLang: "python",
        code: `def say_hello():\n    print("Привет, IT Guide!")\n\nsay_hello()`,
        history: "Создан Гвидо ван Россумом в 1991 году. Назван не в честь змеи, а в честь британского комедийного шоу «Летающий цирк Монти Пайтона».",
        features: ["Простой и читаемый синтаксис", "Огромное количество библиотек", "Лидер в сфере нейросетей"],
        links: [
            { name: "Официальный сайт", url: "https://www.python.org/" },
            { name: "Python для начинающих", url: "https://pythonworld.ru/" }
        ]
    },
    {
        id: "javascript",
        name: "JavaScript",
        year: 1995,
        tags: ["web", "mobile"],
        icon: "devicon-javascript-plain colored",
        description: "Язык интернета. Позволяет создавать интерактивные сайты, серверы и мобильные приложения.",
        codeLang: "javascript",
        code: `const greet = () => {\n  console.log("Привет, мир!");\n};\ngreet();`,
        history: "Разработан Бренданом Эйхом всего за 10 дней в 1995 году для браузера Netscape Navigator.",
        features: ["Работает абсолютно в любом браузере", "Можно писать бэкенд на Node.js", "Асинхронность из коробки"],
        links: [
            { name: "MDN Web Docs", url: "https://developer.mozilla.org/ru/docs/Web/JavaScript" },
            { name: "Учебник JS", url: "https://learn.javascript.ru/" }
        ]
    },
    {
        id: "java",
        name: "Java",
        year: 1995,
        tags: ["web", "mobile"],
        icon: "devicon-java-plain colored",
        description: "Надежный язык для крупных корпоративных систем и Android-разработки.",
        codeLang: "java",
        code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Привет, мир!");\n    }\n}`,
        history: "Разработан Джеймсом Гослингом в Sun Microsystems. Девиз языка: «Написано однажды, работает везде».",
        features: ["Строгая типизация", "Выполняется на JVM (виртуальной машине)", "Основа для нативного Android"],
        links: [{ name: "Java Oracle", url: "https://www.java.com/ru/" }]
    },
    {
        id: "cpp",
        name: "C++",
        year: 1985,
        tags: ["game", "cybersecurity"],
        icon: "devicon-cplusplus-plain colored",
        description: "Мощь и скорость. Основа для тяжелых игр (Unreal Engine), движков и системного реверс-инжиниринга.",
        codeLang: "cpp",
        code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`,
        history: "Создан Бьерном Страуструпом как расширение языка C с добавлением объектно-ориентированных возможностей.",
        features: ["Высочайшая производительность", "Ручное управление памятью", "Полный контроль над железом"],
        links: [{ name: "C++ Reference", url: "https://cppreference.com/" }]
    },
    {
        id: "csharp",
        name: "C#",
        year: 2000,
        tags: ["game", "web"],
        icon: "devicon-csharp-plain colored",
        description: "Язык от Microsoft. Главный инструмент для разработки игр на популярном движке Unity.",
        codeLang: "csharp",
        code: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Привет!");\n    }\n}`,
        history: "Разработан Андерсом Хейлсбергом в Microsoft как современный конкурент Java для платформы .NET.",
        features: ["Удобный и мощный синтаксис", "Идеален для геймдева (Unity3D)", "Огромная экосистема Microsoft"],
        links: [{ name: "Документация Microsoft", url: "https://docs.microsoft.com/ru-ru/dotnet/csharp/" }]
    },
    {
        id: "bash",
        name: "Bash",
        year: "1989",
        tags: ["devops", "cybersecurity"],
        icon: "devicon-bash-plain colored",
        description: "Язык командной оболочки Linux. База для автоматизации серверов в DevOps и скриптов в ИБ.",
        codeLang: "bash",
        code: `#!/bin/bash\n# Простой скрипт бэкапа\ntar -czf backup.tar.gz /var/www/\necho "Бэкап завершен!"`,
        history: "Создан Брайаном Фоксом для проекта GNU как свободная замена стандартной оболочке UNIX.",
        features: ["Нативная работа в Linux", "Автоматизация рутинных задач", "Мощная работа с текстом и пайпами"],
        links: [{ name: "Bash Guide", url: "https://mywiki.wooledge.org/BashGuide" }]
    },
    {
        id: "go",
        name: "Go (Golang)",
        year: "2009",
        tags: ["devops", "web"],
        icon: "devicon-go-original-wordmark colored",
        description: "Язык от Google. Невероятно быстрый, идеален для микросервисов и DevOps-инструментов (Docker, Kubernetes).",
        codeLang: "go",
        code: `package main\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, IT Guide!")\n}`,
        history: "Разработан внутри Google для решения проблем масштабируемости, ускорения сборки и работы серверов.",
        features: ["Фантастическая скорость работы", "Встроенная асинхронность (горутины)", "Простота синтаксиса"],
        links: [{ name: "Официальный сайт", url: "https://go.dev/" }]
    },
    {
        id: "assembly",
        name: "Assembly",
        year: "1940-е",
        tags: ["cybersecurity", "game"],
        icon: "fas fa-microchip",
        description: "Низкоуровневый язык. Основа для реверс-инжиниринга, написания эксплойтов и анализа работы CPU.",
        codeLang: "nasm",
        code: `section .data\n    msg db 'Hello!', 0xa\n    len equ $ - msg\n\nsection .text\n    global _start\n_start:\n    mov eax, 4\n    mov ebx, 1\n    mov ecx, msg\n    mov edx, len\n    int 0x80`,
        history: "Ассемблер — это человекочитаемое представление машинного кода. Для каждой архитектуры процессора (x86, ARM) он свой.",
        features: ["Полный контроль над железом", "Работа напрямую с регистрами", "Основной инструмент IDA Pro / x64dbg"],
        links: [{ name: "Основы Ассемблера", url: "https://tproger.ru/" }]
    },
    {
        id: "figma",
        name: "Figma",
        year: "2016",
        tags: ["design", "web"],
        icon: "devicon-figma-plain colored",
        description: "Главный инструмент UI/UX дизайнера. Хоть это и не язык, но без макетов в Figma не начинается ни один проект.",
        codeLang: "css",
        code: `/* Figma позволяет выгружать стили */\n.btn-primary {\n  background: #0070f3;\n  border-radius: 8px;\n  box-shadow: 0 4px 14px rgba(0,0,0,0.5);\n}`,
        history: "Произвела революцию в дизайне, перенеся полноценный графический редактор в браузер с возможностью совместной работы.",
        features: ["Векторная графика", "Кликабельное прототипирование", "Совместная работа как в Google Docs"],
        links: [{ name: "Сайт Figma", url: "https://www.figma.com/" }]
    }
];

export { languagesData };
export default languagesData;