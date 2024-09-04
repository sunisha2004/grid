 const str1 = "today was a beautiful day";
const str2 = "rama killed ravana";
const str3 = "ravana killed by rama";
const str4 =`
Halloo
good girl
is always good
Hai
`;

const regexp1 = /a/;
const result1 = regexp1.test(str1);//check if str1 contains letter "a"
console.log("Result 1:",result1);//True

const regexp2 = /A/i;//i flag used for case insensitive check
const result2 = regexp2.test(str1); //check if str1 contains letter "A" and performs case-insensitive search
console.log("Result 2 :",result2);//True

const regexp3 = /ab/;
const result3 = regexp3.test(str1);//to check if str1 contains 'ab'
console.log("Result 3:",result3);//false

//[] -  represents range
const regexp4 =/[crba]a/;
const result4 = regexp4.test(str1);//check if str1 contains 'c' 'r' 'b' or 'a' before 'a'
console.log("Result 4 :",result4)//false

const regexp5 = /[a-z]a/i;
const result5 = regexp5.test(str1);//check if str1 contains any letters between 'a-z'before a also check case insensitive
console.log("Result 5:",result5);//True

const regexp6 = /[a-z0-9]a/i;
const result6 = regexp6.test(str1);//check if str1 contains any letters between 'a-z' or any digit between '0-9'before the letter 'a',also check case insensitive
console.log("Result 6:",result6);//true

//^ represents for the start of a string
const regexp7 = /^rat/i;
const result7 = regexp7.test(str2);//check if str2 start with 'rat'
console.log("Result 7:",result7);// false

//$ - represents the end of a string
const regexp8 = /fish$/i;
const result8 = regexp8.test(str2); //check if strt2 is end with 'fish'
console.log("Result 8 :",result8); //false

const regexp9 = /^good/im; //m-flag used for multiline matching
const result9 = regexp9.test(str4);//check str4 start with good
console.log("Result 9:",result9);//True

const regexp10 = /good$/im; //m-flag used for multiline matching
const result10 = regexp10.test(str4);//check str4 end with good
console.log("Result 10:",result10);//True

const regexp11 = /rama?/im; //word or character before '?' is optional for matching
const result11 = regexp11.test(str3); //it matches both 'ram' and 'rama' , 'a' is optional
console.log("Result 11:",result11);//True

const regexp12 = /ra(ma)?/im; //'()' - represents group
const result12 = regexp12.test(str3); //it matches both rama and ra,
console.log("Result 12:",result12);//true

const regexp13 = /rama*$/i;//the letter before '*' can occur multiple times in a string.
const result13 = regexp13.test(str3); //it matches both rama and ramaa,
console.log("Result 13:",result13);//true

const regexp14 = /rama+$/i;//The letter before '+' also can occur multiple times in a string,but atleast one occurance is required
const result14 = regexp14.test(str3); //here it matches rama,ramaa..
console.log("Result 14:",result14);//false

const regexp15 = /rama.$/i;//Any character can occur after rama , '.' represents any type of character
const result15 = regexp15.test(str3);//it matches rama,rama1,ramab....any character after rama
console.log("Result 15:",result15);//false

const regexp16 = /rama.*$/i;//
const result16 = regexp16.test(str3); //it matches rama,ramas,..since due to '*' multiple character are matched 
console.log("Result 16:",result16);//true

const str5 = "Hello";

const regexp17 = /[kjm]/i;
const result17 = regexp17.test(str5);//if there is a 'k' or 'j' or 'm' then it will be true
console.log("Result 17:",result17);//false

const regexp18 = /[^kjm]/i;
const result18 = regexp18.test(str5);//if there is no 'k' or 'j' or 'm' it will be true
console.log("Result 18:",result18);//true

const regexp19 = /[H+]/i;//Atleast one "H" is required
const result19 = regexp19.test(str5);
console.log("Result19:",result19); //True

const regexp20 = /o$/i; //string ends with 'o'
const result20 = regexp20.test(str5);
console.log("Result 20 :",result20); //True

const regexp21 = /o?$/i; // 'o' in string is optional
const result21 = regexp21.test(str5);
console.log("Result 21:",result21); //True

const regexp22 = /o+$/i; // Atleast one 'o' is required in the string ending
const result22 = regexp22.test(str5);
console.log("Result 22:",result22); //True


//{} - indicates the numbeer of characters, a{2} means "aa",ie 2a is required
const regexp23 =/L{2}o$/i;
const result23 = regexp23.test(str5); // 'o' should be exactly after 2 L's
console.log("Result 23:",result23); //True

const regexp24 = /L{2,4}o$/i; // o should be exactly after between 2 to 4 L's
const result24 = regexp24.test(str5);
console.log("Result 24:",result24) //True

const regexp25 = /HeL{2,4}o$/i; // o should be exactly after between 2 to 4 L's and 'o' is required
const result25 = regexp25.test(str5);
console.log("Result 25:",result25) //True

const regexp26 = /HeL{2,}o$/i; // 2 or more 'L' is required
const result26 = regexp26.test(str5);
console.log("Result 26:",result26) //True

// \ - indicates escape character,used for matching any characters,which has special meaning
const regexp27 = /\d/i; //if there is any digits,it will be true,else it will be false
const result27 = regexp27.test(str5);
console.log("Result 27 :",result27) //false

const regexp28 = /\D/i;
const result28 = regexp28.test(str5);
console.log("Result 28:",result28);


const regexp29 = /./i;
const result29 = regexp29.test(str5);
console.log("Result 29:",result29);

const regexp30 = /\./i;
const result30 = regexp30.test(str5);
console.log("Result 30: ",result30)

function date(){
let value = document.getElementById('date').value;
const regexp31 = /^\d{1,2}-\d{1,2}-\d{4}$/i && /^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i;

const result31= regexp31.test(value);
if(result31){
    document.getElementById('result').innerHTML="valid"
    document.getElementById('result').style.color="green";
   
    
}else{
    document.getElementById('result').innerHTML="invalid";
    document.getElementById('result').style.color="red";
    
}
}


