    // console.log(window.location);

    // function sayHello() {

    //     console.log('Hello Guest!');
    // }
    // window.setTimeout(sayHello,5000);

    // let sayHello= ()=> {

    //     console.log('Hello Guest!');
    // }
    // window.setTimeout(sayHello,5000);

    // window.setTimeout( ()=>{
    //     console.log('Hello Guest!');

    // },5000)

    // setTimeout (()=>{
    //     document.body.style.backgroundColor='Yellow';

    // }, 3000);
    // let downloadButton =document.getElementById('download');
    // setTimeout( ()=>{
    //     downloadButton.removeAttribute('disabled');
    // },3000);
    // setInterval (()=>{
    //     console.log('Hello print every seconds');
    // },3000);
    // let countDown =10;
    // setInterval(()=>{
    //     console.log(countDown);
    //     countDown--;
    // },1000);    
// let secondLeft =10;

// let updateCountDown = ()=> {
//     if (secondLeft > 0) {
//         console.log(secondLeft--);
//     }
//     else {
//         clearInterval(countDownInterval);
//     }
// }
// let countDownInterval = setInterval(updateCountDown,1000);
// let paragraph = document.getElementById('countdown');
// let downloadButton = document.getElementById('download');
// let secondsLeft =10;
// let updateCountDown = ()=> {
//     if (secondsLeft > 0) {
//         paragraph.textContent =`Your downlaod button will open in ${secondsLeft} seconds`;
//         secondsLeft--;
//     }   
//     else {
//         clearInterval(countDownInterval);
//         downloadButton.removeAttribute('disabled');
//     }
// }
// let countDownInterval = setInterval(updateCountDown,1000);

// let name = window.prompt('enter your name','guest');
// console.log('Hi',{name});
// alert('hello world');

// let userConfirmed = confirm('Are you sure you want delete to this item');
// if(userConfirmed){
//     console.log('item deleted');
// } else {
//     console.log('action Cancelled');
// }
// const button = document.getElementById('button');
// button.addEventListener('click',function(){
//     console.log ('button clicked!');
// });
// const divElement =document.getElementById('divElement');
// divElement.addEventListener('mouseover',function (){
//     divElement.style.backgroundColor= 'blue';
// });
// divElement.addEventListener('mouseout',function (){
//     divElement.style.backgroundColor= 'white';
// });
// console.log(window.location.protocol);
// let sayHello = ()=>
//     {console.log('Hello Guys');
// }
// window.setTimeout (sayHello,5000);

// window.setTimeout(()=> {
// console.log('Hello Guest!');
// },3000);

// let downloadButton = document.getElementById('Download');
// setTimeout(()=>{
//     downloadButton.removeAttribute('disabled');
// },3000);

// const userConfirmed = confirm('Are sure you want to delete this item or no ?');
// if(userConfirmed){
//     console.log('deleted');
// }else{
//     console.log('action cancelled');
// }

let divElement =document.getElementById('divElement');
divElement.addEventListener('mouseover',function(){
    divElement.style.backgroundColor ='Green';
});
divElement.addEventListener('mouseout',function(){
    divElement.style.backgroundColour ='white';
});