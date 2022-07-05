<template>
  <tr class="trLine">
    <TdComponent v-for="(item, index) in 3" :key="index"
                 :turn="turn" :row-idx="rowIdx" :column-idx="index"
                 :game-data="gameData"
                 @marking="marking"
    />
  </tr>
</template>

<script>
import TdComponent from '@/views/tictactoe/TdComponent';

export default {
  name: 'TrComponent',
  description: '',
  components: { TdComponent },
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
  },
  methods: {
    marking(row, column, turn) {
      this.$emit('marking', row, column, turn);
    },
  },
};
</script>

<style scoped>
.trLine{
  border: 1px black solid;

}
</style>
