<template>
  <el-form
      class="main"
      :model="form"
      label-width="200px"
  >
    <el-form-item style="width: 70%" label="网址名称">
      <el-input v-model="form.name"/>
    </el-form-item>

    <el-form-item style="width: 70%" label="网址链接">
      <el-input v-model="form.url"/>
    </el-form-item>

    <el-form-item label="网址标签">
      <el-tag
          v-for="tag in dynamicTags"
          :key="tag"
          class="mx-1"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
          style="width: 100%"
          v-if="inputVisible"
          ref="InputRef"
          v-model="inputValue"
          class="ml-1 w-20"
          size="small"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
      />
      <el-button class="button-new-tag m-1" size="small" @click="showInput">
        + 新建标签
      </el-button>

    </el-form-item>

    <el-form-item style="width: 70%" label="网址类型">
      <el-select
          style="width: 100%"
          clearable
          v-model="form.type_id"
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

    <el-form-item label="">
      <el-button
          type="primary"
          @click="onSubmit"
      >
        创建
      </el-button>
      <el-button
          @click="changeShow"
      >取消
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance, onMounted, reactive, toRefs, ref, nextTick} from 'vue'
import {addCompanySites} from '@/apis/sites'
import {siteModel} from '@/model/site'
import {ArticleModel} from '@/model/articleModel'
import {ElMessage} from 'element-plus'
import {getDictByType} from '@/common/sys'
import {ElInput} from 'element-plus'

export default defineComponent(
    {
      name: 'Edit',
      emits: ["closeCallBack"],

      props: {
        currentSiteForm: Object
      },
      setup(props, ctx) {
        const dataMap = reactive({
          wzlxList: [],
          form: {
            name: '',
            url: '',
            tag: '',
            note: '',
            type_id: ''
          },
          inputValue: '',
          dynamicTags: [],
          inputVisible: false,
          InputRef: ref<InstanceType<typeof ElInput>>()
        })

        onMounted(() => {
          initDict()
          console.log(props.currentSiteForm, 'hello world')
          if (props.currentSiteForm) {
            dataMap.form = props.currentSiteForm as any
          }
        })

        const initDict = async () => {
          const rs: any = await getDictByType('WZLX')
          console.log(rs, '我是字典列表')
          dataMap.wzlxList = rs.data
        }


        // 创建标签
        const onSubmit = async () => {
          // 表单校验
          if (!dataMap.form.name) {

          }
          //添加网址
          //添加标签
          dataMap.form.tag = dataMap.dynamicTags.join(',')
          addCompanySites(dataMap.form).then(
              (rs) => {
                if (rs && rs.code == 200) {
                  ElMessage({message: '添加成功', type: 'success'})
                } else {
                  ElMessage({message: '添加失败', type: 'error'})
                }
                ctx.emit('closeCallBack')
              }
          )

        }
        const changeShow = () => {
          dataMap.form =
              {
                name: '',
                url: '',
                tag: '',
                note: '',
                type_id: ''
              }
          ctx.emit('closeCallBack', false)
        }


        const handleClose = (tag: string) => {
          dataMap.dynamicTags.splice(dataMap.dynamicTags.indexOf(tag), 1)
        }

        const showInput = () => {
          dataMap.inputVisible = true
          nextTick(() => {
            dataMap.InputRef!.input!.focus()
          })
        }

        const handleInputConfirm = () => {
          if (dataMap.inputValue) {
            // todo 关掉为null检测成功
            dataMap.dynamicTags.push(dataMap.inputValue)
          }
          dataMap.inputVisible = false
          dataMap.inputValue = ''
        }


        return {
          ...toRefs(dataMap),
          onSubmit,
          changeShow,
          handleClose,
          showInput,
          handleInputConfirm


        }
      }
    })

</script>

<style lang="scss" scoped>
.main {
  //width: 70%;
  //padding: 20px;
  //margin: 0 auto;

}
</style>
