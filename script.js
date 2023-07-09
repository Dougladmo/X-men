var selecionado = document.getElementById('personagem-selecionado')
var nome = document.getElementById('nome')
var descricao = document.getElementById('descricao')

//ciclope
var ciclope = document.getElementById('ciclope')

ciclope.addEventListener('mouseover', function(){
    selecionado.src = 'imagens/card-ciclope.png'
    nome.innerHTML = 'ciclope'
    descricao.innerHTML = "Ele tem o poder de disparar rajadas ópticas por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los"
})
ciclope.addEventListener('click', function(){
    selecionado.src = 'gif/ciclope.gif'
})
//jean
var jean = document.getElementById('jean')

jean.addEventListener('mouseover', function(){
    selecionado.src = 'imagens/card-jean-grey.png'
    nome.innerHTML = 'jean grey'
    descricao.innerHTML = 'Jean Grey é uma mutante nível ômega e o principal avatar da Força Fênix, no qual manifesta poderes cósmicos. A telepatia e telecinese'
})
jean.addEventListener('click', function(){
    selecionado.src = 'gif/jean.gif'
})
//lince
var lince = document.getElementById('lince')

lince.addEventListener('mouseover', function(){
    selecionado.src = 'imagens/card-lince-negra.png'
    nome.innerHTML = 'lince negra'
    descricao.innerHTML = 'Ela tem o poder de atravessar matéria sólida,campos de energia,rajadas ópticas, continuando intacta,e também tem o poder de andar no ar'
})
lince.addEventListener('click', function(){
    selecionado.src = 'gif/lince.gif'
})
//tempestade
var tempestade = document.getElementById('tempestade')

tempestade.addEventListener('mouseover', function(){
    selecionado.src = 'imagens/card-tempestade.png'
    nome.innerHTML = 'Tempestade'
    descricao.innerHTML = 'Tem o poder de controlar as forças da natureza, muito poderosa ela pode produzir raios, chuvas, gelos, ventos, neblina, entre outros efeitos'
})
tempestade.addEventListener('click', function(){
    selecionado.src = 'gif/tempestade.gif'
})
//vampira
var vampira = document.getElementById('vampira')

vampira.addEventListener('mouseover', function(){
    selecionado.src = 'imagens/card-vampira.png'
    nome.innerHTML = 'vampira'
    descricao.innerHTML = 'Ela tem o poder de absorver a vitalidade e memória das pessoas que toca ou no caso dos mutantes os poderes e a memória, mas só temporariamente'
})
vampira.addEventListener('click', function(){
    selecionado.src = 'gif/vampira.gif'
})
//wolwerine
var wolwerine = document.getElementById('wolwerine')

wolwerine.addEventListener('mouseover', function(){
    selecionado.src = 'imagens/card-wolverine.png'
    nome.innerHTML = 'wolwerine'
    descricao.innerHTML = 'Poderes. Garras Metálicas. Fator de Cura Regenerativo, Super Agilidade.'
})
wolwerine.addEventListener('click', function(){
    selecionado.src = 'gif/wolwerine.gif'
})
//noturno
var noturno = document.getElementById('noturno')

noturno.addEventListener('mouseover', function(){
    selecionado.src = 'imagens/card-noturno.png'
    nome.innerHTML = 'noturno'
    descricao.innerHTML = 'Ele é um mutante que nasceu com cauda, orelhas pontudas e com o poder de se Teletransportar'
})
noturno.addEventListener('click', function(){
    selecionado.src = 'gif/noturno.gif'
})
//magneto
var magneto = document.getElementById('magneto')

magneto.addEventListener('mouseover', function(){
    selecionado.src = 'imagens/card-magneto.png'
    nome.innerHTML = 'magneto'
    descricao.innerHTML = 'Ele tem o poder de magnetocinese, ou seja, controlar objetos de metal e criar campos magnéticos'
})
magneto.addEventListener('click', function(){
    selecionado.src = 'gif/magneto.gif'
})

