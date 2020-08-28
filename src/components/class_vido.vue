<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->

    <el-table :data="this.$route.query.class_vido" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="cvid" label="编号"></el-table-column>
      <el-table-column prop="cvname" label="视频标题"></el-table-column>
      <el-table-column prop="voids" label="视频"></el-table-column>
      <el-table-column prop="info" label="视频内容介绍"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'class_vido',
  data () {
    return {
      class_vido: {}
    }
  }
}
</script>
<style scoped>

</style>
