<template>
  <td class="tdLine" @click="draw">{{gameData[rowIdx][columnIdx]}}</td>
</template>

<script>
export default {
  name: 'TdComponent',
  description: '',
  props: {
    turn: {
      type: [String],
      required: true,
    },
    gameData: {
      type: [Array],
      required: true,
    },
    rowIdx: {
      type: [Number],
      required: true,
    },
    columnIdx: {
      type: [Number],
      required: true,
    },
  },
  data() {
    return {
      mark: '',
    };
  },
  methods: {
    draw() {
      if (this.mark !== '') {
        return;
      }
      this.mark = this.turn;
      this.$emit('marking', this.rowIdx, this.columnIdx, this.turn);
    },
  },

};
</script>

<style scoped>
.tdLine{
  border:1px black solid;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 32px;
}
</style>
