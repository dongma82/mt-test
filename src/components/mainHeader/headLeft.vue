<template>
  <div class="city">
    <i class="el-icon-location-information"></i>
    <router-link tag="span" to="/changeCity">{{this.$store.state.changeCity.city}}</router-link>
    <router-link to="/changeCity">切换城市</router-link>
    <span>[</span>
    <router-link to="/changeCity">{{this.$store.state.changeCity.city}}</router-link>
    <router-link to="/changeCity">{{this.$store.state.changeCity.town}}</router-link>
    <router-link to="/changeCity">{{this.$store.state.changeCity.land}}</router-link>
    <span>]</span>
    <!-- <span>切换城市</span> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style scoped>
.city{
  margin-left: 10vw;
  text-align: center
}
span {
  display: inline-block;
  margin-left: 3px;
}
a{
    margin-left: 4px;
    color: #999;
}
a:hover{
    color: #FE8C00;
}
</style>