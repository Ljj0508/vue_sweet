<template>
  <div><!--
    <h1>员工管理  <el-button type="success" @click="showDialogadd">添加</el-button></h1>-->
    <!-- data:绑定数据  height:声明之后会固定表头-->
    <el-button round @click="showDialog2()">添加</el-button>
    <el-table :data="this.$route.query.media" :stripe="true" border>
      <!-- prop显示绑定的数据的属性 -->
      <el-table-column prop="meid" label="编号"></el-table-column>
      <el-table-column prop="name" label="节目名称"></el-table-column>
      <el-table-column prop="pic" label="节目照片"></el-table-column>
      <el-table-column label="操作" fixed="right" width="130px">
      <template slot-scope="scope">

        <el-button type="danger" icon="el-icon-delete" @click="del(scope.row.meid)" circle></el-button>
      </template>
    </el-table-column>
    </el-table>

    <el-dialog width="40%" title="添加节目" :visible="addVisible">
      <el-form label-width="100px" label-suffix="：" :model="media" class="form"  ref="fm" :rules="rules">
        <el-form-item label="节目名称" prop="name">
          <el-input v-model="media.name" name="name"></el-input>
        </el-form-item>
        <el-form-item label="节目照片" prop="pic">
          <el-input v-model="media.pic" name="pic"></el-input>
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
  name: 'media',
  data () {
    return {
      addVisible: false,
      media: {},
      rules: {
        name: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '节目名称不能为空', trigger: 'blur'},
          // 自定义校验规则
          {
            trigger: ['blur'],
            validator: function (rule, value, callback) {
              if (value.indexOf('_') == -1) {
                callback()
              } else {
                callback(new Error('节目名称不能包含_特殊字符'))
              }
            }
          }
        ],
        pic: [
          // require:进行校验,默认校验非空  message:提示信息  trigger:触发校验的事件
          {required: true, message: '节目图片不能为空', trigger: 'blur'}
        ]
        // 自定义校验规则]
      }
    }
  },
  methods: {
    del: function (row) {
      this.$axios.post('http://localhost:8888/sweet/media/del?id=' + row + '')
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
      this.media = {}
    },
    add: function () {
      this.$refs['fm'].validate(valid => {
        if (valid == true) {
          this.$axios.post('http://localhost:8888/sweet/media/add', this.$qs.stringify(this.media))
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

</style>
