//function for countdowntimer v1 for wk1-2
function start(){
    console.log('start() function started');
    // created variable currtime set it equal to 10
    var currtime =10;
    console.log(currtime);
    document.getElementById("countdownstatus").innerHTML = currtime;
    setTimeout(function(){
        currtime = currtime - 1;
        //what we do after the delay
        document.getElementById("countdownstatus").innerHTML = currtime 
        console.log(currtime);
}, 1000)
//9
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 2000)
//8
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 3000)
//7
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 4000)
//6
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 5000)
//5
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 6000)
//4
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 7000)
//3
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 8000)
//2
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 9000)
//blastoff
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = blastoff
    console.log(currtime);
}, 10000)
}

 { 

    //this is to generate the variables for the dies ans the sum 
    
    console.log("playcraps() started");
  //generate variables: die1, die2 sum
  var die1;
  var die2;
   var sum;

//this is the funtions for the dies to see if they roll into odd or even numbers and to see is if you win or lose 

   // roll the dice
   die1 = math.floor(math.random() * 6) + 1;
    console.log(die1);
    die2 = math.floor(math.random() * 6) + 1;
    console.log(die2);
    //determine the sum of the two dice and save it in sum
    sum = die1 + die2;
    console.log("sum is equal to" + sum);
    //follow the rules of craps 
    //first lose 
    if (sum == 7 || sum == 11) {
    document.getElementById("crapsstatus").innerHTML = "craps!! you lose";
    } else if (die1 == die2 && die1 % 2 == 0) {
    document.getElementById("crapsstatus").innerHTML = "huzzah! you win!!";
    } else {
   document.getElementById("crapsstatus").innerHTML = "you did not lose";
    }
    //tell the status in crapsstatus 
    }