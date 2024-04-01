
import inquirer from  'inquirer';
// 1. Computer Generate a Rendom Number / Done
//2 . User Guess a desire number
//3 . Compare Computer Generated Number with User Desire Number 

let rendomNum = Math.floor(Math.random()*10 +1);

const answer = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message : " Please Enter Your Desire Number Between 1 to 10"
    }
])
if(answer.userNumber == rendomNum){
   console.log("Congratulation You Are Correct")
}else{
    console.log ("Sorry The Number Is Wrong Try Again");
}
