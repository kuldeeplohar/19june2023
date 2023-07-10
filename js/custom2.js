

 var car1= { 
    
    name1:"TATA",
    model:"safari",
    engine:`Diesel`,
    price : 1500000,

 }

let car2= { 
    
    name1:" Hyundai",
    model:" I20",
    engine:` petrol`,
    price :  ' 1000000',
    
    getCar2(){
        console.log(this.name1 + this.model +this.engine+ this.price);
    }
 }

let car3= { 
    
    name1:" Mahindra",
    model:" Thar",
    engine:` petrol`,
    price : ' 1400000',

    getCar3(){
        return this.model+this.name1+this.engine+this.price
    }

 }
 let car4 = { 
    
    name1:" Hyundai",
    model:" verna",
    engine:` petrol`,
    price : ' 1200000',
 }

 console.log(car1.name1);
 console.log(car1.engine);
 console.log(car1.model);
 console.log(car1.price);

 console.log(car2.getCar2())

 console.log(car3.getCar3())

 let x='name1'
 let y="model"
 let z=`engine`

 console.log(car4[x])
 console.log(car4[y])
 console.log(car4[z])
 

 


