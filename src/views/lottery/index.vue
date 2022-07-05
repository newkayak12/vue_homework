<template>
<div>
  <h1>
        <span style="cursor: pointer" @click="$router.go(-1)">
          &lt;
        </span>&nbsp;
    &nbsp; 로또 추첨
  </h1>
  <button @click="doLottery"> {{numbers.length===0?"추첨":"재추첨"}} </button>
  <div class="lotteryScene">
    <lottery-ball v-for="item in numbers" :key="item" :number="item" :color="coloring(item)"/>
  </div>
</div>
</template>

<script>
import lotteryBall from '@/views/lottery/lotteryBall';

export default {
  name: 'lottery',
  description: '',
  components: {
    lotteryBall,
  },
  data() {
    return {
      numbers: [],
    };
  },
  methods: {
    doLottery() {
      this.numbers = [];
      const set = new Set();
      while (set.size <= 6) {
        const numbers = Math.floor(Math.random() * 46);
        console.log(numbers);
        set.add(numbers);
      }
      console.log(set);
      const ref = Array.from(set);
      const interval = setInterval(() => {
        this.numbers.push(ref.pop());
        if (this.numbers.length >= 6) {
          clearInterval(interval);
        }
      }, 1000);
    },
    coloring(number) {
      if (number > 40) {
        return 'gray';
      }
      if (number > 35) {
        return 'black';
      }
      if (number > 30) {
        return 'purple';
      }
      if (number > 25) {
        return 'navy';
      }
      if (number > 20) {
        return 'blue';
      }
      if (number > 15) {
        return 'green';
      }
      if (number > 10) {
        return 'yellow';
      }
      if (number > 5) {
        return 'orange';
      }
      return 'red';
    },

  },
};
</script>

<style scoped>
.lotteryScene{
  padding: 2rem;
  display: flex;
  width: 500px;
  justify-content: space-around;
}

</style>
