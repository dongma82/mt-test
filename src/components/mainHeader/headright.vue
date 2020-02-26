<template>
  <div class="headerRight">
    <div class="myMt">
      <router-link tag="div" to="/">我的美团</router-link>
      <ul class="myMtList">
        <router-link tag="li" to="/">我的订单</router-link>
        <router-link tag="li" to="/">我的收藏</router-link>
        <router-link tag="li" to="/">抵用券</router-link>
        <router-link tag="li" to="/">账户设置</router-link>
      </ul>
    </div>
    <div>
      <router-link tag="div" to="/">手机APP</router-link>
    </div>
    <div class="sellCenter">
      <router-link tag="div" to="/">商家中心</router-link>
      <ul class="sellCenterList">
        <router-link tag="li" to="/">美团餐饮商户中心</router-link>
        <router-link tag="li" to="/">登录商家中心</router-link>
        <router-link tag="li" to="/">美团智能收银</router-link>
        <router-link tag="li" to="/">我想合作</router-link>
        <router-link tag="li" to="/">手机免费开店</router-link>
        <router-link tag="li" to="/">餐饮代理商招募</router-link>
        <router-link tag="li" to="/">商家申请开票</router-link>
        <router-link tag="li" to="/">免费合作美团排队</router-link>
      </ul>
    </div>
    <div>
      <router-link tag="div" to="/">美团规则</router-link>
      <ul class="mtRule">
        <router-link tag="li" to="/">规则中心</router-link>
        <router-link tag="li" to="/">规则目录</router-link>
        <router-link tag="li" to="/">规则评议院</router-link>
      </ul>
    </div>
    <div>
      <router-link tag="div" to="/">网站导航</router-link>
      <div class="webNav">
        <dl class="hotel">
          <dt>酒店旅游</dt>
          <dd>国际机票</dd>
          <dd>火车票</dd>
          <dd>民宿</dd>
          <dd>经济型酒店</dd>
          <dd>主题酒店</dd>
          <dd>商务酒店</dd>
          <dd>公寓</dd>
          <dd>豪华酒店</dd>
          <dd>客栈</dd>
          <dd>青年旅社</dd>
          <dd>度假酒店</dd>
          <dd>别墅</dd>
          <dd>农家院</dd>
        </dl>
        <dl class="eat">
          <dt>吃美食</dt>
          <dd>烤鱼</dd>
          <dd>特色小吃</dd>
          <dd>烧烤</dd>
          <dd>自助餐</dd>
          <dd>火锅</dd>
          <dd>代金券</dd>
        </dl>
        <dl class="movie">
          <dt>看电影</dt>
          <dd>热映电影</dd>
          <dd>热门影院</dd>
          <dd>热映电影口碑榜</dd>
          <dd>最受期待电影</dd>
          <dd>国内票房榜</dd>
          <dd>北美票房榜</dd>
          <dd>电影排行榜</dd>
        </dl>
        <dl class="phone">
          <dt>手机应用</dt>
          <div>
            <dd>
              <img
                src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                alt
              />
            </dd>
            <dd>
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                alt
              />
            </dd>
            <dd>
              <img
                src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                alt
              />
            </dd>
            <dd>
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                alt
              />
            </dd>
            <dd>
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                alt
              />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headerRight {
  width: 100%;
  height: 40px;
  display: flex;
  margin-left: 23vw;
}
.headerRight > div {
  width: 100px;
  color: #999;
  position: relative;
  text-align: center;
  border: 1px solid transparent;
  border-bottom: none;
  overflow: hidden;
  z-index: 10000;

}
.myMtList,
.sellCenterList,
.mtRule {
  position: relative;
  padding: 0;
  background-color: #fff
}
.myMtList,
.mtRule {
  top: -2px;
  left: -1px;
  width: 100px;
  
}
.sellCenterList {
  top: -1px;
  left: -16px;
  width: 115px;
}
.headerRight > div:hover {
  border: 1px solid #ccc;
  /* border-bottom: none; */
  background-color: #fff;
  overflow: visible;
}
.headerRight > div:hover .myMtList,
.headerRight > div:hover .sellCenterList,
.headerRight > div:hover .mtRule,
.headerRight > div:hover .webNav {
  border: 1px solid #ccc;
  /* border-top: none; */
}
.webNav::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 5px;
  top: -3px;
  left: 1249px;
  background: #fff;
}
.myMtList::after,
.mtRule::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 2px;
  top: -1px;
  left: 0px;
  background: #fff;
}
.sellCenterList::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 3px;
  top: -2px;
  left: 15px;
  background: #fff;
}

.webNav {
  position: relative;
  width: 1400px;
  left: -1250px;
  top: -2px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
/* .headerRight > div:nth-child(5) {
  border: 1px solid #ccc;
  border-bottom: none;
  background-color: #fff;
  overflow: visible;
} */
.hotel,
.eat {
  width: 300px;
}
dt {
  padding-top: 10px;
  padding-bottom: 15px;
  font-size: 16px;
  color: #000;
}
.movie {
  width: 100px;
  padding-right: 20px;
  padding-left: 20px;
}
.hotel dd,
.eat dd {
  display: inline-block;
  width: 80px;
}
.movie dd {
  display: inline-block;
  width: 100px;
}
.phone div {
  width: 550px;
  display: flex;
  justify-content: space-around;
  padding-left: 50px;
}
.phone img {
  display: inline-block;
  width: 70px;
  height: 70px;
}
</style>