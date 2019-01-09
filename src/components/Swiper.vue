<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="item in lists">
        <a class="js-no-follow" :href="item.clickUrl">
          <img class="goods-main-photo fadeIn" :src="item.image">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<style scoped>
  .swiper-slide img {
    height: 100%;
    width: 100%;
  }
</style>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: 'Swiper',
    props: ['lists'],
    mounted() {
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>


