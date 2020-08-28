<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->

    <el-table :data="this.$route.query.profession_type" width="100%" height="550px" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="ptid" label="编号"></el-table-column>
      <el-table-column prop="ptname" label="职业名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'profession_type',
  data () {
    return {
      profession_type: {}
    }
  }
}
</script>
<style scoped>

</style>
