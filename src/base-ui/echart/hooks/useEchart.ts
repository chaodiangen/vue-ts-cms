import * as echarts from 'echarts'
export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }
  const updateResize = () => {
    echartInstance.resize()
  }
  // 检测浏览器变化 重新渲染
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  return {
    echartInstance,
    setOptions,
    updateResize
  }
}
