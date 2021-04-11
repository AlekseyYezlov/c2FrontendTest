<template>
  <div class="appWrapper" :class="{ active: sideMenuShow }">
    <MobileHeader v-if="windowWidth <= 1100" @openAside="sideMenuShow = true" />
    <aside :class="{ active: sideMenuShow }">
      <Aside @closeAside="sideMenuShow = false" />
    </aside>
    <div class="appContent">
      <Header v-if="windowWidth > 1100" />
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import Aside from '../components/Aside/Aside';
import Header from '../components/Header/Header';
import MobileHeader from '../components/Header/MobileHeader';
export default {
  name: 'InitialLayout',
  components: {
    Aside,
    Header,
    MobileHeader,
  },
  data() {
    return {
      windowWidth: 0,
      sideMenuShow: false,
    };
  },
  created() {
    this.windowWidth = window.innerWidth;
  },
  methods: {
    closeAside(value) {
      console.log(value);
    },
  },

  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
    window.addEventListener('click', (e) => {
      if (
        this.windowWidth <= 1100 &&
        this.sideMenuShow &&
        !window
          .getComputedStyle(document.querySelector('aside'))
          .transform.includes(-300) &&
        !e.target.closest('.appHeaderMobileToggleAside') &&
        !e.target.closest('aside')
      ) {
        this.sideMenuShow = false;
      }
    });
  },
};
</script>

<style lang="scss">
.app {
  &Wrapper {
    position: relative;
    & > aside {
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      transition: all 0.3s;
      transform: translateX(0px);
      min-height: 100%;
      width: 300px;
      background-color: var(--primary-color);
    }
  }
  &Content {
    padding: 33px 33px 33px 330px;
    box-sizing: border-box;
    min-height: 100vh;
  }
}

@media screen and (max-width: 1100px) {
  .app {
    &Wrapper {
      &.active {
        position: relative;
        overflow: hidden;
        &::after {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 99;
          background-color: rgba(0, 0, 0, 0.8);
        }
      }
      & > aside {
        transform: translateX(-300px);
        z-index: 100;
        &.active {
          transform: translateX(0px);
        }
      }
    }
    &Content {
      padding: 33px;
    }
  }
}

@media screen and (max-width: 768px) {
  .app {
    &Content {
      padding: 20px;
    }
  }
}
</style>
