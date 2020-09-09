<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->

    <el-table :data="this.$route.query.Ph.rows" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="pfid" label="编号"></el-table-column>
      <el-table-column prop="peoject" label="项目"></el-table-column>
      <el-table-column prop="money" label="金额"></el-table-column>
      <el-table-column prop="paytime" label="缴费时间">
        <template slot-scope="pay_fees">
          {{new Date(pay_fees.row.paytime).getFullYear()+'-'+(new Date(pay_fees.row.paytime).getMonth()+1) +'-'+ new Date(pay_fees.row.paytime).getDate()}}
        </template>
      </el-table-column>
      <el-table-column prop="ptime" label="时长"></el-table-column>
      <el-table-column prop="bmname" label="客户名称"></el-table-column>
    </el-table>
    <div style="margin-left: 800px;font-weight: bold">
      总金额: {{this.$route.query.Ph.money}}
    </div>

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
  name: 'pay_fees',
  data () {
    return {
      pay_fees: {},
      pageNum: 1,
      pageSize: 7,
      money: 0
    }
  },
  methods: {
    handleCurrentChange (val) {
      console.log(`当前页 ${val} `)
      this.$axios.post('http://localhost:8888/sweet/pay_fees/findAll?pageNum=' + val + '')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'pay_fees', query: {Ph: response.data}})
          }
        })
    }
  }
}
</script>
<style scoped>

</style>
