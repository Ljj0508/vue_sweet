<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-button round @click="showDialog2()">添加</el-button>
    <el-table :data="this.$route.query.class_vido"  :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="cvid" label="编号"></el-table-column>
      <el-table-column prop="cvname" label="视频标题"></el-table-column>
      <el-table-column prop="voids" label="视频"></el-table-column>
      <el-table-column prop="info" label="视频内容介绍"></el-table-column>
      <el-table-column label="操作" fixed="right" width="130px">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="showDialog(scope.row)" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="del(scope.row.cvid)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--修改模态框-->
    <el-dialog width="40%" title="修改视频" :visible="updateVisible">
      <el-form label-width="100px" label-suffix="：" :model="class_vido" class="form"  ref="fm">
        <el-form-item label="" prop="cvid">
          <el-input v-model="class_vido.cvid" name="cvid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="视频标题" prop="cvname">
          <el-input v-model="class_vido.cvname" name="cvname"></el-input>
        </el-form-item>
        <el-form-item label="视频" prop="voids">
          <el-input v-model="class_vido.voids" name="voids"></el-input>
        </el-form-item>
        <el-form-item label="视频内容介绍" prop="info">
          <el-input v-model="class_vido.info" name="info"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="update();updateVisible=false">修 改</el-button>
        <el-button type="success" @click="updateVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!--添加员工-->
    <!--添加模态框-->

    <el-dialog width="40%" title="添加视频" :visible="addVisible">
      <el-form label-width="100px" label-suffix="：" class="form"  ref="fm">
        <el-form-item label="视频标题" prop="cvname">
          <el-input v-model="class_vido.cvname" name="cvname"></el-input>
        </el-form-item>
        <el-form-item label="视频" prop="voids">
          <el-input v-model="class_vido.voids" name="voids"></el-input>
        </el-form-item>
        <el-form-item label="视频内容介绍" prop="info">
          <el-input v-model="class_vido.info" name="info"></el-input>
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
    name: 'class_vido',
    data () {
      return {
        updateVisible: false,
        addVisible: false,
        class_vido: {}
      }
    },
    methods: {
      del: function (row) {
        this.$axios.post('http://localhost:8888/sweet/class_vido/del?id=' + row + '')
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
        this.class_vido = row
      },
      showDialog2: function () {
        // 显示模态窗口
        this.addVisible = true
        this.class_vido = {}
      },
      update: function () {
        this.$axios.post('http://localhost:8888/sweet/class_vido/update', this.$qs.stringify(this.class_vido))
          .then(response => {
            if (response.data = 1) {
              alert('修改成功')
            } else {
              alert('修改失败')
            }
          })
      },
      add: function () {
        this.$axios.post('http://localhost:8888/sweet/class_vido/add', this.$qs.stringify(this.class_vido))
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
