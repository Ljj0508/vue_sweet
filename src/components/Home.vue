<template>
  <div id="con">
    <h1>相亲网后台管理系统</h1>
    <div id="head">
      <el-header>
        <el-dropdown style="float: right" @command="handlerCommand">
          <span class="a">欢迎{{$route.params.loginUser}}</span>
          <i class="el-icon-arrow-down"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="personal" @click="">个人信息</el-dropdown-item>
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
              <span @click="basic_message">查看用户</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-camera"></i>
              <span @click="VIPShow">会员用户</span>
            </el-menu-item>
            <el-menu-item index="2-3">
              <i class="el-icon-camera"></i>
              <span @click="choose_mate">择偶信息</span>
            </el-menu-item>
            <el-menu-item index="2-4">
              <i class="el-icon-camera"></i>
              <span @click="">禁用用户</span>
            </el-menu-item>
            <el-menu-item index="2-5">
              <i class="el-icon-camera"></i>
              <span @click="life_message">客户工作生活</span>
            </el-menu-item>
            <el-menu-item index="2-6">
              <i class="el-icon-camera"></i>
              <span @click="ShowDispose">举报记录</span>
            </el-menu-item>
            <el-menu-item index="2-7">
              <i class="el-icon-camera"></i>
              <span @click="attention">关注</span>
            </el-menu-item>
            <el-menu-item index="2-9">
              <i class="el-icon-camera"></i>
              <span @click="profession_type">职业类型</span>
            </el-menu-item>
            <el-menu-item index="2-8">
              <i class="el-icon-camera"></i>
              <span @click="message">消息</span>
            </el-menu-item>
            <el-menu-item index="2-10">
              <i class="el-icon-camera"></i>
              <span @click="details_message">客户详情信息</span>
            </el-menu-item>
            <el-menu-item index="2-11">
              <i class="el-icon-camera"></i>
              <span @click="photo">客户相册</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-aim"></i>
            <span>活动管理</span>
          </template>
          <el-menu-item index="3-1">
            <i class="el-icon-camera"></i>
            <span @click="activityshow">所有活动</span>
          </el-menu-item>
          <el-menu-item index="3-2">
            <i class="el-icon-camera"></i>
            <span @click="applyshow">报名查看</span>
          </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-aim"></i>
              <span>朋友圈</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-camera"></i>
              <span @click="PasteShow">查看帖子</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-aim"></i>
              <span>套餐管理</span>
            </template>
            <el-menu-item index="5-1">
            <i class="el-icon-camera"></i>
            <span @click="combo">会员套餐</span>
          </el-menu-item>
            <el-menu-item index="5-2">
              <i class="el-icon-camera"></i>
              <span @click="TOPShow">置顶套餐</span>
            </el-menu-item>
            <el-menu-item index="5-2">
              <i class="el-icon-camera"></i>
              <span @click="pay_fees">缴费记录</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-aim"></i>
              <span>媒体管理</span>
            </template>
            <el-menu-item index="6-1">
              <i class="el-icon-camera"></i>
              <span @click="SuccessShow">成功案例</span>
            </el-menu-item>
            <el-menu-item index="6-2">
              <i class="el-icon-camera"></i>
              <span @click="media">节目广告</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-aim"></i>
              <span>脱单学堂</span>
            </template>
            <el-menu-item index="7-1">
              <i class="el-icon-camera"></i>
              <span @click="class_text">文字课堂</span>
            </el-menu-item>
            <el-menu-item index="7-2">
              <i class="el-icon-camera"></i>
              <span @click="class_vido">视频课堂</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-aim"></i>
              <span>员工管理</span>
            </template>
            <el-menu-item index="8-1">
              <i class="el-icon-camera"></i>
              <span @click="emp">员工</span>
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

    VIPShow: function () {
      this.$axios.post('http://localhost:8888/sweet/vip/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'vip', query: {vip: response.data}})
          }
        })
    },

    TOPShow: function () {
      this.$axios.post('http://localhost:8888/sweet/Top/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'top', query: {top: response.data}})
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
    },
    PasteShow: function () {
      this.$axios.post('http://localhost:8888/sweet/send_paste/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'paste', query: {paste: response.data}})
          }
        })
    },
    SuccessShow: function () {
      this.$axios.post('http://localhost:8888/sweet/Success/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'success', query: {success: response.data}})
          }
        })
    },
    basic_message: function () {
      this.$axios.post('http://localhost:8888/sweet/basic_message/ShowAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'basic_message', query: {basic_message: response.data}})
          }
        })
    },
    ShowDispose: function () {
      this.$axios.post('http://localhost:8888/sweet/dispose/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'dispose', query: {dispose: response.data}})
          }
        })
    },
    choose_mate: function () {
      this.$axios.post('http://localhost:8888/sweet/choose_mate/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'choose_mate', query: {choose_mate: response.data}})
          }
        })
    },
    class_text: function () {
      this.$axios.post('http://localhost:8888/sweet/class_text/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'class_text', query: {class_text: response.data}})
          }
        })
    },
    combo: function () {
      this.$axios.post('http://localhost:8888/sweet/combo/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'combo', query: {combo: response.data}})
          }
        })
    },
    life_message: function () {
      this.$axios.post('http://localhost:8888/sweet/life_message/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'life_message', query: {life_message: response.data}})
          }
        })
    },
    attention: function () {
      this.$axios.post('http://localhost:8888/sweet/attention/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'attention', query: {attention: response.data}})
          }
        })
    },
    emp: function () {
      this.$axios.post('http://localhost:8888/sweet/emp/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'emp', query: {emp: response.data}})
          }
        })
    },
    message: function () {
      this.$axios.post('http://localhost:8888/sweet/message/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'message', query: {message: response.data}})
          }
        })
    },
    pay_fees: function () {
      this.$axios.post('http://localhost:8888/sweet/pay_fees/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'pay_fees', query: {pay_fees: response.data}})
          }
        })
    },
    profession_type: function () {
      this.$axios.post('http://localhost:8888/sweet/profession_type/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'profession_type', query: {profession_type: response.data}})
          }
        })
    },
    details_message: function () {
      this.$axios.post('http://localhost:8888/sweet/details_message/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'details_message', query: {details_message: response.data}})
          }
        })
    },
    class_vido: function () {
      this.$axios.post('http://localhost:8888/sweet/class_vido/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'class_vido', query: {class_vido: response.data}})
          }
        })
    },
    media: function () {
      this.$axios.post('http://localhost:8888/sweet/media/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'media', query: {media: response.data}})
          }
        })
    },
    photo: function () {
      this.$axios.post('http://localhost:8888/sweet/photo/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'photo', query: {photo: response.data}})
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
