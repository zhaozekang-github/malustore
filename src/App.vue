<template>
  <router-view />
  <NavBar v-if="isShow"></NavBar>
</template>

<script setup>
import NavBar from "./components/NavBar.vue"
import { reactive, ref, onMounted, watch, onBeforeUpdate } from 'vue'
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

const isShow = ref(true)
const path = ref(String)

path.value = route.path

// onMounted(() => {
//   console.log(route.meta.isShow);
//   isShow.value = route.meta.isShow
// })
router.beforeEach((to, from) => {
  isShow.value = to.meta.isShow
})

</script>

<style lang="less">
@import "./common/style/mixin.less";

html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.router-view {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.van-badge--fixed {
  z-index: 1000;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
