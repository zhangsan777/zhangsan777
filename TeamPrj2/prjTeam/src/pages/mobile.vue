<template>
  <div class="zong">
    <headers></headers>
    <div class="content">
      <h1 class="heading">移动端案例展示</h1>
      <p class="description">WebApp</p><a class="card" href="#!">
      <div class="front" style="background-image: url('../../static/images/dd.jpg');background-size:100% 100%;">
      </div>
      <div class="back">
        <div>
          <p>当当陪你阅览经典图书</p>
          <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
          <router-link to="./show">
            <button class="button">当当App</button>
          </router-link>
    </div>
      </div></a><a class="card" href="#!">
      <div class="front" style="background-image: url('../../static/images/qy.png');background-size:100% 100%;">
      </div>
      <div class="back">
        <div>
          <p>出境游_自由行_自助游攻略_旅游攻略分享社区</p>
          <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
          <router-link to="./show">
            <button class="button">穷游APP</button>
          </router-link>
        </div>
      </div></a><a class="card" href="#!">
      <div class="front" style="background-image: url('../../static/images/qn.png');background-size:100% 100%;">
      </div>
      <div class="back">
        <div>
          <p>我等你这么久，你去哪儿了？</p>
          <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
          <router-link to="./show">
            <button class="button">去哪儿APP</button>
          </router-link>
        </div>
      </div></a><a class="card" href="#!">
      <div class="front" style="background-image: url('../../static/images/mgj.jpg');background-size:100% 100%;">
      </div>
      <div class="back">
        <div>
          <p>蘑菇街,我的买手街</p>
          <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
          <router-link to="./show">
            <button class="button">蘑菇街APP</button>
          </router-link>
        </div>
      </div></a><a class="card" href="#!">
      <div class="front" style="background-image: url('../../static/images/ymx.jpg');background-size:100% 100%;">
      </div>
      <div class="back">
        <div>
          <p>一站放心购全球</p>
          <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
          <router-link to="./show">
            <button class="button">亚马逊APP</button>
          </router-link>
        </div>
      </div></a><a class="card" href="#!">
      <div class="front" style="background-image: url('../../static/images/sn.jpg');background-size:100% 100%;">
      </div>
      <div class="back">
        <div>
          <p>多快好省 只为品质生活</p>
          <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
          <router-link to="./show">
            <button class="button">京东APP</button>
          </router-link>
        </div>
      </div></a>
    </div>
  </div>
</template>

<script>
    import Headers from "./headers";
    export default {
      name: "mobile",
      components: {Headers},
      mounted(){

      }
    }
</script>

<style scoped>

  *:before, *:after {
    box-sizing: border-box;
  }
  .zong{
    overflow: hidden;
  }
  .back p{
    margin-bottom:20px;
  }

  .content {
    background-attachment: fixed;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
    color: #333;
    font-family: "Nunito Sans", sans-serif;
    display: flex;
    margin: 5% auto 0;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;
  }

  .heading {
    width: 100%;
    margin-left: 1rem;
    font-weight: 900;
    font-size: 1.618rem;
    text-transform: uppercase;
    letter-spacing: .1ch;
    line-height: 1;
    padding-bottom: .5em;
    margin-bottom: 1rem;
    position: relative;
    margin-top:20px;
    color:#000;
    text-align: left;
  }
  .heading:after {
    display: block;
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #1a9be6, #1a57e6);
    bottom: 0;
  }

  .description {
    width: 100%;
    margin-top: 0;
    margin-left: 1rem;
    margin-bottom: 20px;
  }

  .card {
    color: inherit;
    cursor: pointer;
    width: calc(33% - 2rem);
    min-width: calc(33% - 2rem);
    height: 460px;
    min-height: 400px;
    perspective: 1000px;
    margin: 1rem;
    position: relative;
  }
  @media screen and (max-width: 800px) {
    .card {
      width: calc(50% - 2rem);
    }
  }
  @media screen and (max-width: 500px) {
    .card {
      width: 100%;
    }
  }

  .front,
  .back {
    display: flex;
    border-radius: 6px;
    background-position: center;
    background-size: cover;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: ease-in-out 600ms;
  }

  .front {
    background-size: cover;
    padding: 2rem;
    font-size: 1.618rem;
    font-weight: 600;
    color: #fff;
    overflow: hidden;
    font-family: Poppins, sans-serif;
  }
  .front:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .card:hover .front {
    transform: rotateY(180deg);
  }
  .card:nth-child(even):hover .front {
    transform: rotateY(-180deg);
  }

  .back {
    background: #fff;
    transform: rotateY(-180deg);
    padding: 0 2em;
  }
  .card:hover .back {
    transform: rotateY(0deg);
  }
  .card:nth-child(even) .back {
    transform: rotateY(180deg);
  }
  .card:nth-child(even):hover .back {
    transform: rotateY(0deg);
  }

  .button {
    transform: translateZ(40px);
    cursor: pointer;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    font-weight: bold;
    color: #fff;
    padding: .5em 1em;
    border-radius: 100px;
    font: inherit;
    background: linear-gradient(135deg, #1a9be6, #1a57e6);
    border: none;
    position: relative;
    transform-style: preserve-3d;
    transition: 300ms ease;
  }
  .button:before {
    transition: 300ms ease;
    position: absolute;
    display: block;
    content: '';
    transform: translateZ(-40px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    border-radius: 100px;
    left: 10px;
    top: 16px;
    box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
    background-color: rgba(26, 87, 230, 0.25);
  }
  .button:hover {
    transform: translateZ(55px);
  }
  .button:hover:before {
    transform: translateZ(-55px);
  }
  .button:active {
    transform: translateZ(20px);
  }
  .button:active:before {
    transform: translateZ(-20px);
    top: 12px;
  }
</style>
