<template>
  <div class="default">
    <topNav />
    <router-view />
    <foot />
  </div>
  <!-- <el-container> -->
  <!-- <el-header class="eh" height='138px'> -->
  <!-- </el-header> -->
  <!-- <el-main>Main</el-main> -->
  <!-- <el-footer> -->
  <!-- </el-footer> -->
  <!-- </el-container> -->
</template>

<script>
import topNav from "../components/mainHeader/TopNav";
import foot from "../components/mainFooter/Foot";
import mainContent from "../components/defaultContent/MainContent";
export default {
  components: {
    topNav,
    foot,
    mainContent
  }
};
</script>

<style>

.default{
    background: #f8f8f8;
  /* height: 40px !important; */
  /* padding: 0px !important; */

}

</style>