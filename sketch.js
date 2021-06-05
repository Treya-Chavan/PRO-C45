var aladdin, carpet, aladdinIMG, carpetIMG;
var aladdin1, carpet1;
var edges; 
var invisble_ground;
var rock, rockIMG, rockGroup;
var coin, coinIMG, coinGroup;
var gameState = "START"
var playButton, playButtonIMG;

function preload(){
    aladdinIMG = loadImage("images/Aladdin.png")
    carpetIMG = loadImage("images/Carpet.png")
    rockIMG = loadImage("images/Rock.png")
    coinIMG = loadImage("images/Coin.png")
    playButtonIMG = loadImage("images/Play.png")
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    edges = createEdgeSprites()

    rockGroup = new Group()
    coinGroup = new Group()

    set_START();
    }

function draw(){
    background("black");

    if(gameState === "START"){
        startState()
    }

    invisble_ground = createSprite(width/2, height-30, width, 30)

    // if(keyDown(UP_ARROW)){ 
    //     aladdin.velocityY = -10; 
    //     // carpet.velocityY = -10;
    // }
    // if(keyDown(LEFT_ARROW)){ 
    //     aladdin.x -= 5; 
    //     carpet.x -= 5;
    // }
    // if(keyDown(RIGHT_ARROW)){ 
    //     aladdin.x += 5; 
    //     carpet.x += 5;
    // }

    // if(keyDown(DOWN_ARROW)){ 
    //     aladdin.y = 5; 
    //     // carpet.y = 5;
    // }

    drawSprites()
}

function rocks(){
    if (frameCount%150===0){
        rock = createSprite(width, Math.round(random(50, height-350)), 20, 20)
        rock.velocityX = -5
        rock.addImage(rockIMG)
        rock.scale = 0.2
        rockGroup.add(rock)
    }
}

function coins(){
    if (frameCount%150===0){
        coin = createSprite(Math.round(random(50, width-100)), -50, 20, 20)
        coin.velocityY = 5
        coin.addImage(coinIMG)
        coin.scale = 0.1
        coinGroup.add(coin)
    }
}

function startState(){
    fill("white")
    textSize(200)
    text("Help Aladdin get all his coins so he can help the poor! \nUse the arrow keys \n'LEFT' \n'RIGHT \n'UP' \nUse the Up arrow to jump and the left and right", width/2-1000, height/2-1000)
    playButton.visible = true
    aladdin1.visible = true
    carpet1.visible = true
    if(mousePressedOver(playButton)){
        gameState = "LEVEL 1"
    }
}

function set_START(){
    playButton = createSprite(width/2, height/2+600)
    playButton.addImage(playButtonIMG)
    playButton.scale = 1.0
    playButton.visible = false

    aladdin1 = createSprite(windowWidth/2-3000, height-1000)
    aladdin1.addImage(aladdinIMG)
    aladdin1.visible = false;
    aladdin1.scale = 5.0

    carpet1 = createSprite(windowWidth/2-250, height-150)
    carpet1.addImage(carpetIMG)
    carpet1.visible = false;
    carpet1.scale = 2.0
}

function Level_1(){
    aladdin = createSprite(windowWidth/2-250, height-195)
    aladdin.addImage(aladdinIMG)
    aladdin.scale = 0.5

    carpet = createSprite(windowWidth/2-250, height-150)
    carpet.addImage(carpetIMG)
    carpet.scale = 0.6
    carpet.debug = true;
    carpet.setCollider("rectangle", 0, -30, carpet.width-100, carpet.height-300)

    aladdin.velocityY += 0.8
    aladdin.collide(carpet)
    carpet.collide(edges)
    aladdin.collide(edges)

    coins()
    rocks()
}