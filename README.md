Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

soluzione
1.definisco una funzione
2.all'interno creo un array
3.creo un ciclo while al cui interno inserisco una variabile a cui associo il metodo mathfloor per generare 5 numeri diversi
4.creo una condizione in cui verifico se il numero appena generato è già presente all'interno dell'array, se cosi non fosse allora pusho il numero dentro l'array
5.ritorno l'array
6.definisco una seconda funzione
7.richiamo la prima funzione
8. creo due variabili con cui andrò a richiamare 2 elementi presenti nel DOM
9.definisco una timing function con un tempo di 30 secondi
10.all'interno di essa andrò a cancellare i numeri generati in pagina
11.creo un array
12.creo un ciclo di 5 iterazioni con cui andrò a chiedere all'utente di inserire i 5 numeri
13.creo una variabile a cui assegno un prompt con cui chiedo i numeri all'utente
14.applico una condizione per verificare se il numero inserito è un numero valido
15.se il numero inserito è valido, allora lo pusho all'interno dell'array appena creato
16.creo un array che conterrà i numeri corretti inseriti dall'utente
17.creo un ciclo for
18.creo una variabile a cui assegno i valori dell'array contenente i numeri generati casualmente
19.tramite un if controllo se i numeri generati casualmente sono inclusi nell'array contenente i numeri inseriti dall'utente
20.se la condiizone risulta vera, allora pusho il numero dentro l'ultimo array creato
21.mostro a video quanti numeri sono stati indovinati e quali sono stati indovinati 