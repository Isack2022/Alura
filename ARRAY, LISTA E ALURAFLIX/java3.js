var listaFilmes = ["https://vejasp.abril.com.br/wp-content/uploads/2016/12/sebebernaocase_frontal.jpeg?quality=70&strip=info&w=434","https://br.web.img3.acsta.net/pictures/16/11/21/15/29/457312.jpg", "https://br.web.img3.acsta.net/medias/nmedia/18/91/79/19/20163665.jpg"];
       //O indice sempre começa pelo 0

       //Adicionar um novo elemento
       listaFilmes.push("https://upload.wikimedia.org/wikipedia/pt/b/b0/Harry_Potter_Half_Blood_Prince_2009.jpg");
       listaFilmes.push("https://upload.wikimedia.org/wikipedia/pt/thumb/4/4e/Sherlock_Holmes_%28poster_de_2009%29.jpg/250px-Sherlock_Holmes_%28poster_de_2009%29.jpg")
       listaFilmes.push("https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg")
       listaFilmes.push("https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg")
       listaFilmes.push("https://cdn.ome.lt/ZsjgCohJlfmYwZl92AhBWUw2Nxo=/fit-in/1070x750/smart/filer_public/b2/9c/b29c44fa-8a1c-4ee5-a316-b6a644e8e04e/goe_setchar_brazil.jpg")
      
       console.log(listaFilmes.length)

     for (var indice = 0; indice < listaFilmes.length; indice++) {
     document.write("<img src=" + listaFilmes[indice] + ">");
     }