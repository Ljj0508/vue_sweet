<template>
  <div>
    <!-- model:form表单绑定的数据对象 -->
    <!-- rules:form表单校验规则 -->
    <!-- ref:定义表单的名字 -->
    <el-form label-width="100px" label-suffix="：" :model="emp" class="form" :rules="rules" ref="fm">
      <h3>登录</h3>
      <el-form-item label="用户名" prop="name">
        <!-- 必须去声明绑定的数据模型 -->
        <el-input v-model="emp.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input show-password v-model="emp.pwd"></el-input>
      </el-form-item>
      <el-button type="success" @click="login()">登录</el-button>
    </el-form>
  </div>
</template>

<script>
// eslint-disable-next-line indent
  /* eslint-disable indent */

  export default {
    name: 'Login',
    data () {
      return {
        emp: {name: '', pwd: ''},
        rules: {
          name: [
            // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
            {required: true, message: '用户名不能为空', trigger: 'blur'},
            // 自定义校验规则
            {
              trigger: ['chcange', 'blur'],
              validator: function (rule, value, callback) {
                if (value.indexOf('_') == -1) {
                  callback()
                } else {
                  callback(new Error('用户名不能包含_特殊字符'))
                }
              }
            }
          ],
          pwd: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      login: function () {
        this.$refs['fm'].validate(valid => {
          // 判断表单校验是否通过  valid：true / false
          if (valid) {
            console.log(this.emp.name)
            console.log(this.emp.pwd)
            console.log()
            this.$axios.get('http://localhost:8888/sweet/admin/login', {
              params: {adname: this.emp.name, pwd: this.emp.pwd}
            })
              .then(response => {
                if (response.data.length >= 1) {
                  // 登录成功
                  // 挈带参数信息时，只能使用name
                  this.$router.push({name: 'home', params: {LoginUser: this.emp.name}})
                } else if (valid) {
                  this.$axios.get('http://localhost:8888/sweet/emp/login', {
                    params: {ename: this.emp.name, epwd: this.emp.pwd}
                  })
                    .then(response2 => {
                      if (response2.data.length >= 1) {
                        // 登录成功
                        // 挈带参数信息时，只能使用name
                        this.$router.push({name: 'home', params: {LoginUser: this.emp.name}})
                      } else {
                        // 登录失败
                        alert('账户或密码错误')
                      }
                    })
                }
              })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .form {
    border: 1px solid gray;
    margin: 100px auto;
    width: 30%;
    border-radius: 25px;
    box-shadow: 0 0 25px lightskyblue;
    padding: 30px 50px;
    text-align: center;
  }
</style>
