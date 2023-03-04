function adicionarFilme (){
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")){
    filmeTela(filmeFavorito);
    } else{
        console.error("Enderenço de filme errado");
    }
    document.getElementById("filme").value = "";
}
function filmeTela(filmes) {
    var imagemFilmeFavorito = "<img src=" + filmes + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + imagemFilmeFavorito;
}