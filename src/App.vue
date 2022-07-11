<template>
  <div>
    <the-navigation></the-navigation>
    <transition name="route" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import RegisterForm from "./components/RegisterForm.vue";
import TheNavigation from "./components/TheNavigation.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
