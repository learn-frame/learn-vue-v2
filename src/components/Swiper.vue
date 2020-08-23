<template>
  <ul
    class="swiper-wrapper"
    ref="swiperList"
    @touchstart="handleTouchStart($event)"
    @touchmove="handleTouchMove($event)"
    @touchend="handleTouchEnd($event)"
  >
    <li
      ref="swiperItem"
      :class="['swiper-slide', `swiper-slide-${position[i]}`]"
      v-for="(video, i) in currVideos"
      :key="i"
    >
      <img :src="video" class="item-img" />
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Swiper',

  data() {
    return {
      videos: [
        'https://dummyimage.com/600x400/000000/fff.png&text=text-1',
        'https://dummyimage.com/600x400/d123d1/fff.png&text=text-2',
        'https://dummyimage.com/600x400/90cf23/fff.png&text=text-3',
        'https://dummyimage.com/600x400/235fcf/fff.png&text=text-4',
        'https://dummyimage.com/600x400/cfc123/fff.png&text=text-5',
        'https://dummyimage.com/600x400/23cfcf/fff.png&text=text-6',
      ],
      startX: 0,
      pos: 0,
      position: ['curr', 'next', 'prev'],
    }
  },

  computed: {
    currVideos() {
      const len = this.videos.length
      const vitalVideos = this.videos.slice(this.pos, this.pos + 3)

      return vitalVideos.length < 3
        ? [...vitalVideos, ...this.videos.slice(0, this.pos + 3 - len)]
        : vitalVideos
    },
  },

  mounted() {
    // this.autoswiper()
  },

  methods: {
    compatibleTouchEvent(e) {
      return e.changedTouches[0] || e.targetTouches[0] || e.touches[0]
    },

    handleTouchStart(e) {
      this.startX = e.changedTouches[0].clientX
    },

    handleTouchMove(e) {
      const deltaX = e.changedTouches[0].clientX - this.startX
      const screenWidth = document.documentElement.offsetWidth
    },

    handleTouchEnd(e) {
      const screenWidth = document.documentElement.offsetWidth
      const deltaX = e.changedTouches[0].clientX - this.startX
      const len = this.videos.length

      if (Math.abs(deltaX) > screenWidth / 5) {
        if (deltaX > 0) {
          // 右滑
          if (this.pos === 0) return
          this.pos -= 1
        } else {
          // 左滑
          this.pos += 1
          if (this.pos === len) this.pos = 0
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  list-style: none;
  overflow: hidden;
}

.swiper-slide {
  position: relative;
  flex-shrink: 0;
  translate: 300ms all linear;
}

.swiper-slide-curr {
  width: 80%;
  transform: translateX(0);
  order: 1;
  z-index: 3;
}

.swiper-slide-next {
  width: 70%;
  transform: translateX(-85%);
  order: 2;
  z-index: 2;
}

.swiper-slide-prev {
  width: 60%;
  transform: translateX(-183%);
  order: 3;
  z-index: 1;
}

.swiper-slide-next::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(#fff, 0.45);
}

.swiper-slide-prev::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(#fff, 0.75);
}

.item-img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
}
</style>
