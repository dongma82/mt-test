<template>
  <div class="totalMenuList">
    <dl class="totalList" @mouseleave="handleLeave">
      <h3>全部分类</h3>
      <dd
        v-for="(item,index) in msg"
        :key="`${index}_0`"
        @mouseenter="handleEnter(item)"
      >{{ item.name }}</dd>
    </dl>

    <template v-if="curList">
      <dl class="showList" @mouseleave="handleLeave" @mouseenter="clearTimer">
        <div v-for="(item) in curList.items" :key="item.index" class="showListDetal">
          <dt>
            <span>{{ item.title }}</span>
            <span>更多</span>
            <div class="borderLine"></div>
          </dt>
          <template v-for="(item) in item.items">
            <dd :key="item.index">{{item}}</dd>
          </template>
        </div>
      </dl>
    </template>
  </div>
</template>

<script>
import imgage from "./Imgage";
import api from "@/api/index";
export default {
  data() {
    return {
      // timer:null,
      curList: null,
      msg: []
    };
  },
  methods: {
    handleEnter(item) {
      this.curList = item;
      // console.log(item);
    },
    handleLeave() {
      let self = this;
      this.timer = setTimeout(() => {
        self.curList = null;
      }, 100);
    },
    clearTimer() {
      clearTimeout(this.timer);
    }
  },
  created() {
    api.menuList().then(res => {
      this.msg = res.data.data;
      // console.log(this.msg);
    });
  }
};
</script>

<style lang='less' scoped>
.totalMenuList {
  position: relative;
  display: flex;
  .totalList {
    position: relative;
    margin-top: -40px;
    background-color: #fff;
    margin-left: 25px;
    height: 465px;
    width: 200px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    h3 {
      padding-top: 10px;
      text-align: center;
      font-size: 18px;
      padding-bottom: 10px;
    }
    dd {
      padding-left: 30px;
      margin-top: 5px;
    }
  }
  .showList {
    position: absolute;
    top: 5px;
    left: 200px;
    background-color: #fff;
    margin-left: 27px;
    width: 415px;
    height: 420px;
    padding-right: 10px;
    box-sizing: border-box;
    z-index: 100;
    // display: flex;

    .showListDetal {
      display: flex;
      // justify-content: space-around;
      flex-wrap: wrap;
      dt {
        position: relative;
        width: 400px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 10px;

        :nth-child(1) {
          font-size: 16px;
          font-weight: bold;
        }
        :nth-child(2) {
          position: relative;
          right: -140px;
        }
      }
      dd {
        // width: 100px;
        // text-align: center;
        margin-left: 20px;
        color: #999;
        // padding-right:
      }
      .borderLine {
        width: 370px;
        height: 1px;
        background-color: #ccc;
        margin-left: 20px;
        margin-top: 9px;
      }
    }
  }
}
</style>