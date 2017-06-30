<template>
  <div class="recordShow">
    <el-table :data="tableData" style="width: 100%" v-loading.body="tableLoading">
      <el-table-column prop="label"></el-table-column>
      <el-table-column prop="classify" label="分类"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="money" label="金额"></el-table-column>
      <el-table-column prop="operation" label="操作">
        <template scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native.prevent="editRow(scope.$index, tableData)">
            编辑</el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default{
  data() {
    return {
      tableData: [],
      tableLoading: true
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    editRow(index,rows) {
      console.log(index)
      console.log(rows)
    },
    // 初始化页面数据
    getTableData () {
      let that = this
      that.$ajax.get("/tapi/recordShow.json")
        .then( function (response) {
          console.log(response)
          that.tableData = response.data? response.data.record: []
          // 取消加载
           that.tableLoading = false
        }).catch( function (error) {
          console.log(error)
      })
    }
  },
  mounted:function () {
    // 增加一个延时效果
    setTimeout(() => {
      this.getTableData()
    }, 1000);
    // this.getTableData()
  }
}

</script>

<style>
  .el-table td{
    text-align: left;
  }
</style>
