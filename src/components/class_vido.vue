<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-button round @click="showDialog2()">添加</el-button>
    <el-table :data="this.$route.query.class_vido"  :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="cvid" label="编号"></el-table-column>
      <el-table-column prop="cvname" label="视频标题"></el-table-column>
      <el-table-column prop="voids" label="视频路径"></el-table-column>
      <!--<el-table-column prop="info" label="视频内容介绍"></el-table-column>-->
      <el-table-column type="expand">
        <template  slot-scope="class_vido">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="视频内容介绍:">
              <span>{{class_vido.row.info}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="130px">
        <template slot-scope="scope">
          <!--<el-button type="primary" icon="el-icon-edit" @click="showDialog(scope.row)" circle></el-button>-->
          <!--<el-button type="primary" icon="el-icon-more" @click="showDialog3(scope.row)" circle></el-button>-->
          <el-button type="danger" icon="el-icon-delete" @click="del(scope.row.cvid)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog width="40%" title="详情" :visible="ShowVisible">
      <el-table label-width="100px" label-suffix="：" :model="class_vido" class="form"  ref="fm">
        <el-table-column label="视频内容介绍" prop="class_vido.info" >
          <template slot-scope="class_vido">
            {{class_vido.info}}
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" @click="ShowVisible = false">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog width="40%" title="添加视频" :visible="addVisible">
      <el-form label-width="100px" label-suffix="：" :model="class_vido" class="form"  ref="fm" :rules="rules">
        <el-form-item label="视频标题" prop="cvname">
          <el-input v-model="class_vido.cvname" name="cvname"></el-input>
        </el-form-item>
        <el-form-item label="视频路径" prop="voids">
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
      ShowVisible: false,
      class_vido: {},
      rules: {
        cvname: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '课堂标题不能为空', trigger: 'blur'}
        ],
        voids: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '内容介绍不能为空', trigger: 'blur'}
        ],
        info: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '视频内容介绍不能为空', trigger: 'blur'}
        ]
      }
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
    showDialog3: function (row) {
      // 显示模态窗口
      this.ShowVisible = true
      this.class_vido = row
    },
    showDialog2: function () {
      // 显示模态窗口
      this.addVisible = true
      this.class_vido = {}
    },
    // update: function () {
    //   this.$refs['fm'].validate(valid => {
    //     if (valid == true) {
    //       this.$axios.post('http://localhost:8888/sweet/class_vido/update',  this.$qs.stringify(this.class_vido))
    //         .then(response => {
    //           if (response.data = 1) {
    //             alert('修改成功')
    //           }
    //         })
    //     } else {
    //       alert('修改失败')
    //     }
    //   })
    // },
    add: function () {
      this.$refs['fm'].validate(valid => {
        if (valid == true) {
          this.$axios.post('http://localhost:8888/sweet/class_vido/add', this.$qs.stringify(this.class_vido))
            .then(response => {
              if (response.data = 1) {
                alert('添加成功')
              }
            })
        } else {
          alert('添加失败')
        }
      })
    }
  }
}
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
