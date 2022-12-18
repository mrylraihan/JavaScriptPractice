const grid = document.querySelector('.grid')
const doodler = document.createElement('div')
let doodlerLeftSpace = 50
let startPoint = 150
let doodlerBottomSpace = startPoint
let isGameOver = false
let platformCount = 5
let platforms = []
let upTimerId;
let downTimerId;
let isJumping = true
let isGoingLeft = false
let isGoingRight = false
let leftTimerId
let rightTimerId
 let score = 0

function createDoodler(){
    // this adds the doodler element as a child to the grid div
    grid.appendChild(doodler)
    // adding our css class to our doodler
    doodler.classList.add('doodler')
    doodlerLeftSpace = platforms[0].left
    doodler.style.left = doodlerLeftSpace +'px'
    doodler.style.bottom = doodlerBottomSpace + 'px'
}

class Platform{
    constructor(newPlatBottom){
        this.bottom = newPlatBottom
        this.left = Math.random() * 315
        this.visual = document.createElement('div')

        const visual = this.visual
        visual.classList.add('platform')
        visual.style.left = this.left + 'px'
        visual.style.bottom = this.bottom + 'px'
        grid.appendChild(visual)

    }
}

function createPlatForms(){
    for(let i = 0; i< platformCount; i++){
        let platGap = 600 / platformCount
        let newPlatBottom = 100 + i * platGap
        let newPlatform = new Platform(newPlatBottom)
        platforms.push(newPlatform)
        console.log(platforms);
    }
}
function movePlatforms(){
    if(doodlerBottomSpace> 200){
        platforms.forEach(platform=>{
            platform.bottom -= 4
            let visual = platform.visual
            visual.style.bottom = platform.bottom + 'px'

            if(platform.bottom< 10){
                let firstPlatform = platforms[0].visual
                firstPlatform.classList.remove('platform')
                platforms.shift()
                score++
                console.log(platforms)
                let newPlatform = new Platform(600)
                platforms.push(newPlatform)

            }
        })
    }
}

function jump(){
    clearInterval(downTimerId)
    isJumping = true
    upTimerId = setInterval(function(){
        doodlerBottomSpace += 20
        doodler.style.bottom = doodlerBottomSpace + 'px'
        if(doodlerBottomSpace > startPoint + 200){
            fall()
        }
    }, 20)
}

function fall(){
    clearInterval(upTimerId)
    isJumping = false
    downTimerId = setInterval(function(){
        doodlerBottomSpace -= 5
        doodler.style.bottom = doodlerBottomSpace + 'px'
        if(doodlerBottomSpace <= 0 ){
            gameOver()
        }
        platforms.forEach(platform=>{
            if(
            (doodlerBottomSpace >= platform.bottom) &&
            (doodlerBottomSpace<=platform.bottom + 15 ) &&
            ((doodlerLeftSpace + 60) >= platform.left) &&
            (doodlerLeftSpace<=(platform.left + 85)) && !isJumping
            ){
                console.log('landed');
                startPoint = doodlerBottomSpace
                jump()
            }

        })

    },20)
}

function gameOver(){
    console.log('game over');
    isGameOver = true
    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
    grid.innerHTML = score
    clearInterval(upTimerId)
    clearInterval(downTimerId)
    clearInterval(leftTimerId)
    clearInterval(rightTimerId)
}

function control(e){
    if(e.key==='ArrowLeft'){
        moveLeft()
    }else if(e.key === 'ArrowRight'){
        moveRight()
    }else if(e.key === 'ArrowUp'){
        moveStraight()
    }
}

function moveLeft(){
    if(isGoingRight){
        clearInterval(rightTimerId)
        isGoingRight = false
    }
    isGoingLeft = true
    leftTimerId = setInterval(function(){
        if(doodlerLeftSpace >= 0){
            doodlerLeftSpace -= 5
            doodler.style.left = doodlerLeftSpace + 'px'
        }else moveRight()
    },20)
}

function moveRight(){
    if (isGoingLeft) {
        clearInterval(leftTimerId)
        isGoingLeft = false
    }
    isGoingRight = true
    rightTimerId = setInterval(function(){
        if(doodlerLeftSpace <= 340){
            doodlerLeftSpace += 5
            doodler.style.left = doodlerLeftSpace + 'px'
        }else moveLeft()
    },20)
}

function moveStraight(){
    isGoingRight = false
    isGoingLeft = false
    clearInterval(rightTimerId)
    clearInterval(leftTimerId)
}

function start(){
    if(!isGameOver){
        createPlatForms()
        createDoodler()
        setInterval(movePlatforms,30)
        jump()
        document.addEventListener('keyup', control)
    }
}

// attach to a button
start()
// to see all our platforms and styles
// let divList = document.querySelectorAll('.platform')
// divList.forEach(element => {
//     console.log(element);
// });