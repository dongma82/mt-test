<template>
  <div class="container">
    <selectLocation />
    <listShow :title="hotCityTitle" :content="hotCity" />
    <listShow :title="lastVist" :content="lastLocation" />
    <listSelect :title="char"  :content="city" />
  </div>
</template>

<script>
import selectLocation from "./SelectLocation";
import listShow from "./ListShow";
import listSelect from "./ListSelect";

export default {
  data() {
    return {
      hotCityTitle: "热门城市",
      hotCity: ["北京", "上海", "深圳", "广州", "杭州"],
      lastVist: "最近访问",
      lastLocation: ["永嘉县", "温州"],
      char: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      city: [
        {
          firstChar: 'B',
          id: '001',
          name: "北京"
        },
        {
          firstChar: 'B',
          id: '002',
          name: "包头"
        },
        {
          firstChar: 'B',
          id: '003',
          name: "保定"
        },
        {
          firstChar: 'C',
          id: '004',
          name: "重庆"
        },
        {
          firstChar: 'C',
          id: '005',
          name: "成都"
        },
        {
          firstChar: 'C',
          id: '006',
          name: "常州"
        }
      ]
    };
  },
  components: {
    selectLocation,
    listShow,
    listSelect
  }
};
</script>

<style scoped lang='less' >
.container {
  width: 1090px;
  padding: 20px;
  background: #fff;
  margin: 0 auto;
  margin-top: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>