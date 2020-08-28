<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-table :data="this.$route.query.emp" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="emid" label="编号"></el-table-column>
      <el-table-column prop="ename" label="员工账号名"></el-table-column>
      <el-table-column prop="epwd" label="密码"></el-table-column>
      <el-table-column prop="truename" label="真实姓名"></el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="emp">
          {{emp.row.sex==0?"女":"男"}}
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="address" label="住址"></el-table-column>
      <el-table-column prop="state" label="账号状态">
        <template slot-scope="emp">
          {{emp.row.state==0?"正常":"禁用"}}
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="130px">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="showDialog(scope.row)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--修改模态框-->
    <el-dialog width="40%" title="修改员工信息" :visible="updateVisible">
      <el-form label-width="100px" label-suffix="：" :model="emp" class="form"  ref="fm">
        <el-form-item label="" prop="emid">
          <el-input v-model="emp.emid" name="emid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="ename">
          <el-input v-model="emp.ename" name="ename" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="epwd">
          <el-input v-model="emp.epwd" name="epwd" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="truename">
          <el-input v-model="emp.truename" name="truename" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="emp.sex" name="sex" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="emp.phone" name="phone" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="住址" prop="address">
          <el-input v-model="emp.address" name="address" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="账号状态" prop="state">
          <template>
            <el-radio v-model="emp.state" name="state" label="0">正常</el-radio>
            <el-radio v-model="emp.state" name="state" label="1">禁用</el-radio>
          </template>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="update();updateVisible=false">修 改</el-button>
        <el-button type="success" @click="updateVisible = false">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'jyEmp',
  data () {
    return {
      sex: '0',
      state: '0',
      updateVisible: false,
      addVisible: false,
      emp: {}
    }
  },
  methods: {
    showDialog: function (row) {
      // 显示模态窗口
      this.updateVisible = true
      this.emp = row
    },
    showDialog2: function () {
      // 显示模态窗口
      this.addVisible = true
      this.emp = {}
    },
    update: function () {
      this.$axios.post('http://localhost:8888/sweet/emp/update', this.$qs.stringify(this.emp))
        .then(response => {
          if (response.data = 1) {
            alert('修改成功')
          } else {
            alert('修改失败')
          }
        })
    }
  }
}
</script>
<style scoped>

</style>
