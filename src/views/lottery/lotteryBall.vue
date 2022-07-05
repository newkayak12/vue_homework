<template>
  <div>
    <div class="lotteryBall" :class="color">
        {{number}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'lotteryBall',
  description: '',
  props: {
    number: {
      type: [Number],
      default: () => 0,
    },
    color: {
      type: [String],
      default: () => '',
    },

  },
};
</script>

<style scoped>
.lotteryBall{
 border: 1px black solid;
 border-radius: 100%;
}
.red{
  background-color: red;
  color: white;
}
.orange{
  background-color: orange;
  color: white;
}
.yellow{
  background-color: yellow;
  color: black;
}
.green{
  background-color: green;
  color: white;
}
.blue{
  background-color: blue;
  color: white;
}
.navy{
  background-color: navy;
  color: white;
}
.purple{
  background-color: purple;
  color: white;
}
.black{
  background-color: black;
  color: white;
}
.gray{
  background-color: gray;
  color: black;
}
</style>
