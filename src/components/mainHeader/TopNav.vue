<template>
  <div class="header">
    <el-row height='40px'>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <hederLeft />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">
          <loginNav />
        </div>
      </el-col>
      <el-col :span="13">
        <div class="grid-content bg-purple">
          <hederRight />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <headerSearch />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import hederLeft from "./headLeft";
import loginNav from "./loginNav";
import hederRight from "./headright";
import headerSearch from "./headerSearch";
export default {
  components: {
    hederLeft,
    loginNav,
    hederRight,
    headerSearch
  }
};
</script>
<style scoped>
.header {
  color: #666;
  background: #f8f8f8;
  width: 100%;
  height: 100%;
  line-height: 40px;
  box-shadow: 0 2px 27px 0 rgba(0,0,0,0.10);
  /* padding-left: 10vw; */
}
</style>