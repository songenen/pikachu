import string from 'css.js'

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


