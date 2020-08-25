<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-table :data="this.$route.query.paste" width="100%" height="550px" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="spid" label="编号"></el-table-column>
      <el-table-column prop="title" label="发帖标题"></el-table-column>
      <el-table-column prop="context" label="发帖内容"></el-table-column>
      <el-table-column prop="sendtime" label="发帖时间"></el-table-column>
      <el-table-column prop="bmname" label="发帖人名称"></el-table-column>
      <el-table-column label="操作" fixed="right" width="100px">
        <template slot-scope="scope">
          <el-button type="text" @click="commectShow(scope.row.spid)">查看评论</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'paste',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      paste: {}
    }
  },
  methods: {
    commectShow: function (row) {
      this.$axios.post('http://localhost:8888/sweet/send_paste/listByID?id=' + row + '')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'comment', query: {comment: response.data}})
          }
        })
    }
  }
}

</script>

<style scoped>

</style>
