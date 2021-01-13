document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
          "body").style.visibility = "hidden"; 
        document.querySelector( 
          "#loader").style.visibility = "visible"; 
          document.querySelector( 
            ".llogo").style.visibility = "visible"; 
          document.querySelector( 
            "h3").style.visibility = "visible"; 
            document.querySelector( 
                "#auth").style.visibility = "visible"; 
          
    } else { 
        setTimeout(() => {
            console.log('waiting');
            document.querySelector( 
                "#loader").style.display = "none"; 
                document.querySelector( 
                    "h3").style.display="none"; 
                    document.querySelector( 
                        ".llogo").style.display = "none";    
                        document.querySelector( 
                            "#auth").style.display = "none";        
                   
              document.querySelector( 
                "body").style.visibility = "visible";
        }, 2000);
        
    } 
}; 

function key (){
    fetch('https://popcornapi2.herokuapp.com/getkey')
    .then(response => response.json())
    .then(function (data){
        trending(data);
    })
};

function trending(data){

    fetch('https://api.themoviedb.org/3/trending/all/week?api_key='+data.key)
    .then(response => response.json())
    .then(function(data){
        var innerdata=``;
        for(i=0;i<10;i++){
            
            if(data.results[i].media_type === 'movie'){
                let a=`  <div class="card">
        
                <div class="pbox" id="c${i}"><a href="" style="text-decoration:none;" target="_blank"><p>watch trailer</p></a></div>
        
                <ul id="l6">
                    Name:<li id="name">${data.results[i].original_title}</li>
                    release:<li id="year">${data.results[i].release_date}</li>
                    media type:<li id="type">${data.results[i].media_type}</li>
                    imdb:<li id="imdb">${data.results[i].vote_average}</li>
                </ul>
            </div>` 
            innerdata+=a;
                
                
            }
            else{
                let a=`  <div class="card">
        
                <div class="pbox" id="c${i}"><a href="" style="text-decoration:none;" target="_blank"><p>watch trailer</p></a></div>
        
                <ul id="l6">
                    Name:<li id="name">${data.results[i].original_name}</li>
                    release:<li id="year">${data.results[i].first_air_date}</li>
                    media type:<li id="type">${data.results[i].media_type}</li>
                    imdb:<li id="imdb">${data.results[i].vote_average}</li>
                </ul>
            </div>`
            innerdata+=a;
                
            }
            
        }
        document.getElementById('content').innerHTML=innerdata;
        for(let i=0;i<=10;i++){
            document.getElementById(`c${i}`).style.backgroundImage= `linear-gradient(180deg, rgba(10, 10, 10, 0) 63.99%, #0A0A0A 100%),url('https://image.tmdb.org/t/p/original${data.results[i].poster_path}')`;
        }
        
    })
};

key();

// $('.content').click(function () {
//     var value =$(this).index('.content');
//     fetch('https://api.themoviedb.org/3/trending/all/week?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb')
//     .then(response => response.json())
//     .then(function(data){
//         document.querySelector('body').style.backgroundImage= `linear-gradient(180deg, rgba(10, 10, 10, 0) 63.99%, #0A0A0A 100%),url('https://image.tmdb.org/t/p/original${data.results[value].backdrop_path}')`;
        
//     })
// });