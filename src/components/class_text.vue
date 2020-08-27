<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-button round @click="showDialog2()">添加</el-button>
    <el-table :data="this.$route.query.class_text" width="100%" height="550px" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="ctid" label="编号"></el-table-column>
      <el-table-column prop="ctname" label="课堂标题"></el-table-column>
      <el-table-column prop="info" label="内容介绍"></el-table-column>
      <el-table-column label="操作" fixed="right" width="100px">
        <template slot-scope="scope">

          <el-button type="text" @click="del(scope.row.ctid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--修改模态框-->
    <!--<el-dialog width="40%" title="修改活动" :visible="updateVisible">
      <el-form label-width="100px" label-suffix="：" :model="activity" class="form"  ref="fm">
        <el-form-item label="" prop="acid">
          <el-input v-model="activity.acid" name="acid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="活动标题" prop="title">
          <el-input v-model="activity.title" name="title"></el-input>
        </el-form-item>
        <el-form-item label="活动主办" prop="achost">
          <el-input v-model="activity.achost" name="achost"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" prop="actime">
          <el-input v-model="activity.actime" name="actime"></el-input>
        </el-form-item>
        <el-form-item label="活动地点" prop="acaddress">
          <el-input v-model="activity.acaddress" name="acaddress"></el-input>
        </el-form-item>
        <el-form-item label="活动人数" prop="acpeople">
          <el-input v-model="activity.acpeople" name="acpeople"></el-input>
        </el-form-item>
        <el-form-item label="活动类型" prop="actype">
          <el-input v-model="activity.actype" name="actype"></el-input>
        </el-form-item>
        <el-form-item label="报名要求" prop="acrequest">
          <el-input v-model="activity.acrequest" name="acrequest"></el-input>
        </el-form-item>
        <el-form-item label="操作流程" prop="flow">
          <el-input v-model="activity.flow" name="flow"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="activity.remark" name="remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="update();updateVisible=false">修 改</el-button>
        <el-button type="success" @click="updateVisible = false">取 消</el-button>
      </div>
    </el-dialog>-->
    <!--添加员工-->
    <!--添加模态框-->

    <el-dialog width="40%" title="添加活动" :visible="addVisible">
      <el-form label-width="100px" label-suffix="：" class="form"  ref="fm">
        <el-form-item label="课堂标题" prop="ctname">
          <el-input v-model="class_text.ctname" name="ctname"></el-input>
        </el-form-item>
        <el-form-item label="内容介绍" prop="info">
          <el-input v-model="class_text.info" name="info"></el-input>
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
  name: 'class_text',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      class_text: {}
    }
  },
  methods: {
    del: function (row) {
      this.$axios.post('http://localhost:8888/sweet/class_text/del?id=' + row + '')
        .then(response => {
          if (response.data = 1) {
            alert('删除成功')
          } else {
            alert('删除失败')
          }
        })
    },
    showDialog2: function () {
      // 显示模态窗口
      this.addVisible = true
      this.class_text = {}
    },
    add: function () {
      this.$axios.post('http://localhost:8888/sweet/class_text/add', this.$qs.stringify(this.class_text))
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
