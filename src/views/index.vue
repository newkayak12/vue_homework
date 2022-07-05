<template>
  <div style="background-color: black;  width: 100vw; height: 100vh;">
    <div style=" width: 100vw; display: flex; justify-content: center">
      <pre :style="`color: rgb${value};`">
       _   _                       _____  _               _
      | | | |                     /  ___|| |             | |
      | | | | _   _   ___         \ `--. | |_  _   _   __| | _   _
      | | | || | | | / _ \         `--. \| __|| | | | / _` || | | |
      \ \_/ /| |_| ||  __/        /\__/ /| |_ | |_| || (_| || |_| |
       \___/  \__,_| \___|        \____/  \__| \__,_| \__,_| \__, |
                           ______                             __/ |
                          |______|                           |___/
    </pre>
    </div>
    <ol>
      <router-link tag="li" to="/multiplicationTable/">구구단 (6.19 ~ 6.26) </router-link>
<!--      event-->
      <router-link tag="li" to="/findWord/">가사 속 단어 찾기 (6.26 ~ 7.3)</router-link>
<!--      computed-->
      <router-link tag="li" to="/trafficLight/">신호등 (7.3 ~ 7.10) </router-link>
<!--      watch, ref -->
      <router-link tag="li" to="/endTalk/">끝말잇기  (7.10 ~ 7.17) </router-link>
<!--  lifeCycleHook, watch-->
      <router-link tag="li" to="/numberBaseball/">숫자 야구  (7.17 ~ 7.24)  </router-link>
<!--      component, props-->
      <router-link tag="li" to="/lottery/">로또 추첨기 (7.24 ~ 7.31)</router-link>
<!--      lifeCycleHook, component, emit-->
      <router-link tag="li" to="/tictactoe/">틱택토 (7.31 ~ 8.07)</router-link>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Main',
  beforeMount() {
    setInterval(() => {
      const r = Math.ceil(Math.random() * 255);
      const g = Math.ceil(Math.random() * 255);
      const b = Math.ceil(Math.random() * 255);
      this.value = `(${r}, ${g}, ${b})`;
    }, 50);
  },
  data() {
    return {
      value: '',
    };
  },

};
</script>
<style>
li{
  margin-bottom: 10px;
  cursor: pointer;
  color: gray;
}
li:hover{
  color: white;
  font-weight: 600;
  font-size: 20px;
}
pre{
  font-weight: 600;
}
</style>
