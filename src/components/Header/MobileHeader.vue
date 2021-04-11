<template>
  <div class="appHeaderMobile">
    <div
      title="Toggle Side Menu"
      class="appHeaderMobileToggleAside"
      @click="$emit('openAside', true)"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div>
      <div class="appHeaderMobilePageTitle">
        <h1>
          {{ $route.name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.appHeaderMobile {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);
  width: 100%;
  padding: 10px 33px;
  box-sizing: border-box;
  &ToggleAside {
    width: 22px;
    height: 22px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    div {
      height: 3px;
      border-radius: 4px;
      background-color: var(--text);
    }
  }
  &PageTitle {
    h1 {
      margin: 0;
    }
  }
}
</style>
