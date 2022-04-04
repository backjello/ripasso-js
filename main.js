//+++++++++++++++++++ VARIABILI, DICHIARAZIONI e INIZIALIZZAIONI ++++++++++++++++++
// https://www.w3schools.com/js/js_variables.asp
var numero; // dichiarazione
const CONSTANTE = 10; // dichiarazione + inizializzazione

numero = CONSTANTE // inizializzaione

console.log(numero) //mostra in console il valore di numero


//+++++++++++++++++++++++++++ OPERAZIONI +++++++++++++++++++
// https://www.w3schools.com/js/js_operators.asp
// https://www.w3schools.com/js/js_arithmetic.asp
// https://www.w3schools.com/js/js_assignment.asp
// incrementare un numero (di uno)
numero = numero + 1
numero++
numero+=1
console.log(numero)

// decrementare un numero(di uno)
numero = numero - 1
numero--
numero-=1
console.log(numero)

//altre operazioni matematiche

//moltiplicazione
numero = numero * 2
numero*=2
console.log(numero)

//divisione
numero = numero / 2
numero/=2
console.log(numero)

//resto della divisione (modulo)
var resto = numero%2
console.log(resto) // 0 se pari - 1 se dispari

//tipi delle variabili
// https://www.w3schools.com/js/js_datatypes.asp
var numero = 10.5 // questo è di tipo number
var stringa = "ciao" // questo è di tipo string
var boolean = true // questo è di tipo boolean

console.log(typeof numero)
console.log(typeof stringa)
console.log(typeof boolean)

//+++++++++++++++++ ARRAY ++++++++++++++++++++++++++
// https://www.w3schools.com/js/js_arrays.asp
var gustiGelato= ["fragola","cioccolato","menta","banana"]
var arrayDiNumeri = [0,1,2,4,5]

// primo elemento di un array ( lo 0 (zero) è  detto INDICE)
var primoGusto = gustiGelato[0]
// lunghezza dell'array
var numeroGusti = gustiGelato.length
console.log(numeroGusti) //mi aspetto di vedere 4

// ultimo elemento di un array
var ultimoGusto = gustiGelato[numeroGusti-1]
// oppure (è esattamente uguale)
var ultimoGusto = gustiGelato[gustiGelato.length-1]

console.log(primoGusto,ultimoGusto)

// ++++++++++++++++++++++++ CONDIZIONI ++++++++++++++++++++
// https://www.w3schools.com/js/js_if_else.asp
// https://www.w3schools.com/js/js_comparisons.asp
//controllare se una variabile è uguale ad un altra
if(numero == 10.5){
    console.log("il numero e' uguale a 10.5")
}
//controllare se una variabile è maggiore di un altra
if(numero >= 0){
    console.log("il numero e' positivo")
}
//controllare se una variabile è minore di un altra
if(gustiGelato.length < 10){
   console.log("ci sono meno di 10 gusti di gelato")
}
//controllare se una variabile non è uguale ad un altra
if(numero != -3 ){
    console.log("il numero non e' -3 E non e' -4 ")
}

//++++++++++++++++++++++ OPERATORI LOGICI +++++++++++++++++++++
//https://www.w3schools.com/js/js_comparisons.asp
// OR || una sola delle condizioni deve essere vera

// scrivere if(numero == 0 || 10) è SBAGLIATO !!!
// è come scrivere if(numero == 0 || true) che è
// come scrivere if (numero == 0) (si ignora totalmete la seconda parte)
// il modo corretto è: if(numero == 0 || numero == 100)
if(gustiGelato[0]=="fragola" || gustiGelato[0]=="menta"){
    console.log("il primo gusto e' fragola o menta")
}
// AND && entrambe le condizioni devono essere vere
if(numero >= 0 && numero <= 100){
    console.log("il numero e' compreso fra 0 e 100")
}
//si posso usare anche più operatori logici insieme
// la condizione è vera solo se una delle 3 è vera
if(gustiGelato[0]=="fragola" || gustiGelato[0]=="menta" 
    || gustiGelato[0]=="limone"){
        console.log("il primo gusto e' fragola o menta o limone")
}
// la condizione è vera solo se tutte e 3 sono vere
if(numero >= 0 && numero <= 100 && numero%2==0){
    console.log("il numero e' compreso fra 0 e 100 ed e' pari")
}
if(numero >= 0 && numero <= 100 || numero%2==0){
    console.log("il numero e' compreso fra 0 e 100 O e' pari")
}

//+++++++++++++++++++++++++ ELSE ++++++++++++++++++++++
if(numero%2==0){
    console.log("il numero e' pari")
}
else{
    console.log("il numero e' dispari")
}

//++++++++++++++++++++++++ ELSE IF ++++++++++++++++++++++++
numero=0;
if(numero%2==0 && numero!=0){
    console.log("il numero e' pari")
}
else if(numero==0){
    console.log("il numero non e' ne pari ne dispari")
}
else{
    console.log("il numero e' dispari")
}

//++++++++++++++++++++++++++ SWITCH +++++++++++++++++++++
// https://www.w3schools.com/js/js_switch.asp
// inizio esempio SBAGLIATO !!!
if(primoGusto=='cioccolato'){
    console.log(4)
}
else if(primoGusto=='banana'){
    console.log(7)
}
else if(primoGusto=='menta'){
    console.log(10)
}
// .....
// fine esempio SBAGLIATO

switch (primoGusto) {
    case "fragola": // verrà eseguito questo codice perchè 
        console.log(2) // il primo gusto è fragola
        break;
    case "cioccolato":
        console.log(4)
        break
    case "menta":
        console.log(10)
        break
    case "banana":
        console.log(7)
        break
    default:
        console.log("il gusto non e' fra quelli registrati")
        break;
}

// ++++++++++++++++++++ WHILE e DO-WHILE +++++++++++++++++++++++
// https://www.w3schools.com/js/js_loop_while.asp
// scrivo i primi 10 numeri
var i=0
while(i<10){
    console.log("numero (i)"+i)
    i++
}
// array e while
// SBAGLIATO !!!
// console.log(array[0])
// console.log(array[1])
// ...

var i=0;
while(i<gustiGelato.length){
    var gusto=gustiGelato[i]
    console.log(gusto)
    i++;
}






