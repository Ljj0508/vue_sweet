<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-table :data="this.$route.query.comment" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="cpid" label="编号"></el-table-column>
      <el-table-column prop="context" label="评论内容"></el-table-column>
      <el-table-column prop="commention" label="评论时间">
        <template slot-scope="comment"  >
          {{new Date(comment.row.commention).getFullYear()+'-'+(new Date(comment.row.commention).getMonth()+1) +'-'+ new Date(comment.row.commention).getDate()}}
        </template>
      </el-table-column>
      <el-table-column prop="title" label="评论的主贴标题"></el-table-column>
      <el-table-column prop="bmname" label="评论人名称"></el-table-column>
    </el-table>
    <el-button type="primary" @click="PasteShow()" style="margin-left:1000px">返 回</el-button>
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
  },
  methods: {
    PasteShow: function () {
      this.$axios.post('http://localhost:8888/sweet/send_paste/findAll')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'paste', query: {Ph: response.data}})
          }
        })
    }
  }
}

</script>

<style scoped>

</style>
