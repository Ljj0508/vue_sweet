<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->

    <el-table :data="this.$route.query.choose_mate" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="cmid" label="编号"></el-table-column>
      <el-table-column prop="lage" label="最小年龄"></el-table-column>
      <el-table-column prop="bage" label="最大年龄"></el-table-column>
      <el-table-column prop="height" label="身高"></el-table-column>
      <el-table-column prop="education" label="学历"></el-table-column>
      <el-table-column prop="marriage" label="婚姻状况">
      </el-table-column>
      <el-table-column prop="nation" label="民族"></el-table-column>
      <el-table-column prop="monthly" label="月收入"></el-table-column>
      <el-table-column prop="bmname" label="客户名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'choose_mate',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      choose_mate: {}
    }
  }
}
</script>
<style scoped>

</style>
