<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-table :data="this.$route.query.dispose" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="dsid" label="编号"></el-table-column>
      <el-table-column prop="bname" label="被举报人名称"></el-table-column>
      <el-table-column prop="types" label="被举报类型">
        <template slot-scope="dispose">
          <div v-if="dispose.row.types==1">
            <div>色情</div>
          </div>
          <div v-if="dispose.row.types==2">
            <div>骚扰信息</div>
          </div>
          <div v-if="dispose.row.types==3">
            <div>诈骗钱财</div>
          </div>
          <div v-if="dispose.row.types==4">
            <div>其他</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="reason" label="被举报理由"></el-table-column>
      <el-table-column prop="bmname" label="举报人名称"></el-table-column>
      <el-table-column prop="state" label="处理状态">
        <template slot-scope="dispose">
          {{dispose.row.state==0?"已处理":"未处理"}}
        </template>
      </el-table-column>
      <el-table-column prop="way" label="处理方式">
        <template slot-scope="dispose">
          {{dispose.row.way==0?"忽略":"警告"}}
        </template>
      </el-table-column>
      <el-table-column prop="dtime" label="处理时间">
        <template slot-scope="dispose"  >
          {{new Date(dispose.row.dtime).getFullYear()+'-'+(new Date(dispose.row.dtime).getMonth()+1) +'-'+ new Date(dispose.row.dtime).getDate()}}
        </template>
      </el-table-column>
      <!--<el-table-column prop="ename" label="处理人"></el-table-column>-->
      <!--<el-table-column label="操作" fixed="right" width="130px">-->
        <!--<template slot-scope="scope">-->
          <!--<el-button type="primary" icon="el-icon-edit" @click="updateVisible=true;showDialog(scope.row)" circle></el-button>-->
        <!--</template>-->
      <!--</el-table-column>-->
   </el-table>

   <!--修改模态框-->
    <el-dialog width="40%" title="修改举报信息" :visible="updateVisible">
      <el-form label-width="100px" label-suffix="：" :model="dispose" class="form"  ref="fm">
        <el-form-item label="" prop="dsid">
          <el-input v-model="dispose.dsid" name="dsid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="被举报名称" prop="bname">
          <el-input v-model="dispose.bname" name="bname" value="dispose.bmid" readonly="true" ></el-input>
        </el-form-item>
        <el-form-item label="被举报类型" prop="types">
          <el-input v-model="dispose.types" name="types"  readonly="true" ></el-input>
        </el-form-item>
        <el-form-item label="被举报理由" prop="reason">
          <el-input v-model="dispose.reason" name="reason"  readonly="true" ></el-input>
        </el-form-item>
        <el-form-item label="举报人名称" prop="bmname">
          <el-input v-model="dispose.bmname" name="bmname" value="dispose.bid" readonly="true" ></el-input>
        </el-form-item>
        <el-form-item label="处理状态" prop="state">
          <template>
            <el-radio v-model="dispose.state"  name="state" label="0">已处理</el-radio>
            <el-radio v-model="dispose.state" name="state"  label="1">未处理</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="处理方式" prop="way">
          <template>
            <el-radio v-model="dispose.way"  name="way" label="0">忽略</el-radio>
            <el-radio v-model="dispose.way" name="way"  label="1">警告</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="处理时间" prop="dtime">
          <el-input v-model="dispose.dtime" name="dtime"></el-input>
        </el-form-item>
        <el-form-item label="处理人" prop="ename">
          <el-input v-model="dispose.ename" name="ename" value="dispose.emid"></el-input>
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
  name: 'dispose',
  data () {
    return {
      way: '0',
      state: '0',
      updateVisible: false,
      dispose: {}
    }
  },
  methods: {
    showDialog: function (row) {
      // 显示模态窗口
      this.dispose = row
    },
    update: function () {
      this.$axios.post('http://localhost:8888/sweet/dispose/update', this.$qs.stringify(this.dispose))
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
