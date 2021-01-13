function trending(){

    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=')
    .then(response => response.json())
    .then(function(data){
        for(i=0;i<10;i++){
            document.getElementById(`c${i}`).style.backgroundImage= `linear-gradient(180deg, rgba(10, 10, 10, 0) 13.99%, #0A0A0A 100%),url('https://image.tmdb.org/t/p/original${data.results[i].poster_path}')`;
            if(data.results[i].media_type === 'movie'){
                
                
            }
            else{
                
            }
            
        }
        
    })
};

trending();

// $('.card').click(function () {
//     var value =$(this).index('.card');
//     fetch('https://api.themoviedb.org/3/trending/all/week?api_key=')
//     .then(response => response.json())
//     .then(function(data){
//         document.querySelector('body').style.backgroundImage= `linear-gradient(180deg, rgba(10, 10, 10, 0) 63.99%, #0A0A0A 100%),url('https://image.tmdb.org/t/p/original${data.results[value].backdrop_path}')`;
//         document.querySelector('.card').style.display="none"
//     })
// });