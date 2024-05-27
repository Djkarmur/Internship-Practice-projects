class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
       introduce(){
            console.log(`the person is: ${this.name} with age ${this.age}`);
        }
    
};

class student extends Person{
    constructor(name,age,id){
        super(name,age);
        this.id=id;
    }
   
     introduce(){
        console.log(`the id is:${this.id}`);
    }

};

let student1=new student("ram",31,51);
student1.introduce();
let person1=new Person("ramesh",21);
person1.introduce();
