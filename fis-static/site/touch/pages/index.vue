<template lang="html">
  <div id="main">
    <yd-slider autoplay="3000">
      <yd-slider-item v-for="spr in swiperList">
          <a href="#">
              <img :src="spr.timg">
          </a>
      </yd-slider-item>
  </yd-slider>
  <div class="gap-item">
    <h2>Services</h2>
    <p>OUR FULL SERVICES RPOJECT</p>
  </div>
  <div class="index-application">
    <i class="zyitfont zyit-pingtai"></i>
    <h2>网站应用产品解决方案</h2>
    <p>企业宣传 / 电商平台 / 分销系统 / 视觉设计 / HTML5开发 / 定制化平台</p>
  </div>
  <div class="index-application">
    <i class="zyitfont zyit-phone"></i>
    <h2>微信应用产品解决方案</h2>
    <p>微商城 / 微站 / 微分销 / 微活动 / HTML5场景定制 / 微信定制服务</p>
  </div>
  <div class="index-application">
    <i class="zyitfont zyit-app"></i>
    <h2>移动应用产品解决方案</h2>
    <p>iOS / Android / APP交互设计、视觉设计、功能定制开发</p>
  </div>
  <div class="index-application">
    <i class="zyitfont zyit-yunying"></i>
    <h2>互联网产品运营策划</h2>
    <p>定制化产品运营策略，制定顶层设计，帮助企业降低运营损耗，快速适应市场变化</p>
  </div>
  <div class="gap-item">
        <h2>About Us</h2>
        <p>INFORMATION ABOUT ZUOYANIT</p>
  </div>
  <div class="index-aboutus">
    <p>我们是一支拥有政府背景，并且融交互、创新、视觉设计、产品研发于一体的专业品牌策划与制作团队，鼎力为国内外知名企业提供全方位多平台的产品服务解决方案。以专业的交互设计、创新理念、视觉呈现，服务国内外企业多达100余家，成功案例300余例。涉及IT、汽车、教育、房地产、金融等各个行业，拥有包括中国移动、中国电信、百度、新浪、淘宝、索尼、联想、人民网、中国日报等企业在内的成功案例，在国内拥有较高美誉。</p>
    <img src="../../home/assets/img/true.jpg" >
  </div>
  <div class="index-kouhao">
    <div>
      <h3>创新。</h3>
      <h4>Innovate</h4>
      <p>我们通过研究理解用户的思维、行为、和目标，挖掘用户对产品使用的潜在需求，通过我们服务于各行业客户的丰富经验，结合品牌的优势进行分析，让用户在情绪上、行为上感知产品的创新、感受完美的体验。超越品牌的价值。</p>
    </div>
    <div>
      <h3>激情。</h3>
      <h4>Intense</h4>
      <p>我们是一只富有激情的创新团队。我们将设计通过情感的表达把用户和产品很自然的连接在一起，让用户享受使用产品的愉悦，以此来强化对产品、品牌的体验认知！通过自然的交互和生动的设计展现出来，用一个充满情感化的设计打动用户！</p>
    </div>
    <div>
      <h3>未来。</h3>
      <h4>Future</h4>
      <p>为客户提供品牌化、一站式的解决方案。服务涵盖了互联网，掌上移动设备、桌面平台以及电子消费类产品等。为客户提供从品牌设计、概念设计、交互设计、视觉设计、功能研发到最终产品实现。为客户提供真正具有创新价值的产品体验。</p>
    </div>
  </div>
  <div class="gap-item">
        <h2>Contact Us</h2>
        <p>CONTACT US AND JOIN US</p>
  </div>
   <div class="index-contact">
      <div class="index-contact-left" id="addr">

      </div>
      <div class="index-contact-right">
          <el-button type="primary" style="width:100%;margin-bottom:30px;">发起咨询</el-button>
          <p>XXX省XXX市XXX区XXX大道东88号</p>
          <p>service@zuoyanit.com</p>
      </div>
   </div>



  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperList: [],
    }
  },
  components: {

  },
  methods: {
    async getSwipper() {
      let docs = await this.$tools.httpAgent("/ajax/article/page", 'post', {
        cp: 1,
        nodeid: 3,
        mp: 5
      });
      this.swiperList = docs.msg;
    }
  },
  mounted() {
    this.getSwipper();
  }
}
</script>
