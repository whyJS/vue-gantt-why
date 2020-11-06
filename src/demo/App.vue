<template>
  <div id="app">
    <div class="container">
      <v-gantt-why
        :startTime="times[0]"
        :endTime="times[1]"
        :cellWidth="cellWidth"
        :cellHeight="cellHeight"
        :timeLines="timeLines"
        :titleHeight="titleHeight"
        :scale="scale"
        :titleWidth="titleWidth"
        showCurrentTime
        :hideHeader="hideHeader"
        :dataKey="dataKey"
        :arrayKeys="arrayKeys"
        :scrollToPostion="positionA"
        @scrollLeft="scrollLeftA"
        :datas="datasA"
      >
        <template v-slot:block="{ data, item }">
          <Test
            :data="data"
            :updateTimeLines="updateTimeLines"
            :cellHeight="cellHeight"
            :currentTime="currentTime"
            :item="item"
          ></Test>
        </template>
        <template v-slot:left="{ data }">
          <TestLeft :data="data"></TestLeft>
        </template>
        <!-- <template v-slot:timeline="{ day , getTimeScales }">
          <TestTimeline :day="day" :getTimeScales="getTimeScales"></TestTimeline>
        </template>-->
        <template v-slot:title>项目1</template>
      </v-gantt-why>
    </div>
  </div>
</template>

<script>
import Test from './components/test.vue'
import TestLeft from './components/test-left.vue'
import TestTimeline from './components/test-timeline.vue'
import { mockDatas } from './mock/index.js'
import dayjs from 'dayjs'

const scaleList = `1,2,3,4,5,6,10,12,15,20,30,60,120,180,240,360,720,1440,2880,4320`
  .split(',')
  .map(n => {
    let value = parseInt(n)
    let label
    if (value < 60) {
      label = value + 'minute'
    } else if (value >= 60 && value < 1440) {
      label = value / 60 + 'hour'
    } else {
      label = value / 1440 + 'day'
    }
    return {
      value,
      label
    }
  })
export default {
  name: 'App',
  components: { Test, TestLeft, TestTimeline },
  data() {
    return {
      timeLines: [
        {
          time: dayjs()
            .add(2, 'hour')
            .toString()
        },
        {
          time: dayjs()
            .add(5, 'hour')
            .toString(),
          color: '#747e80'
        }
      ],
      currentTime: dayjs(),
      cellWidth: 100,
      cellHeight: 106,
      titleHeight: 50,
      titleWidth: 380,
      scale: 60,
      times: [
        dayjs('2020-01-01 01:00:00').toString(),
        dayjs('2020-01-02 01:00:00').toString()
      ],
      rowNum: 100,
      colNum: 10,
      datasA: [],
      datasB: [],
      dataKey: 'id',
      scaleList: scaleList,
      scrollToTime: dayjs()
        .add(1, 'day')
        .toString(),
      scrollToPostion: { x: 10000, y: 10000 },
      hideHeader: false,
      hideSecondGantt: false,
      arrayKeys: ['gtArray', 'error'],
      scrollToY: 0,
      positionB: {},
      positionA: {}
    }
  },
  watch: {
    rowNum: 'updateData',
    colNum: 'updateData',
    times: 'updateData',
    scrollToY(val) {
      this.positionA = { x: val }
    }
  },
  mounted() {
    this.updateData()
  },
  methods: {
    updateData() {
      const json = [
        {
          id: 'JHR768UQ',
          name: '霹雳火神号',
          gtArray: [
            {
              id: 'YY42862',
              color: '#77AFF6',
              start: dayjs('2020-01-01 01:00:00').toString(),
              end: dayjs('2020-01-01 08:00:00').toString()
            },
            {
              id: 'YY42863',
              color: '#77AFF6',
              start: dayjs('2020-01-01 12:00:00').toString(),
              end: dayjs('2020-01-01 18:00:00').toString()
            }
          ],
          gtArray2: [
            {
              id: 'YY42862dd',
              color: '#9DDAB4',
              start: dayjs('2020-01-01 01:00:00').toString(),
              end: dayjs('2020-01-01 04:00:00').toString()
            },
            {
              id: 'YY42864',
              color: '#9DDAB4',
              start: dayjs('2020-01-01 12:00:00').toString(),
              end: dayjs('2020-01-01 18:00:00').toString()
            }
          ]
        }
        // {
        //   id: 'JHR768UQ2',
        //   name: '霹雳火神号',
        //   gtArray: [
        //     {
        //       id: 'YY42862',
        //       color: '#77AFF6',
        //       start: 'Thu, 05 Nov 2020 12:01:26 GMT',
        //       end: 'Thu, 05 Nov 2020 14:01:26 GMT'
        //     },
        //     {
        //       id: 'YY42862x',
        //       color: '#77AFF6',
        //       start: 'Thu, 05 Nov 2020 18:01:26 GMT',
        //       end: 'Thu, 05 Nov 2020 20:01:26 GMT'
        //     }
        //   ],
        //   gtArray2: [
        //     {
        //       id: 'TN99362',
        //       color: '#9DDAB4',
        //       start: 'Thu, 05 Nov 2020 12:01:26 GMT',
        //       end: 'Thu, 05 Nov 2020 18:01:26 GMT'
        //     }
        //   ]
        // }
      ]
      this.datasA = json
      console.log(this.times)
    },
    updateTimeLines(timeA, timeB) {
      this.timeLines = [
        {
          time: timeA
        },
        {
          time: timeB,
          color: '#747e80'
        }
      ]
    },
    scrollLeftA(val) {
      this.positionB = { x: val }
    },
    scrollLeftB(val) {
      this.positionA = { x: val }
    }
  }
}
</script>

<style scoped>
body {
  font: 12px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  height: calc(100vh - 2px);
}

label {
  margin-left: 10px;
}
input {
  width: 40px;
  height: 20px;
  vertical-align: middle;
}
input[type='range'] {
  width: 100px;
}
.top-bar {
  height: 40px;
}

.container {
  height: calc(100% - 58px);
  display: flex;
  flex-direction: column;
  flex: 1;
  /* width: 500px; */
}

.main-footer {
  /* height: 30px; */
}

>>> .el-slider {
  width: 100px;
}
</style>
