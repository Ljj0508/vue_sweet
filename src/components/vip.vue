<template>
  <div>
    <el-table :data="this.$route.query.vip" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="vid" label="编号"></el-table-column>
      <el-table-column prop="bmname" label="客户昵称"></el-table-column>
      <el-table-column prop="vtime" label="到期时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'vip',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      vip: {}
    }
  }
}
</script>
<style scoped>

</style>
