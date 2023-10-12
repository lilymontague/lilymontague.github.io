const main=document.querySelector(".main")
const ball=document.querySelector(".ball")

const main2=document.querySelector(".main2")
const ball2=document.querySelector(".ball2")

let leftright=Math.floor(Math.random()*2)
let right = leftright?true:false 

let updown=Math.floor(Math.random()*2)
let up = updown?true:false 
let velocity = 1

let leftright2=Math.floor(Math.random()*2)
let right2 = leftright2?true:false 

let updown2=Math.floor(Math.random()*2)
let up2 = updown2?true:false 
let velocity2 = 1

let ballmove=setInterval(()=>{
    let ballbounds=ball.getBoundingClientRect()
    let boardbounds=main.getBoundingClientRect()
    let ballboundsleft=parseInt(ballbounds.left)
    let ballboundsright=parseInt(ballbounds.right)
    let ballboundstop=parseInt(ballbounds.top)
    let ballboundsbottom=parseInt(ballbounds.bottom)
    let balltop=Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("top")))
    let ballleft=Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("left")))

    if(right && up)
    {
        ball.style.top=balltop-velocity+"px"
        ball.style.left=ballleft+velocity+"px"
    }

    if(!right && up)
    {
        ball.style.top=balltop-velocity+"px"
        ball.style.left=ballleft-velocity+"px"
    }

    if(right && !up)
    {
        ball.style.top=balltop+velocity+"px"
        ball.style.left=ballleft+velocity+"px"
    }

    if(!right && !up)
    {
        ball.style.top=balltop+velocity+"px"
        ball.style.left=ballleft-velocity+"px"
    }

    if(ballboundstop<=boardbounds.top){
        leftright=Math.floor(Math.random()*2)
        right=leftright?true:false
        up=false
    }

    if(ballboundsbottom>=boardbounds.bottom){
        leftright=Math.floor(Math.random()*2)
        right=leftright?true:false
        up=true
    }

    if(ballboundsright>=boardbounds.right){
        right=false
       updown=Math.floor(Math.random()*2)
       up=updown?true:false
    }

    if(ballboundsleft<=boardbounds.left){
        right=true
        updown=Math.floor(Math.random()*2)
        up=updown?true:false
     }
},1)

let ballmove2=setInterval(()=>{
    let ballbounds2=ball2.getBoundingClientRect()
    let boardbounds2=main2.getBoundingClientRect()
    let ballboundsleft2=parseInt(ballbounds2.left)
    let ballboundsright2=parseInt(ballbounds2.right)
    let ballboundstop2=parseInt(ballbounds2.top)
    let ballboundsbottom2=parseInt(ballbounds2.bottom)
    let balltop2=Math.floor(parseInt(window.getComputedStyle(ball2).getPropertyValue("top")))
    let ballleft2=Math.floor(parseInt(window.getComputedStyle(ball2).getPropertyValue("left")))

    if(right2 && up2)
    {
        ball2.style.top=balltop2-velocity2+"px"
        ball2.style.left=ballleft2+velocity2+"px"
    }

    if(!right2 && up2)
    {
        ball2.style.top=balltop2-velocity2+"px"
        ball2.style.left=ballleft2-velocity2+"px"
    }

    if(right2 && !up2)
    {
        ball2.style.top=balltop2+velocity2+"px"
        ball2.style.left=ballleft2+velocity2+"px"
    }

    if(!right2 && !up2)
    {
        ball2.style.top=balltop2+velocity2+"px"
        ball2.style.left=ballleft2-velocity2+"px"
    }

    if(ballboundstop2<=boardbounds2.top){
        leftright2=Math.floor(Math.random()*2)
        right2=leftright2?true:false
        up2=false
    }

    if(ballboundsbottom2>=boardbounds2.bottom){
        leftright2=Math.floor(Math.random()*2)
        right2=leftright2?true:false
        up2=true
    }

    if(ballboundsright2>=boardbounds2.right){
        right2=false
       updown2=Math.floor(Math.random()*2)
       up2=updown2?true:false
    }

    if(ballboundsleft2<=boardbounds2.left){
        right2=true
        updown2=Math.floor(Math.random()*2)
        up2=updown2?true:false
     }
},1)

// code to make an element the size of the screen to measure the screen size and print it
var winHeight = document.getElementById('h').offsetHeight;
function getBrowserSize() {
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = 0;
    div.style.left = 0;
    div.style.width = '100%';
    div.style.height = '100%';
    document.documentElement.appendChild(div);
    var results = {
        width: div.offsetWidth,
        height: div.offsetHeight
    };
    div.parentNode.removeChild(div); // remove the `div`
    return results;
}

console.log(getBrowserSize());