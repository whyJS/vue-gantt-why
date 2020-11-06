<!--
 * @Descripttion: 
 * @Author: whyjs
 * @Date: 2020-07-19 03:18:56
 * @LastEditors: whyjs
 * @LastEditTime: 2020-11-06 14:56:43
-->
<template>
  <div class="name">
    <div class="d1">任务1任务1任务1</div>
    <div class="d2">负责人：孙孙</div>
    <div class="d3">预计：2020.01.10 12:00-2020.01.23 12:00（工时8天）</div>
    <div class="d4">实际：2020.01.10 09:00 — —</div>
  </div>
</template>

<script>
export default {
  name: 'TestLeft',
  props: {
    data: Object
  },
  mounted() {
    console.log('******')
    console.log(this.data)
  }
}
</script>

<style lang="scss" scoped>
.name {
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 15px 15px 15px 15px;
  border-bottom: 1px solid #333;
  .d1 {
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #6a6a6a;
  }
  .d2 {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #999999;
    margin-top: 8px;
  }
  .d3 {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #77aff6;
    margin-top: 3px;
  }
  .d4 {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #9ddab4;
    margin-top: 3px;
  }
}

.colorBar {
  width: 10px;
  height: 100%;
}
</style>
