var canvas = new fabric.Canvas("myCanvas")
alturaBloco = 30
larguraBloco = 30
playX = 10
playY = 10
var playerObject = ""
var blocoObject = ""
function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerObject = Img
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(140)
        playerObject.set({
            top: playY,
            left: playX
        })
        canvas.add(playerObject)
    })
}
function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blocoObject = Img
        blocoObject.scaleToWidth(larguraBloco)
        blocoObject.scaleToHeight(alturaBloco)
        blocoObject.set({
            top: playY,
            left: playX
        })
        canvas.add(blocoObject)
    })
}
window.addEventListener("keydown", myKeyDown)

function myKeyDown(e) {
    keyPressed = e.keyCode
    if (e.shiftKey == true && keyPressed == "80") {
        alturaBloco = alturaBloco + 10
        larguraBloco = larguraBloco + 10
        document.getElementById("atualLargura").innerHTML = larguraBloco
        document.getElementById("atualAltura").innerHTML = alturaBloco
    }
    if (e.shiftKey == true && keyPressed == "77") {
        alturaBloco = alturaBloco - 10
        larguraBloco = larguraBloco - 10
        document.getElementById("atualLargura").innerHTML = larguraBloco
        document.getElementById("atualAltura").innerHTML = alturaBloco
    }
    if (keyPressed == "38") {
        up()
    }
    if (keyPressed == "40") {
        down()
    }
    if (keyPressed == "39") {
        right()
    }
    if (keyPressed == "37") {
        left()
    }
    if (keyPressed == "71") {
        newImage("ground.png")
    }
    if (keyPressed == "76") {
        newImage("light_green.png")
    }
    if (keyPressed == "84") {
        newImage("trunk.jpg")
    }
    if (keyPressed == "82") {
        newImage("roof.jpg")
    }
    if (keyPressed == "89") {
        newImage("yellow_wall.png")
    }
    if (keyPressed == "68") {
        newImage("dark_green.png")
    }
    if (keyPressed == "85") {
        newImage("unique.png")
    }
    if (keyPressed == "67") {
        newImage("cloud.jpg")
    }
}
function up() {
    if (playY >= 0) {
        playY = playY - alturaBloco
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function down() {
    if (playY <= 500) {
        playY = playY + alturaBloco
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function left() {
    if (playX > 0) {
        playX = playX - larguraBloco
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function right() {
    if (playX <= 850) {
        playX = playX + larguraBloco
        canvas.remove(playerObject)
        playerUpdate()
    }
} 
