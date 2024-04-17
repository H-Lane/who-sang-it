let searchLibrary = JSON.parse(localStorage.getItem('songSearchHistory')) || [];
let lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
// let lastLoaded = JSON.parse(songsOnLoad);
//lastSearch = JSON.parse(lastSearch);

window.addEventListener('load',function(){


    if(String(lastSearch) !== 'null'){
        
        getTokens(lastSearch);
        
    }
    else{
        getTokens('nothing');
    }

});
this.document.getElementById('search-bar').addEventListener('keyup',function(){
   // alert('there was a key up');
    let searchText = this.value;
    let suggestionBox = document.getElementById('suggestion-box');
    suggestionBox.innerHTML = '';
    if(searchText.length>0){

        getTokensSS(searchText);
        

    }else{
        suggestionBox.style.display = 'none';
    }

});

let searchSubmit = document.getElementById('search-submit');

searchSubmit.addEventListener('click',function(event){
//event.preventDefault();

let songName = document.getElementById('search-bar').value;
getTokens(songName);

songName = songName.trim().toLowerCase();

if(!songName) return;

if(!searchLibrary.includes(songName)){
    searchLibrary.push(songName);
}
localStorage.setItem('songSearchHistory',JSON.stringify(searchLibrary));
localStorage.setItem('lastSearch',JSON.stringify(songName));

});



