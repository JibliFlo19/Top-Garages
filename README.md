
Top Garages


1. Numele prezentatorului & numele proiectului
Jibleanu Florin-Constantin
Top Garages

2. Prezentare succintă a ideii de afacere
	Top Garages este o aplicație web care le oferă șoferilor acces la cele mai bune service-uri auto din oraș. Utilizatorii pot vizualiza toate garajele disponibile sau pot accesa detalii despre un anumit service. De asemenea, aceștia pot căuta și filtra garajele în funcție de locație și rating, pot adăuga propriul garaj și pot lăsa recenzii pentru alte service-uri.
3. Ce problemă rezolvă?
	Șoferii întâmpină dificultăți în găsirea unui service auto de încredere, care să ofere prețuri corecte și să aibă recenzii reale de la alți clienți. Top Garages creează o piață transparentă și competitivă pentru service-urile auto, facilitând accesul utilizatorilor la informații relevante și de încredere.
4. Cine sunt utilizatorii țintă?
	Orice persoană care deține un permis de conducere și are nevoie de servicii auto.
5. Caracteristici principale ale proiectului
Gestionarea garajelor
Adăugare, editare și ștergere de garaje
Detalii garaj: nume, locație, program, descriere, contacte
Afișarea serviciilor disponibile în fiecare garaj, împreună cu prețurile acestora

Căutare și filtrare
Căutare a garajelor în funcție de locație
Filtrare după rating

Recenzii și rating-uri
Utilizatorii pot lăsa recenzii și pot evalua garajele
Sistem de rating cu valori între 1 și 5 pentru fiecare garaj




6. O scurtă descriere a proiectului
	Top Garages este o platformă online dedicată centralizării și promovării service-urilor auto din oraș. Aplicația permite utilizatorilor să caute, filtreze și sorteze garajele în funcție de locație și rating. De asemenea, utilizatorii pot lăsa recenzii, evalua experiențele avute și adăuga sau gestiona propriile garaje.
Platforma are o interfață modernă și intuitivă, fiind construită cu React pentru frontend și Spring Boot pentru backend, asigurând o experiență rapidă și sigură.

Funcționalități viitoare:
Autentificare utilizator/admin, fiecare având funcții specifice
Adăugarea de imagini reprezentative pentru fiecare garaj
Crearea unui profil de utilizator, unde acesta poate gestiona istoricul reparațiilor pentru propriile mașini
Funcționalitate de programări online pentru service-uri
Această platformă va facilita accesul șoferilor la service-uri auto de încredere, contribuind la o experiență mai simplă și mai eficientă în gestionarea problemelor legate de întreținerea mașinilor.

7. O listă cu endpoint-urile API și descrierea acestora.
/garages/{id} - Returneaza date unui garaj dupa id;
/garages - Adauga un nou garaj;
/garages/search - Returnează o listă de garaje pe baza filtrării după locatie si rating;
/reviews - Adauga o recenzie noua pentru un garaj;
/reviews/garages/{garageId} - Returneaza lista tuturor recenziilor pentru un anumit garaj                                   				   dupa id;


