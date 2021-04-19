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
<td align="center"><a href="#anger-others">💢 Others<a></td>

</tr>

</table>

## :nerd_face: Course

_The course **Real-Time Web** is about learning how to build a real-time application. Real-Time Web is part of the half year minor programme about Web Design and Development in Amsterdam. Bachelor Communication and Multimedia Design, Amsterdam University of Applied Science._

## :dizzy: Concepts

I've made three different concepts. Ultimately I choose for the first one. Only that one will be described in the README. If you want some more background about the others, you can find them in the [Wiki](https://github.com/jochemvogel/gamechanger-rtw/wiki/Concepts).

The concepts were:

1. Build further on the **GameChanger** app that I made in Browser Tech. In this app you can create (sport)matches and update those scores.

2. ** Skribbl clone. ** Skribbl is an app in which you can draw with friends. One of the players receives a word and has to draw it. The rest will only see the character field and the amount of letters. The sooner you guess, the more points you get.

3. **Social media.** I prefer to stay away from this concept, as I find it too basic. If the rest does not work, then I'll choose this one

### Final concept

In deze app zijn er twee type clients: non-admin & admin clients. Voor nu kun je via het menu nog gewoon switchen, maar je zou kunnen bedenken dat je uiteindelijk kunt inloggen en met een rollen gaat werken.

Op het moment dat er iets wijzigt bij een wedstrijd, verschijnt er een notificatie. Voor nu geeft het puur aan dat er iets aangepast is, maar dit wil je uiteindelijk dynamisch maken (tijd, score, uitslag etc.)

In this app there are two types of clients: non-admin & admin clients. For now you can still switch via the menu, but eventually I could add a log in and start working with a roles.

The moment something changes in a match, a notification will appear. For now it purely indicates that something has been adjusted, but you ultimately want to make this dynamic (time, score, result, etc.)

#### Sketch

These are some ideas of what it might look like. I'm not sure yet which of these it will be.

Design weather implementation (Weather API):

![Design weather](https://i.ibb.co/Byt5dzQ/Screenshot-2021-04-12-at-17-31-59.png)

Design live blog implementation (Socket)

![Design live blog](https://i.ibb.co/n8473D2/Screenshot-2021-04-12-at-18-29-29.png)

Didn't choose this one. I have chosen a chat instead.

<details>

<summary>Data Lifecycle</summary>

Extra note: the dotted line is the socket connection

![Data Lifecycle](https://i.ibb.co/CQywn4c/data-lifecycle-copy.jpg)

</details>

<details>

<summary>Socket functionality</summary>

There are several options for this. One of these is the Notification API. I already have this working, so I only need to add the socket functionality. For now it is still static (match x has changed), but eventually this can also be dynamic. I hope that I'm be able to achieve that in the time frame.

Live blog. I want to have a live blog on every detail page. To start with, I want to have a global live blog (similar to a chat), but ultimately I want to do this per match. I don't know exactly how or what, but I think a combination of a database & rooms on socket.io.

The next step could be reactions. A live feed with responses to every match. Similar to the live blog, but then reactions from users.

This is sufficient for now, but I can continue with some functionality. If I get that far, I will expand this. For now I think I am happy with this.

</details>

<details>

<summary>API</summary>

The API that I'm going to use is the [Open Weather Map API](https://openweathermap.org/current).

Unfortunately, it is only possible to retrieve the current weather (for free). If you want to look ahead, you unfortunately have to pay. However, it is possible to use the ** One Call API ** with the free version. I still have to delve into this, so I will expand this piece.

In the Free tier you can make 1,000,000 requests / month & 60 requests / minute. This is more than enough. If you want to know more about the rate limit of the API, you can find it [here](https://openweathermap.org/price).

<details>

<summary>Example Response</summary>

**Input**: Amsterdam

**Output**:

```json
{
    "coord": {
        "lon": 4.8897,
        "lat": 52.374
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 282.21,
        "feels_like": 279.71,
        "temp_min": 282.04,
        "temp_max": 282.59,
        "pressure": 1032,
        "humidity": 49
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.63,
        "deg": 300
    },
    "clouds": {
        "all": 20
    },
    "dt": 1618323113,
    "sys": {
        "type": 1,
        "id": 1524,
        "country": "NL",
        "sunrise": 1618289221,
        "sunset": 1618338866
    },
    "timezone": 7200,
    "id": 2759794,
    "name": "Amsterdam",
    "cod": 200
}
```

</details>

**Additional explanation:**

Unites:

-   `main.temp`: Kelvin (The formula to Celsius is _℃ = K - 273.15_)
-   `wind.speed`: meter/second
-   `clouds.all`: Percentage

![API model](https://i.ibb.co/sPrFx5t/data-model.jpg)

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

`git clone https://github.com/jochemvogel/gamechanger-rtw.git `

#### 2). Install dependencies

`npm install`

#### 3). Get an API key

Go to [Openweathermap.org](gamechanger-rtw), click on **Sign In** in the top right corner and click on **Create an Account**. When you've done this, go to your account on the website, select `My API Keys` and create one.

This project uses the **Current Weather Data** endpoint. The free tier has a limit of 60 calls/minute and 1.000.000 calls/month.

Copy the `.env.example` file, change the name to `.env` and update the value of the `API_KEY=` to the API key you got from RapidApi. Then set `IS_DEVELOPMENT` to `true` in your own `.env`.

#### 4). Start development environment

`npm run dev` (Will build & watch automatically)

#### 5). Watch files (manual)

`npm run watch`

#### 6). Build files (manual)

`npm run build`

## :open_file_folder: Folder Structure

<details>

<summary>Screenshot folder structure</summary>

![Folder structure](https://i.ibb.co/bBypCKG/Screenshot-2021-04-16-at-14-32-31.png)

</details>

### `/models`

All the data is getting fetch (and processed) in this folder. The (match) data from `data.json` is also retrieved from here.

### `/views`

All the (EJS) views can be found here. There is a `/pages` and a `/partials` folder located.

### `/controllers`

The render controller is located in this folder. Controllers are the 'middleman' between the views & models and reacts to user interaction.

### `/routes`

All the routes (with it's render functions) are located in `routes/routes.js`.

### `/scripts`

Here are all the build scripts located. More information about those build scripts can be found later in the README.

### `/data`

All the data is stored in a file right now. Will add a (Firebase) database later on

### `/src`
All the js, css and assets are located in this folder. When you build, those files will be optimized and placed in the `/public` folder. All the files in thet `src/assets/` folder will be place in the 'root' of `/public`. The rest will be placed in their dedicated folder.

### `/public`
This folder is not visible (on default). After you build, the `/public` folder will be created.

# :anger: Others

## Build Scripts

I use some (gulp) build scripts to make the folder structure more clear.

##### [`scripts/build-js.js`](https://github.com/jochemvogel/gamechanger-rtw/blob/master/scripts/build-js.js)

All the (client side) scripts are getting concatenated and minified (`terser`) to one file (`bundle.min.js`) and placed in the `public/js` directory.

##### [`scripts/build-css.js`](https://github.com/jochemvogel/gamechanger-rtw/blob/master/scripts/build-css.js)

First all the css is getting concatenated, then it's getting formatted (with cleanCSS) and eventually it's getting post processed (with autoprefixer). The bundled file will be placed in the `public/css` directory.

##### [`scripts/build-assets.js`](https://github.com/jochemvogel/gamechanger-rtw/blob/master/scripts/build-assets.js)

It copies all the assets and place it in the `/public` folder. There is also another script named `build-img.js`. It's basically doing the same, but it has a different output directory.

## Sources

...
