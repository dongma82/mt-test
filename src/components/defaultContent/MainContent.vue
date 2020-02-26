<template>
  <div>
    <totalListNav />
    <DefaultContent :data="data" />
  </div>
</template>

<script>
import totalListNav from "./TotalListNav";
import DefaultContent from "./DefaultContent.vue";
import axios from 'axios'
export default {
  components: {
    totalListNav,
    DefaultContent
  },
  data() {
    return {
      data: {
        all: [
          {
            image: "http://xxxxxx",
            title: "木北造型",
            address: "崇文门新世界店",
            subTitle: "木北造型（崇文门新世界店）",
            price: 398
          }
        ],
        food: [
          {
            image: "xxxxx",
            title: "COSTA COFFEE（东方新天地店）",
            address: "东方新天地",
            subTitle: "玫瑰黑巧茶拿铁1份",
            price: 11
          }
        ],
        spa: [
          {
            image: "https://p1.meituan.net/xxxx",
            title: "木北造型",
            address: "崇文门新世界店",
            subTitle: "木北造型（崇文门新世界店）",
            price: 398
          }
        ],
        movie: [],
        travel: []
      }
    };
  },
};
</script>
