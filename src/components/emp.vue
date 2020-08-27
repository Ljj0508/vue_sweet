<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->

    <el-table :data="this.$route.query.emp" width="100%" height="550px" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="emid" label="编号"></el-table-column>
      <el-table-column prop="ename" label="员工账号名"></el-table-column>
      <el-table-column prop="epwd" label="密码"></el-table-column>
      <el-table-column prop="truename" label="真实姓名"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="address" label="住址"></el-table-column>
      <el-table-column prop="state" label="账号状态">
        <template slot-scope="emp">
          {{emp.row.state==0?"正常":"已售完"}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'emp',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      emp: {}
    }
  }
}
</script>
<style scoped>

</style>
