# GameChanger - Change game data

**[Live link](https://gamechanger-rtw.herokuapp.com/)**

WSS can be found **[here](https://github.com/jochemvogel/gamechanger-wss)**

In GameChanger you can get an overview of different sport games. Besides that you can also enable alerts, so you won't miss anything from your favourite sport team(s).

## Table of Contents

<table>
<tr>
	<td align="center"><a href="#nerd_face-usage">🤓 Course <a></td>
	<td align="center"><a href="#dizzy-concepts">💫 Concepts <a></td>
	<td align="center"><a href="#eyeglasses-overview"> 👓 Overview <a></td>
	<td align="center"><a href="#gear-installation">⚙️ Installation<a></td>
	<td align="center"><a href="#open_file_folder-folder-structure">🗂 Folder Structure<a></td>
</tr>
</table>

## 🤓 Course

_The course **Real-Time Web** is about learning how to build a real-time application. Real-Time Web is part of the half year minor programme about Web Design and Development in Amsterdam. Bachelor Communication and Multimedia Design, Amsterdam University of Applied Science._

## 💫 Concepts

Ik heb drie verschillende concepten (chronologische volgorde):

1.  Verder bouwen op de **GameChanger** app van Browser Tech. In deze app kun je (sport)wedstrijden aanmaken en scores updaten.
2.  **Skribbl clone.** Skribbl is een app waarin je met vrienden kunt tekenen. Een van de spelers krijgt een woord en moet dit na tekenen. De rest krijgt alleen het teken veld te zien en de hoeveelheid letters. Hoe eerder je het raad, hoe meer punten je krijgt.
3.  **Sociaal medium.** Het liefst blijf ik van dit concept af, aangezien ik het nogal basic vindt. Mocht de rest niet lukken, dan kies ik voor deze

### GameChanger

<details>
<summary>Omschrijving</summary>

In deze app zijn er twee type clients: non-admin & admin clients. Voor nu kun je via het menu nog gewoon switchen, maar je zou kunnen bedenken dat je uiteindelijk kunt inloggen en met een rollen gaat werken.

Op het moment dat er iets wijzigt bij een wedstrijd, verschijnt er een notificatie. Voor nu geeft het puur aan dat er iets aangepast is, maar dit wil je uiteindelijk dynamisch maken (tijd, score, uitslag etc.)

</details>

<details>
<summary>Socket functionaliteit</summary>

Hier zijn verschillende mogelijkheden voor. Een hiervan is de Notification API. Deze heb ik al werkend, dus enkel de socket functionaliteit hoef ik er aan toe te voegen. Voor nu is het nog statisch (wedstrijd x has changed), maar dit kan uiteindelijk ook dynamisch. Ik hoop dat te kunnen realiseren in dit tijdsbestek.

Liveblog. Op elke detailpagina wil ik een liveblog hebben. Om te beginnen wil ik een globale liveblog hebben (vergelijkbaar met een chat), maar uiteindelijk wil ik dit per wedstrijd doen. Hoe of wat weet ik nog niet precies, maar ik denk een combinatie van een database & rooms op socket.io.

Een volgende stap zouden reacties kunnen zijn. Een live feed van reacties op elke wedstrijd. Vergelijkbaar met de liveblog, maar dan reacties van gebruikers.

Dit is voor nu wel voldoende, maar ik kan nog wel even door gaan met wat functionaliteit. Mocht ik zo ver zijn, dan breid ik dit nog uit. Voor nu denk ik dat ik hier wel even zoet mee ben.

</details>

<details>
<summary>API</summary>

Ik zou het leuk vinden om met een weer API te gaan werken, zodat je kunt zien wat voor weer het wordt tijdens jouw wedstrijd (of als je de wedstrijd wilt bezoeken). In eerste instantie wil ik gewoon met een statische locatie Amsterdam werken, maar de tijd wil ik wel dynamisch maken. Dus dat je daadwerkelijk kunt zien wat voor weer het is om 20.30. Hier zou je uiteindelijk nog meer dingen aan toevoegen, zoals of er neerslag is, weer gedurende de hele wedstrijd etc.

API’s die ik eventueel kan gebruiken zijn:

-   [https://openweathermap.org/price](https://openweathermap.org/)
-   [https://rapidapi.com/stefan.skliarov/api/AccuWeather/endpoints](https://rapidapi.com/stefan.skliarov/api/AccuWeather/endpoints)

</details>

<details>
<summary>Schets/ontwerp</summary>

Dit zijn een aantal ideeën van hoe het eruit kan komen te zien. Ik ben er nog niet uit welke van deze het wordt. Binnenkort verplaats ik een hoop van m'n README naar de Wiki. Het wordt nu wel een beetje veel (en we zijn nog maar net begonnen)

<details>
<summary>Ontwerp weer</summary>

![Ontwerp weer](https://i.ibb.co/Byt5dzQ/Screenshot-2021-04-12-at-17-31-59.png)

</details>

<details>
<summary>Ontwerp liveblog (non admin)</summary>

![Ontwerp liveblog non admin](https://i.ibb.co/n8473D2/Screenshot-2021-04-12-at-18-29-29.png)

</details>

</details>

<details>
<summary>Wanneer niet haalbaar</summary>

Het is een server side applicatie. Het zal wel moeten kunnen, maar ik weet niet in hoeverre mij het lukt om dit server side werkend te krijgen. Neem bijvoorbeeld de live blog. Dit is vergelijkbaar met een chat. Deze heb ik al wel eens eerder gemaakt, maar dit was client side en werd niet opgeslagen. Hier ligt dus nog een uitdaging voor mij.

Als de API te veel tijd gaat kosten. Ik heb (omdat het momenteel niet mijn prioriteit heeft) nog niet naar de API’s gekeken en weet dus niet wat ik kan verwachten. Ik hoop dat ik een tijd kan meegeven als query (zo niet, dan is een datum ook prima).

Het gaat mij dus met name om het server side gedeelte. De socket heb ik werkend en dat zal het probleem dus niet zijn. Het gaat erom dat als een admin iets typt (in het liveblog gedeelte), dat dit dan automatisch gerenderd/weergegeven wordt in de live blog van alle andere clients. Ik weet dat ik dit client side met appendChild etc. kan doen, maar ik weet niet hoe dit server side gedaan moet worden. Ik kan wel client side JavaScript gebruiken, maar omdat ik gebruik maak van EJS, kan ik geen querySelector doen. Wellicht is het dan nog een optie om een live-blog.html te hebben. Staat niet netjes, maar als dit ervoor zorgt dat ik verder kan, dan neem ik dat voor dit project voor lief.

</details>

### Skribbl clone

<details>
<summary>Omschrijving</summary>

Skribbl is een app waarin je met vrienden kunt tekenen. Een van de spelers krijgt een woord en moet dit na tekenen. De rest krijgt alleen het teken veld te zien en de hoeveelheid letters. Hoe eerder je het raad, hoe meer punten je krijgt.

Het scherm is ongeveer voor ¾ gevuld met een canvas waarop degene tekent en voor ¼ gevuld met een chat waarin alle deelnemers hun pogingen doen. Op het moment dat het, het juiste woord is, wordt het woord vervangen met someone guessed the word en worden er punten toegekend aan deze persoon.

</details>

<details>
<summary>Socket functionaliteit</summary>

Het tekenen op een canvas zou elke gebruiker moeten zien. Dit zou je met behulp van een socket kunnen doen. Daarnaast heb je een chat waar iedereen de woorden raadt. Dit is dus een chat en hier kun je web sockets voor gebruiken.

</details>

<details>
<summary>API</summary>

Voor de API heb ik nog niet echt een heel goed beeld wat er nodig is. Ik zou kunnen begrijpen dat er iets van een woorden API nodig is om random woorden te genereren. Je zou natuurlijk zelf wat woorden kunnen verzinnen, maar een API werkt net zo makkelijk. Wellicht dat er dan ook een API is waarin je je taal kunt selecteren. Dan heb je direct een spel dat in meerdere talen gespeeld kan worden.

</details>

<details>
<summary>Schets/ontwerp</summary>

...

</details>

<details>
<summary>Wanneer niet haalbaar</summary>

Ik weet niet in hoeverre het lastig is om het hele tekenen werkend te krijgen. Het tekenen is 1, maar daarnaast wil je verschillende users hebben, je wilt random woorden genereren, je wilt checken of iemand het juiste woord heeft ingevuld en je wilt (aan de hand van de tijd die gespeeld is) punten toekennen. Dit is een hoop en daarom denk ik eerlijk gezegd dat het niet realistisch is om dit te maken.

</details>

### Sociaal medium

<details>
<summary>Omschrijving</summary>

Een sociaal medium heeft niet echt een uitgebreide uitleg nodig. Eerlijk gezegd vermijd ik deze het liefst, maar mocht nou niets lukken, dan is een sociaal medium iets om uiteindelijk nog te doen. Het is niet super spannend, maar alle aspecten komen wel terug.

</details>

<details>
<summary>Socket functionaliteit</summary>

Denk hier aan een live feed. De feed wordt automatisch geupdate op het moment dat er een nieuwe post is (van een van jouw vrienden). Daarnaast is het natuurlijk ook mogelijk om een chat te implementeren.

</details>

<details>
<summary>API</summary>

Voor de API heb ik nog niet echt een heel goed beeld wat er nodig is. Ook hier zou ik de weer API kunnen gebruiken. Wellicht dat er elke ochtend (of elk dagdeel) een bericht in je feed komt over het weer op dat moment.

</details>

<details>
<summary>Schets/ontwerp</summary>

Komt later..

</details>

<details>
<summary>Wanneer niet haalbaar</summary>

Dit is realistisch en daarom ook haalbaar. Maar wat ik al zei: liever doe ik het niet omdat het nogal saai is. Mijn voorkeur gaat daarom uit naar het eerste concept en dat ga ik ook eerst proberen werkend te krijgen.

</details>

## :eyeglasses: Overview

### Screenshot

<details>
<summary>Screenshot app</summary>

![Screenshot app](https://raw.githubusercontent.com/jochemvogel/bt-eindopdracht/master/docs/screenshots/Screenshot%202021-03-28%20at%2020.01.26.png)

</details>

### Design

<details>
<summary>First sketch design</summary>

![First sketch design](https://i.ibb.co/LpLfNCF/Screenshot-2021-03-23-at-20-24-01.png)

</details>

## :gear: Installation

### Get it local

This app is made with vanilla JS (frontend) and NodeJS (backend).

#### 1). Clone the repository

`git clone https://github.com/jochemvogel/bt-eindopdracht.git`

#### 2). Install dependencies

`npm install`

#### 3). Start server

`npm run dev`

## :open_file_folder: Folder Structure

### `/docs`

All the documents are located here. They're also mentioned in the README, so you don't have to look their either.

### `/client`

The client side part of the application

#### `/client/public`

You can find al the public resources here. In this project are no building scripts, so all the styling and scripting is (directly) placed in the `/public` folder.

#### `/client/views`

Here you can find all the views of the application. It's build with EJS for dynamic purposes, but it's basically HTML with some variables.

### The rest

....
