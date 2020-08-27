<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->

    <el-table :data="this.$route.query.message" width="100%" height="550px" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="meid" label="编号"></el-table-column>
      <el-table-column prop="bname" label="发消息人"></el-table-column>
      <el-table-column prop="bmname" label="收消息人"></el-table-column>
      <el-table-column prop="context" label="消息内容"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      message: {}
    }
  }
}
</script>
<style scoped>

</style>
