<template>
  <div class="contentList">
    <div :data="data" class="contentTitle">
      <h3>有格调</h3>
      <h4
        @mouseenter="handleEnter"
        :class="active_a"
        v-for="(value,key) in msg"
        :key="`${value}-${key}`"
      >{{ key }}</h4>
    </div>
    <el-col :span="8">
      <div
        class="grid-content bg-purple contentModule"
        v-for="(item,index) in curTip"
        :key="`${item}-${index}`"
      >
        <img :src="`${item.image}`" alt />
        <h5>{{item.title}}</h5>
        <h5>{{item.address}}</h5>
        <h4>￥{{item.price}}</h4>
        <span>门市价￥258</span>
      </div>
    </el-col>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  props: ["data"],
  data() {
    return {
      active_a: null,
      deflaut: "all",
      msg: [],
      curTip: null
    };
  },
  created() {
    api
      .defaultContent()
      .then(res => {
        this.msg = res.data.data;
        console.log(this.msg);
      })
      .then(() => {
        let deflaut = this.$el.querySelector(".contentTitle>h4:nth-child(2)");
        deflaut.classList.add("active_a");
        this.curTip = this.msg.all;
        // console.log(this.curTip);
        
      });
  },
  methods: {
    handleEnter(e) {
      this.curTip = this.msg[e.target.innerText];
      var active = this.$el.getElementsByClassName("active_a");
      for (let i = 0; i < active.length; i++) {
        active[i].classList.remove("active_a");
      }
      e.target.classList = "active_a";
    }
  }
};
</script>

<style lang='less' scopped>
.contentList {
  width: 1190px;
  margin: 30px auto 10px;
  box-sizing: border-box;
  .contentTitle {
    // width: 100%;
    height: 44px;
    margin-left: 20px;
    margin-right: 10px;
    background-color: rgb(190, 164, 116);
    box-sizing: border-box;
    border-radius: 5px;
    line-height: 44px;
    h3 {
      font-size: 16px;
      display: inline-block;
      margin-right: 30px;
      margin-left: 20px;
      cursor: pointer;
    }
    h4 {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
      cursor: pointer;
      position: relative;
    }
  }
  .contentArea {
    width: 1160px;
    margin-left: 20px;
    padding-left: 25px;
    margin-right: 20px;
    padding-right: 10px;
    // display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    box-sizing: border-box;
    background: #fff;
    .contentModule {
      margin-top: 20px;
      width: 360px;
      //   height: 208px;
      border-radius: 5px;
      h5 {
        margin-top: 10px;
      }
      h4 {
        margin-top: 10px;
        font-size: 16px;
        display: inline-block;
      }
      span {
        display: inline-block;
        position: relative;
        // margin-top: 10px;
        font-size: 12px;
        margin-left: 15px;
        //   margin-bottom:3px;
        //   vertical-align;
      }
      span::before {
        position: absolute;
        width: 70px;
        height: 2px;
        background-color: #ccc;
        top: 8px;
        content: "";
      }
    }
  }
  img {
    width: 360px;
    height: 208px;
    border-radius: 5px;
  }
  h4.active_a::after {
    content: "";
    display: block;
    position: absolute;
    // top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0px;
    width: 0px;
    border: 6px solid transparent;
    border-bottom: 7px solid #fff;
    margin: auto;
  }
}

// h4
</style>