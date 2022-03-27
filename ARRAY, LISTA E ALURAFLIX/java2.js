var listaFilmes = ["Se Beber, Não Case!","Até o ultimo Homem", "Homem de Ferro"];
       //O indice sempre começa pelo 0

       //Adicionar um novo elemento
       listaFilmes.push("harry potter o enigma do príncipe");
       listaFilmes.push("Ciderela")
       listaFilmes.push("Titanic")
       listaFilmes.push("Shrek")

       console.log(listaFilmes.length)

      // experimente o h1, strong e entre outros
      //document.write("<p>" + listaFilmes[indice] + "</p>");

     //    valor inicial. condição.    expressão final.
     for (var indice = 0; indice < listaFilmes.length; indice ++) {
     document.write("<p>" + listaFilmes[indice] + "</p>");
     }