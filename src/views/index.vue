<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 3" :key="item">
      </el-carousel-item>
    </el-carousel>
    <el-button @click="open" type="info">
      登录
    </el-button>
    <el-button type="warning">
      <a href="#/register">注册</a>
    </el-button>


    <hr>
    <el-ul :type="xx"></el-ul>

  </div>
</template>

<script>

  import ElUl from '../components/list'

export default {
  name: 'index',
  components: {ElUl},
  data () {
    return {
      msg:"Welcome TO yourself Account",
      xx: [1, 2, 5, 3]
    }
  },
  methods: {
    open() {
      const h = this.$createElement;
      this.$notify({
        message: h('i', { style: 'color: blue'}, '您没有注册，请先注册！'),
        offset: 700
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    margin-top: 40%;
  }
  /*轮播图*/
  .el-carousel__item:nth-child(2n){
    background:url("../assets/carousel1.jpg") no-repeat center;
  }
  .el-carousel__item:nth-child(2n+1){
    background:url("../assets/carousel3.jpg") no-repeat center;
  }
  .el-carousel__item:nth-child(3){
    background:url("../assets/carousel2.jpg") no-repeat center;
  }
  /*button*/
  .el-button{
    width: 100%;
    margin-bottom: 20px;
  }
  .el-button+.el-button {
    margin-left: 0px;
  }
</style>
