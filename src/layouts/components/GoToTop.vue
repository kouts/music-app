<template>
  <transition name="fade">
    <a v-show="isVisible" class="back-to-top" @click="scrollToTop">
      ^ Top
    </a>
  </transition>
</template>

<script>
const debounce = function(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    if (immediate && !timeout) {
      func.apply(context, args);
    }
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);
  };
};

export default {
  props: {
    scrollTarget: {
      type: String,
      default: ''
    },
    offset: {
      type: Number,
      default: 150
    }
  },
  data() {
    return {
      isVisible: false,
      target: null
    };
  },
  mounted() {
    this.target = this.scrollTarget ? document.querySelector(this.scrollTarget) : window;
    if (this.target === window) {
      this.scrollHandler = debounce(() => {
        this.isVisible = (document.documentElement.scrollTop || document.body.scrollTop) > this.offset;
      }, 150);
    } else {
      this.scrollHandler = debounce(() => {
        this.isVisible = this.target.scrollTop > this.offset;
      }, 150);
    }
    this.target.addEventListener('scroll', this.scrollHandler);
  },
  beforeDestroy() {
    this.target.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
    scrollToTop() {
      if (typeof this.target.scrollTo === 'function') {
        this.target.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        this.target.scrollTop = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .back-to-top {
    font-size: 0.9rem;
    position: fixed;
    z-index: 1000;
    bottom: 20px;
    right: 20px;
    color: $white;
    cursor: pointer;
    border-radius: 25px;
    text-align: center;
    background-color: $primary;
    width: 50px;
    height: 50px;
    padding-top: 12px;
    &:hover {
      text-decoration: none;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
