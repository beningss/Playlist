//membuat data array berisi 3 lagu fav (judul, lagu, jumlah_likes, jumlah_play)
var lagu = [
    ['Mangu', 'fourtwnty', '122rb', '26jt', 'mangu.jpeg', 'Mangu.mp3'],
    ['Selalu Ada di Nadimu', 'B.C.L', '153rb', '18jt', 'jumbo.jpeg', 'Jumbo.mp3'],
    ['Lesung Pipi', 'Raim Laode', '124rb', '28jt', 'lesung_pipi.jpeg', 'Lesungpipi.mp3'],
    ['Long Live (Taylor Version)', 'Taylor Swift', '254rb', '30jt', 'longlive.jpg', 'longlive.mp3'],
    ['intro (end of the world)', 'Ariana Grande', '218rb', '10jt', 'intro.jpeg', 'intro.mp3'],
    ['dreams, books, power and walls', 'JANNABI', '126rb', '27jt', 'dbpw.jpeg', 'dbpw.mp3'],
]

var konten = document.getElementById("container");
var element = "";

for(var i = 0; i < lagu.length; i++) {
    var judul = lagu[i][0];
    var penyanyi = lagu[i][1];
    var suka = lagu[i][2];
    var putar = lagu[i][3];
    var gambar = lagu[i][4];
    var audioFile = lagu[i][5];
    var audioId = audioFile.replace('.mp3');

    
    element += `
    <div class='lagu'> 
        <div class="title">
            <h6>My Favorit Song</h6> 
        </div>
        <img src="${gambar}" alt="${judul}" srcset="">
        <div class="song">
            <h4>${judul}</h4>
            <small>
                <i>${penyanyi}</i>
            </small>
        </div>
        <audio id="${audioId}" src="${audioFile}"></audio>
        <div class="audio-controls">
       <button><i class="fi fi-sr-rewind"></i></button>
            <button onclick="togglePlay('${audioId}', this)"><i class="fi fi-sr-play"></i>
            </button>
         <button><i class="fi fi-sr-forward"></i></button>
        </div>

        <div class="bawah">
            <div class="skpt">
        <div class="left">${suka}</div>
       <i class="fi fi-sr-thumbs-up"></i>
            </div>
            <div class="skpt">
        <div class="right">${putar}</div>
        <i class="fi fi-sr-play-circle"></i>
            </div>
        </div>
</div>
    `;
    }
konten.innerHTML = element;
var konten = document.getElementById("list");
var element = "";
element=`
        <div id="list">
        <div class="favorit">
        <i class="fi fi-sr-angle-left"></i>
        <h5>My Favorit Song</h5>
        </div>
</div>
`; 
konten.innerHTML = element;

function togglePlay(audioId, button) {
  const audio = document.getElementById(audioId);
    if (audio.paused) {
      audio.play();
      button.innerHTML = '<i class="fi fi-sr-pause"></i>';
    } else {
      audio.pause();
      button.innerHTML = '<i class="fi fi-sr-play"></i>';
    }
    audio.onended = () => {
      button.innerHTML = '<i class="fi fi-sr-play"></i>';
    };
  }






