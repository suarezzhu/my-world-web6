<template>
  <div class="main">
    <div
      class="item"
      v-for="(item,index) in sites"
      :key="index"
    >
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <div>{{ item.name }}</div>
          </div>
        </template>
        <el-link
          @click="openUrl(item1.url)"
          v-for="item1 in item.children"
          :key="item1"
          class="text item"
        >
          {{ item1.name }}
        </el-link>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent(
  {
    name: 'Favourite',
    setup() {
      const data = reactive(
        {
          sites: [
            {
              name: '堡垒机',
              tag: '',
              children: [
                { name: '公司服务堡垒机', url: 'https://baidu.com', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: 'https://baidu.com', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: 'https://baidu.com', account: '', pswd: '', notes: '备注' }
              ]
            },
            {
              name: '堡垒机',
              tag: '',
              children: [
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' }
              ]
            },
            {
              name: '堡垒机',
              tag: '',
              children: [
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' }
              ]
            },
            {
              name: '堡垒机',
              tag: '',
              children: [
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' }
              ]
            },
            {
              name: '堡垒机',
              tag: '',
              children: [
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' }
              ]
            },
            {
              name: '堡垒机',
              tag: '',
              children: [
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' }
              ]
            },
            {
              name: '堡垒机',
              tag: '',
              children: [
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' }
              ]
            },
            {
              name: '堡垒机',
              tag: '',
              children: [
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' },
                { name: '公司服务堡垒机', url: '', account: '', pswd: '', notes: '备注' }
              ]
            }

          ]
        }

      )

      const openUrl = (url: string) => {
        window.open(url)
      }

      return { ...toRefs(data), openUrl }
    }

  }

)
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  .item{
    margin: 10px;
    width: 48%;
    max-height: 400px;

  }
}
</style>
