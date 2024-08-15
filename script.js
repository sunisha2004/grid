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

{
    //event handler
    console.log("\n\n\n\n\n");

    let btn = document.getElementById('btn');
    console.log("btn :", btn);

    let inp = document.getElementById('inp');
    console.log("inp:",inp);

    btn.addEventListener('click', function() {
        console.log("Button clicked..");
    });

    
}