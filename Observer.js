class Subject {
  constructor() {
    this._observers = new Set();
    this.text = '안녕하세요, 옵저버 여러분!';
  }
  registerObserver(observer) {
    this._observers.add(observer);
  }
  notifyObservers() {
    this._observers.forEach((observer) => observer.update(this.text));
  }
  removeObserver(observer) {
    this._observers.delete(observer);
  }
  setState(text) {
    this.text = text;
    this.notifyObservers();
  }
  getState() {
    console.log(this.text);
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(text) {
    this.text = text;
    this.display();
  }
  display() {
    console.log(`${this.name} : ${this.text}`);
  }
}

const subject = new Subject();

const mouse = new Observer('mouse');
const duck = new Observer('duck');
const cat = new Observer('cat');

subject.getState();

subject.registerObserver(mouse);
subject.registerObserver(duck);
subject.registerObserver(cat);

subject.setState('[알림] cat이 새로 들어왔습니다. 환영해주세요.👋');

subject.removeObserver(mouse);

subject.setState('[알림] mouse가 떠났네요.😢');
