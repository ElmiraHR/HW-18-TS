// Создаем объект типа AdminUser
var adminUser = {
    name: "Alice",
    email: "alice@example.com",
    permissions: ["read", "write", "delete"]
};
console.log("Задание 1: Объединение и пересечение типов");
console.log(adminUser); // Выводим объект AdminUser
console.log("\n");
// Создаем объект типа Car
var myCar = {
    make: "Tesla",
    model: "Model 6",
    engine: {
        type: "Electric",
        horsepower: 1283
    },
    year: 2022 // Опциональное поле
};
// Функция для вывода информации о машине
function displayCarInfo(car) {
    console.log("Make: ".concat(car.make));
    console.log("Model: ".concat(car.model));
    console.log("Engine Type: ".concat(car.engine.type));
    console.log("Horsepower: ".concat(car.engine.horsepower));
    if (car.year) {
        console.log("Year: ".concat(car.year));
    }
}
console.log("Задание 2: Вложенные объекты и опциональные поля");
displayCarInfo(myCar); // Выводим информацию о машине
console.log("\n");
// Интерфейс для функции calculateDiscount
function calculateDiscount(product, discount) {
    return product.price - (product.price * (discount / 100));
}
// Пример использования функции
var product = { name: "Laptop", price: 1000 };
var discountedPrice = calculateDiscount(product, 10); // 10% скидка
console.log("Задание 3: Интерфейс для функции с объектом");
console.log("New price for ".concat(product.name, ": $").concat(discountedPrice));
console.log("\n");
// Создаем массив объектов Employee
var employees = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Bob", salary: 70000 }
];
// Функция, которая возвращает массив зарплат сотрудников
function getSalaries(employeeArray) {
    return employeeArray.map(function (employee) { return employee.salary; });
}
console.log("Задание 4: Массив объектов и функции");
var salaries = getSalaries(employees);
console.log("Salaries:", salaries);
console.log("\n");
// Создаем объект student типа Student
var student = {
    firstName: "Alice",
    lastName: "Johnson",
    grade: 90
};
// Функция для вывода полного имени студента и его оценки
function displayStudentInfo(student) {
    console.log("Student: ".concat(student.firstName, " ").concat(student.lastName));
    console.log("Grade: ".concat(student.grade));
}
console.log("Задание 5: Наследование интерфейсов и работа с объектами");
displayStudentInfo(student); // Выводим информацию о студенте
console.log("\n");
// Задание 6: Интерфейс для функции с несколькими параметрами
// Функция для объединения двух строк
function concatStrings(str1, str2) {
    return str1 + str2;
}
// Пример использования функции
var result = concatStrings("Hello, ", "World!");
console.log("Задание 6: Интерфейс для функции с несколькими параметрами");
console.log(result); // "Hello, World!"
