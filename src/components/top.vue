<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-table :data="this.$route.query.top" width="100%" height="550px" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="topid" label="编号"></el-table-column>
      <el-table-column prop="tname" label="套餐名称"></el-table-column>
      <el-table-column prop="price" label="套餐价格"></el-table-column>
      <el-table-column prop="benefit" label="置顶权益"></el-table-column>
      <el-table-column prop="state" label="状态">
        <template slot-scope="top">
        {{top.row.state==0?"正常":"已售完"}}
        </template>
      </el-table-column>

      <el-table-column label="操作" fixed="right" width="100px">
        <template slot-scope="scope">
          <el-button type="text" @click="showDialog(scope.row)">修改</el-button>

        </template>
      </el-table-column>
    </el-table>

    <!--修改模态框-->
    <el-dialog width="40%" title="修改置顶套餐" :visible="updateVisible">
      <el-form label-width="100px" label-suffix="：" :model="top" class="form"  ref="fm">
        <el-form-item label="" prop="topid">
          <el-input v-model="top.topid" name="topid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="套餐名称" prop="tname">
          <el-input v-model="top.tname" name="tname"></el-input>
        </el-form-item>
        <el-form-item label="套餐价格" prop="price">
          <el-input v-model="top.price" name="price"></el-input>
        </el-form-item>
        <el-form-item label="置顶权益" prop="benefit">
          <el-input v-model="top.benefit" name="benefit"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-input v-model="top.state" name="state"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="update();updateVisible=false">修 改</el-button>
        <el-button type="success" @click="updateVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!--添加员工-->
    <!--添加模态框-->
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      top: {}
    }
  },
  methods: {
    del: function (row) {
      this.$axios.post('http://localhost:8888/sweet/Top/del?id=' + row + '')
        .then(response => {
          if (response.data = 1) {
            alert('删除成功')
          } else {
            alert('删除失败')
          }
        })
    },
    showDialog: function (row) {
      // 显示模态窗口
      this.updateVisible = true
      this.top = row
    },
    showDialog2: function () {
      // 显示模态窗口
      this.addVisible = true
      this.top = {}
    },
    update: function () {
      this.$axios.post('http://localhost:8888/sweet/Top/update', this.$qs.stringify(this.top))
        .then(response => {
          if (response.data = 1) {
            alert('修改成功')
          } else {
            alert('修改失败')
          }
        })
    },
    add: function () {
      this.$axios.post('http://localhost:8888/sweet/Top/add', this.$qs.stringify(this.top))
        .then(response => {
          if (response.data = 1) {
            alert('添加成功')
          } else {
            alert('添加失败')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
