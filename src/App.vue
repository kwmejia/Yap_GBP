<template>
  <HeaderComponent />
  <main class="d-flex w-100 h-100 row px-0 mx-0">
    <SidebarComponent />
    <RouterView></RouterView>
  </main>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    SidebarComponent,
  },
};
</script>

<style lang="scss" src="./scss/main.scss">

</style>
