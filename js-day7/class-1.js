// 클래스 - ES6에서 지원하게 됨
// 리액트 - 양이 늘어나더라도 복잡도는 증가하지 않는...
class Car {
// 생성자 함수에서 초기화 가능하다
// 공통분모: 전변 초기화를 담당한다 - 생성자 함수가
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
  }
  // 사용자 정의 함수를 가질 수 있다. -> 제공되는 함수가 있다. - window, document.write()
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
