console.log("welcome to  spotify")
let songIndex=0;
let audioElement=new Audio('./spotify.mp3/1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let masterSongName=document.getElementById("masterSongName");

let songItems=Array.from(document.getElementsByClassName("songItem"));
let songs=[
    
    {songName:"perfect (Ed Sheeran)", filePath:"./spotify.mp3/1.mp3", coverPath:"./spotify_images/1.jpg"},
    {songName:"Let me Love you (justin beiber)", filePath:"./spotify.mp3/2.mp3", coverPath:"./spotify_images/2.jpg"},
    {songName:"As it was (Harry Styles)" , filePath:"./spotify.mp3/3.mp3", coverPath:"./spotify_images/3.jpg"},
    {songName:"Attention (Charlie Puth)", filePath:"./spotify.mp3/4.mp3", coverPath:"./spotify_images/4.jpg"},
    {songName:"Night Changes (One Direction)", filePath:"./spotify.mp3/5.mp3", coverPath:"./spotify_images/5.jpg"},
    {songName:"Love Story (Taylor Swift)", filePath:"./spotify.mp3/6.mp3", coverPath:"./spotify_images/6.jpg"},
    {songName:"levitating (Dua Lipa)", filePath:"./spotify.mp3/7.mp3", coverPath:"./spotify_images/7.jpg"},
    {songName:"I Ain't worried (Top gun)", filePath:"./spotify.mp3/8.mp3", coverPath:"./spotify_images/8.jpg"},
    {songName:"Slim Shaddy EMINEM", filePath:"./spotify.mp3/9.mp3", coverPath:"./spotify_images/9.jpg"},
    {songName:"Dandelions (Ruth.B)", filePath:"./spotify.mp3/10.mp3", coverPath:"./spotify_images/10.jpg"},

]





songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;


});


// Handle play/pause


masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

// Listen to Events

audioElement.addEventListener("timeupdate",()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`./spotify.mp3/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`./spotify.mp3/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`./spotify.mp3/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
})