//closure ( A function along with its environment)

function outerFunction () {
    let outerVariable = "Iam from outerfumnction";

    function innerFunction() {
        
        function innerFunction1(){
            return outerVariable;
        }
        return innerFunction1;
    }
    return innerFunction;
}

let result = outerFunction();
console.log("result :",result);

let result1 = result();
console.log("result1 =",result1);

let result2 = result1();
console.log("result2:",result2);

//dom methods

{
    console.log("\n\n\n\n");

    console.log("Dom methods");

    let text = document.getElementById('text');
    console.log("text:",text);
    console.log("text content:",text.textContent);
    text.textContent = "adding text from javascript";

    let container = document.getElementsByClassName('container');
    console.log('container:',container)

    console.log("container[0]:",container[0]);
    console.log("container[1]:",container[1]);

    let paragraph = document.getElementsByTagName('p');
    console.log("paragraph:",paragraph);

    console.log("paragraph[0]:",paragraph[0]);
    console.log("paragraph[1]:",paragraph[1]);

   // let services = document.querySelector('.container #box ul li#service');
    //console.log("services :",services);
}

// {
//     //event handler
//     console.log("\n\n\n\n\n");

//     let btn = document.getElementById('btn');
//     console.log("btn :", btn);

//     let inp = document.getElementById('inp');
//     console.log("inp:",inp);

//     btn.addEventListener('click', function() {
//         console.log("Button clicked..");
//     });

    
// }


{
    //math functions

    console.log("\n\n\n\n");

    console.log(Math.sqrt(25)); //squareroot of 25
    console.log(Math.round(14.5));//round value of 14.5
    console.log(Math.ceil(12.5));//give next value 
    console.log(Math.floor(10.7));// doesn't consider the decimel


}

{
    console.log("\n\n\n\n");
    //timer functions

    // setTimeout(function () {
    //     console.log("from setTimeout");
    // });

    // setInterval(function (){
    //     console.log("from setInterval")
    // })
}

// {
//     function counter(currentvalue, limit) {
//         if(currentvalue > limit) {
//             return;
//         }
//         console.log(currentvalue);

//         //counter(++currentvalue,limit); //recursive call
//         setTimeout(()=> counter(++currentvalue,limit),2000)

//     }
//     counter(0,10);
// }

// {
//     //program to show currrent time
//     function putZero(sec){
//         return sec<10? "0"+sec:sec;
//     }

//     function show() {
//         var time = document.getElementById('time');
//         var dt = new Date();
//         var hours = dt.getHours();
//         // if(hours > 12){
//         //     ampm = "pm";
//         // }else{
//         //     ampm = "am";
//         // }
//         var ampm = hours>12?"pm":"am";

//         time.innerHTML = putZero(hours%12)+ ":" + putZero(dt.getMinutes())+ ":" + putZero(dt.getSeconds()) +ampm;

//         setTimeout(function () {
//             show();
//         },1000);

//     }
//     show();
// }

{
    console.log("\n\n\n\n");

    //spread operator

    let arr =[1,2,3,4,5];
    console.log("array:",arr);

    let array1 = [...arr,6]; //new elemet can add here(6)
    console.log("array1 :",array1);

    let obj = {
        name : "myname",
        email : "abc@gmail.com",
        country : "india",
        
    };

console.log("object :",obj);

let obj1 = {...obj,mark : 50}; //new element add here(mark:50)
console.log("object1 :",obj1);
}

{
    console.log("\n\n\n\n");

    //Destructuring

    let arr = [1,2,3,4,5];
    console.log("array:",arr);

    let [a,b,c,d,e] = arr;
    console.log("a :",a);
    console.log("b :",b);
    console.log("c :",c);
    console.log("d :",d);

    let obj = {
        name : "myname",
        email : "abc@gmail.com",
        country : "india",
    };
    console.log("obj : ",obj);

    let {email, country,name} = obj;
    console.log("name :",name);
    console.log("email :",email);
    console.log("country :",country);

    {
        //nested destructuring

        let matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
        ];
        console.log("matrix :",matrix);

        let [row1,row2,[g,h,i]] = matrix;
        console.log("row1",row1);
        console.log("row2",row2);

        let [a,b,c] = row1;
        console.log("a",a);
        console.log("b",b);
        console.log("c",c);
    }
}

{
    console.log("\n\n\n\n")

    //array methods

    let arr = [
        {
            name : "john",
            email : "john@gmail.com",
            age : 16,
            mark : 30
        },
        {
            name : "jack",
            email : "jack@gmail.com",
            age : 25,
            mark : 41
        },
        {
            name : "paul",
            email : "paul@gmail.com",
            age : 18,
            mark : 23
        }
    ];

    //foreach

    console.log("foreach");
    let forechresult = arr.forEach((element) =>{
        console.log("element : ",element);
        return element.age == 25;
    });
    console.log("foreach result :",forechresult);

    console.log("\n\n\n\n");

    //find
    console.log("find");
    let findvalue = arr.find ((element) =>{
        console.log("element :",element);
        return element.age ==25;

    });
    console.log("find value :",findvalue);

    console.log("\n\n\n\n\n");
     //map

     console.log("map");
     let mappedvalues = arr.map((element) =>{
        console.log("elements :",element);
        
        return element.mark + 10;
     });
    
     console.log("mapped values : ",mappedvalues);

     console.log("\n\n\n\n");

     //reduce
     console.log("reduce");
     let sum = arr.reduce((total , element) => {
        return total + element.mark;

     },0);
     console.log("sum :",sum);
}

{
    console.log("\n\n\n\n");
    console.log("this : ",this);//global variable

    let obj = {
        name : "jan",
        age : 40,
        getAge : function () {
            console.log("This : ",this);
            console.log("Age : ",this.age);
        }
    }

    obj.getAge();

    console.log("\n\n\n\n");

    function Greeting(message1, message2) {

        console.log("message 1 : ",message1);
        console.log("message 2 : ",message2);

        console.log("this : ",this);
        console.log("This.name : ",this.name);
        console.log("this.age : ",this.age);

      
    }
    //Greeting("hello","haiii");
   // Greeting.call(obj,"helloo","haiii");
   //Greeting.apply(obj,["Heloo","haiii"]);

   let bindedFunction = Greeting.bind(obj,"hello","haiii");
    console.log("bindedFunction : ",bindedFunction);
    bindedFunction();

    console.log("\n\n\n\n");
    //constructor Function

    function Person(name, age, mark) {

        this.name = name;
        this.age = age;
        this.mark = mark;
        this.greeting = function() {
            console.log(`Hello ${this.name}, You are ${this.age} Years old.....`);

        }
    }
    let person = new Person("john",16,45);
    console.log("person : ",Person);
    person.greeting();

    let person1 = new Person ("jane",30,100);
    console.log("person 1 : ",person1);
    person1.greeting();

    person1.city = "EKM";
    person1.getAge = function() {
        console.log(`Haii..${this.name},your age is ${this.age}`);

    }
    person1.getAge();

    Person.prototype.getMark = function() {
        console.log(`Hii...${this.name} your mark is ${this.mark}`);

    }
    person.getMark()
    person1.getMark();



}
{
    console.log("\n\n\n\n");

    // function animal()
}