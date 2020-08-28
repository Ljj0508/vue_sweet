<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-button round @click="showDialog2()">添加</el-button>
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
      <el-form label-width="100px" label-suffix="：" :model="emp" class="form"  ref="fm" :rules="rules">
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

    <!--添加模态框-->
    <el-dialog width="40%" title="添加员工信息" :visible="addVisible">
      <el-form label-width="100px" label-suffix="：" :model="emp" class="form"  ref="fm" :rules="rules">
        <el-form-item label="" prop="emid">
          <el-input v-model="emp.emid" name="emid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="ename">
          <el-input v-model="emp.ename" name="ename"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="epwd">
          <el-input v-model="emp.epwd" name="epwd"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="truename">
          <el-input v-model="emp.truename" name="truename"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <template>
            <el-radio v-model="emp.sex" name="sex" label="0">女</el-radio>
            <el-radio v-model="emp.sex" name="sex" label="1">男</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="emp.phone" name="phone"></el-input>
        </el-form-item>
        <el-form-item label="住址" prop="address">
          <el-input v-model="emp.address" name="address"></el-input>
        </el-form-item>
        <el-form-item label="账号状态" prop="state">
          <template>
            <el-radio v-model="emp.state" name="state" label="0">正常</el-radio>
            <el-radio v-model="emp.state" name="state" label="1">禁用</el-radio>
          </template>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="add();updateVisible=false">添 加</el-button>
        <el-button type="success" @click="addVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'emp',
  data () {
    return {
      sex: '0',
      state: '0',
      updateVisible: false,
      addVisible: false,
      emp: {},
      rules: {
        ename: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '员工名称不能为空', trigger: 'blur'}
          // 自定义校验规则

        ],
        epwd: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '密码不能为空', trigger: 'blur'}
          // 自定义校验规则

        ],
        truename: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '真实姓名不能为空', trigger: 'blur'}
          // 自定义校验规则

        ],
        phone: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '电话不能为空', trigger: 'blur'}
          // 自定义校验规则

        ],
        address: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '住址不能为空', trigger: 'blur'}
          // 自定义校验规则
        ]
      }
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
    },
    add: function () {
      this.$refs['fm'].validate(valid => {
        if (valid == true) {
          this.$axios.post('http://localhost:8888/sweet/Activity/add', this.$qs.stringify(this.activity))
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
