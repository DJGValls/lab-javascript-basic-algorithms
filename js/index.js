console.log("Hellow world")

// Iteration 1: Names and Input
let hacker1 = "daniel";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "chrome";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, it has ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1
let spaced = "";
for(let i=0; i<hacker1.length; i++){
    spaced += hacker1[i] + " ";
}
console.log(spaced.toUpperCase())

//3.2
let nameVariable = "";
for(let i=hacker1.length - 1; i>=0; i--){
    nameVariable += hacker1[i];
    //console.log(hacker1[i]);
}
console.log(nameVariable);

//3.3
for(let i=0; i<hacker1.length; i++){
    if(hacker1 === hacker2){
        console.log("What?! You both have the same name?");
        break;
     }else if(hacker1[i] < hacker2[i]){
         console.log("The driver's name goes first.");
         break;
      }else{
         console.log("Yo, the navigator goes first definitely.");
         break;
      }
}


