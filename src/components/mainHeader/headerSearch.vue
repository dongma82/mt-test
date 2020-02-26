<template>
  <div class="searchModule">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-input
            placeholder="搜索商家或地点"
            class="searchText"
            v-model="input"
            @input="handleInput"
            @blur="blurHandle"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl v-if="showSearchList" class="max">
            <dt>热门搜索</dt>
            <dd v-for="(item,index ) in searchList" :key="`${item}-${index}`">
              <router-link :to="`/s/${item}`">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang='less'>
.searchModule {
  background-color: #fff;
  padding-left: 12vw;
  padding-top: 2vh;
  position: relative;
  padding-bottom: 60px;
  a {
    text-decoration: none;
  }
}
img {
  width: 150px;
  display: inline-block;
}
.searchText {
  width: 400px;
  padding-top: 7px;
  vertical-align: bottom;
}
dl {
  padding-left: 15px;
  width: 385px;
  position: absolute;
  top: 52px;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 200;
}
dt,
dd {
  height: 25px;
  line-height: 25px;
  z-index: 10;
  a {
    text-decoration: none;
    color: #000;
  }
}

/deep/ .el-input__inner {
  height: 40px;
  outline: none;
}
/deep/ .el-button,
.el-button--primary {
  height: 40px;
  width: 80px;
}
</style>
<script>
import api from "@/api/index";
export default {
  data() {
    return {
      input: "",
      searchList: [],
      showSearchList: false
    };
  },
  methods: {
    handleInput() {
      if (this.input !== "") {
        this.showSearchList = true;
      } else if (this.input == "") {
        this.showSearchList = false;
      }
      api.headerSearch().then(res => {
        this.searchList = res.data.data.list;
      });
    },
    blurHandle() {
      var self = this;
      setTimeout(() => {
        self.showSearchList = false;
      }, 200);
    }
  }
};
</script>