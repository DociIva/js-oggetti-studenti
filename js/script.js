//console.log('Ciao mondo');
/**
 * Creare un oggetto che descriva uno studente, con le seguenti proprietà:
 *  nome, cognome e età.
 *  Stampare a schermo attraverso un ciclo for-in tutte 
 * le proprietà dell'oggetto.
 punto 2 . Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
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
 //studenti.push(newUtent);
// 4. ciclare su tutti gli Studenti (CICLO CON FOR)
for (var i = 0; i < studenti.length; i++){
    var student = studenti[i];
    

    console.log(student);
    console.log('posizione ' + (i +1));
    // ciclo con for-in 
    for(var key in student){
    }
   //for(var j = 0; j < studenti[i]; i++){
       //console.log('Studente ' + studenti[i][j]);
  // }
    console.log("Nome e cognome: " , student['nome'],  student['cognome']);
} 

// 5.Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere
// un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età
// 1 prompt
var  newStuNome = prompt('inserisci il nome');
var  newStuCog = prompt('inserisci il cognome');
var  newStuEta = prompt('inserisci l eta');
// 2 creare oggetto proprietà : valore (che ti passa l'utente)

var newStudent = {
    'nome': newStuNome,
    'cognome' : newStuCog,
    'eta' : newStuEta,
    
};
studenti.push(newStudent);
console.log(studenti);
