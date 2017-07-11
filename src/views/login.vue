<template>
  <div class="login">
    <img src="../assets/logo.jpg"/>
      <h1>登录</h1>
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <!--用户名-->
        <el-input type="text" placeholder="用户名" v-model="loginForm.username" autoComplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="psw">
        <!--密码-->
        <el-input type="password" placeholder="密码" v-model="loginForm.psw" autoComplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="checked">
        <!--是否记住密码-->
        <el-checkbox label="记住密码" name="type" v-model="loginForm.checked"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <!--登录按钮-->
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default{
    name: 'login',
    data () {
   // 验证用户名
      var userPattern = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/
      var validateUser = (rule, value, callback) => {
        console.log(value)
        if (value === '') {
          callback(new Error('用户名不能为空，请输入！'))
        } else {
          if (!userPattern.exec(value)) {
            callback(new Error('只能输入5-20个以字母开头、可带数字、“_”、“.”的字串'))
          } else {
            callback()
          }
        }
      }
   // 验证密码
      var pswPattern = /^(\w){6,20}$/
      var validatePsw = (rule, value, callback) => {
        console.log(value)
        if (value === '') {
          callback(new Error('密码不能为空，请输入'))
        } else {
          if (!pswPattern.exec(value)) {
            callback(new Error('只能输入6-20个字母、数字、下划线'))
          } else {
            callback()
          }
        }
      }
      // 验证是否记住密码
      var checkedPsw = (rule, value, callback) => {
        console.log(value)
        callback()
      }
      return {
        loginForm: {
          username: '',
          psw: '',
          checked: true
        },
        rules: {
          username: [ {validator: validateUser, trigger: 'blur'} ],
          psw: [ {validator: validatePsw, trigger: 'blur'} ],
          checked: [ {validator: checkedPsw, trigger: 'blur'} ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit')
            console.log(this.loginForm)
            this.$ajax({
              url: '#',
              method: 'get',
              data: this.loginForm
            })
          } else {
            console.log('error submit')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style type="text/css">
  .login{
    margin-top: 40%;
  }
  /*重置样式*/
  .el-button{
    width: 100%;
    margin-bottom: 20px;
  }
  .el-button+.el-button {
    margin-left: 0px;
  }
  .el-checkbox{
    margin-left: -90%;
  }
</style>
