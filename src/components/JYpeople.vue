<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-table :data="this.$route.query.JYpeople" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="bmid" label="编号"></el-table-column>
      <el-table-column prop="number" label="账号ID" width="130px"></el-table-column>
      <el-table-column prop="bmname" label="昵称"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <!-- <el-table-column prop="height" label="身高"></el-table-column>
       <el-table-column prop="weight" label="体重"></el-table-column>-->
      <el-table-column prop="sex" label="性别">
        <template slot-scope="JYpeople">
          {{JYpeople.row.sex==0?"女":"男"}}
        </template>
      </el-table-column>
      <!--<el-table-column prop="sex" label="性别"></el-table-column>-->
      <el-table-column prop="phone" label="手机号" width="120px"></el-table-column>
      <el-table-column prop="pwd" label="密码"></el-table-column>
      <!--<el-table-column prop="address" label="工作地区"></el-table-column>
      <el-table-column prop="birthday" label="出生年月"></el-table-column>-->
      <el-table-column prop="marriage" label="婚姻状况">
      <template slot-scope="JYpeople">
        <div v-if="JYpeople.row.marriage==0">
          <div>未婚</div>
        </div>
        <div v-else-if="JYpeople.row.marriage==1">
          <div>离婚</div>
        </div>
        <div v-else-if="JYpeople.row.marriage==2">
          <div>丧偶</div>
        </div>
      </template>
      </el-table-column>
      <!--<el-table-column prop="marriage" label="婚姻状况"></el-table-column>-->
      <el-table-column prop="vip" label="会员">
        <template slot-scope="JYpeople">
          {{JYpeople.row.vip==0?"会员":"非会员"}}
        </template>
      </el-table-column>
      <el-table-column prop="state" label="状态">
        <template slot-scope="JYpeople">
          {{JYpeople.row.state==0?"正常":"禁用"}}
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="130px">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="updateVisible=true;showDialog2(scope.row)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog width="40%" title="修改资料" :visible="updateVisible">
      <el-form label-width="100px" label-suffix="：" :model="JYpeople" class="form"  ref="fm">
        <el-form-item label="" prop="bmid">
          <el-input v-model="JYpeople.bmid" name="bmid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="账号Id" prop="number">
          <el-input v-model="JYpeople.number" name="number" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="bmname">
          <el-input v-model="JYpeople.bmname" name="bmname" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="JYpeople.age" name="age" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="身高" prop="height">
          <el-input v-model="JYpeople.height" name="height" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="体重" prop="weight">
          <el-input v-model="JYpeople.weight" name="weight" readonly="true"></el-input>
        </el-form-item>
        <!--<el-form-item label="性别" prop="sex">-->
          <!--<el-input v-model="JYpeople.sex" name="sex" readonly="true"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="JYpeople.phone" name="phone" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="JYpeople.pwd" name="pwd" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="工作地区" prop="address">
          <el-input v-model="JYpeople.address" name="address" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="出生年月" prop="birthday">
          <el-input v-model="JYpeople.birthday" name="birthday" readonly="true"></el-input>
        </el-form-item>

        <el-form-item label="状态">
          <el-radio-group v-model="JYpeople.state">
            <el-radio :label="0">正常</el-radio>
            <el-radio :label="1">禁用</el-radio>
          </el-radio-group>
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
  name: 'JYpeople',
  data: function () {
    return {
      state: '0',
      updateVisible: false,
      addVisible: false,
      JYpeople: {}
    }
  },
  methods: {
    showDialog2: function (row) {
      // 显示模态窗口
      this.JYpeople = row
    },
    update: function () {
      this.$axios.post('http://localhost:8888/sweet/basic_message/update', this.$qs.stringify(this.JYpeople))
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
