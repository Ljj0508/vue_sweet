<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->

    <el-table :data="this.$route.query.vip" width="100%" height="550px" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="vid" label="编号"></el-table-column>
      <el-table-column prop="project" label="项目"></el-table-column>
      <el-table-column prop="paytime" label="开通时间"></el-table-column>
      <el-table-column prop="vtime" label="到期时间"></el-table-column>
      <el-table-column prop="bmname" label="客户昵称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'activity',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      activity: {}
    }
  }
}
</script>
<style scoped>

</style>
