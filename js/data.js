export const languagesData = [
  {
    id: 'python',
    name: 'Python',
    year: '1991',
    description: 'Мощный язык с простым синтаксисом. Лидер в области AI, Data Science и веб-разработки.',
    tags: ['web', 'data', 'ai', 'scripting'],
    icon: 'devicon-python-plain colored',
    codeLang: 'python',
    code: `# List comprehension and context manager
def analyze_logs(file_path):
    try:
        with open(file_path, 'r') as f:
            # Filter lines containing "ERROR" and strip whitespace
            errors = [line.strip() for line in f if "ERROR" in line]
            
        # Lambda function to extract timestamp
        get_time = lambda log: log.split(' ')[0]
        timestamps = list(map(get_time, errors))
        
        return {"count": len(errors), "times": timestamps}
    except FileNotFoundError:
        return None`,
    history: 'Создан Гвидо ван Россумом в 1991 году. Назван в честь шоу "Летающий цирк Монти Пайтона".',
    features: [
      'Лаконичный синтаксис (отступы)',
      'Динамическая типизация',
      'Богатая стандартная библиотека',
      'Лидер в машинном обучении'
    ],
    links: [
      { name: 'Python.org', url: 'https://www.python.org/' },
      { name: 'Документация', url: 'https://docs.python.org/3/' },
      { name: 'PEP 8 (Стиль)', url: 'https://peps.python.org/pep-0008/' }
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    year: '1995',
    description: 'Язык, оживляющий веб-страницы. Работает в браузере и на сервере (Node.js).',
    tags: ['web', 'mobile', 'scripting'],
    icon: 'devicon-javascript-plain colored',
    codeLang: 'javascript',
    code: `// Async/Await with Fetch API
async function getUserData(userId) {
  try {
    const response = await fetch(\`https://api.app.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error('User not found');
    }

    const data = await response.json();
    // Destructuring assignment
    const { name, email, role = 'guest' } = data;
    
    console.log(\`User: \${name}, Role: \${role}\`);
    return { name, email };
  } catch (error) {
    console.error('Fetch error:', error);
  }
}`,
    history: 'Разработан Бренданом Айком в Netscape всего за 10 дней. Стал стандартом веб-программирования.',
    features: [
      'Асинхронность (Event Loop)',
      'Прототипное наследование',
      'Работает в любом браузере',
      'Огромная экосистема (NPM)'
    ],
    links: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript' },
      { name: 'Learn JS', url: 'https://learn.javascript.ru/' }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    year: '1995',
    description: 'Строгий объектно-ориентированный язык. Стандарт для корпоративных систем и Android.',
    tags: ['enterprise', 'mobile', 'web'],
    icon: 'devicon-java-plain colored',
    codeLang: 'java',
    code: `// Interface and Class Implementation
interface Payable {
    double calculatePayment();
}

class Employee implements Payable {
    private String name;
    private double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    @Override
    public double calculatePayment() {
        // Business logic with tax calculation
        return this.salary * 0.87; 
    }

    // Stream API example (Java 8+)
    public static void filterHighEarners(List<Employee> staff) {
        staff.stream()
             .filter(e -> e.salary > 5000)
             .forEach(System.out::println);
    }
}`,
    history: 'Создан в Sun Microsystems (сейчас Oracle). Лозунг: "Write once, run anywhere".',
    features: [
      'Строгая статическая типизация',
      'Работает на виртуальной машине (JVM)',
      'Автоматическая сборка мусора',
      'Многопоточность из коробки'
    ],
    links: [
      { name: 'Oracle Java', url: 'https://www.oracle.com/java/' },
      { name: 'Baeldung (Tutorials)', url: 'https://www.baeldung.com/' }
    ]
  },
  {
    id: 'csharp',
    name: 'C#',
    year: '2000',
    description: 'Мощный язык от Microsoft. Используется для разработки игр (Unity), веб-сервисов и десктоп-приложений.',
    tags: ['game', 'enterprise', 'web', 'desktop'],
    icon: 'devicon-csharp-plain colored',
    codeLang: 'csharp',
    code: `using System.Linq;
using System.Collections.Generic;

public class Student {
    public string Name { get; set; }
    public int Score { get; set; }
}

public class Program {
    public static void Main() {
        var students = new List<Student> {
            new Student { Name = "Alice", Score = 95 },
            new Student { Name = "Bob", Score = 80 }
        };

        // LINQ Query syntax
        var topStudents = from s in students
                          where s.Score >= 90
                          select s.Name;

        foreach (var name in topStudents) {
            Console.WriteLine($"Top student: {name}");
        }
    }
}`,
    history: 'Разработан Андерсом Хейлсбергом в Microsoft как часть платформы .NET.',
    features: [
      'Интегрированный язык запросов (LINQ)',
      'Асинхронное программирование (async/await)',
      'Свойства и события',
      'Сборщик мусора'
    ],
    links: [
      { name: 'Microsoft Docs', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
      { name: 'Unity Learn', url: 'https://learn.unity.com/' }
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    year: '1985',
    description: 'Язык высокой производительности. На нем написаны игры, движки браузеров и операционные системы.',
    tags: ['system', 'game', 'embedded'],
    icon: 'devicon-cplusplus-plain colored',
    codeLang: 'cpp',
    code: `// Templates and Memory Management
#include <iostream>
#include <vector>

// Generic Template Class
template <typename T>
class Box {
private:
    T value;
public:
    Box(T v) : value(v) {}
    T getValue() { return value; }
};

int main() {
    // Dynamic memory allocation
    int* ptr = new int(10);
    
    Box<double> numberBox(3.14);
    Box<std::string> strBox("Hello GameDev");

    std::cout << numberBox.getValue() << std::endl;
    
    // Manual cleanup required
    delete ptr; 
    return 0;
}`,
    history: 'Создан Бьёрном Страуструпом как расширение языка C с добавлением классов.',
    features: [
      'Прямое управление памятью',
      'Шаблоны (Templates)',
      'Высочайшая скорость выполнения',
      'Множественное наследование'
    ],
    links: [
      { name: 'C++ Reference', url: 'https://en.cppreference.com/w/' },
      { name: 'LearnCpp', url: 'https://www.learncpp.com/' }
    ]
  },
  {
    id: 'php',
    name: 'PHP',
    year: '1995',
    description: 'Язык серверных скриптов. На нем работают WordPress, Facebook (изначально) и 80% веба.',
    tags: ['web', 'scripting'],
    icon: 'devicon-php-plain colored',
    codeLang: 'php',
    code: `<?php
// Database connection and fetching
class UserManager {
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    public function getActiveUsers() {
        // Prepared Statement for security
        $stmt = $this->db->prepare("SELECT email FROM users WHERE active = 1");
        $stmt->execute();
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

// Usage
$users = (new UserManager($pdo))->getActiveUsers();
foreach ($users as $user) {
    echo "Active: " . htmlspecialchars($user['email']);
}
?>`,
    history: 'Создан Расмусом Лердорфом. Изначально означал "Personal Home Page".',
    features: [
      'Простая интеграция с HTML и БД',
      'Огромное сообщество',
      'Легкость развертывания',
      'Слабая типизация (исторически)'
    ],
    links: [
      { name: 'PHP.net', url: 'https://www.php.net/' },
      { name: 'Laravel', url: 'https://laravel.com/' }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    year: '2012',
    description: 'Надстройка над JavaScript, добавляющая статическую типизацию. Выбор №1 для крупных веб-проектов.',
    tags: ['web', 'mobile'],
    icon: 'devicon-typescript-plain colored',
    codeLang: 'typescript',
    code: `// Interfaces and Generics
interface User {
  id: number;
  username: string;
  isAdmin?: boolean; // Optional property
}

// Generic function
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

const users: User[] = [
  { id: 1, username: "admin", isAdmin: true },
  { id: 2, username: "guest" }
];

const firstUser = getFirstItem(users);
console.log(firstUser.username.toUpperCase());`,
    history: 'Разработан Microsoft (Андерс Хейлсберг) для решения проблем масштабируемости JS.',
    features: [
      'Статическая типизация',
      'Интерфейсы и дженерики',
      'Компилируется в чистый JavaScript',
      'Отличная поддержка в IDE'
    ],
    links: [
      { name: 'TypeScript Lang', url: 'https://www.typescriptlang.org/' },
      { name: 'Total TypeScript', url: 'https://www.totaltypescript.com/' }
    ]
  },
  {
    id: 'swift',
    name: 'Swift',
    year: '2014',
    description: 'Язык от Apple для создания приложений под iOS, macOS и watchOS. Быстрый и безопасный.',
    tags: ['mobile', 'system'],
    icon: 'devicon-swift-plain colored',
    codeLang: 'swift',
    code: `// Optionals and Enum
enum NetworkState {
    case loading, success(String), error(Int)
}

func handleState(_ state: NetworkState) {
    switch state {
    case .loading:
        print("Waiting...")
    case .success(let data):
        print("Received: \(data)")
    case .error(let code):
        print("Error code: \(code)")
    }
}

// Guard statement for safety
func greet(person: String?) {
    guard let name = person else {
        print("No name provided")
        return
    }
    print("Hello, \(name)!")
}`,
    history: 'Создан Apple на замену Objective-C. Стал открытым исходным кодом в 2015 году.',
    features: [
      'Безопасность типов (Optionals)',
      'Высокая производительность',
      'Лаконичный синтаксис',
      'Playgrounds для обучения'
    ],
    links: [
      { name: 'Swift.org', url: 'https://www.swift.org/' },
      { name: 'Hacking with Swift', url: 'https://www.hackingwithswift.com/' }
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    year: '2011',
    description: 'Современный язык для JVM. Официальный язык разработки под Android от Google.',
    tags: ['mobile', 'web', 'enterprise'],
    icon: 'devicon-kotlin-plain colored',
    codeLang: 'kotlin',
    code: `// Data Class and Null Safety
data class User(val name: String, val email: String?)

fun main() {
    val users = listOf(
        User("Alex", "alex@mail.com"),
        User("Max", null) // Email can be null
    )

    // Safe call operator ?. and Elvis operator ?:
    for (user in users) {
        val emailLength = user.email?.length ?: 0
        println("\${user.name}'s email length: $emailLength")
    }
    
    // Extension function
    fun String.isEmail() = this.contains("@")
}`,
    history: 'Разработан компанией JetBrains (Санкт-Петербург). Полностью совместим с Java.',
    features: [
      'Null-safety (защита от null ошибок)',
      'Лаконичность (Data Classes)',
      'Корутины для асинхронности',
      'Расширения (Extensions)'
    ],
    links: [
      { name: 'Kotlin Lang', url: 'https://kotlinlang.org/' },
      { name: 'Android Developers', url: 'https://developer.android.com/kotlin' }
    ]
  },
  {
    id: 'go',
    name: 'Go',
    year: '2009',
    description: 'Язык от Google. Идеален для высоконагруженных систем, микросервисов и облачных технологий.',
    tags: ['system', 'web', 'enterprise'],
    icon: 'devicon-go-original-wordmark colored',
    codeLang: 'go',
    code: `package main

import ("fmt"; "time")

// Concurrency with Goroutines and Channels
func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("Worker %d processing job %d\n", id, j)
        time.Sleep(time.Millisecond * 100)
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)

    // Start 3 workers
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }
    
    // Send jobs
    for j := 1; j <= 5; j++ { jobs <- j }
    close(jobs)
}`,
    history: 'Создан в Google (Роб Пайк, Кен Томпсон) для решения проблем разработки больших систем.',
    features: [
      'Горутины (легковесные потоки)',
      'Быстрая компиляция',
      'Встроенный сборщик мусора',
      'Простота (мало ключевых слов)'
    ],
    links: [
      { name: 'Go.dev', url: 'https://go.dev/' },
      { name: 'Go by Example', url: 'https://gobyexample.com/' }
    ]
  },
  {
    id: 'rust',
    name: 'Rust',
    year: '2010',
    description: 'Системный язык, гарантирующий безопасность памяти без сборщика мусора. Любимый язык разработчиков.',
    tags: ['system', 'embedded', 'web'],
    icon: 'devicon-rust-plain colored',
    codeLang: 'rust',
    code: `// Ownership and Pattern Matching
enum Status {
    Active,
    Inactive,
}

fn check_status(status: Status) -> &'static str {
    match status {
        Status::Active => "System is running",
        Status::Inactive => "System is down",
    }
}

fn main() {
    let s1 = String::from("Hello");
    // Ownership moves from s1 to s2
    let s2 = s1; 
    
    // println!("{}", s1); // This would cause a compile error!
    println!("Owned by s2: {}", s2);
    
    let result = check_status(Status::Active);
    println!("{}", result);
}`,
    history: 'Проект Mozilla Research. Создан Грейдоном Хором. Фокус на безопасности и скорости.',
    features: [
      'Модель владения (Ownership)',
      'Отсутствие Data Races',
      'Нулевая стоимость абстракций',
      'Отличный пакетный менеджер (Cargo)'
    ],
    links: [
      { name: 'Rust Lang', url: 'https://www.rust-lang.org/' },
      { name: 'Rust Book', url: 'https://doc.rust-lang.org/book/' }
    ]
  },
  {
    id: 'ruby',
    name: 'Ruby',
    year: '1995',
    description: 'Динамический язык, ориентированный на простоту и продуктивность. Известен фреймворком Ruby on Rails.',
    tags: ['web', 'scripting'],
    icon: 'devicon-ruby-plain colored',
    codeLang: 'ruby',
    code: `# Blocks and Metaprogramming
class Greeter
  attr_accessor :name
  
  def initialize(name = "World")
    @name = name
  end

  def say_hi
    puts "Hi #{@name}!"
  end
end

# Iterating with blocks
["Alice", "Bob", "Charlie"].each do |person|
  greeter = Greeter.new(person)
  greeter.say_hi
end

# Dynamic method modification
5.times { print "O " } # Output: O O O O O`,
    history: 'Создан Юкихиро Мацумото (Matz) в Японии. Цель: сделать программистов счастливыми.',
    features: [
      'Все является объектом',
      'Элегантный синтаксис',
      'Мощные возможности метапрограммирования',
      'Фреймворк Ruby on Rails'
    ],
    links: [
      { name: 'Ruby Lang', url: 'https://www.ruby-lang.org/ru/' },
      { name: 'Rails', url: 'https://rubyonrails.org/' }
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    year: '1974',
    description: 'Язык структурированных запросов. Используется для работы с базами данных (MySQL, PostgreSQL).',
    tags: ['data', 'enterprise'],
    icon: 'devicon-mysql-plain colored',
    codeLang: 'sql',
    code: `-- Complex Data Analysis Query
SELECT 
    d.department_name,
    COUNT(e.employee_id) as emp_count,
    AVG(e.salary) as avg_salary
FROM employees e
JOIN departments d ON e.department_id = d.id
WHERE e.hire_date > '2020-01-01'
GROUP BY d.department_name
HAVING avg_salary > 50000
ORDER BY avg_salary DESC;`,
    history: 'Разработан в IBM. Стал стандартом ANSI в 1986 году.',
    features: [
      'Декларативный стиль (говорим "что", а не "как")',
      'Работа с огромными массивами данных',
      'Транзакции (ACID)',
      'Универсальность для разных СУБД'
    ],
    links: [
      { name: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' }
    ]
  },
  {
    id: 'r',
    name: 'R',
    year: '1993',
    description: 'Язык для статистической обработки данных и графики. Популярен среди ученых и аналитиков.',
    tags: ['data', 'scientific'],
    icon: 'devicon-r-original colored',
    codeLang: 'r',
    code: `# Data Visualization and Stats
library(ggplot2)

# Create a data frame
data <- data.frame(
  group = c("A", "B", "C", "A", "B", "C"),
  value = c(10, 15, 20, 12, 18, 22)
)

# Statistical Summary
summary_stats <- summary(data$value)
print(summary_stats)

# Plotting
ggplot(data, aes(x=group, y=value, fill=group)) +
  geom_bar(stat="identity") +
  ggtitle("Results by Group")`,
    history: 'Создан Россом Айхакой и Робертом Джентльменом. Основан на языке S.',
    features: [
      'Векторные вычисления',
      'Лучшие инструменты визуализации',
      'Огромный репозиторий пакетов (CRAN)',
      'Интеграция с C++'
    ],
    links: [
      { name: 'R Project', url: 'https://www.r-project.org/' },
      { name: 'RStudio', url: 'https://posit.co/' }
    ]
  },
  {
    id: 'dart',
    name: 'Dart',
    year: '2011',
    description: 'Клиент-оптимизированный язык от Google. Основа фреймворка Flutter для кроссплатформенной разработки.',
    tags: ['mobile', 'web'],
    icon: 'devicon-dart-plain colored',
    codeLang: 'dart',
    code: `// Async Streams and OOP
import 'dart:async';

class Counter {
  int _count = 0;
  
  // Asynchronous stream generator
  Stream<int> countStream(int max) async* {
    for (int i = 1; i <= max; i++) {
      await Future.delayed(Duration(seconds: 1));
      _count = i;
      yield i;
    }
  }
}

void main() async {
  final counter = Counter();
  
  await for (int val in counter.countStream(3)) {
    print('Current count: $val');
  }
  print('Done!');
}`,
    history: 'Создан Google как замена JavaScript, но нашел свое призвание во Flutter.',
    features: [
      'Компиляция в нативный код (AOT)',
      'Hot Reload (быстрая разработка)',
      'Сильная типизация',
      'Синтаксис в стиле C'
    ],
    links: [
      { name: 'Dart.dev', url: 'https://dart.dev/' },
      { name: 'Flutter', url: 'https://flutter.dev/' }
    ]
  },
  {
    id: 'scala',
    name: 'Scala',
    year: '2004',
    description: 'Сочетает объектно-ориентированное и функциональное программирование. Работает на JVM. Используется в Big Data (Spark).',
    tags: ['data', 'enterprise', 'functional'],
    icon: 'devicon-scala-plain colored',
    codeLang: 'scala',
    code: `// Pattern Matching and Functional Style
case class Person(name: String, age: Int)

object Main extends App {
  val people = List(
    Person("Alice", 25),
    Person("Bob", 17),
    Person("Charlie", 30)
  )

  // Functional chain: filter -> map
  val adults = people
    .filter(_.age >= 18)
    .map(_.name.toUpperCase)

  // Pattern matching
  def describe(p: Person): String = p match {
    case Person(n, a) if a < 18 => s"$n is a minor"
    case Person(n, _) => s"$n is an adult"
  }
  
  println(adults)
}`,
    history: 'Разработан Мартином Одерски в EPFL. Название означает "Scalable Language".',
    features: [
      'Совместимость с Java',
      'Мощная система типов',
      'Неизменяемость по умолчанию',
      'Акторы (Akka) для конкурентности'
    ],
    links: [
      { name: 'Scala Lang', url: 'https://www.scala-lang.org/' },
      { name: 'Apache Spark', url: 'https://spark.apache.org/' }
    ]
  },
  {
    id: 'perl',
    name: 'Perl',
    year: '1987',
    description: 'Король скриптов и обработки текста. Часто используется системными администраторами и в биоинформатике.',
    tags: ['scripting', 'system'],
    icon: 'devicon-perl-plain colored',
    codeLang: 'perl',
    code: `#!/usr/bin/perl
use strict;
use warnings;

# Regex Power: Extract emails from text
my $text = "Contact us at support@site.com or sales@site.org";
my @emails = $text =~ /([\\w\\.]+@[\\w\\.]+\\.\\w+)/g;

print "Found emails:\\n";
foreach my $email (@emails) {
    print "- $email\\n";
}

# Hash map usage
my %capitals = ('France' => 'Paris', 'Germany' => 'Berlin');
print "Capital of France: $capitals{'France'}\\n";`,
    history: 'Ларри Уолл создал Perl для облегчения обработки отчетов. Известен как "швейцарский нож" интернета.',
    features: [
      'Мощнейшие регулярные выражения',
      'CPAN (огромный архив модулей)',
      'Гибкий синтаксис (TIMTOWTDI)',
      'Работа с текстом'
    ],
    links: [
      { name: 'Perl.org', url: 'https://www.perl.org/' },
      { name: 'Perl Monks', url: 'https://www.perlmonks.org/' }
    ]
  },
  {
    id: 'haskell',
    name: 'Haskell',
    year: '1990',
    description: 'Чисто функциональный язык со статической типизацией. Используется в академической среде и финансовых системах.',
    tags: ['functional', 'scientific'],
    icon: 'devicon-haskell-plain colored',
    codeLang: 'haskell',
    code: `-- Recursion and Pattern Matching

-- QuickSort implementation
quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) = 
    let smallerSorted = quicksort [a | a <- xs, a <= x]
        biggerSorted = quicksort [a | a <- xs, a > x]
    in  smallerSorted ++ [x] ++ biggerSorted

main = print (quicksort [10, 2, 5, 3, 1, 6, 7, 4, 2, 3])`,
    history: 'Назван в честь логика Хаскелла Карри. Стандартизирован в 1990 году комитетом ученых.',
    features: [
      'Ленивые вычисления',
      'Отсутствие побочных эффектов',
      'Вывод типов',
      'Высокая надежность кода'
    ],
    links: [
      { name: 'Haskell.org', url: 'https://www.haskell.org/' },
      { name: 'Learn You a Haskell', url: 'http://learnyouahaskell.com/' }
    ]
  },
  {
    id: 'lua',
    name: 'Lua',
    year: '1993',
    description: 'Легковесный скриптовый язык. Стандарт де-факто в разработке игр (Roblox, WoW, GMod).',
    tags: ['game', 'scripting', 'embedded'],
    icon: 'devicon-lua-plain colored',
    codeLang: 'lua',
    code: `-- Tables (the only data structure)
player = {
  health = 100,
  pos = {x = 10, y = 20},
  say = function(msg) print("Player says: " .. msg) end
}

-- Metatables for OOP-like behavior
function createEnemy(name)
  local enemy = {name = name}
  setmetatable(enemy, {
    __tostring = function(e) return "Enemy: " .. e.name end
  })
  return enemy
end

player.say("Hello Lua!")
print(createEnemy("Orc"))`,
    history: 'Разработан в Бразилии (PUC-Rio). Lua означает "Луна" на португальском.',
    features: [
      'Очень компактный и быстрый',
      'Легко встраивается в C/C++',
      'Таблицы как универсальная структура',
      'Сборщик мусора'
    ],
    links: [
      { name: 'Lua.org', url: 'https://www.lua.org/' },
      { name: 'Roblox Dev', url: 'https://create.roblox.com/' }
    ]
  },
  {
    id: 'matlab',
    name: 'MATLAB',
    year: '1984',
    description: 'Язык технических вычислений. Используется инженерами для моделирования, обработки сигналов и математики.',
    tags: ['scientific', 'data'],
    icon: 'devicon-matlab-plain colored',
    codeLang: 'matlab',
    code: `% Matrix Operations and Plotting
t = 0:0.01:2*pi;     % Vector from 0 to 2pi
y = sin(t);          % Sine calculation

% Matrix multiplication
A = [1 2; 3 4];
B = inv(A);          % Inverse matrix

% Creating a plot
figure;
plot(t, y, 'LineWidth', 2);
title('Sine Wave Analysis');
grid on;
disp('Matrix Inverse calculated');`,
    history: 'Создан Кливом Молером. Изначально предназначался для облегчения доступа к библиотекам LINPACK.',
    features: [
      'Матрица — основной тип данных',
      'Мощные тулбоксы (Simulink)',
      'Визуализация данных',
      'Используется в NASA и автопроме'
    ],
    links: [
      { name: 'MathWorks', url: 'https://www.mathworks.com/' },
      { name: 'Octave (Free clone)', url: 'https://octave.org/' }
    ]
  },
  {
    id: 'julia',
    name: 'Julia',
    year: '2012',
    description: 'Язык для высокопроизводительных вычислений. Быстрый как C, простой как Python.',
    tags: ['scientific', 'data', 'ai'],
    icon: 'devicon-julia-plain colored',
    codeLang: 'julia',
    code: `# Multiple Dispatch example
struct Circle
    radius::Float64
end

struct Rectangle
    width::Float64
    height::Float64
end

# Same function name, different behavior based on type
area(c::Circle) = 3.14 * c.radius^2
area(r::Rectangle) = r.width * r.height

c = Circle(5.0)
r = Rectangle(4.0, 6.0)

println("Area of circle: ", area(c))
println("Matrix calc: ", rand(3,3) * rand(3,3))`,
    history: 'Создан в MIT. Цель: объединить скорость C, динамику Ruby и математику MATLAB.',
    features: [
      'Множественная диспетчеризация',
      'Скорость близкая к C',
      'Встроенная поддержка параллелизма',
      'Прямой вызов библиотек C'
    ],
    links: [
      { name: 'Julia Lang', url: 'https://julialang.org/' },
      { name: 'Julia Academy', url: 'https://juliaacademy.com/' }
    ]
  },
  {
    id: 'groovy',
    name: 'Groovy',
    year: '2003',
    description: 'Динамический язык для JVM. Часто используется в Jenkins (CI/CD) и Gradle (сборка Android приложений).',
    tags: ['scripting', 'enterprise'],
    icon: 'devicon-groovy-plain colored',
    codeLang: 'groovy',
    code: `// Closures and Builders
def list = [1, 2, 3, 4, 5]

// Functional style with closures
def doubled = list.collect { it * 2 }
println doubled

// JSON Builder example
import groovy.json.JsonBuilder

def builder = new JsonBuilder()
builder.person {
    name "John"
    age 30
    skills "Java", "Groovy"
}

println builder.toPrettyString()`,
    history: 'Вдохновлен Java, Python и Smalltalk. Официальный язык для написания скриптов сборки Gradle.',
    features: [
      'Синтаксический сахар для Java',
      'Динамическая типизация',
      'Мощная работа с коллекциями',
      'Интеграция с Java-кодом'
    ],
    links: [
      { name: 'Apache Groovy', url: 'https://groovy-lang.org/' },
      { name: 'Gradle', url: 'https://gradle.org/' }
    ]
  },
  {
    id: 'powershell',
    name: 'PowerShell',
    year: '2006',
    description: 'Командная оболочка и скриптовый язык от Microsoft. Главный инструмент системных администраторов Windows.',
    tags: ['scripting', 'system'],
    icon: 'devicon-powershell-plain colored',
    codeLang: 'powershell',
    code: `# System Administration Task
$Path = "C:\\Logs"

# Pipeline usage: Get files -> Filter -> Sort -> Select
Get-ChildItem -Path $Path -Filter *.log |
    Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-30) } |
    Sort-Object Length -Descending |
    Select-Object Name, @{N='SizeKB';E={$_.Length / 1KB}} |
    ForEach-Object {
        Write-Host "Found old log: $($_.Name)" -ForegroundColor Yellow
    }`,
    history: 'Разработан Джеффри Сновером. Заменил старую командную строку cmd.exe.',
    features: [
      'Объектно-ориентированный пайплайн',
      'Интеграция с .NET',
      'Удаленное управление (Remoting)',
      'Кроссплатформенность (PowerShell Core)'
    ],
    links: [
      { name: 'MS Docs', url: 'https://learn.microsoft.com/powershell/' },
      { name: 'PowerShell Gallery', url: 'https://www.powershellgallery.com/' }
    ]
  },
  {
    id: 'assembly',
    name: 'Assembly',
    year: '1949',
    description: 'Язык низкого уровня. Прямые команды процессору. Используется в драйверах, вирусах и системах реального времени.',
    tags: ['system', 'embedded'],
    icon: 'devicon-gcc-plain colored',
    codeLang: 'nasm',
    code: `; x86 Assembly: Sum of two numbers
section .data
    num1 dd 10
    num2 dd 20
    res  dd 0

section .text
    global _start

_start:
    mov eax, [num1]  ; Load num1 into EAX register
    add eax, [num2]  ; Add num2 to EAX
    mov [res], eax   ; Store result in memory
    
    ; Exit program (Linux syscall)
    mov eax, 1       ; Syscall number for exit
    xor ebx, ebx     ; Return code 0
    int 0x80         ; Interrupt kernel`,
    history: 'Самый старый тип языков 2-го поколения. Код зависит от архитектуры процессора (x86, ARM).',
    features: [
      'Полный контроль над железом',
      'Максимальная производительность',
      'Работа с регистрами и памятью',
      'Отсутствие переменных (только адреса)'
    ],
    links: [
      { name: 'NASM', url: 'https://www.nasm.us/' },
      { name: 'x86 Instruction Set', url: 'https://www.felixcloutier.com/x86/' }
    ]
  },
  {
    id: 'objectivec',
    name: 'Objective-C',
    year: '1984',
    description: 'Предшественник Swift. Язык, на котором была построена вся экосистема Apple до 2014 года.',
    tags: ['mobile', 'system'],
    icon: 'devicon-objectivec-plain colored',
    codeLang: 'objectivec',
    code: `// Class Interface and Implementation
#import <Foundation/Foundation.h>

@interface Person : NSObject
@property NSString *name;
- (void)sayHello;
@end

@implementation Person
- (void)sayHello {
    NSLog(@"Hello, my name is %@", self.name);
}
@end

int main() {
    @autoreleasepool {
        Person *person = [[Person alloc] init];
        [person setName:@"Steve"];
        [person sayHello]; // Message passing syntax
    }
    return 0;
}`,
    history: 'Надстройка над C, добавляющая ООП в стиле Smalltalk. Лицензирован NeXT (компанией Стива Джобса).',
    features: [
      'Динамическая отправка сообщений',
      'Совместимость с C и C++',
      'Управление памятью (ARC)',
      'Используется в старых iOS проектах'
    ],
    links: [
      { name: 'Apple Archives', url: 'https://developer.apple.com/library/archive/' },
      { name: 'Obj-C Guide', url: 'https://rypress.com/tutorials/objective-c/' }
    ]
  }
];