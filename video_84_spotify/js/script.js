// console.log('javascript')
let currentSong = new Audio();
let songs;
let currfolder;
let songFile

let lib_bt_play = document.querySelector(".lib-bt-play");
lib_bt_play.style.display = 'block';

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00"
    }

    const minute = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedMinutes = String(minute).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
    currfolder = folder;
    let a = await fetch(`/${folder}/`);
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = [];
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            // console.log(element.href)
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }
    // console.log(songs)

    let Song = document.querySelector(".songList")
    Song.innerHTML = "";
    for (const song of songs) {
        let artist = [];
        let songLink = song;
        // console.log(songLink);
        let sg = song.split("-")
        artist.push(sg);
        let Sname = artist[0][0].replaceAll("%20", " ");
        // console.log(Sname)
        let Sartist0 = artist[0][1].replaceAll("%20", " ");
        let Sartist1 = Sartist0.replaceAll(".mp3", "");
        let Sartist = Sartist1.replaceAll("%26", "&")
        // console.log(Sartist)


        Song.innerHTML = Song.innerHTML + ` <div class="song">
             <div class="playLeft">
                  <img width="30px" class="invert" src="img/play2.svg" alt="play">
             </div>
             <img class="songImg" width="28" src="img/song1.png" alt="song1">
             <div class="info">
                <span class="Sname">${Sname}</span>
                <p class="Sartist">${Sartist}</p>
                <p class="SLink">${songLink}</p>
            </div>
        </div>`
    }

    // attach to event listener to each song..
    Array.from(document.querySelector(".songList").getElementsByClassName("song")).forEach(e => {
        e.addEventListener('click', () => {
            playMusic(e.querySelector(".info").lastElementChild.innerHTML)
        });
    })
    return songs;
}


const playMusic = (track, pause = false) => {
    currentSong.src = `/${currfolder}/` + track;
    if (!pause) {
        currentSong.play();
        play.src = "img/paused.svg";
    }

    let info0 = track.replaceAll(".mp3", "")
    let info1 = info0.replaceAll("%20", " ")
    let info = info1.replaceAll("%26", "&");

    document.querySelector(".songInfo").innerHTML = info;
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00";
}

async function displayAlbums() {
    let a = await fetch(`/songs/`);
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    // console.log(array)
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        // console.log(e.href.includes("/songs"))
        if (e.href.includes("/songs/") && !e.href.includes(".htaccess")) {
            // console.log(e.href.split("/"))
            let folder = e.href.split("/").slice(-1)[0]
            // console.log(folder)
            // get metadata of folder
            let a = await fetch(`/songs/${folder}/info.json`);
            let response = await a.json();
            // console.log(response);
            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
            <div  class="playC">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="black"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>
            <img src="/songs/${folder}/cover.jpeg" alt="${response.title}">
            <div class="cardInfo">
                <h3>${response.title}</h3>
                <p>${response.description}</p>
            </div>
        </div>`

        }
    }

    // load playlist when card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        // console.log(e)
        e.addEventListener("click", async item => {
            // console.log("fetching songs")
            lib_bt_play.style.display = 'none';
            songFile = item.currentTarget.dataset.folder;
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
            console.log(songFile)
            await getSongs(`songs/${songFile}`);
            playMusic(songs[0], true);
        })
    })
}

async function main() {

    // list of all songs
    // await getSongs("songs/cs");
    // playMusic(songs[0], true);
    // Display the all albums on the page
    await displayAlbums();

    // Attach an event listener to play, next and previous
    play.addEventListener('click', togglePlayPause);
    document.addEventListener('keydown', function (event) {
        // Check if the pressed key is the spacebar (keyCode 32)
        if (event.keyCode === 32) {
            togglePlayPause();
            // Prevent scrolling when spacebar is pressed
            event.preventDefault();
        }
    });

    function togglePlayPause() {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "img/paused.svg";
        } else {
            currentSong.pause()
            play.src = "img/play2.svg";
        }
    }

    // listen for time update event
    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime, currentSong.duration)
        document.querySelector(".songTime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
        let percentage = (currentSong.currentTime / currentSong.duration) * 100;
        document.querySelector(".circle").style.left = percentage + "%";
        document.querySelector(".seekbar").style.background = `linear-gradient(to right, white 0%, white ${percentage}%, #4D4D4D ${percentage}%, #4D4D4D 100%)`
        document.querySelector(".seekbar:hover").style.background = `linear-gradient(to right, #1DB954 0%, #1DB954 ${percentage}%, #4D4D4D ${percentage}%, #4D4D4D 100%)`;
    })

    // add a event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100;
    })

    //add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector('.left').style.left = "0";
    })
    //add an event listener for close-bt
    document.querySelector(".close-bt").addEventListener("click", () => {
        document.querySelector('.left').style.left = "-100%";
    })

    function previousSong() {
        currentSong.pause()
        let s = songs
        let index = s.indexOf(currentSong.src.split("/").slice(-1)[0])
        // console.log(s, index)
        if ((index - 1) >= 0) {
            playMusic(s[index - 1])
        }
    }

    function nextSong() {
        currentSong.pause()
        let s = songs
        let index = s.indexOf(currentSong.src.split("/").slice(-1)[0])
        // console.log(currentSong.src.split("/").slice(-1)[0])
        // console.log(s, index)
        if ((index + 1) < s.length) {
            playMusic(s[index + 1])
        }
    }

    //add an event listener to previous and next.
    previous.addEventListener("click", () => {
        console.log("clicked");
        previousSong();
    })


    next.addEventListener("click", () => {
        nextSong();
    })

    document.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case 37: // Left arrow key
                previousSong();
                break;
            case 39: // Right arrow key
                nextSong();
                break;
            default:
            // Do nothing for other keys
        }
    });

    // add an event listener to range
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log(e.target)
        currentSong.volume = parseInt(e.target.value) / 100;
    })

    // Add event listener to mute and unmute the volume.
    const volInput = document.querySelector(".range").getElementsByTagName("input")[0].value;
    vol.addEventListener("click", () => {
        if (!currentSong.muted) {
            currentSong.muted = true;
            vol.src = "img/mute.svg";
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else {
            document.querySelector(".range").getElementsByTagName("input")[0].value = volInput;
            currentSong.muted = false;
            vol.src = "img/volume1.svg";
        }

    })


}
main();

