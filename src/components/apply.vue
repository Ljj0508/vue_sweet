<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-button round @click="showDialog2()">添加</el-button>
    <el-table :data="this.$route.query.apply" width="100%" height="550px" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="apid" label="编号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="part" label="参与人数"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="wechat" label="微信号"></el-table-column>
      <el-table-column prop="title" label="活动ID"></el-table-column>
      <el-table-column prop="bmname" label="客户ID"></el-table-column>
      <el-table-column label="操作" fixed="right" width="100px">
        <template slot-scope="scope">
          <el-button type="text" @click="showDialog(scope.row)">修改</el-button>
          <el-button type="text" @click="delete(scope.row.apid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--修改模态框-->
    <el-dialog width="40%" title="修改报名表" :visible="updateVisible">
      <el-form label-width="100px" label-suffix="：" :model="apply" class="form"  ref="fm">
        <el-form-item label="" prop="apid">
          <el-input v-model="apply.apid" name="apid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="apply.name" name="name"></el-input>
        </el-form-item>
        <el-form-item label="参与人数" prop="part">
          <el-input v-model="apply.part" name="part"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="apply.phone" name="phone"></el-input>
        </el-form-item>
        <el-form-item label="微信号" prop="wechat">
          <el-input v-model="apply.wechat" name="wechat"></el-input>
        </el-form-item>
        <el-form-item label="活动信息" prop="title">
          <el-input v-model="apply.title" name="title"></el-input>
        </el-form-item>
        <el-form-item label="客户信息" prop="bmid">
          <el-input v-model="apply.bmname" name="bmname"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="update();updateVisible=false">修 改</el-button>
        <el-button type="success" @click="updateVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!--添加员工-->
    <!--添加模态框-->
    <el-dialog width="40%" title="添加报名" :visible="addVisible">
      <el-form label-width="100px" label-suffix="：" class="form"  ref="fm">
        <el-form-item label="" prop="apid">
          <el-input v-model="apply.apid" name="apid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="apply.name" name="name"></el-input>
        </el-form-item>
        <el-form-item label="参与人数" prop="part">
          <el-input v-model="apply.part" name="part"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="apply.phone" name="phone"></el-input>
        </el-form-item>
        <el-form-item label="微信号" prop="wechat">
          <el-input v-model="apply.wechat" name="wechat"></el-input>
        </el-form-item>
        <el-form-item label="活动信息" prop="acid">
          <el-input v-model="apply.acid" name="acid"></el-input>
        </el-form-item>
        <el-form-item label="客户信息" prop="bmid">
          <el-input v-model="apply.bmid" name="bmid"></el-input>
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
  name: 'apply',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      apply: {}
    }
  },
  methods: {
    delete: function (row) {
      this.$axios.post('http://localhost:8888/sweet/apply/del?id=' + row + '')
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
      this.apply = row
    },
    showDialog2: function () {
      // 显示模态窗口
      this.addVisible = true
      this.apply = {}
    },
    update: function () {
      console.log(this.apply)
      this.$axios.post('http://localhost:8888/sweet/apply/update', this.$qs.stringify(this.apply))
        .then(response => {
          if (response.data = 1) {
            alert('修改成功')
          } else {
            alert('修改失败')
          }
        })
    },
    add: function () {
      this.$axios.post('http://localhost:8888/sweet/apply/add', this.$qs.stringify(this.apply))
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
