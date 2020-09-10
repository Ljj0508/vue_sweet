<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-button round @click="showDialog2()">添加</el-button>
    <el-table :data="this.$route.query.activity"  :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="acid" label="编号"></el-table-column>
      <el-table-column prop="title" label="活动标题"></el-table-column>
      <el-table-column prop="achost" label="活动主办"></el-table-column>
      <el-table-column prop="actime" label="活动时间"></el-table-column>
      <el-table-column prop="acaddress" label="活动地点"></el-table-column>
      <el-table-column prop="acpeople" label="活动人数"></el-table-column>
      <el-table-column prop="actype" label="活动类型"></el-table-column>
      <!--<el-table-column prop="acrequest" label="报名要求"></el-table-column>-->
      <el-table-column type="expand">
        <template slot-scope="activity">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="报名要求:">
              <span>{{activity.row.acrequest}}</span>
            </el-form-item>
            <el-form-item label="备注:">
              <span>{{activity.row.remark}}</span>
            </el-form-item>
            <el-form-item label="操作流程:">
              <span>{{activity.row.flow}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <!--<el-table-column prop="flow" label="操作流程"></el-table-column>-->
      <!--<el-table-column prop="remark" label="备注"></el-table-column>-->
      <el-table-column label="操作" fixed="right" width="180px">
        <template slot-scope="scope">
          <!--<el-button type="primary" icon="el-icon-more" @click="showDialog3(scope.row)" circle></el-button>-->
          <el-button type="primary" icon="el-icon-edit" @click="showDialog(scope.row)" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="del(scope.row.acid)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--修改模态框-->
    <el-dialog width="40%" title="修改活动" :visible="updateVisible">
      <el-form label-width="100px" label-suffix="：" :model="activity" class="form"  ref="fm">
        <el-form-item label="" prop="acid">
          <el-input v-model="activity.acid" name="acid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="活动标题" prop="title">
          <el-input v-model="activity.title" name="title" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="活动主办" prop="achost">
          <el-input v-model="activity.achost" name="achost" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" prop="actime">
          <el-input v-model="activity.actime" name="actime" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="活动地点" prop="acaddress">
          <el-input v-model="activity.acaddress" name="acaddress" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="活动人数" prop="acpeople">
          <el-input v-model="activity.acpeople" name="acpeople" readonly="true"> </el-input>
        </el-form-item>
        <el-form-item label="活动类型" prop="actype">
          <el-input v-model="activity.actype" name="actype" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="报名要求" prop="acrequest">
          <el-input v-model="activity.acrequest" name="acrequest" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="操作流程" prop="flow">
          <el-input v-model="activity.flow" name="flow" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="activity.remark" name="remark" readonly="true"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="update();updateVisible=false">修 改</el-button>
        <el-button type="success" @click="updateVisible = false">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog width="40%" title="详情" :visible="ShowVisible">
      <el-form label-width="100px" label-suffix="：" :model="activity" class="form"  ref="fm">
        <el-form-item label="报名要求" prop="acrequest">
          <el-input v-model="activity.acrequest" name="acrequest" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="操作流程" prop="flow">
          <el-input v-model="activity.flow" name="flow" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="activity.remark" name="remark" readonly="true"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" @click="ShowVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog width="40%" title="添加活动" :visible="addVisible">
      <el-form label-width="100px" label-suffix="：" class="form"  ref="fm">
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
        <el-button type="primary" @click="add();addVisible=false">添 加</el-button>
        <el-button type="success" @click="addVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'activity',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      ShowVisible: false,
      activity: {}
    }
  },
  methods: {
    del: function (row) {
      this.$axios.post('http://localhost:8888/sweet/Activity/del?id=' + row + '')
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
      this.activity = row
    },
    showDialog2: function () {
      // 显示模态窗口
      this.addVisible = true
      this.activity = {}
    },
    showDialog3: function (row) {
      // 显示模态窗口
      this.ShowVisible = true
      this.activity = row
    },
    update: function () {
      this.$axios.post('http://localhost:8888/sweet/Activity/update', this.$qs.stringify(this.activity))
        .then(response => {
          if (response.data = 1) {
            alert('修改成功')
          } else {
            alert('修改失败')
          }
        })
    },
    add: function () {
      this.$axios.post('http://localhost:8888/sweet/Activity/add', this.$qs.stringify(this.activity))
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
