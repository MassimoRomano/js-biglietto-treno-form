console.log("funziona");

const btnElement = document.querySelector('#btnCalc')
btnElement.addEventListener('click', function() {

const Name = document.getElementById("userName").value ;
//take input by usarName class

const Km = document.getElementById("userKm").value ;
//take input number by userKm class

const Age = document.getElementById("userAge").value ;
//take input number by userAge class

const Carrozza = Math.random()* 100
//const for random number

const CodCP = Math.random()* 100000000
//const for random CodCP



console.log(Name, Km, Age);

const forKm = 0.21 ;
//price for k
let fullPrice = forKm * Km;
//full price
const discountMin = fullPrice *  0.2;
//discount del 20%
const discountMax = fullPrice *  0.4;
//discount del 40%


if(Age < 18){
    fullPrice -=  (discountMin).toFixed(2);
    document.getElementById("ticket-disc").innerHTML = 'Sconto Minori'
}
//price with discount 20% for <18

else if (Age > 65){
    fullPrice -=  (discountMax).toFixed(2);
    document.getElementById("ticket-disc").innerHTML = 'Sconto Senior'

}
//price with discount 40% for >65

else{
    fullPrice = fullPrice.toFixed(2);
    document.getElementById("ticket-disc").innerHTML = 'Biglietto standard'
}
// full price





console.log();
//stamp price in console

document.getElementById("ticket-name").innerText = Name;
document.getElementById("ticket-pos").innerText = Carrozza.toFixed();
document.getElementById("ticket-codCP").innerText = CodCP.toFixed();
document.getElementById("ticket-price").innerText = ` ${fullPrice} €`;
})


const btnCancel = document.querySelector('#btnCancel')
btnCancel.addEventListener('click', function() {
    userName.value = null;
    userKm.value = null;
    userAge.value = null;
})