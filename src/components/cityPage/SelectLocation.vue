<template>
  <div class="selectLocation" v-documentClick="documentClick">
    <div>{{ $store.state.changeCity.city }} {{ $store.state.changeCity.town}}</div>
    <el-row :gutter="30" class="cacheStyle">
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <span>按省份选择:</span>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple select" @click="handleProvinceSelect">
          <span>{{curProvince}}</span>
          <i class="el-icon-caret-bottom"></i>
          <div :class="['selectDetal',{'showProvinceSelect':showProvinceSelect}]">
            <h4>省份</h4>
            <dl>
              <dd
                v-for="item in province"
                :key="item.provinceCode"
                @click="confirmProvince($event,item.cityInfoList)"
              >{{item.provinceName}}</dd>
            </dl>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple select" @click="handleCitySelect">
          <span>{{curCity}}</span>
          <i class="el-icon-caret-bottom"></i>
          <div :class="['selectDetal',{'showCitySelect':showCitySelect}]">
            <h4>省份</h4>
            <dl>
              <dd v-for="item in curCityList" :key="`${item}-${item.id}`" @click="confirmCity">{{item.name}}</dd>
            </dl>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <!-- <div class="grid-content bg-purple ps">
          <span>直接搜索:</span>
          <input type="text" />
          <div class="searchList">{{ }}</div>
        </div>-->
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="handleSelect"
          hide-loading
        ></el-autocomplete>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    return {
      state: "",
      showProvinceSelect: false,
      showCitySelect: false,
      province: [],
      curProvince: "江苏",
      curCityList:[],
      curCity: "南京"
    };
  },
  mounted() {
    this.restaurants = this.loadAll();
    api.getprovince().then(res => {
      console.log(res);
      this.province = res.data.data;
      console.log(this.province);
    });
    // console.log(this.$store);
  },
  methods: {
    handleProvinceSelect(e) {
      e.stopPropagation();
      this.showProvinceSelect = true;
      if (this.showCitySelect == true) {
        this.showCitySelect = false;
      }
    },
    handleCitySelect(e) {
      e.stopPropagation();
      this.showCitySelect = true;
      if (this.showProvinceSelect == true) {
        this.showProvinceSelect = false;
      }
    },
    documentClick() {
      this.showProvinceSelect = false;
      this.showCitySelect = false;
      // console.log(1);
    },
    confirmProvince(e,item) {
      e.stopPropagation();
      this.curProvince = e.target.innerText;
      this.curCityList = item;
      this.showProvinceSelect = false;      
    },
    confirmCity(e){
      e.stopPropagation();
      this.curCity = e.target.innerText;
      this.showCitySelect = false;
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号"
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层"
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号"
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号"
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部"
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室"
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼"
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  }
};
</script>

<style scoped lang='less'>
.selectLocation {
  width: 100%;
  .cacheStyle {
    width: 90%;
    height: 71px;
    // padding-bottom: 30px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    margin-left: 0 !important;
    line-height: 50px;
    .select {
      z-index: 100;
    }
    span {
      font-size: 16px;
      color: #333;
      font-weight: 500;
    }
    .select,
    input {
      border: 1px solid #ccc;
      height: 35px;
      position: relative;
      margin-top: 7px;
      line-height: 15px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      box-sizing: border-box;
      margin-left: 5px;
      cursor: pointer;
      i {
        line-height: 15px;
      }
      .selectDetal {
        background: #fff;
        border: 1px solid #ccc;
        min-width: 250px;
        position: absolute;
        top: 37px;
        left: 1px;
        min-height: 300px;
        padding: 10px;
        display: none;

        h4 {
          font-size: 16px;
          font-weight: 500;
          color: #ccc;
          margin-left: 10px;
          margin-bottom: 10px;
        }
        dl {
          display: flex;
          //   justify-content: space-around;
          flex-wrap: wrap;
          dd {
            margin-left: 20px;
            width: 60px;
            height: 20px;
          }
        }
      }
      .selectDetal.showProvinceSelect,
      .selectDetal.showCitySelect {
        display: block;
      }
    }
    input {
      margin-top: -44px;
      outline: none;
      margin-left: 75px;
      cursor: auto;
      font-size: 13px;
    }
    .ps {
      position: relative;
      .searchList {
        position: absolute;
        z-index: 100;
        width: 100px;
        background-color: #fff;
        min-height: 200px;
        border: 1px solid #ccc;
        left: 76px;
        top: 45px;
      }
    }
  }
}
</style>