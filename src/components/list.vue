<template>
  <ul>
    <li v-for="x in type">{{ x }}</li>
  </ul>
</template>



<script>
  export default{
      name: 'ElUl',
      data() {
          return {

          }
      },
      props: {
          type: Array
      }
  }

</script>


<style scoped>

  ul li {
    list-style: none;
    color: aqua;
  }

</style>
