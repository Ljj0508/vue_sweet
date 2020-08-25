<template>
  <div id="con">
    <h1>相亲网后台管理系统</h1>
    <div id="head">
      <el-header>
        <el-dropdown style="float: right" @command="handlerCommand">
          <span class="a">欢迎{{$route.params.loginUser}}</span>
          <i class="el-icon-arrow-down"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="personal">个人信息</el-dropdown-item>
            <el-dropdown-item command="Logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
    </div>
    <div id="main">
      <div id="left">
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-aim"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-camera"></i>
              <span @click="activityshow">活动管理</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-camera"></i>
              <span @click="applyshow">报名管理</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div id="right">
        <!-- 二级路由 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    handlerCommand: function (command) {
      this.$router.push({name: command})
    },
    activityshow: function () {
      this.$axios.post('http://localhost:8888/sweet/Activity/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'activity', query: {activity: response.data}})
          }
        })
    },
    applyshow: function () {
      this.$axios.post('http://localhost:8888/sweet/apply/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'apply', query: {apply: response.data}})
          }
        })
    }
  }
}

</script>

<style scoped>
  #head{
    height:50px;
    background-color:aqua;
    line-height:50px;
  }
  #main{
    background-color: cadetblue;
  }
  #left{
    width:20%;
    background-color: aquamarine;
    float:left;
  }
  #right{
    width:80%;
    background-color: beige;
    float:left;
  }
</style>
