const fetchpelismovi=async()=>{
    const pelisGrid=document.getElementById(Pelis.grid);
    for ( let i=1; i<= 20; i++){
        const img=await fetch(`https://image.tmdb.org/t/p/w1280`);
        const response=await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2/${i}`);
        const Pelis = await response.json();
        createmovie(Pelis);
    }
};
const createmovie=(pelis) =>{
    const PelisGrid=document.getElementById('pelis-grid');
    const card=document.createElement('div');
    card.classList.add('pelis-card');
}