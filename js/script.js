//console.log('Ciao mondo');
/**
 * Creare un oggetto che descriva uno studente, con le seguenti proprietà:
 *  nome, cognome e età.
 *  Stampare a schermo attraverso un ciclo for-in tutte 
 * le proprietà dell'oggetto.
 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
  e stampare per ognuno di essi, nome e cognome.
 Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere
  un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
 Una volta creato il nuovo oggetto inserirlo nell'array creato al punto
  2 e mostrare alla fine il contenuto dell'array.
 * 
 */
// 1. creiamo un oggeto che descriva uno studente, con q.p. nome,cognome,età
var studente = {
    'nome'  : 'Iva',
    'cognome' : 'Doci',
    'eta' : 25,
};
//console.log(studente['nome']);

// 2. stampa tutti gli elementi con CICLO FOR-IN
for(var key in studente) {
    console.log(studente[key]);
}

// 3. creare un array di oggetti di studenti 
var studenti = [
    {
        'nome' : 'Chiara',
        'cognome' : 'Rossi',
        'eta' : 21,
    }, // <-- ricorda la virgola qua 
    {
        'nome' : 'Sara',
        'cognome' : 'Verdi',
        'eta' : 27,
    },
    {
        'nome' : 'Laura',
        'cognome' : 'Pippo',
        'eta' : 33,
    },
    {
        'nome' : 'Flavia',
        'cognome' : 'Pluto',
        'eta' : 41,
    } 
];
//console.log(studenti);

// 4. ciclare su tutti gli Studenti (CICLO CON FOR)
for (var i = 0; i < studenti.length; i++){
    var student = studenti[i];

    console.log(student);

    // ciclo con for in 
    for(var key in student){
        
    }
    console.log("Nome e cognome: " , student['nome'],  student['cognome']);
} 

// 5.Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere
// un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età