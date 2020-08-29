<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-button round @click="showDialog2()">添加</el-button>
    <el-table :data="this.$route.query.profession_type" :stripe="true" border >
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="ptid" label="编号"></el-table-column>
      <el-table-column prop="ptname" label="职业名称"></el-table-column>
      <el-table-column label="操作" fixed="right" width="130px">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="showDialog(scope.row)" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="del(scope.row.ptid)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog width="40%" title="添加类型" :visible="addVisible">
      <el-form label-width="100px" label-suffix="：" :model="profession_type" class="form"  ref="fm" :rules="rules">
        <el-form-item label="职业名称" prop="ptname">
          <el-input v-model="profession_type.ptname" name="ptname"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="add();addVisible=false">添 加</el-button>
        <el-button type="success" @click="addVisible = false">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog width="40%" title="修改类型" :visible="updateVisible">
      <el-form label-width="100px" label-suffix="：" :model="profession_type" class="form"  ref="fm" :rules="rules">
        <el-form-item label="职业名称" prop="ptname">
          <el-input v-model="profession_type.ptname" name="ptname"></el-input>
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
  name: 'profession_type',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      profession_type: {},
      rules: {
        ptname: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '职业类型不能为空', trigger: 'blur'},
          // 自定义校验规则
          {
            trigger: ['blur'],
            validator: function (rule, value, callback) {
              if (value.indexOf('_') == -1) {
                callback()
              } else {
                callback(new Error('职业类型不能包含_特殊字符'))
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    del: function (row) {
      this.$axios.post('http://localhost:8888/sweet/profession_type/del?id=' + row + '')
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
      this.profession_type = row
    },
    showDialog2: function () {
      // 显示模态窗口
      this.addVisible = true
      this.profession_type = {}
    },
    update: function () {
      this.$refs['fm'].validate(valid => {
        if (valid == true) {
          this.$axios.post('http://localhost:8888/sweet/profession_type/update', this.$qs.stringify(this.profession_type))
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
    add: function () {
      this.$refs['fm'].validate(valid => {
        if (valid == true) {
          this.$axios.post('http://localhost:8888/sweet/profession_type/add', this.$qs.stringify(this.profession_type))
            .then(response => {
              if (response.data = 1) {
                alert('添加成功')
              }
            })
        } else {
          this.addVisible = true
          alert('添加失败')
        }
      })
    }
  }
}
</script>
<style scoped>

</style>
