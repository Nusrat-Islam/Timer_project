const take_time = document.querySelector(".take_time");
const output = document.querySelector(".output");
const startBtn = document.querySelector(".startBtn");
const EndBtn = document.querySelector(".EndBtn");


let minutes ;
let stopinterval;

take_time.addEventListener("change",function(e){
  if(isNaN (e.target.value)){
  return;}
else{
    minutes = e.target.value;
}
})
startBtn.addEventListener ( "click", function() {
    start();
});

EndBtn.addEventListener ("click", function() {
    stop();
});

function counDown() {
    --minutes;
    output.innerHTML = minutes;
    
    //condition ta sobar seshe add korbo

    if( minutes == 0){
        clearInterval(stopinterval);
    }

}

function start() {
    stopinterval = setInterval( () => {
        counDown();
    },60000);
}

function stop() {
    clearInterval (stopinterval);

}

//select the classes for Second

const SecondTaketime = document.querySelector (".SecondTaketime");
const secondBtn = document.querySelector(".secondBtn");
const endSecondBtn = document.querySelector(".endSecondBtn");
const SecondOutput = document.querySelector(".SecondOutput");

let second;
let stoptype;

SecondTaketime.addEventListener("change",function(e){
    if(isNaN (e.target.value)){
    return;}
  else{
      second = e.target.value;
  }
});
secondBtn.addEventListener("click", function () {
    up();
});

endSecondBtn.addEventListener("click", function(){
    End();
})

function count(){
   --second;
   SecondOutput.innerHTML = second;

   if(second == 0){
    clearInterval(stoptype);
   }
}

function up (){
    secondtype = setInterval ( () => {
        count();
    },1000);
}

function End (){
   clearInterval (secondtype);
}

//For millisecond

const outputThree = document.querySelector(".outputThree");
const endTimeThree = document.querySelector(".endTimeThree");
const startBtnThree = document.querySelector(".startBtnThree");
const EndBtnThree = document.querySelector(".EndBtnThree");


let millisecond;
let dismiss;

endTimeThree.addEventListener("change",function(e){
    if(isNaN (e.target.value)){
    return;}
  else{
    millisecond = e.target.value;
  }
});
startBtnThree.addEventListener("click", function () {
    goNow();
});

EndBtnThree.addEventListener("click", function(){
    shutDown();
})

function countNow(){
   --millisecond;
   outputThree.innerHTML = millisecond;

   if(millisecond == 0){
    clearInterval(dismiss);
   }
}

function goNow() {
    dismiss = setInterval ( () => {
        countNow();
    },100);
}

function shutDown() {
   clearInterval (dismiss);
}