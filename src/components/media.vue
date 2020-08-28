<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->

    <el-table :data="this.$route.query.media" width="100%" height="550px" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="meid" label="编号"></el-table-column>
      <el-table-column prop="name" label="节目名称"></el-table-column>
      <el-table-column prop="pic" label="节目照片"></el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  name: 'media',
  data () {
    return {
      media: {}
    }
  }
}
</script>
<style scoped>

</style>
