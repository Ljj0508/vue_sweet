<template>
  <div>
      <el-table :data="this.$route.query.mesage" :stripe="true" border >
      <el-table-column prop="adid" label="编号"></el-table-column>
      <el-table-column prop="adname" label="账号"></el-table-column>
      <el-table-column prop="pwd" label="密码"></el-table-column>
      <el-table-column label="操作" fixed="right" width="130px">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="showDialog(scope.row)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog width="40%" title="修改密码" :visible="updateVisible">
      <el-form label-width="100px" label-suffix="：" :model="mesage" class="form"  ref="fm" :rules="rules">
        <!--<el-form-item label="旧密码" prop="Jpwd">-->
          <!--<el-input v-model="mesage.pwd" name="Jpwd"  readonly="true"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="账号" prop="adname">
          <el-input v-model="mesage.adname" name="adname" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pwd">
          <el-input v-model="mesage.pwd" name="pwd" ></el-input>
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
  name: 'adminShow',
  data () {
    return {
      updateVisible: false,
      mesage: {},
      rules: {
        // Jpwd: [
        //   // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
        //   {required: true, message: '密码不能为空', trigger: 'blur'}
        // ],
        pwd: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {min: 3, max: 10, message: '密码是3-10位', trigger: ['change', 'blur']}
        ]
      }
    }
  },
  methods: {
    update: function (row) {
      this.$refs['fm'].validate(valid => {
        if (valid == true) {
          this.$axios.post('http://localhost:8888/sweet/admin/updatePwd', this.$qs.stringify(this.mesage))
            .then(response => {
              if (response.data = 1) {
                alert('修改成功')
              }
            })
        } else {
          alert('修改失败')
        }
      })
    },
    showDialog: function (row) {
      // 显示模态窗口
      this.updateVisible = true
      this.mesage = row
    }
  }
}
</script>

<style scoped>

</style>
