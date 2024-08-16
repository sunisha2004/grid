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

{
    //program to show currrent time
    function putZero(sec){
        return sec<10? "0"+sec:sec;
    }

    function show() {
        var time = document.getElementById('time');
        var dt = new Date();
        var hours = dt.getHours();
        // if(hours > 12){
        //     ampm = "pm";
        // }else{
        //     ampm = "am";
        // }
        var ampm = hours>12?"pm":"am";

        time.innerHTML = putZero(hours%12)+ ":" + putZero(dt.getMinutes())+ ":" + putZero(dt.getSeconds()) +ampm;

        setTimeout(function () {
            show();
        },1000);

    }
    show();
}