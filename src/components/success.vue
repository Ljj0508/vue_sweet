<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-button round @click="showDialog2()">添加</el-button>
    <el-table :data="this.$route.query.success" width="100%" height="550px" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="seid" label="编号"></el-table-column>
      <el-table-column prop="boyname" label="男生名字"></el-table-column>
      <el-table-column prop="girlname" label="女生名字"></el-table-column>
      <el-table-column prop="info" label="宣言"></el-table-column>
    </el-table>


    <!--添加员工-->
    <!--添加模态框-->

    <el-dialog width="40%" title="添加成功记录" :visible="addVisible">
      <el-form label-width="100px" label-suffix="：" class="form"  ref="fm">
        <el-form-item label="男生名字" prop="boyname">
          <el-input v-model="success.boyname" name="boyname"></el-input>
        </el-form-item>
        <el-form-item label="女生名字" prop="girlname">
          <el-input v-model="success.girlname" name="girlname"></el-input>
        </el-form-item>
        <el-form-item label="宣言" prop="info">
          <el-input v-model="success.info" name="info"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="add();addVisible=false">添 加</el-button>
        <el-button type="success" @click="addVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'success',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      success: {}
    }
  },
  methods: {

    showDialog: function (row) {
      // 显示模态窗口
      this.updateVisible = true
      this.success = row
    },
    showDialog2: function () {
      // 显示模态窗口
      this.addVisible = true
      this.success = {}
    },
    add: function () {
      this.$axios.post('http://localhost:8888/sweet/Success/add', this.$qs.stringify(this.success))
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
