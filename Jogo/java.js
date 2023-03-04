        var carta1 = {nome: "Mago Negro",imagem:"https://cdnb.artstation.com/p/assets/images/images/030/187/117/large/luan-denno-mago-4.jpg?1599850230", atributos: {
                    ataque:2500, defesa: 2100
        }
        }
        var carta2 = {nome: "Dragão Branco de olhos azuis",imagem: "https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/02/dragao-branco-destacada.jpg?fit=774%2C489&ssl=1",atributos: {
            ataque:3000, defesa: 2500
        }
        }
        var carta3 = {nome: "Gaia, O Cavaleiro Feroz",imagem:"https://ms.yugipedia.com//thumb/f/f7/GaiaTheFierceKnight-DULI-EN-VG-NC.png/257px-GaiaTheFierceKnight-DULI-EN-VG-NC.png ", atributos: {
            ataque:2300, defesa: 2100
        }
        }
        var carta4 = {nome: "Maga Negra",imagem:"https://sm.ign.com/ign_br/screenshot/default/blob_wsra.jpg", atributos: {
            ataque:2000, defesa: 1700
        }
        }
        var carta5 = {nome: "Rei cavera",imagem:"http://1.bp.blogspot.com/-zLlypoqOEg4/UxCBh1vTS8I/AAAAAAAAACw/6OmtvAtR0qg/s1600/Rei_Caveira_by_LilithAlchemist.jpg", atributos: {
            ataque:2500, defesa: 1200
        }
        }
        var carta6 = {nome: "Elfa Mística",imagem:"https://images.uncyc.org/commons/thumb/a/a7/Mystical_elf.gif/300px-Mystical_elf.gif", atributos: {
            ataque:800, defesa: 2000
        }
        }
        var carta7 = {nome: "Dragão Negro de Olhos Vermelhos",imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ycMp6UOUYrKeJzeJdoqIzKAPcWOTknzGVQ&usqp=CAU", atributos: {
            ataque:2400, defesa: 2000
        }
        }
        var carta8 = {nome: "Soldado do Lustro Negro",imagem:"http://images.uncyc.org/pt/thumb/a/aa/Black_luster_soldier-1-.gif/300px-Black_luster_soldier-1-.gif", atributos: {
            ataque:3000, defesa: 2500
        }
        }
        var carta9 = {nome: "Obelisco, o Atormentador",imagem:"http://pm1.narvii.com/6818/0d7d261d67aafcb61e021f3767705b65c9f5ea99v2_00.jpg", atributos: {
            ataque:4000, defesa: 4000
        }
        }
        var carta10 = {nome: "Kuriboh",imagem:"http://4.bp.blogspot.com/-u07mKxBWcgg/UDOmfTmvlwI/AAAAAAAAAdA/H4QFLd5qHbY/s1600/KURIBOH!!!.gif", atributos: {
            ataque:300, defesa: 200
        }
        }
        var listaCarta = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]
    
        var cartaMaquina;
var cartaJogador;
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="image/carta.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="image/carta.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

