<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->

    <el-table :data="this.$route.query.details_message" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="dmid" label="编号"></el-table-column>
      <el-table-column prop="native" label="籍贯"></el-table-column>
      <el-table-column prop="trueName" label="真实姓名"></el-table-column>
      <el-table-column prop="Idcard" label="身份证号"></el-table-column>
      <el-table-column prop="pic" label="身份证图片"></el-table-column>
      <el-table-column prop="constellation" label="星座"></el-table-column>
      <el-table-column prop="nation" label="民族"></el-table-column>
      <el-table-column prop="children" label="有没有孩子"></el-table-column>
      <el-table-column prop="education" label="学历"></el-table-column>
      <el-table-column prop="soliloquy" label="内心独白"></el-table-column>
      <el-table-column prop="monthly" label="月收入"></el-table-column>
      <el-table-column prop="bmname" label="客户名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'details_message',
  data () {
    return {
      details_message: {}
    }
  }
}
</script>
<style scoped>

</style>
