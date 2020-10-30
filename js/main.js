
$(document).ready(function() {

  // Creazione oggetto
  var studente = {
    nome: ' ',
    cognome: ' ',
    eta: 0
  };

  for (var proprieta in studente) {
    console.log(proprieta + ' ' + studente[proprieta]);
  }

  // Array oggetti studenti
  var studenti = [{
      nome: 'Antonella',
      cognome: 'Crippa',
      eta: 24
    },
    {
      nome: 'Luciano',
      cognome: 'Sala',
      eta: 43
    },
    {
      nome: 'Chiara',
      cognome: 'Cubello',
      eta: 36
    }
  ];

  // Aggiungendo un nuovo oggetto
  var studenteNuovo = studente;
  studenteNuovo.nome = prompt('Prego, inserisci il tuo nome');
  studenteNuovo.cognome = prompt('Prego, inserisci il tuo cognome');
  studenteNuovo.eta = parseInt( prompt('Prego, inserisci la tua età') );
  studenti.push(studenteNuovo);
  console.log(studenti);

  // Ciclo per stampare nome e cognome
  for (var i = 0; i < studenti.length; i++) {
    var listaStudente = studenti[i];
    console.log(listaStudente.nome + ' ' + listaStudente.cognome);

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var html = template(listaStudente);
    $('#student-list').append(html);
  }
});
