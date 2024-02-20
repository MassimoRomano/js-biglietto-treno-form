console.log("funziona");

const btnElement = document.querySelector('#btnCalc')
btnElement.addEventListener('click', function() {

const Name = document.getElementsByClassName("userName") ;
//take input by usarName class

const Km = document.getElementsByClassName("userKm").value ;
//take input number by userKm class

const Age = document.getElementsByClassName("userAge").value ;
//take input number by userAge class

console.log(Name, Km, Age);

const forKm = 0.21 ;
//price for k
const fullPrice = forKm * Km
//full price
const discountMin = fullPrice *  0.2
//discount del 20%
const discountMax = fullPrice *  0.4
//discount del 40%


if(Age < 18){
    price = (fullPrice - discountMin).toFixed(2)
}
//price for <18

else if (Age > 65){
    price = (fullPrice - discountMax).toFixed(2)
}
//price for =>65

else{
    price = fullPrice.toFixed(2)
}
// full price
console.log(`price: ${price} €`);
})


