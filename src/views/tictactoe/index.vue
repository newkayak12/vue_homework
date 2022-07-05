<template>
  <div>
    <h1>
        <span style="cursor: pointer" @click="$router.go(-1)">
          &lt;
        </span>&nbsp;
      &nbsp; 틱택토
    </h1>
    <h5 v-if="state===STATE.WIN.value||state===STATE.LOSE.value">
      {{Object.values(STATE).filter(i=>i.value===state)
      .map(i=>i.letter)[0]==="LOSE"? "X 가 이겼습니다!":"O 가 이겼습니다!"}}
    </h5>
    {{tictactoe}}
    <template v-if="this.state!==STATE.START.value">
      <button @click="doTicTacToe">{{state===STATE.READY.value?"시작하기":"다시하기"}}</button>
    </template>
    <template v-if="this.state===STATE.START.value">
      <h3 class="right-text"> {{`${turn} 의 턴`}}</h3>
      <table class="tableLine">
        <TrComponent v-for="(item,index) in 3" :key="index"
                     :turn="turn" :row-idx="index"
                     :game-data="tictactoe"
                     @marking="marking"
        />
      </table>
    </template>
  </div>
</template>

<script>
import TrComponent from '@/views/tictactoe/TrComponent';

export default {
  name: 'tic-tac-toe',
  description: '',
  components: { TrComponent },
  beforeMount() {
    this.state = this.STATE.READY.value;
  },
  data() {
    return {
      tictactoe: '',
      state: '',
      turn: '',
    };
  },
  computed: {
    STATE() {
      return {
        READY: { value: 0, letter: 'READY' },
        START: { value: 1, letter: 'START' },
        LOSE: { value: 2, letter: 'LOSE' },
        WIN: { value: 3, letter: 'WIN' },
      };
    },
    USER() {
      return {
        X: { value: 'X', description: 'computer' },
        O: { value: 'O', description: 'user' },
      };
    },
  },
  methods: {
    init() {
      this.tictactoe = [new Array(3).fill(' '), new Array(3).fill(' '), new Array(3).fill(' ')];
    },
    doTicTacToe() {
      const rollTheDice = Math.floor(Math.random() * 3);
      this.turn = rollTheDice % 2 === 0 ? this.USER.O.value : this.USER.X.value;
      this.init();
      this.state = this.STATE.START.value;
    },
    marking(row, column, turn) {
      this.$set(this.tictactoe[row], column, turn);
      // this.tictactoe[row][column] = turn;
      if (this.check()) {
        if (this.turn === this.USER.X.value) {
          this.state = this.STATE.LOSE.value;
        }
        if (this.turn === this.USER.O.value) {
          this.state = this.STATE.WIN.value;
        }
        return;
      }
      if (this.draw()) {
        this.init();
      }

      this.turn = (turn === this.USER.X.value ? this.USER.O.value : this.USER.X.value);
    },
    // eslint-disable-next-line consistent-return
    check() {
      const table = this.tictactoe;

      // 수직
      for (let i = 0; i <= 2; i += 1) {
        if (table[0][i] === table[1][i] && table[1][i] === table[2][i]
          && (table[0][i] !== ' ' && table[1][i] !== ' ' && table[2][i] !== ' ')) {
          console.log('수직');
          return true;
        }
      }
      // 수평
      for (let i = 0; i <= 2; i += 1) {
        if (table[i][0] === table[i][1] && table[i][1] === table[i][2]
          && (table[i][0] !== ' ' && table[i][1] !== ' ' && table[i][2] !== ' ')) {
          return true;
        }
      }
      // 대각
      if ((table[0][0] === table[1][1] && table[1][1] === table[2][2]
          && (table[0][0] !== ' ' && table[1][1] !== ' ' && table[2][2] !== ' '))
        || ((table[0][2] === table[1][1] && table[1][1] === table[2][0]
          && table[0][2] !== ' ' && table[1][1] !== ' ' && table[2][0] !== ' '))) {
        return true;
      }
    },
    draw() {
      let isDraw = true;
      this.tictactoe.forEach((v) => {
        v.forEach((i) => {
          if (i !== ' ') {
            isDraw = isDraw && true;
          }
          if (i === ' ') {
            isDraw = isDraw && false;
          }
        });
      });

      return isDraw;
    },
  },
};
</script>

<style scoped>
.tableLine{
  border: 1px black solid;
  border-collapse: collapse;
  width: 300px;
  height: 300px;
}
.right-text{
  width: 300px;
  text-align: right;
}

</style>
