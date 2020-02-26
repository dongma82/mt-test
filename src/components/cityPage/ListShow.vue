<template>
  <el-row class="hotCity">
    <el-col :span="3">
      <div class="grid-content bg-purple title">{{title}}</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light content">
        <span v-for="item in content" :key="item">{{ item }}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ["title", "content"]
};
</script>

<style scoped lang='less'>
.hotCity {
  padding-bottom: 20px;
  padding-top: 30px;
  border-bottom: 1px solid #ccc;
}
.title {
  /* text-align: center; */

  font-size: 16px;
  padding-left: 3px;
}
.content {
  padding-top: 3px;
  span {
    display: inline-block;
    width: 60px;
    text-align: center;
  }
}
</style>