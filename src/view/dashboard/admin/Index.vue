
<template>
  <div class="dashboard-editor-container">
    <PanelGroup @handle-set-line-chart-data="handleSetLineChartData" />
    <el-row>
      <el-col
        :xs="{span: 24}"
        :sm="{span: 24}"
        :md="{span: 24}"
        :lg="{span: 8}"
        :xl="{span: 8}"
        style="padding-right:8px;margin-bottom:30px;"
      >
        <TodoList style="border-radius: 8px;" />
      </el-col>

      <el-col
        :xs="{span: 24}"
        :sm="{span: 24}"
        :md="{span: 24}"
        :lg="{span: 8}"
        :xl="{span: 8}"
        style="padding-right:8px;margin-bottom:30px;"
      >
        <UpdateTimeline style="border-radius: 16px;" />
      </el-col>
      <el-col
        :xs="{span: 24}"
        :sm="{span: 24}"
        :md="{span: 24}"
        :lg="{span: 8}"
        :xl="{span: 8}"
        style="padding-right:8px;margin-bottom:30px;"
      >
        <BoxCard style="border-radius: 8px;" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from 'vue'
import GithubCorner from '@/components/github-corner/Index.vue'
import PanelGroup from './components/PanelGroup.vue'
import LineChart from './components/LineChart.vue'
import RadarChart from './components/RadarChart.vue'
import PieChart from './components/PieChart.vue'
import BarChart from './components/BarChart.vue'
import DependsTable from './components/DependsTable.vue'
import TodoList from './components/todo-list/Index.vue'
import BoxCard from './components/BoxCard.vue'
import UpdateTimeline from './components/UpdateTimeline.vue'
export default {
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RadarChart,
    PieChart,
    BarChart,
    DependsTable,
    TodoList,
    BoxCard,
    UpdateTimeline
  },
  setup() {
    const data = {
      newVisitis: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      },
      messages: {
        expectedData: [200, 192, 120, 144, 160, 130, 140],
        actualData: [180, 160, 151, 106, 145, 150, 130]
      },
      purchases: {
        expectedData: [80, 100, 121, 104, 105, 90, 100],
        actualData: [120, 90, 100, 138, 142, 130, 130]
      },
      shoppings: {
        expectedData: [130, 140, 141, 142, 145, 150, 160],
        actualData: [120, 82, 91, 154, 162, 140, 130]
      }
    }

    const lineChartData = ref(data.newVisitis)
    const handleSetLineChartData = (type) => {
      lineChartData.value = data[type]
    }

    return {
      lineChartData,
      handleSetLineChartData
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: #F2F7FF;
  position: relative;

  .github-corner{
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
    border-radius: 8px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
