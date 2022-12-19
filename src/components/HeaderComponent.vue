<template>
  <header>
    <a class="d-flex" href="#">
      <img src="../Logo.svg" alt="yap logo" class="logo" />
      <h1 class="">Portal Manager de Comercios</h1>
    </a>

    <nav>
      <a href="#" class="support_btn ">
        <i class="fas fa-headset"></i>
      </a>
      <a href="#" class="btn_ restaurants_btn"> Restaurantes </a>
      <a href="#" class="btn_ trade_btn"> Comercios </a>

      <div @click="changeStateBtnUser" class="user_btn">
        <i class="far fa-user"></i>

        <button class="btn_" v-if="btnUserActive">Cerrar sesión</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",

  data() {
    return {
      btnUserActive: false,
    };
  },

  methods: {
    changeStateBtnUser() {
      this.btnUserActive = !this.btnUserActive;
    },
  },
};
</script>

<style  lang="scss" src="@/scss/main.scss">

</style>