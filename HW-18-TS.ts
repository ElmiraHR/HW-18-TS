// Задание 1: Объединение и пересечение типов
// Определяем типы Admin и User
type Admin = {
    name: string;        // Имя администратора
    permissions: string[]; // Массив прав доступа
};

type User = {
    name: string;       // Имя пользователя
    email: string;     // Электронная почта пользователя
};

// Объединяем оба типа в AdminUser
type AdminUser = Admin & User;

// Создаем объект типа AdminUser
const adminUser: AdminUser = {
    name: "Alice",
    email: "alice@example.com",
    permissions: ["read", "write", "delete"]
};

console.log("Задание 1: Объединение и пересечение типов");
console.log(adminUser); // Выводим объект AdminUser
console.log("\n");

// Задание 2: Вложенные объекты и опциональные поля
// Создаем объект Car с вложенным объектом engine
type Engine = {
    type: string;       // Тип двигателя
    horsepower: number; // Лошадиные силы
};

type Car = {
    make: string;       // Марка автомобиля
    model: string;      // Модель автомобиля
    engine: Engine;     // Вложенный объект engine
    year?: number;      // Опциональное поле
};

// Создаем объект типа Car
const myCar: Car = {
    make: "Tesla",
    model: "Model 6",
    engine: {
        type: "Electric",
        horsepower: 1283
    },
    year: 2022 // Опциональное поле
};

// Функция для вывода информации о машине
function displayCarInfo(car: Car): void {
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Engine Type: ${car.engine.type}`);
    console.log(`Horsepower: ${car.engine.horsepower}`);
    if (car.year) {
        console.log(`Year: ${car.year}`);
    }
}

console.log("Задание 2: Вложенные объекты и опциональные поля");
displayCarInfo(myCar); // Выводим информацию о машине
console.log("\n");

// Задание 3: Интерфейс для функции с объектом
// Определяем интерфейс для Product
interface Product {
    name: string;   // Имя продукта
    price: number;  // Цена продукта
}

// Интерфейс для функции calculateDiscount
function calculateDiscount(product: Product, discount: number): number {
    return product.price - (product.price * (discount / 100));
}

// Пример использования функции
const product: Product = { name: "Laptop", price: 1000 };
const discountedPrice = calculateDiscount(product, 10); // 10% скидка
console.log("Задание 3: Интерфейс для функции с объектом");
console.log(`New price for ${product.name}: $${discountedPrice}`);
console.log("\n");

// Задание 4: Массив объектов и функции
// Определяем интерфейс для Employee
interface Employee {
    name: string;   // Имя сотрудника
    salary: number; // Зарплата сотрудника
}

// Создаем массив объектов Employee
const employees: Employee[] = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Bob", salary: 70000 }
];

// Функция, которая возвращает массив зарплат сотрудников
function getSalaries(employeeArray: Employee[]): number[] {
    return employeeArray.map(employee => employee.salary);
}

console.log("Задание 4: Массив объектов и функции");
const salaries = getSalaries(employees);
console.log("Salaries:", salaries);
console.log("\n");

// Задание 5: Наследование интерфейсов и работа с объектами
// Определяем интерфейс Person
interface Person {
    firstName: string;  // Имя
    lastName: string;   // Фамилия
}

// Определяем интерфейс Student, который наследует Person
interface Student extends Person {
    grade: number; // Оценка студента
}

// Создаем объект student типа Student
const student: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    grade: 90
};

// Функция для вывода полного имени студента и его оценки
function displayStudentInfo(student: Student): void {
    console.log(`Student: ${student.firstName} ${student.lastName}`);
    console.log(`Grade: ${student.grade}`);
}

console.log("Задание 5: Наследование интерфейсов и работа с объектами");
displayStudentInfo(student); // Выводим информацию о студенте
console.log("\n");

// Задание 6: Интерфейс для функции с несколькими параметрами
// Функция для объединения двух строк
function concatStrings(str1: string, str2: string): string {
    return str1 + str2;
}

// Пример использования функции
const result = concatStrings("Hello, ", "World!");
console.log("Задание 6: Интерфейс для функции с несколькими параметрами");
console.log(result); // "Hello, World!"
