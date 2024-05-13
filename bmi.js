let continueProgram=true;
while(continueProgram){
mass=parseFloat(prompt("enter ur weight in kg"))
feet=parseFloat(prompt("enter ur height in feet"))
inches=parseFloat(prompt("Enter the remaining height in inches"))
height=feet*30.48+inches*2.54
bmi=mass/(height/100)**2
if(bmi<18.5){
    alert("you r under weight")
}    
else if(bmi<25){
    alert("you have normal bmi")
}
else if(bmi<30){
    alert("You r over weight")
}
else{
    alert("You r obese")
}
let response=prompt("Do u want to continue?(yes/no)").toLowerCase();
    if(response!=="yes") {
        continueProgram=false;
    }
}