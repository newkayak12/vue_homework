<template>
  <div>
    <h1>
        <span style="cursor: pointer" @click="$router.go(-1)">
          &lt;
        </span>&nbsp;
      &nbsp; 로또 추첨
    </h1>
  </div>
</template>

<script>
// props를 사용하여 문제를 해결하시오
export default {
  name: 'lottery',
  description: '',
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>

<style scoped>

</style>
