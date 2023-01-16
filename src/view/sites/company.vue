<template>
  <div class="main">
    <!--    添加弹框-->
    <el-dialog
      v-model="addVisible"
      v-if="addVisible"
      title="详情"
      width="33%"
    >
      <Edit
          :current-site-form="currentSiteEditForm"
          @closeCallBack="addCompanySite"
      />
    </el-dialog>

    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
      <el-form-item  label="名称">
        <el-input clearable   v-model="searchForm.name" ></el-input>
      </el-form-item>
      <el-form-item  label="链接">
        <el-input clearable v-model="searchForm.url" ></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input clearable v-model="searchForm.tag" ></el-input>
      </el-form-item>


      <el-form-item label="网址类型">
        <el-select
            clearable
            v-model="searchForm.type_id"
            placeholder="选择类型"
        >
          <el-option
              v-for="(item,index) in wzlxList"
              :key="index"
              :label="item.key"
              :value="item.value"
          />
        </el-select>
      </el-form-item>




      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>


    <div class="nav">
      <el-button
        @click="addCompanySite"
        type="primary"
      >
        添加
      </el-button>
    </div>


    <el-table
        :data="sites"
        height="700px"
        border
        stripe
        style="width: 100%">
      <el-table-column
          prop="name"
          label="名称"
          width="180">
      </el-table-column>
      <el-table-column
          show-overflow-tooltip
          label="链接"
          width="500">
        <template #default="{row}">
          <el-button @click="openUrl(row.url)" type="success">{{ row.url }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
          prop="tag"
          width="200"
          label="标签">

      </el-table-column>
      <el-table-column
          prop="key"
          width="150"
          label="类型">
      </el-table-column>
      <el-table-column
          prop="note"
          label="备注">
      </el-table-column>


      <el-table-column
          label="操作">
        <template #default="{row}">
          <el-button size="mini" type="primary" @click="editSite(row)" >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>


    <el-pagination
        background
        layout="prev, pager, next"
        @current-change="changePage"
        :total="pageTotal">
    </el-pagination>


  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, ref, onMounted} from 'vue'
import Edit from '@/views/sites/edit.vue'
import {getSites} from "@/apis/sites";
import {ElMessage} from "element-plus";
import {siteModel} from "@/model/site";
import {getDictByType} from "@/common/sys";
import {magenta} from "chalk";

export default defineComponent(
  {
    name: 'Company',
    components: { Edit },

    setup() {
      const dataMap = reactive(
        {
          wzlxList:[],
          addVisible: false,
          sites:[],
          pageTotal:10,
          searchForm:{
            name:'',
            note:'',
            tag:'',
            url:'',
            type_id:''
          },
          currentSiteEditForm:{}
        }

      )
      onMounted(
          ()=>{
            initDict()
            initSites({pageSize:10,pageNum:1})


          }
      )

      const initDict = async() => {
        const rs: any = await getDictByType('WZLX')
        console.log(rs, '我是字典列表')
        dataMap.wzlxList = rs.data
      }
      const initSites=async (params:object)=>{
        let lParam=Object.assign(params,dataMap.searchForm)
        const rs=await getSites(lParam)
        if(rs?.code==200){
          dataMap.sites=rs.data["data"] as any
          dataMap.pageTotal=rs.data["total"] as any
        }else {
          ElMessage({ message: '获取失败', type: 'error' })
        }
      }
      const editSite=async(row:object)=>{
        dataMap.addVisible = !dataMap.addVisible
        dataMap.currentSiteEditForm=row

      }





      const onSearch=()=>{
        initSites({pageSize:10,pageNum:1})
      }


      // 翻页
      const changePage =(currentPage:any)=>{

        initSites({pageSize:10,pageNum:currentPage})
      }

      const openUrl = (url: string) => {
        window.open(url)
      }

      const searchSite = (url: string) => {
        window.open(url)
      }

      const addCompanySite = () => {
        dataMap.addVisible = !dataMap.addVisible
      }

      return {
        ...toRefs(dataMap),
        openUrl,
        searchSite,
        addCompanySite,
        changePage,
        onSearch,
        editSite


      }
    }

  }

)
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  .nav{
    width: 100%;
    height: 100px;
  }
  .item{
    margin: 10px;
    width: 48%;
    max-height: 400px;

  }
}
</style>
