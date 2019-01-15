<template>
      <div id="wrapper">
        <div id="paper">
          <div id="cursor"></div>
          <div class="dot" id="dot1"></div>
          <div class="dot" id="dot2"></div>
          <div class="dot" id="dot3"></div>
          <div id="vertical-margin"></div>
          <div id="horizontal-margins">
            <div class="horizontal-margin">0</div>
            <div class="horizontal-margin">1</div>
            <div class="horizontal-margin">2</div>
            <div class="horizontal-margin">3</div>
            <div class="horizontal-margin">4</div>
            <div class="horizontal-margin">5</div>
            <div class="horizontal-margin">6</div>
            <div class="horizontal-margin">7</div>
            <div class="horizontal-margin">8</div>
            <div class="horizontal-margin">9</div>
            <div class="horizontal-margin">10</div>
            <div class="horizontal-margin">11</div>
            <div class="horizontal-margin">12</div>
            <div class="horizontal-margin">13</div>
            <div class="horizontal-margin">14</div>
            <div class="horizontal-margin">15</div>
            <div class="horizontal-margin">16</div>
            <div class="horizontal-margin">17</div>
            <div class="horizontal-margin">18</div>
            <div class="horizontal-margin">19</div>
            <div class="horizontal-margin">20</div>
            <div class="horizontal-margin">21</div>
            <div class="horizontal-margin">22</div>
            <div class="horizontal-margin">23</div>
            <div class="horizontal-margin">24</div>
            <div class="horizontal-margin">25</div>
            <div class="horizontal-margin">26</div>
            <div class="horizontal-margin">27</div>
            <div class="horizontal-margin">28</div>
            <div class="horizontal-margin">29</div>
            <div class="horizontal-margin">30</div>
          </div>
          <div id="letters"></div>
        </div>

        <a class="ask" href="">提问</a>
      </div>
</template>

<script>
    import Public from '../assets/css/public.css';
    export default {
      name: "ask",
      components:{Public},
      mounted(){
        // window.onload=function(){
        //   const getEl = el => document.getElementById(el)
        //   const setStyle = (el, prop, val) => el.style[prop] = val
        //   const setAttr = (el, attr, val) => el.setAttribute(attr, val)
        //   const addClass = (el, className) => el.classList.add(className)
        //   const removeClass = (el, className) => el.classList.remove(className)
        //   const resetStyles = el => el.removeAttribute('style')
        //   const removeAllChildren = el => {
        //     while (el.hasChildNodes()) el.removeChild(el.lastChild)
        //   }
        //
        //   const WRAPPER = getEl('wrapper'),
        //     PAPER = getEl('paper'),
        //     LETTERS = getEl('letters'),
        //     CURSOR = getEl('cursor')
        //
        //   let HAS_STARTED_TYPING = false,
        //     LAST_TYPE_TIMESTAMP = 0
        //
        //   const MIN_COL = 9,
        //     MAX_COL = (LETTERS.clientWidth / 10) - 2,
        //     MIN_ROW = 4,
        //     MAX_ROW = 34,
        //     LETTER_WIDTH = 10,
        //     LETTER_HEIGHT = 20,
        //     COLORS = {
        //       BLUE: 'rgb(3,169,244)',
        //       RED: 'rgb(239,83,80)',
        //       PURPLE: 'rgb(171,71,188)',
        //       GREEN: 'rgb(67,160,71)',
        //       YELLOW:' rgb(253,216,53)'
        //     }
        //
        //   const STATE = {
        //     range: 0.1,
        //     pos: {
        //       row: MIN_ROW,
        //       col: MIN_COL
        //     }
        //   }
        //
        //   const getRandColor = () => {
        //     const rand = Math.floor((Math.random() * 5) + 1)
        //     switch(rand){
        //       case 1:
        //         return COLORS.BLUE
        //       case 2:
        //         return COLORS.RED
        //       case 3:
        //         return COLORS.PURPLE
        //       case 4:
        //         return COLORS.GREEN
        //       case 5:
        //         return COLORS.YELLOW
        //     }
        //   }
        //
        //   const getRandPosOffScreen = () => {
        //     const lowX1 = 0 - (window.innerWidth * 0.3),
        //       highX1 = 0 - (window.innerWidth * 0.2),
        //       lowY1 = 0,
        //       highY1 = window.innerHeight,
        //
        //       lowX2 = window.innerWidth * 1.2,
        //       highX2 = window.innerWidth * 1.3,
        //       lowY2 = 0,
        //       highY2 = window.innerHeight,
        //
        //       lowX3 = 0,
        //       highX3 = window.innerWidth,
        //       lowY3 = 0 - (window.innerHeight * 0.3),
        //       highY3 = 0 - (window.innerHeight * 0.2),
        //
        //       lowX4 = 0,
        //       highX4 = window.innerWidth,
        //       lowY4 = window.innerHeight * 1.2,
        //       highY4 = window.innerHeight * 1.3
        //
        //     const rand = Math.floor((Math.random() * 4) + 1)
        //
        //     let x = 0,
        //       y = 0
        //
        //     switch(rand){
        //       case 1:
        //         x = Math.floor(Math.random() * (highX1 - lowX1 + 1)) + lowX1
        //         y = Math.floor(Math.random() * (highY1 - lowY1)) + lowY1
        //         break
        //       case 2:
        //         x = Math.floor(Math.random() * (highX2 - lowX2 + 1)) + lowX2
        //         y = Math.floor(Math.random() * (highY2 - lowY2)) + lowY2
        //         break
        //       case 3:
        //         x = Math.floor(Math.random() * (highX3 - lowX3 + 1)) + lowX3
        //         y = Math.floor(Math.random() * (highY3 - lowY3)) + lowY3
        //         break
        //       case 4:
        //         x = Math.floor(Math.random() * (highX4 - lowX4 + 1)) + lowX4
        //         y = Math.floor(Math.random() * (highY4 - lowY4)) + lowY4
        //         break
        //     }
        //
        //     return { x, y }
        //   }
        //
        //   const setLetterPos = (letter, x, y) => {
        //     setStyle(letter, 'left', x + 'px')
        //     setStyle(letter, 'top', y + 'px')
        //   }
        //
        //   const setLetterColor = letter => {
        //     const color = getRandColor()
        //     setStyle(letter, 'color', color)
        //   }
        //
        //   const createLetter = key => {
        //     const letter = document.createElement('div')
        //     letter.innerHTML = key
        //     setLetterColor(letter)
        //     addClass(letter, 'off-screen')
        //     addClass(letter, 'letter')
        //     return letter
        //   }
        //
        //   const setInitialLetterPos = letter => {
        //     const pos = getRandPosOffScreen()
        //     setLetterPos(letter, pos.x, pos.y)
        //   }
        //
        //   const isValidLetter = e => {
        //     return !e.ctrlKey
        //       && e.key !== 'Enter'
        //       && !(e.key === ' ' && STATE.pos.col === MIN_COL)
        //   }
        //
        //   const isEndOfPage = () => {
        //     return STATE.pos.row === MAX_ROW && STATE.pos.col === MAX_COL
        //   }
        //
        //   const initializeLetter = key => {
        //     const letter = createLetter(key)
        //     setInitialLetterPos(letter)
        //     LETTERS.appendChild(letter)
        //     return letter
        //   }
        //
        //   const bumpLetterPos = isUp => {
        //     if(isUp){
        //       if(STATE.pos.col < MAX_COL){
        //         STATE.pos.col = Math.min(STATE.pos.col + 1, MAX_COL)
        //       }
        //       else{
        //         STATE.pos.col = MIN_COL
        //         STATE.pos.row = Math.min(STATE.pos.row + 1, MAX_ROW)
        //       }
        //     }
        //     else{
        //       if(STATE.pos.col > MIN_COL){
        //         STATE.pos.col = Math.max(STATE.pos.col - 1, MIN_COL)
        //       }
        //       else{
        //         STATE.pos.col = MAX_COL
        //         STATE.pos.row = Math.max(STATE.pos.row - 1, MIN_ROW)
        //       }
        //     }
        //   }
        //
        //   const bumpCursorPos = () => {
        //     const x = STATE.pos.col * LETTER_WIDTH + CURSOR.clientWidth,
        //       y = STATE.pos.row * LETTER_HEIGHT
        //     setLetterPos(CURSOR, x, y)
        //   }
        //
        //   const determineFinalLetterPos = () => {
        //     let x = 0,
        //       y = 0
        //     if(STATE.pos.col <= MAX_COL){
        //       x = STATE.pos.col * LETTER_WIDTH
        //       y = STATE.pos.row * LETTER_HEIGHT
        //     }
        //     else{
        //       x = STATE.pos.col * LETTER_WIDTH
        //       y = (STATE.pos.row + 1) * LETTER_HEIGHT
        //     }
        //
        //     bumpLetterPos(true)
        //     bumpCursorPos()
        //
        //     return {x, y}
        //   }
        //
        //   const setFinalLetterPos = letter => {
        //     const pos = determineFinalLetterPos()
        //     setLetterPos(letter, pos.x, pos.y)
        //   }
        //
        //   const getLastLetter = () => {
        //     const letters = LETTERS.childNodes
        //     let letter = null
        //     for(let i = letters.length - 1; i >= 0; i--){
        //       if(!letters[i].dataset.removed){
        //         letter = letters[i]
        //         break
        //       }
        //     }
        //     return letter
        //   }
        //
        //   const setLeavingLetterPos = letter => {
        //     const pos = getRandPosOffScreen()
        //     setLetterPos(letter, pos.x, pos.y)
        //     addClass(letter, 'off-screen')
        //   }
        //
        //   const removeLetter = () => {
        //     const letter = getLastLetter(),
        //       color = getRandColor()
        //     if(letter === null) return 0
        //     LAST_TYPE_TIMESTAMP = moment()
        //     setStyle(letter, 'color', color)
        //     setLeavingLetterPos(letter)
        //     setAttr(letter, 'data-removed', true)
        //     bumpLetterPos(false)
        //     bumpCursorPos()
        //     setTimeout(() => {
        //       LETTERS.removeChild(letter)
        //     }, 500)
        //   }
        //
        //   const handleAlternateKeys = e => {
        //     switch(e.keyCode){
        //       case 8: // Backspace
        //         removeLetter()
        //         break
        //       case 9: // Tab
        //         e.preventDefault()
        //         break
        //       case 13: // Enter
        //         break
        //     }
        //   }
        //
        //   const typeLetter = key => {
        //     LAST_TYPE_TIMESTAMP = moment()
        //     const letter = initializeLetter(key)
        //     setFinalLetterPos(letter)
        //     setTimeout(() => {
        //       removeClass(letter, 'off-screen')
        //       setTimeout(() => setStyle(letter, 'color', 'black'), 500)
        //     }, 13)
        //   }
        //
        //   let typeInterval = null
        //   const typeSentence = sentence => {
        //     let i = 0
        //     typeInterval = setInterval(() => {
        //       typeLetter(sentence[i])
        //       if(i === sentence.length - 1) clearInterval(typeInterval)
        //       i++
        //     }, 200)
        //   }
        //
        //   const onInitialType = () => {
        //     STATE.pos.row = MIN_ROW
        //     STATE.pos.col = MIN_COL
        //     removeAllChildren(LETTERS)
        //     clearInterval(typeInterval)
        //     HAS_STARTED_TYPING = true
        //   }
        //
        //   const checkIfTyping = () => {
        //     const timeToLastType = moment() - LAST_TYPE_TIMESTAMP
        //     if(!PAPER.classList.contains('typing') && timeToLastType <= 300){
        //       addClass(PAPER, 'typing')
        //     }
        //     else if(PAPER.classList.contains('typing') && timeToLastType > 300){
        //       removeClass(PAPER, 'typing')
        //     }
        //   }
        //
        //   window.onkeypress = e => {
        //     if(!HAS_STARTED_TYPING) onInitialType()
        //     if(!isEndOfPage() && isValidLetter(e)) typeLetter(e.key)
        //   }
        //
        //   window.onkeydown = e => {
        //     if(!HAS_STARTED_TYPING) onInitialType()
        //     handleAlternateKeys(e)
        //   }
        //
        //   window.onload = () => {
        //     typeSentence('Start typing something!')
        //     setInterval(() => checkIfTyping(), 300)
        //   }
        //
        // }

        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.0/moment.min.js';
        document.body.appendChild(s);

        const s2 = document.createElement('script');
        s2.type = 'text/javascript';
        s2.src = '../../static/js/ask.js';
        document.body.appendChild(s2);

      }
    }
</script>

<style scoped>
  html, body, #wrapper {
    font-family: 'Roboto Mono', sans-serif;
    height: 100%;
    margin: 0px;
    padding: 0px;
    width: 100%;
  }

  #wrapper::-webkit-scrollbar {
    width: 4px;
  }
  #wrapper::-webkit-scrollbar-thumb {
    background-color: white;
  }

  #wrapper {
    height:100%;
    background: rgba(231,223,183,0.8);  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, rgba(231,223,183,0.8), rgba(92,162,92,0.8));  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, rgba(231,223,183,0.8), rgba(92,162,92,0.8)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
  }
  #wrapper #paper {
    background-color: white;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;
    height: 700px;
    left: 50%;
    margin: 50px 0px;
    overflow: hidden;
    position: absolute;
    top: 0px;
    transform: translateX(-50%);
    width: 500px;
  }
  /*#wrapper #paper.typing {*/
    /*animation: rumble 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;*/
  /*}*/
  #wrapper #paper #cursor {
    animation: blink 1.2s linear infinite;
    background-color:rgba(92,162,92,0.8);
    height: 20px;
    left: 90px;
    position: absolute;
    top: 80px;
    width: 2px;
  }
  #wrapper #paper .dot {
    background-color:rgba(92,162,92,0.8);
    border-radius: 1000px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px inset, rgba(0, 0, 0, 0.23) 0px 3px 10px inset;
    height: 25px;
    left: 25px;
    position: absolute;
    width: 25px;
    z-index: 2;
  }
  #wrapper #paper .dot#dot1 {
    top: 70px;
  }
  #wrapper #paper .dot#dot2 {
    top: 340px;
  }
  #wrapper #paper .dot#dot3 {
    top: 600px;
  }
  #wrapper #paper #vertical-margin {
    background-color: rgba(211, 47, 47, 0.5);
    height: 100%;
    left: 80px;
    position: absolute;
    top: 0px;
    width: 2px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin {
    background-color: rgba(3, 169, 244, 0.5);
    color: transparent;
    font-size: 0px;
    height: 2px;
    left: 0px;
    position: absolute;
    top: 80px;
    width: 100%;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(0) {
    top: 60px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(1) {
    top: 80px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(2) {
    top: 100px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(3) {
    top: 120px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(4) {
    top: 140px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(5) {
    top: 160px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(6) {
    top: 180px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(7) {
    top: 200px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(8) {
    top: 220px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(9) {
    top: 240px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(10) {
    top: 260px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(11) {
    top: 280px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(12) {
    top: 300px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(13) {
    top: 320px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(14) {
    top: 340px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(15) {
    top: 360px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(16) {
    top: 380px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(17) {
    top: 400px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(18) {
    top: 420px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(19) {
    top: 440px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(20) {
    top: 460px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(21) {
    top: 480px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(22) {
    top: 500px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(23) {
    top: 520px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(24) {
    top: 540px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(25) {
    top: 560px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(26) {
    top: 580px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(27) {
    top: 600px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(28) {
    top: 620px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(29) {
    top: 640px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(30) {
    top: 660px;
  }
  #wrapper #paper #horizontal-margins .horizontal-margin:nth-child(31) {
    top: 680px;
  }
  #wrapper #paper #letters {
    backface-visibility: hidden;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
  }


  @keyframes blink {
    0%, 49% {
      opacity: 1;
    }
    50%, 99% {
      opacity: 0;
    }
  }
  @keyframes rumble {
    10%, 90% {
      transform: translateX(-50%) translate3d(-3px, 0, 0);
    }
    20%, 80% {
      transform: translateX(-50%) translate3d(4px, 0, 0);
    }
    30%, 50%, 70% {
      transform: translateX(-50%) translate3d(-2px, 0, 0);
    }
    40%, 60% {
      transform: translateX(-50%) translate3d(4px, 0, 0);
    }
  }
  .ask{
    position: absolute;
    right:200px;
    bottom:0px;
    font-size:20px;
    padding:7px 20px;
    color:rgb(231,223,183);
    background: rgb(92,162,92);
    border-radius: 10px;
  }

</style>

<style>
  #wrapper #paper.typing {
    animation: rumble 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  }

  .letter {
    display: inline-block;
    font-weight: 300;
    height: 20px;
    margin-left: 2px;
    position: absolute;
    text-align: center;
    transition: all 0.5s, color 0.1s;
    width: 10px;
  }
  .letter.off-screen {
    font-weight: 700;
    transform: scale3d(10, 10, 10) rotate(1080deg);
  }

</style>
