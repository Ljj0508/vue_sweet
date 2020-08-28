<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-table :data="this.$route.query.comment" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="cpid" label="编号"></el-table-column>
      <el-table-column prop="context" label="评论内容"></el-table-column>
      <el-table-column prop="commention" label="评论时间"></el-table-column>
      <el-table-column prop="title" label="评论的主贴标题"></el-table-column>
      <el-table-column prop="bmname" label="评论人名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      comment: {}
    }
  }
}

</script>

<style scoped>

</style>
