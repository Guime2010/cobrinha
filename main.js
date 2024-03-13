//variaveis
let cobrax=222

let cobray=224

let cobrawidth=22

let cobraheight=22

let direction=""

let velocity=5

let macax=222

let macay=22

let score=0

let partes=0

let rabo=[] 



function preload(){

}
function setup(){
    canvas=createCanvas(400,400)
    canvas.parent("areajogo") 

}
function draw(){
    background("#fff")
    schlangeZeichnen()
    schlangeReiten()
    essenzeichenem()
    essen()
    mostrar()
    pegar()
    paredes()
    colidir()
}
function schlangeZeichnen(){
    //função para desenhar cobra
    fill("green")
    rect(cobrax, cobray, cobrawidth, cobraheight)
    if(rabo.length>0){
        for(i=0;i<rabo.length; i++){
            rect(rabo[i][0],rabo[i][1],cobrawidth,cobraheight)
        }
    }
    
}
function schlangeReiten(){
    direction=schlangecontrol()
    if(direction=="left"){
        cobrax-=velocity
    }
    if(direction=="right"){
        cobrax+=velocity
    }
    if(direction=="up"){
        cobray-=velocity
    }
    if(direction=="down"){
        cobray+=velocity
    }
}
function schlangecontrol(){
    if(keyIsDown(LEFT_ARROW)){
        direction="left"
    }
    if(keyIsDown(RIGHT_ARROW)){
        direction="right"
    }
    if(keyIsDown(UP_ARROW)){
        direction="up"
    }
    if(keyIsDown(DOWN_ARROW)){
        direction="down"
    }
    return direction
}
function appfelposition(){
    macax=Math.floor(random(40,360))
    macay=Math.floor(random(40,360))
}
function essenzeichenem(){
    fill("red")
    circle(macax,macay,15)
}
function essen(){
    colide=collideRectCircle(cobrax,cobray,cobrawidth,cobraheight,macax,macay,30)
    if(colide){
        appfelposition()
        score++
        partes++
    }
}
function mostrar(){
    document.getElementById("pontos").innerHTML=score
}
function pegar(){
    rabo.push([cobrax, cobray])
    if(rabo.length>partes){
        rabo.shift()
    }
}
function paredes(){
    stroke("black")
    parededireita=line(0,0,0,400)
    paredeesquerda=line(400,0,400,400)
    paredebaixo=line(0,400,400,400)
    paredecime=line(0,0,400,0)
}
function colidir(){
    direita=collideLineRect(0,0,0,400,cobrax,cobray,cobrawidth,cobraheight)
    esquerda=collideLineRect(400,0,400,400,cobrax,cobray,cobrawidth,cobraheight)
    baixo=collideLineRect(0,400,400,0,cobrax,cobray,cobrawidth,cobraheight)
    cima=collideLineRect(0,0,400,0,cobrax,cobray,cobrawidth,cobraheight)
    if(direita||esquerda||baixo||cima){
        sorre=0
        cobrax=200
        cobray=200
        rabo=0
        partes=0
    }
}