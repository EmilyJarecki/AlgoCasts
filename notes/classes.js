class Car {
    constructor(name, year){
      this.name = name;
      this.year = year;
    }
    age(){
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  // creating several different object at the same time via constructor
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
  
  console.log(myCar1) // {"name": "Ford", "year": 2014}
  console.log(myCar1.name) // "Ford"
  console.log(myCar1.year) // 2014
  console.log(myCar2) // {"name": "Audi", "year": 2019}
  console.log(myCar2.name) // "Audi"
  console.log(myCar2.year) // 2019
  
  console.log(myCar1.age()) // 9
  console.log(myCar2.age()) // 4
  
  