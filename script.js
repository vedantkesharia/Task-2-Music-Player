let previous = document.querySelector('#previous')
let play = document.querySelector('#play_btn')
let next = document.querySelector('#next')
let slider = document.querySelector('#slider')
let track_image = document.querySelector('#img1')
let title = document.querySelector('#title')
let artist = document.querySelector('#artist')
let curr_time = document.querySelector('#curr_time')
let timer;
let autoplay=0;

let index_no = 0;

let playing_song=false;

let track = document.createElement('audio')

let All_song = [
    {
        name:'Good Night',
        path:'music/song1.mp3',
        img:'img/song_img1.webp',
        singer:'FASSounds'
    },
    {
        name:'LoFi Chill (Medium Version)',
        path:'music/song2.mp3',
        img:'img/song_img2.webp',
        singer:'BoDleasons'
    },
    {
        name:'For Future Bass',
        path:'music/song3.mp3',
        img:'img/song_img3.webp',
        singer:'The_Mountain'
    },
    {
        name:'TVARI - Tokyo Cafe',
        path:'music/song4.mp3',
        img:'img/music_img2.jpg',
        singer:'TVARI'
    },
    {
        name:'Leva - Eternity',
        path:'music/song5.mp3',
        img:'img/song_img5.webp',
        singer:'lemonmusicstudio'
    },
]

function load_track(index_no){
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    timer = setInterval(range_slider,1000);
}

load_track(index_no)

function just_play(){
    if(playing_song==false){
        playsong();
    }
    else{
        pausesong();
    }
}

function playsong(){
    track.play();
    playing_song=true;
    // play.innerHTML='<i class='bx bx-pause'></i>'
    play.innerHTML='<i class="fa-solid fa-pause"></i>'
}

function pausesong(){
track.pause();
playing_song=false;
play.innerHTML='<i class="bx bx-play"></i>'
}

function next_song() {
    if(index_no<All_song.length-1){
        index_no+=1;
        load_track(index_no);
        playsong();
    }else{
        index_no=0;
        load_track(index_no);
        playsong();
    }
}

function previous_song(){
    if(index_no>0){
        index_no-=1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no=All_song.length-1;
        load_track(index_no);
        playsong();
    }
}

function change_duration(){
    slider_position = track.duration*(slider.value/100);
    track.currentTime = slider_position;
}

function range_slider(){
    let position = 0;

    if(!isNaN(track.duration)){
        position=track.currentTime*(100/track.duration);
        slider.value = position;
    }
}