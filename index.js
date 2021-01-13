function trending(){

    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb')
    .then(response => response.json())
    .then(function(data){
        var innerdata=``;
        for(i=0;i<10;i++){
            
            if(data.results[i].media_type === 'movie'){
                let a=`  <div class="card">
        
                <div class="pbox" id="c${i}"></div>
        
                <ul id="l6">
                    Name:<li id="name">${data.results[i].original_title}</li><br>
                    release:<li id="year">${data.results[i].release_date}</li><br>
                    media type:<li id="type">${data.results[i].media_type}</li><br>
                    imdb:<li id="imdb">${data.results[i].vote_average}</li><br>
                </ul>
            </div>` 
            innerdata+=a;
                
                
            }
            else{
                let a=`  <div class="card">
        
                <div class="pbox" id="c${i}"></div>
        
                <ul id="l6">
                    Name:<li id="name">${data.results[i].original_name}</li><br>
                    release:<li id="year">${data.results[i].first_air_date}</li><br>
                    media type:<li id="type">${data.results[i].media_type}</li><br>
                    imdb:<li id="imdb">${data.results[i].vote_average}</li><br>
                </ul>
            </div>`
            innerdata+=a;
                
            }
            
        }
        document.getElementById('content').innerHTML=innerdata;
        for(let i=0;i<=10;i++){
            document.getElementById(`c${i}`).style.backgroundImage= `linear-gradient(180deg, rgba(10, 10, 10, 0) 13.99%, #0A0A0A 100%),url('https://image.tmdb.org/t/p/original${data.results[i].poster_path}')`;
        }
        
    })
};

trending();

// $('.card').click(function () {
//     var value =$(this).index('.card');
//     fetch('https://api.themoviedb.org/3/trending/all/week?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb')
//     .then(response => response.json())
//     .then(function(data){
//         document.querySelector('body').style.backgroundImage= `linear-gradient(180deg, rgba(10, 10, 10, 0) 63.99%, #0A0A0A 100%),url('https://image.tmdb.org/t/p/original${data.results[value].backdrop_path}')`;
//         document.querySelector('.card').style.display="none"
//     })
// });