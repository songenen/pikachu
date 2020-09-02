const string =`
.skin *{box-sizing: border-box;margin:0;padding: 0;}
.skin *::before{box-sizing: border-box}
.skin *::after{box-sizing: border-box}
.skin{
    background: #ffe600;
    min-height: 50vh;
    position:relative;
    }

.skin{
    position: relative;
}

.nose{
    border:10px solid black;
    width: 10px;
    height: 10px;
    position: relative;
    left:50%;
    top: 150px;
    margin-left: -10px;
    border-color: black transparent transparent;
    border-bottom: none;
    z-index: 10;
}
@keyframes wave{
    0%{
transform: rotate(0deg);
    }
    33%{
        transform: rotate(9deg);

    }
    66%{
        transform: rotate(-9deg);

    }
    100%{
        transform: rotate(0deg);

    }
}
.nose:hover{
    transform-origin: 50% 100%;
    animation: wave 500ms infinite linear;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background:black;
}
.eye{
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
     border-radius: 50%;
}
.eye::before{
    content:'';
    display: block;
    border:1px solid black;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background: #fff;
    position: relative;
    left: 12px;
    top: 2px;
}
.eye.left{
    transform: translateX(-100px);

}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -20px;
    z-index: 1;
}
.mouth .up .lip{
    border: 3px solid black;
    height: 32px;
    width: 100px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 150%;
    transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right{
    border-radius: 0 0 150% 0;
    transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth .up .lip.left::before{
    right: -6px;

}
.mouth .up .lip.right::before{
    left: -6px;
}
.mouth .down{
    height: 200px;
    position: absolute;
    top: 11px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 2px solid black;
    width: 100%;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 150% 150%;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
height: 300px;
width: 200px;
position: absolute;
bottom: -140px;
background: #ff485f;
left: 50%;
margin-left: -100px;
border-radius: 120% 120% 0 0;
}
.face{
    position: absolute;
    left: 50%;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    border: 2px solid black;
}
.face > img{
    position: absolute;
    top: 50%;
    left: 50%;

}
.face.left > img{
    transform:rotateY(180deg);
    transform-origin: 0 0;
}
.face.left{
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
}
`

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
let n = 1
let id
let time = 30

const player={
  init:()=>{
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    player.play()
    player.bindEvents()
  },
  events: {
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents:()=>{
    for(let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run : () => {
    n += 1
    if (n > string.length) {
      window.clearInterval(id)
      return
    }
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight
  },
   play : () => {
    id =setInterval(player.run, time)
  },
  pause : () => {
    window.clearInterval(id)
  },
   slow : () => {
     player.pause()
    time = 200
    player.play()
  },
   normal : () => {
     player.pause()
    time = 30
    player.play()
  },
   fast : () => {
     player.pause()
    time = 0
    player.play()
  }
}

player.init()


