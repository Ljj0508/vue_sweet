<template>
  <div>
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-table :data="this.$route.query.Ph.rows" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="lmid" label="编号"></el-table-column>
      <el-table-column prop="ptname" label="职业类型"></el-table-column>
      <el-table-column prop="buyhouse" label="买房状况">
        <template slot-scope="life_message">
          {{life_message.row.buyhouse==0?"已买房":"未买房"}}
        </template>
      </el-table-column>
      <el-table-column prop="buycar" label="买车状况">
        <template slot-scope="life_message">
          {{life_message.row.buycar==0?"已买车":"未买车"}}
        </template>
      </el-table-column>
      <el-table-column prop="smoking" label="是否抽烟">
        <template slot-scope="life_message">
          {{life_message.row.smoking==0?"抽咽":"不抽烟"}}
        </template>
      </el-table-column>
      <el-table-column prop="drink" label="是否喝酒">
        <template slot-scope="life_message">
          {{life_message.row.drink==0?"喝酒":"不喝酒"}}
        </template>
      </el-table-column>
      <el-table-column prop="city" label="喜欢的城市"></el-table-column>
      <el-table-column prop="hobby" label="业余爱好"></el-table-column>
      <el-table-column prop="book" label="喜欢的书"></el-table-column>
      <el-table-column prop="bmname" label="客户名称"></el-table-column>
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
  name: 'life_message',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      life_message: {},
      pageNum: 1,
      pageSize: 7
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页 ${val} `)
      this.$axios.post('http://localhost:8888/sweet/life_message/findAll?pageNum=' + val + '')
        .then(response => {
          console.log(response.data)
          if (response.data != null) {
            this.$router.push({name: 'life_message', query: {Ph: response.data}})
          }
        })
    }
  }
}
</script>
<style scoped>

</style>
