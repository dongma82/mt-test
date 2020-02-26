<template>
    <div class="totalListNav">
        <menuList />
        <imgage />
    </div>
</template>
<script>
import menuList from './MenuList';
import imgage from './Imgage';
export default {
    components:{
        menuList,
        imgage
    }
}
</script>
<style scoped>
.totalListNav{
    position: relative;
    display: flex;
    width: 1190px;
    margin-left: auto;
    margin-right: auto;
}
</style>