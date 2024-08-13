{
console.log("javascript conditions");

let num1 =10;
let num2=5;

//if (num1 > num2){
  //  console.log("num1 is greater than num2")
//}else{
  //  console.log("num1 is not greater than num2")
//}

//num1 > num2 ? console.log(`${num1} is greater than ${num2}`): console.log(`${num1}is not greater than num2`)

//if else-if

if(num1 > num2){
    console.log(`${num1} greater than ${num2}`);
}else if (num1 == num2) {
    console.log("Both are equal...");
}else{
    console.log(`${num1} num1 less than ${num2}`);
}

console.log("\n\n\n\n");

let day= 10;

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    default:
        console.log("invalid");
        break;
}
}

//nested loop
{
    console.log("\n\n\n\n\n\n");
    let str='';

    for(let i=0; i < 10; i++){
        for(j = 0; j<= i; j++){
            str=str+'*';
        }
        str=str+'\n';
    }
    console.log(str);
}

//for loop

for(i=0; i<10; i++){
    console.log("hey")
}

{
//while loop
let i = 0;
while( i < 10){
    console.log("hellooo");
    i++;
}
}

{
    let j=0;
    do{
        console.log("heeeyyyyy");
        j++;
    }while(j<10)
}

