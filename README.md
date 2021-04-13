# GameChanger - Change game data

**[Live link](https://gamechanger-rtw.herokuapp.com/)**

WSS can be found **[here](https://github.com/jochemvogel/gamechanger-wss)**

In GameChanger you can get an overview of different sport games. Besides that you can also enable alerts, so you won't miss anything from your favourite sport team(s).

## Table of Contents

<table>
<tr>
	<td align="center"><a href="#nerd_face-course">🤓 Course <a></td>
	<td align="center"><a href="#dizzy-concepts">💫 Concepts <a></td>
	<td align="center"><a href="#eyeglasses-overview"> 👓 Overview <a></td>
	<td align="center"><a href="#gear-installation">⚙️ Installation<a></td>
	<td align="center"><a href="#open_file_folder-folder-structure">🗂 Folder Structure<a></td>
</tr>
</table>

## :nerd_face: Course

_The course **Real-Time Web** is about learning how to build a real-time application. Real-Time Web is part of the half year minor programme about Web Design and Development in Amsterdam. Bachelor Communication and Multimedia Design, Amsterdam University of Applied Science._

## :dizzy: Concepts

Ik heb drie verschillende concepten gemaakt. Uiteindelijk heb ik voor de eerste gekozen. Alleen de eerste wordt verder behandeld in de README. Mocht je meer achtergrond informatie willen over de andere concepten, dan kun je deze in de [Wiki](https://github.com/jochemvogel/gamechanger-rtw/wiki/Concepts) vinden.

Op chronologische volgorde waren/zijn de concepten:

1.  Verder bouwen op de **GameChanger** app van Browser Tech. In deze app kun je (sport)wedstrijden aanmaken en scores updaten.
2.  **Skribbl clone.** Skribbl is een app waarin je met vrienden kunt tekenen. Een van de spelers krijgt een woord en moet dit na tekenen. De rest krijgt alleen het teken veld te zien en de hoeveelheid letters. Hoe eerder je het raad, hoe meer punten je krijgt.
3.  **Sociaal medium.** Het liefst blijf ik van dit concept af, aangezien ik het nogal basic vindt. Mocht de rest niet lukken, dan kies ik voor deze

### Definitieve concept

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

Ontwerp weer implementatie (Weather API):

![Ontwerp weer](https://i.ibb.co/Byt5dzQ/Screenshot-2021-04-12-at-17-31-59.png)

Ontwerp live blog implementatie (Socket)

![Ontwerp liveblog non admin](https://i.ibb.co/n8473D2/Screenshot-2021-04-12-at-18-29-29.png)

</details>

<details>
<summary>Data Lifecycle</summary>

Extra note: de stippellijn is de socket verbinding

![Data Lifecycle](https://i.ibb.co/CQywn4c/data-lifecycle-copy.jpg)

</details>


<details>
<summary>Wanneer niet haalbaar</summary>

Het is een server side applicatie. Het zal wel moeten kunnen, maar ik weet niet in hoeverre mij het lukt om dit server side werkend te krijgen. Neem bijvoorbeeld de live blog. Dit is vergelijkbaar met een chat. Deze heb ik al wel eens eerder gemaakt, maar dit was client side en werd niet opgeslagen. Hier ligt dus nog een uitdaging voor mij.

Als de API te veel tijd gaat kosten. Ik heb (omdat het momenteel niet mijn prioriteit heeft) nog niet naar de API’s gekeken en weet dus niet wat ik kan verwachten. Ik hoop dat ik een tijd kan meegeven als query (zo niet, dan is een datum ook prima).

Het gaat mij dus met name om het server side gedeelte. De socket heb ik werkend en dat zal het probleem dus niet zijn. Het gaat erom dat als een admin iets typt (in het liveblog gedeelte), dat dit dan automatisch gerenderd/weergegeven wordt in de live blog van alle andere clients. Ik weet dat ik dit client side met appendChild etc. kan doen, maar ik weet niet hoe dit server side gedaan moet worden. Ik kan wel client side JavaScript gebruiken, maar omdat ik gebruik maak van EJS, kan ik geen querySelector doen. Wellicht is het dan nog een optie om een live-blog.html te hebben. Staat niet netjes, maar als dit ervoor zorgt dat ik verder kan, dan neem ik dat voor dit project voor lief.

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
