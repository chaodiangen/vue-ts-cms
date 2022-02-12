<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)">
          <BaseEchart :option="options"></BaseEchart>
        </hy-card>
      </el-col>
      <el-col :span="10"></el-col>
      <el-col :span="7"></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import BaseEchart from '@/base-ui/echart'
import HyCard from '@/base-ui/card'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    HyCard,
    BaseEchart
  },
  setup() {
    const options = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    return {
      options
    }
  }
})
</script>
