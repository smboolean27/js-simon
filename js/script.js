// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Funzioni

function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// 1. Un alert() espone 5 numeri generati casualmente.
var numeriGenerati = [];

while ( numeriGenerati.length < 5 ) {
  var numero = generaNumeroRandom(1, 100);
  if ( numeriGenerati.includes(numero) == false ) {
    numeriGenerati.push(numero);
  }
}

alert(numeriGenerati);

// 2. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

setTimeout(function () {

  var numeriUtente = [];

  while ( numeriUtente.length < 5 ) {

    var numUtente = parseInt(prompt("Inserisci il numero!"));
    if ( numeriUtente.includes(numUtente) == false ) {
      numeriUtente.push(numUtente);
    } else {
      alert("Hai già inserito questo numero!!!");
    }

  }

  // 3. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

  var numeriIndovinati = [];
  for ( var i = 0; i < numeriUtente.length; i++ ) {
    //console.log(numeriUtente[i]);
    if ( numeriGenerati.includes(numeriUtente[i]) == true ) {
      numeriIndovinati.push(numeriUtente[i]);
    }
  }

  if ( numeriIndovinati.length > 0 ) {
    alert("hai indovinato " + numeriIndovinati.length + " numeri! " + numeriIndovinati);
  } else {
    alert("Mi spiace riprova!");
  }

}, 3000);
