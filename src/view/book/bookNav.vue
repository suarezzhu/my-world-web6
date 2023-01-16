<template>
  <div class="demo-image">

    <el-form
        style="margin: 10px"
      ref="form"
      rules=""
      inline
      label-position="right"
      :model="searchForm"
      label-width="150px"
    >
      <el-form-item
      label="图书名称"
      >
        <el-input></el-input>
      </el-form-item>

      <el-form-item
          label="类型"
      >
        <el-select
            v-model="value"
        >
          <el-option
              v-for="(item,index) in SBLXLIST"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
          </el-option>
        </el-select>

      </el-form-item>

      <el-form-item
          label="标签"
      >
        <el-input placeholder="输入标签" ></el-input>
      </el-form-item>

      <el-form-item
      >
        <el-button type="primary" @click="search">搜索</el-button>
      </el-form-item>


      <el-form-item>
        <el-button @click="addBook" type="primary">添加</el-button>
      </el-form-item>
    </el-form>


    <div
      @click="openPdf()"
      v-for="fit in fits"
      :key="fit"
      class="block"
    >
      <el-image
        style="width: 200px; height: 200px"
        :src="url"
        fit="cover"
      />
      <span class="demonstration">{{ fit }}</span>
    </div>



    <el-pagination
        background
        layout="prev,pager,next"
        :total="50"
    >
    </el-pagination>
  </div>

</template>

<script lang="ts" setup>
const fits = 15
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

const openPdf = () => {
  window.open('/pdf/test.pdf')
}

</script>

<style scoped>
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
