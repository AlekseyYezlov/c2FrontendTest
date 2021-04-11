<template>
  <header class="appHeader">
    <div class="appHeaderLeftSide">
      <div class="appHeaderPageTitle">
        <h1>
          {{ $route.name }}
        </h1>
      </div>
    </div>
    <div class="appHeaderRightSide">
      <div class="appHeaderUser">
        <Notification />
        <UserComponent />
      </div>
    </div>
  </header>
</template>

<script>
import Notification from './Notification';
import UserComponent from './UserComponent';
export default {
  name: 'Header',
  components: {
    Notification,
    UserComponent,
  },
};
</script>

<style lang="scss" scoped>
.appHeader {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 30px;
  &PageTitle {
    font-size: 33px;
    color: var(--primary-text);
  }
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  h1 {
    margin: 0;
    padding: 0;
    line-height: normal;
  }
}
</style>
