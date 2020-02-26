<template>
  <div class="imageContent">
    <div class="imageContent-title">
      <span>美团外卖</span>
      <span>猫眼电影</span>
      <span>美团酒店</span>
      <span>民宿／公寓</span>
      <span>商家入驻</span>
      <span>美团公益</span>
    </div>
    <div class="mainBanner">
      <div class="topBanner">
        <div class="mainSlider">
          <div class="block">
            <el-carousel height="240px">
              <el-carousel-item v-for="item in mainSliderUrl" :key="item">
                <img :src="item" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="mainLife">
          <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt />
        </div>
        <div class="moduleLoginIn"></div>
      </div>
      <div class="bottomBanner">
        <div class="bottomBanner-chache">
          <div>
            <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt />
          </div>
          <div>
            <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt />
          </div>
        </div>
        <div class="coroperate">
            <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
        </div>
        <div class="QRCode"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainSliderUrl: [
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
      ]
    };
  }
};
</script>
<style lang='less' scoped>
.imageContent {
  position: relative;
  .imageContent-title {
    position: relative;
    top: -30px;
    display: flex;
    // justify-content: space-around;
    width: 950px;
    span {
      font-size: 16px;
      font-weight: 550;
      margin-left: 50px;
    }
  }
  .mainBanner {
    position: absolute;
    margin-top: -15px;
    width: 950px;
    height: 240px;
    margin-left: 5px;

    .topBanner {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .block {
        width: 550px;
        height: 240px;
        img {
          width: 550px;
          height: 240px;
        }
      }
      .mainLife {
        width: 150px;
        height: 240px;
        img {
          width: 150px;
          height: 240px;
        }
      }
      .moduleLoginIn {
        width: 230px;
        height: 240px;
        background-color: #fff;
      }
    }
    .bottomBanner {
      width: 950px;
      height: 177px;
      padding-top: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .bottomBanner-chache {
        width: 550px;
        height: 177px;
        display: flex;
        justify-content: space-between;
        :nth-child(1) {
          height: 167px;
          width: 270px;
          img {
            height: 167px;
            width: 270px;
          }
        }
        :nth-child(2) {
          height: 167px;
          width: 270px;
          img {
            height: 167px;
            width: 270px;
          }
        }
      }
      .coroperate {
        width: 150px;
        height: 167px;
        img {
          width: 150px;
          height: 167px;
        }
      }
      .QRCode{
          width: 230px;
          height: 167px;
          background-color: #fff
      }
    }
  }
}
</style>