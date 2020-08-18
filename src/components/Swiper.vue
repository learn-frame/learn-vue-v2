<template>
  <section class="swiper-container">
    <ul class="swiper-wrapper" ref="swiperList">
      <li ref="carouselItem" class="swiper-slide" a-for="(video, i) in videos" :key="i">
        <img :src="video" class="item-img" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    this.autoCarousel()
  },
  data: () => ({
    videos: [
      'https://pic.rmb.bdstatic.com/bjh/live/9a7b7b81b5c0be9d4c4798b5645598e3.png',
      'https://pic.rmb.bdstatic.com/bjh/live/c2dbd6798bfa1a43921c1e17b6c34819.png',
      'https://pic.rmb.bdstatic.com/bjh/live/b457233d57254a53cdb6633a22a6b7ae.jpeg',
    ],
  }),
  methods: {
    autoCarousel() {
      const $swiperListEl = this.$refs.swiperList as HTMLUListElement
      let pos = 0

      setInterval(() => {
        $swiperListEl.style.transform = `translateX(${-pos * 100}%)`
        pos += 1
        if (pos > 2) pos = 0
      }, 1000)
    },
  },
})
</script>

<style lang="scss" scoped>
.swiper-container {
  overflow: hidden;
}

.swiper-wrapper {
  box-sizing: content-box;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 1s ease;
  transform: translateX(0);
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
}

.item-img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
