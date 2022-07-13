// 클래스 - ES6에서 지원하게 됨

class Car {
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}, ${this.emoji}`);
  }
}
// myCar/yourCar는 Car 클래스의 인스턴스이다.
const myCar = new Car("Sonata", "🚗");
const yourCar = new Car("Pride", "🚙");

console.log(myCar);
console.log(yourCar);

const herCar = myCar;

console.log(myCar === yourCar);
console.log(myCar === herCar);
console.log(myCar.emoji, yourCar.name);

yourCar.display();
herCar.display();

const hisCar = {
  name: "싼타페",
  speed: 50
};
