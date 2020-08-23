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
      <div class="mask" v-if="i === 0 && isTouching"></div>
      <img :src="video" class="item-img" />
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import throttle from 'lodash.throttle'

export default Vue.extend({
  name: 'Swiper',

  data() {
    return {
      videos: [
        'https://pic.rmb.bdstatic.com/bjh/live/9a7b7b81b5c0be9d4c4798b5645598e3.png',
        'https://pic.rmb.bdstatic.com/bjh/live/b457233d57254a53cdb6633a22a6b7ae.jpeg',
        'https://pic.rmb.bdstatic.com/bjh/live/7ebd1b12643886bd9f364dc148193f65.jpeg',
        'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=51570b1e7edc6008c02d34b41501ab3f&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fbjh%2Fvideo%2Fe8bb10886b1c881a05d6abf0d747cd07.jpeg',
        'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=fea2aa26a549a4dcdb24b3a81671ad1a&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fbjh%2Fvideo%2F659dbb545fc3bc83d17874a857e8d645.jpeg',
        'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=9bfedff1d299ebebef753a4f2cc2515e&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fbjh%2Fvideo%2Ff081d8f9e0c5d6f46d4719fdb4e75870.jpeg',
      ],
      startX: 0,
      pos: 0,
      position: ['curr', 'next', 'prev'],
      rAF: null,
      isTouching: false,
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
      this.isTouching = true
    },

    handleTouchMove(e) {
      const $currEl = document.querySelector('.swiper-slide-curr')
      const $prevEl = document.querySelector('.swiper-slide-prev')
      const $nextEl = document.querySelector('.swiper-slide-next')

      const $maskEl = document.querySelector('.mask')

      const screenWidth = document.documentElement.offsetWidth
      const deltaX = e.changedTouches[0].clientX - this.startX

      const ratio = deltaX / 290

      const opcaityRatio = e.changedTouches[0].clientX / this.startX / 1.2

      $currEl.style.opacity = opcaityRatio
      $maskEl.style.background = `rgba(255, 255, 255, ${1 - opcaityRatio})`

      // if (this.pos !== 0 && Math.abs(ratio) < 0.05) {
      //   $currEl.style.transform = `translateX(${ratio * 100}%)`
      //   $prevEl.style.transform = `translateX(${(-1.83 + ratio) * 100}%)`
      //   $nextEl.style.transform = `translateX(${(-0.85 + ratio) * 100}%)`

      //   $nextEl.style.width = `${70 + Math.abs(ratio * 100)}%`
      //   $prevEl.style.width = `${60 + Math.abs(ratio * 100)}%`
      // }
    },

    handleTouchEnd(e) {
      const screenWidth = document.documentElement.offsetWidth
      const deltaX = e.changedTouches[0].clientX - this.startX
      const len = this.videos.length

      this.isTouching = false

      const $currEl = document.querySelector('.swiper-slide-curr')
      const $prevEl = document.querySelector('.swiper-slide-prev')
      const $nextEl = document.querySelector('.swiper-slide-next')

      $currEl.removeAttribute('style')
      $prevEl.removeAttribute('style')
      $nextEl.removeAttribute('style')

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
}

.swiper-slide-curr {
  width: 80%;
  transform: translateX(0);
  order: 1;
  z-index: 3;
}

.mask {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
