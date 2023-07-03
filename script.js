console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Hamari Adhuri Kahani.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song = [
    {songName: "Hamari Adhuri Kahani", filePath: "songs\Dhokha Arijit Singh 128 Kbps.mp3", coverPath: "cover/1.jfif"},
    {songName: "Main Dhoondne Ko Zamaane Mein", filePath: "songs/Main Dhoondne Ko Zamaane Mein.mp3", coverPath: "cover/2.jfif"},
    {songName: "Tum Saath Ho", filePath: "songs/Tum Saath Ho.mp3", coverPath: "cover/3.jpg"},
    {songName: "Dhokha", filePath: "songs/Dhokha Arijit Singh 128 Kbps.mp3", coverPath: "cover/4.jfif"},
    {songName: "Itni Si Baat Hain", filePath: "songs/Itni Si Baat Hain - Azhar (Arijit Singh) 320Kbps.mp3", coverPath: "cover/5.jfif"},
    {songName: "Kabhi Jo Baadal Barse", filePath: "songs/Kabhi Jo Baadal Barse - Arijit Singh - 320Kbps.mp3", coverPath: "cover/6.jfif"},
    {songName: "Muskurane", filePath: "songs/Muskurane - Arijit Singh.mp3", coverPath: "cover/7.jfif"},
    {songName: "Pachtaoge", filePath: "songs/Pachtaoge - Arijit Singh.mp3", coverPath: "cover/8.jfif"},
    {songName: "Pal", filePath: "songs/Pal - Monsoon Shootout (Arijit Singh) 320Kbps.mp3", coverPath: "cover/9.jfif"},
    {songName: "Saanson ko", filePath: "songs/Saanson Ko - Arijit Singh - 320Kbps.mp3", coverPath: "cover/10.jfif"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = song[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = song[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-circle-play');
        masterPlay.classList.add('fa-solid fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-circle-pause');
        masterPlay.classList.add('fa-solid fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-solid fa-circle-pause');
        element.classList.add('fa-solid fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-solid fa-circle-play');
        e.target.classList.add('fa-solid fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-solid fa-circle-play');
        masterPlay.classList.add('fa-solid fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid fa-circle-play');
    masterPlay.classList.add('fa-solid fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid fa-circle-play');
    masterPlay.classList.add('fa-solid fa-circle-pause');
})