<template>
  <ul
    class="swiper-wrapper"
    @touchstart="handleTouchStart($event)"
    @touchmove="handleTouchMove($event)"
    @touchend="handleTouchEnd($event)"
  >
    <li
      v-for="(video, i) in currVideos"
      ref="swiperItem"
      :key="i"
      :class="['swiper-slide', `swiper-slide-${type[i]}`]"
    >
      <img class="item-img" :src="video" />
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
        'https://pic.rmb.bdstatic.com/bjh/live/9a7b7b81b5c0be9d4c4798b5645598e3.png',
        'https://pic.rmb.bdstatic.com/bjh/live/b457233d57254a53cdb6633a22a6b7ae.jpeg',
        'https://pic.rmb.bdstatic.com/bjh/live/7ebd1b12643886bd9f364dc148193f65.jpeg',
        'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=51570b1e7edc6008c02d34b41501ab3f&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fbjh%2Fvideo%2Fe8bb10886b1c881a05d6abf0d747cd07.jpeg',
        'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=fea2aa26a549a4dcdb24b3a81671ad1a&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fbjh%2Fvideo%2F659dbb545fc3bc83d17874a857e8d645.jpeg',
        'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=9bfedff1d299ebebef753a4f2cc2515e&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fbjh%2Fvideo%2Ff081d8f9e0c5d6f46d4719fdb4e75870.jpeg',
      ],
      startX: 0,
      pos: 0,
      type: ['first', 'second', 'third'],
      $swiperItemEl: null,
      videosLen: 0,
    }
  },

  mounted() {
    this.$swiperItemEl = this.$refs.swiperItem
    this.videosLen = this.videos.length
  },

  computed: {
    currVideos() {
      const vitalVideos = this.videos.slice(this.pos, this.pos + 3)
      return vitalVideos.length < 3
        ? [
            ...vitalVideos,
            ...this.videos.slice(0, this.pos + 3 - this.videosLen),
          ]
        : vitalVideos
    },
  },

  methods: {
    compatibleTouchEvent(e) {
      return e.changedTouches[0] || e.targetTouches[0] || e.touches[0]
    },

    getDeltaX(e) {
      return e.changedTouches[0].clientX - this.startX
    },

    handleTouchStart(e) {
      this.startX = e.changedTouches[0].clientX
    },

    handleTouchMove(e) {
      const deltaX = this.getDeltaX(e)

      if (deltaX > 0) {
        // TODO:
      } else {
        this.$swiperItemEl.forEach((item, i) =>
          item.classList.add(`swiper-slide-${this.type[i]}-touch`),
        )
      }
    },

    handleTouchEnd(e) {
      const screenWidth = document.documentElement.offsetWidth
      const deltaX = this.getDeltaX(e)

      this.$swiperItemEl.forEach((item, i) =>
        item.classList.remove(`swiper-slide-${this.type[i]}-touch`),
      )

      if (Math.abs(deltaX) > screenWidth / 5) {
        if (deltaX > 0) {
          // 右滑
          if (this.pos === 0) return
          this.pos -= 1
        } else {
          // 左滑
          this.pos += 1
          if (this.pos === this.videosLen) this.pos = 0
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
  transition: transform 300ms linear, width 300ms linear;
}

.swiper-slide-first {
  width: 80%;
  transform: translateX(0);
  order: 1;
  z-index: 3;
  opacity: 1;
  transition: none;
}

.swiper-slide-second {
  width: 70%;
  transform: translateX(-85%);
  order: 2;
  z-index: 2;
}

.swiper-slide-third {
  width: 60%;
  transform: translateX(-183%);
  order: 3;
  z-index: 1;
}

.swiper-slide-second::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(#fff, 0.45);
}

.swiper-slide-third::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(#fff, 0.75);
}

.swiper-slide-first-touch {
  opacity: 0;
  transition: opacity 150ms linear;
}

.swiper-slide-second-touch {
  transform: translateX(-100%);
  width: 80%;
}

.swiper-slide-third-touch {
  transform: translateX(-198%);
  width: 70%;
}

.item-img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
}
</style>
