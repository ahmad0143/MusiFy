console.log("Welcome here")
//Initiliaz variable
let songIndex=0;
let audioElement= new Audio('/songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgress=document.getElementById('myProgress');
let masterSongName=document.getElementById('masterSongName');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Let me Love you", filePath:"/songs/1.mp3",coverPath:"images/cover1.jfif"},
    {songName:"Tu Aa K Deak lae", filePath:"/songs/2.mp3",coverPath:"images/cover2.JFIF"},
    {songName:"Tuje Kitna Chahne", filePath:"/songs/3.mp3",coverPath:"images/cover3.jpg"},
    {songName:"Mahiya Mahiya ve", filePath:"/songs/4.mp3",coverPath:"images/cover4.jpg"},
    {songName:"In The End ", filePath:"/songs/5.mp3",coverPath:"images/cover5.jpg"},
    {songName:"Tum Mile Dill Khele", filePath:"/song/6.mp3",coverPath:"images/cover6.jfif"},
    {songName:"Criminal Fool", filePath:"/songs/7.mp3",coverPath:"images/cover7.jpg"}
  
]
songItems.forEach((element,i)=>{
    // console.log(element,[i]);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0;

    }
})
 //audioElement.play();
 audioElement.addEventListener('timeupdate',()=>{
     console.log('timeupdate');
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     console.log(progress)
     myProgress.value=progress;


 })
 myProgress.addEventListener('change',()=>{
     audioElement.currentTime= myProgress.value*(audioElement.duration/100);
 })
 const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
    

  }
  const makeAllPause=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');
        element.classList.remove('fa-play-circle');

    })
    

  }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`; 
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1

        // audioElement= new Audio('/songs/1.mp3');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    // })

    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`; 
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText= songs[songIndex].songName;

    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>7)
    {
        songIndex=0;
    }
    else
    {
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`; 
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText= songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})