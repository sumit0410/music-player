// document.querySelector(".one").innerHTML

// let ele = document.createElement("h1");

// ele.append("hello");
// document.querySelector(".one").append(ele);

// let d = document.createElement("div");
// d.classList.add("two");
// let h = document.createElement("h1");
// h.append("New");
// d.append(h)
// console.log(d)


// project Javascript..........

let musics = [
    {
        id:1,
        name:"Title track BB2",
        artist:"Pritam Chakraborty,Tanishk Bagchi",
        audioSrc:"audio/Bhool Bhulaiyaa 2 - Title Track.mp3",
        imageSrc:"images/bb2.jpg"
    },
    {
        id:2,
        name:"Ranjha",
        artist:"B Praak",
        audioSrc:"audio/Ranjha - Shershaah.mp3",
        imageSrc:"images/ranjha.jpg"
    },
    {
        id:3,
        name:"Unstoppable",
        artist:"Sia",
        audioSrc:"audio/Unstoppable(PagalWorld.com.se).mp3",
        imageSrc:"images/unstoppable.jpg"
    },
    {
        id:4,
        name:"Dil tod ke",
        artist:"B Praak",
        audioSrc:"audio/Dil Tod Ke - B Praak.mp3",
        imageSrc:"images/dtk.jpg"
    },
    {
        id:5,
        name:"Dosti",
        artist:"Amit Trivedi, MM Kreem",
        audioSrc:"audio/Dosti - RRR.mp3",
        imageSrc:"images/dosti.jpg"
    },
    {
        id:6,
        name:"Titliyaan",
        artist:"Hardy sandhu, Afsana Khan",
        audioSrc:"audio/Titliaan - Afsana Khan.mp3",
        imageSrc:"images/Titliyan.jpg"
    },
    {
        id:7,
        name:"Filhaal 2",
        artist:"B Praak",
        audioSrc:"audio/Filhaal 2 Mohabbat - B Praak.mp3",
        imageSrc:"images/Filhaal2.jpg"
    },
    {
        id:8,
        name:"Raatan lambiyan",
        artist:"Jubin Nautiyaal",
        audioSrc:"audio/Raataan Lambiyan (From Shershaah) - (Mr-Jatt.com).mp3",
        imageSrc:"images/rataan.jpg"
    },
    {
        id:9,
        name:"I love you for Infinity",
        artist:"Jaymes Young",
        audioSrc:"audio/i-love-you-for-infinity.mp3",
        imageSrc:"images/infinity.jpg"
    },
    {
        id:10,
        name:"Hawayein",
        artist:"Arijit singh",
        audioSrc:"audio/Hawayein - Jab Harry Met Sejal (Arijit Singh) 320Kbps.mp3",
        imageSrc:"images/Hawa.jpg"
    },
    {
        id:11,
        name:"You and I",
        artist:"Katy Perry",
        audioSrc:"audio/You-and-i.mp3",
        imageSrc:"images/yai.jpg"
    },
]

for(let i=0; i<musics.length; i++){
    
   

let tile = document.createElement("div");
tile.classList.add("tile");

let thumbnail = document.createElement("div");
thumbnail.classList.add("thumbnail");

let img = document.createElement("img");
img.src=musics[i].imageSrc;

thumbnail.append(img);
tile.append(thumbnail);

let description = document.createElement("div");
description.classList.add("description");

let h2 = document.createElement("h2");
h2.append(musics[i].name);
description.append(h2);


let h3 = document.createElement("h3");
h3.append(musics[i].artist);
description.append(h3);

tile.append(description);

tile.addEventListener("click",function(){
    playMusic(musics[i]);
})

document.querySelector(".music-list").append(tile)


}


function playMusic(music){
    document.querySelector(".player").style.marginLeft = "0";
    document.querySelector(".main-thumbnail-img").src = music.imageSrc;
    document.querySelector(".playerSongName").innerText = music.name;
    document.querySelector(".playerArtistName").innerText = music.artist;
    document.querySelector(".audio").src = music.audioSrc;
    document.querySelector(".audio").play();
}

let close = document.querySelector(".close");
close.addEventListener("click", closePlayer)
function closePlayer(){
    document.querySelector(".player").style.marginLeft = "100%";

}

