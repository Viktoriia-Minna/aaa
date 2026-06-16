const bankAccount = {
  ownerName: "Vika",
  accountNumber: "UA123456789",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    alert(`Рахунок поповнено на ${amount} грн. Поточний баланс: ${this.balance} грн.`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      alert("Недостатньо коштів на рахунку!");
    } else {
      this.balance -= amount;
      alert(`Знято ${amount} грн. Поточний баланс: ${this.balance} грн.`);
    }
  },
};


if (confirm("Хочеш поповнити рахунок? (OK — поповнити, Cancel — зняти)")) {
  const amount = Number(prompt("Введи суму для поповнення:"));
  bankAccount.deposit(amount);
} else {
  const amount = Number(prompt("Введи суму для зняття:"));
  bankAccount.withdraw(amount);
}
// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
    temperature: Number(prompt("Введи температуру в градусах Цельсія:")),
    humidity: Number(prompt("Введи вологість (%):")),
    windSpeed: Number(prompt("Введи швидкість вітру (м/с):")),

    isBelowZero() {
        return this.temperature < 0;
    },
};

if (weather.isBelowZero()) {
    alert("температура нижче 0 градусів Цельсія");
} else {
    alert("температура вище або рівна 0 градусів Цельсія");
}

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 
const user = {
  name: "Vika",
  email: "vika@gmail.com",
  password: "password123",

  login() {
    const enteredEmail = prompt("Введи email:");
    const enteredPassword = prompt("Введи пароль:");

    if (enteredEmail === this.email && enteredPassword === this.password) {
      alert("Логін успішний");
    } else {
      alert("Невірний email або пароль");
    }
  },
};

user.login();

//Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 
const movie = {
  title: "The Shawshank Redemption",
  director: "Frank Darabont",
  year: 1994,
  rating: 9.3,

  isHighlyRated() {
    return this.rating > 8;
  },
};

console.log("Title:", movie.title);
console.log("Director:", movie.director);
console.log("Year:", movie.year);
console.log("Rating:", movie.rating);

if (movie.isHighlyRated()) {
  console.log("The movie is highly rated.");
} else {
  console.log("The movie is not highly rated.");
}

// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const textInput = document.getElementById("textInput");
const changeTextButton = document.getElementById("changeTextButton");

if (textInput && changeTextButton) {
  changeTextButton.addEventListener("click", () => {
    changeTextButton.textContent = textInput.value;
  });
}

const mainImage = document.getElementById("mainImage");
if (mainImage) {
  mainImage.src = "./mops.jpg";
  mainImage.alt = "Опис нового зображення";
}

const myLink = document.getElementById("myLink");
if (myLink) {
  myLink.href = "https://www.example.com";
}
// Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const firstListItem = document.querySelector("#itemList li");
if (firstListItem) {
  firstListItem.textContent = "Новий текст для першого елемента";
}

