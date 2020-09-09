<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-table :data="this.$route.query.Ph.rows" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="spid" label="编号" width="70px"></el-table-column>
      <el-table-column prop="title" label="发帖标题" width="100px"></el-table-column>
      <el-table-column prop="context" label="发帖内容"></el-table-column>
      <el-table-column prop="sendtime" label="发帖时间" width="140px">
        <template slot-scope="paste"  >
          {{new Date(paste.row.sendtime).getFullYear()+'-'+(new Date(paste.row.sendtime).getMonth()+1) +'-'+ new Date(paste.row.sendtime).getDate()}}
        </template>
      </el-table-column>
      <el-table-column prop="bmname" label="发帖人名称" width="100px"></el-table-column>
      <el-table-column label="操作" fixed="right" width="120px">
        <template slot-scope="scope">
          <el-button type="primary" @click="commectShow(scope.row.spid)">查看评论</el-button>
          <!--<el-button type="text" @click="commectShow(scope.row.spid)">查看评论</el-button>-->
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="3"
      :pager-count="11"
      layout="prev, pager, next"
      :total="this.$route.query.Ph.totalCount">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'paste',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      paste: {},
      pageNum: 1,
      pageSize: 7
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页 ${val} `)
      this.$axios.post('http://localhost:8888/sweet/send_paste/findAll?pageNum=' + val + '')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'paste', query: {Ph: response.data}})
          }
        })
    },
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
