<template>
  <div class="navigationMenu">
    <div class="logo">
      <div class="logoImgWrapper">
        <img src="../../assets/logo.png" alt="Logo" />
      </div>
      <div class="companyName">
        {{ companyName }}
      </div>
    </div>
    <ul class="navigationMenuList" v-if="links.length">
      <template v-for="(link, index) in links">
        <li
          :key="index"
          :class="{
            'router-link-exact-active': link.name === $route.name,
          }"
          @click="goToRouteByName(link.name)"
          class="navigationMenuListItem"
        >
          {{ link.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      companyName: 'AY & Co',
      links: [],
    };
  },
  methods: {
    goToRouteByName(routeName) {
      this.$router.push({ name: routeName }).then(() => {
        this.$emit('closeAside', true);
      });
    },
  },
  created() {
    this.links = this.$router.options.routes.map((route) => {
      return {
        path: route.path,
        name: route.name,
      };
    });
  },
};
</script>

<style lang="scss" scope>
.navigationMenu {
  padding: 37px 0;
  .logo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    color: var(--text);
    font-size: 1.3em;
    text-transform: uppercase;

    &ImgWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      background-color: var(--light-primaty-color);
      border-radius: 50%;
      margin-right: 20px;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
  &List {
    list-style-type: none;
    padding: 0;
    text-align: left;
    &Item {
      background-color: var(--primary-color);
      color: var(--light-primaty-color);
      padding: 20px 10px 20px 40px;
      border-left: 3px solid transparent;
      transition: all;
      transition-duration: 0.3s;
      cursor: pointer;
      &:hover,
      &.router-link-exact-active {
        background-color: var(--dark-primary-color);
        color: var(--text);
        border-color: var(--text);
      }
    }
  }
}
</style>
