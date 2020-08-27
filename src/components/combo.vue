<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-table :data="this.$route.query.combo" width="100%" height="550px" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="coid" label="编号"></el-table-column>
      <el-table-column prop="coname" label="套餐名称"></el-table-column>
      <el-table-column prop="price" label="套餐价格"></el-table-column>
      <el-table-column prop="days" label="日均"></el-table-column>
      <el-table-column prop="benefit" label="会员权益"></el-table-column>
      <el-table-column prop="state" label="状态">
        <template slot-scope="combo">
          {{combo.row.state==0?"正常":"已售完"}}
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="100px">
        <template slot-scope="scope">
          <el-button type="text" @click="showDialog(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--修改模态框-->
    <el-dialog width="40%" title="修改VIP套餐" :visible="updateVisible">
      <el-form label-width="100px" label-suffix="：" :model="combo" class="form"  ref="fm">
        <el-form-item label="" prop="coid">
          <el-input v-model="combo.coid" name="coid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="套餐名称" prop="coname">
          <el-input v-model="combo.coname" name="coname"></el-input>
        </el-form-item>
        <el-form-item label="套餐价格" prop="price">
          <el-input v-model="combo.price" name="price"></el-input>
        </el-form-item>
        <el-form-item label="日均" prop="days">
          <el-input v-model="combo.days" name="days"></el-input>
        </el-form-item>
        <el-form-item label="会员权益" prop="benefit">
          <el-input v-model="combo.benefit" name="benefit"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-input v-model="combo.state" name="state"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="update();updateVisible=false">修 改</el-button>
        <el-button type="success" @click="updateVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!--添加员工-->
    <!--添加模态框-->
  </div>
</template>

<script>
export default {
  name: 'combo',
  data () {
    return {
      updateVisible: false,
      addVisible: false,
      combo: {}
    }
  },
  methods: {
    showDialog: function (row) {
      // 显示模态窗口
      this.updateVisible = true
      this.combo = row
    },
    showDialog2: function () {
      // 显示模态窗口
      this.addVisible = true
      this.combo = {}
    },
    update: function () {
      this.$axios.post('http://localhost:8888/sweet/combo/update', this.$qs.stringify(this.combo))
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
