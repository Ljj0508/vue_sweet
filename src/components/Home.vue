<template>
  <div id="con">
    <h1 style="font-weight: bold">相亲网后台管理系统</h1>
    <div id="head">
      <el-header>
        <el-dropdown style="float: right" @command="handlerCommand">
          <span class="a" style="color: white">欢迎:{{this.name}}</span>

          <i class="el-icon-arrow-down"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="personal" v-if="this.name=='admin'">
              <h4 @click="adminShow">个人信息</h4>
            </el-dropdown-item>
            <el-dropdown-item command="personal" v-else>
              <h4 @click="myShow">个人信息</h4>
            </el-dropdown-item>
            <el-dropdown-item command="Logout" @click="">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
    </div>
    <div id="main">
      <div id="left">
        <div v-if="this.name=='admin'">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-submenu index="2" id="lefts">
              <template slot="title">
                <span class="spans">用户管理</span>
              </template>
              <el-menu-item index="2-1" id="items">
                <i></i>
                <span @click="basic_message">查看用户</span>
              </el-menu-item>
              <el-menu-item index="2-2" id="items">
                <i></i>
                <span @click="VIPShow">会员用户</span>
              </el-menu-item>
              <!--<el-menu-item index="2-3">-->
              <!--<i class="el-icon-camera"></i>-->
              <!--<span @click="choose_mate">择偶信息</span>-->
              <!--</el-menu-item>-->
              <el-menu-item index="2-4" id="items">
                <i></i>
                <span @click="JYShow">禁用用户</span>
              </el-menu-item>
              <el-menu-item index="2-5" id="items">
                <i></i>
                <span @click="life_message">工作生活</span>
              </el-menu-item>
              <el-menu-item index="2-7" id="items">
                <i></i>
                <span @click="details_message">详情信息</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3" id="lefts">
              <template slot="title">
                <span class="spans">活动管理</span>
              </template>
              <el-menu-item index="3-1"  id="items">
                <i></i>
                <span @click="activityshow">所有活动</span>
              </el-menu-item>
              <el-menu-item index="3-2"  id="items">
                <i></i>
                <span @click="applyshow">报名查看</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4" id="lefts">
              <template slot="title">
                <i></i>
                <span class="spans">朋友圈</span>
              </template>
              <el-menu-item index="4-1"  id="items">
                <i></i>
                <span @click="PasteShow">查看帖子</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="5" id="lefts">
              <template slot="title">
                <span class="spans">套餐管理</span>
              </template>
              <el-menu-item index="5-1"  id="items">
                <i></i>
                <span @click="combo">会员套餐</span>
              </el-menu-item>
              <el-menu-item index="5-2"  id="items">
                <i></i>
                <span @click="TOPShow">置顶套餐</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="6" id="lefts">
              <template slot="title">
                <span class="spans">媒体管理</span>
              </template>
              <!--<el-menu-item index="6-1"  id="items">-->
                <!--<i></i>-->
                <!--<span @click="SuccessShow">成功案例</span>-->
              <!--</el-menu-item>-->
              <el-menu-item index="6-2"  id="items">
                <i></i>
                <span @click="media">节目广告</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="7" id="lefts">
              <template slot="title">
                <span class="spans">脱单学堂</span>
              </template>
              <el-menu-item index="7-1"  id="items">
                <i></i>
                <span @click="class_text">文字课堂</span>
              </el-menu-item>
              <el-menu-item index="7-2" id="items">
                <i></i>
                <span @click="class_vido">视频课堂</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="8" id="lefts">
              <template slot="title">
                <span class="spans">员工管理</span>
              </template>
              <el-menu-item index="8-1"  id="items">
                <i></i>
                <span @click="emp">员工信息</span>
              </el-menu-item>
              <el-menu-item index="8-2"  id="items">
                <i></i>
                <span @click="JYEmp">离职员工</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="9" id="lefts">
              <template slot="title">
                <span class="spans">职业管理</span>
              </template>
              <el-menu-item index="9-1"  id="items">
                <i></i>
                <span @click="profession_type">职业类型</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="10" id="lefts">
              <template slot="title">
                <span class="spans">举报管理</span>
              </template>
              <el-menu-item index="10-1"  id="items">
                <i></i>
                <span @click="ShowDispose">已处理举报</span>
              </el-menu-item>
              <el-menu-item index="10-1">
                <i></i>
                <span @click="ShowNoDispose">未处理举报</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="11" id="lefts">
              <template slot="title">
                <span class="spans">缴费管理</span>
              </template>
              <el-menu-item index="11-1"  id="items">
                <i></i>
                <span @click="pay_fees">缴费记录</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div v-else>
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-submenu index="2">
              <template slot="title">
                <span class="spans">用户管理</span>
              </template>
              <el-menu-item index="2-1" id="items">
                <i></i>
                <span @click="basic_message">查看用户</span>
              </el-menu-item>
              <el-menu-item index="2-2" id="items">
                <i></i>
                <span @click="VIPShow">会员用户</span>
              </el-menu-item>
              <el-menu-item index="2-4" id="items">
                <i></i>
                <span @click="JYShow">禁用用户</span>
              </el-menu-item>
              <el-menu-item index="2-5" id="items">
                <i></i>
                <span @click="life_message">工作生活</span>
              </el-menu-item>
              <el-menu-item index="2-7" id="items">
                <i></i>
                <span @click="details_message">详情信息</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span class="spans">活动管理</span>
              </template>
              <el-menu-item index="3-1" id="items">
                <i></i>
                <span @click="activityshow">所有活动</span>
              </el-menu-item>
              <el-menu-item index="3-2" id="items">
                <i></i>
                <span @click="applyshow">报名查看</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i></i>
                <span class="spans">朋友圈</span>
              </template>
              <el-menu-item index="4-1" id="items">
                <i></i>
                <span @click="PasteShow">查看帖子</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <span class="spans">套餐管理</span>
              </template>
              <el-menu-item index="5-1" id="items">
                <i></i>
                <span @click="combo">会员套餐</span>
              </el-menu-item>
              <el-menu-item index="5-2" id="items">
                <i></i>
                <span @click="TOPShow">置顶套餐</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <span class="spans">媒体管理</span>
              </template>
              <el-menu-item index="6-1" id="items">
                <i></i>
                <span @click="SuccessShow">成功案例</span>
              </el-menu-item>
              <el-menu-item index="6-2" id="items">
                <i></i>
                <span @click="media">节目广告</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <span class="spans">脱单学堂</span>
              </template>
              <el-menu-item index="7-1" id="items">
                <i></i>
                <span @click="class_text">文字课堂</span>
              </el-menu-item>
              <el-menu-item index="7-2" id="items">
                <i></i>
                <span @click="class_vido">视频课堂</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="9">
              <template slot="title">
                <span class="spans">职业管理</span>
              </template>
              <el-menu-item index="9-1" id="items">
                <i></i>
                <span @click="profession_type">职业类型</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="10">
              <template slot="title">
                <span class="spans">举报管理</span>
              </template>
              <el-menu-item index="10-1"  id="items">
                <i></i>
                <span @click="ShowDispose">已处理举报</span>
              </el-menu-item>
              <el-menu-item index="10-2"  id="items">
                <i></i>
                <span @click="ShowNoDispose">未处理举报</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="11">
              <template slot="title">
                <span class="spans">缴费管理</span>
              </template>
              <el-menu-item index="11-1"  id="items">
                <i></i>
                <span @click="pay_fees">缴费记录</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
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
  data () {
    return {
      name: sessionStorage.getItem('name')
    }
  },
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
            this.$router.push({name: 'paste', query: {Ph: response.data}})
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
            this.$router.push({name: 'basic_message', query: {Ph: response.data}})
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
            this.$router.push({name: 'life_message', query: {Ph: response.data}})
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
            this.$router.push({name: 'emp', query: {Ph: response.data}})
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
            this.$router.push({name: 'pay_fees', query: {Ph: response.data}})
          }
        })
    },
    profession_type: function () {
      this.$axios.post('http://localhost:8888/sweet/profession_type/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'profession_type', query: {Ph: response.data}})
          }
        })
    },
    details_message: function () {
      this.$axios.post('http://localhost:8888/sweet/Details_message/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'details_message', query: {Ph: response.data}})
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
    },
    JYShow: function () {
      this.$axios.post('http://localhost:8888/sweet/basic_message/ShowBystate')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'JYpeople', query: {JYpeople: response.data}})
          }
        })
    },
    JYEmp: function () {
      this.$axios.post('http://localhost:8888/sweet/emp/findBYState')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'jyEmp', query: {emp: response.data}})
          }
        })
    },
    adminShow: function () {
      this.$axios.post('http://localhost:8888/sweet/admin/findByName')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'adminShow', query: {mesage: response.data}})
          }
        })
    },
    myShow: function () {
      this.$axios.post('http://localhost:8888/sweet/emp/findByName?ename=' + this.$route.params.LoginUser
      )
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'empShow', query: {mesage: response.data}})
          }
        })
    },
    ShowNoDispose: function () {
      this.$axios.post('http://localhost:8888/sweet/dispose/findByState')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'nodispose', query: {dispose: response.data}})
            this.$router.push({name: 'nodispose', query: {ename: this.$route.params.LoginUser}})
          }
        })
    }
  }
}

</script>

<style scoped>
  #head{
    height:50px;
    background-color:black;
    line-height:50px;
  }
  #main{
    background-color: black;
  }
  #left{
    width:20%;
    background-color: black;
    float:left;
  }
  #right{
    width:80%;
    background-color: beige;
    float:left;
  }
  .spans{
    font-weight: bold;
    color:black;
    font-size: 17px;
  }

  #items{
    background-color: antiquewhite;
  }
  span{
    font-size: 15px;
  }
</style>
