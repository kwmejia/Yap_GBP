<template>
  <div class="sidebar">
    <nav>
      <a href="#" class="tooltip_">
        <i class="bi bi-house"></i>
        <div>Inicio</div>
      </a>
      <a href="#" class="tooltip_">
        <i class="bi bi-basket"></i>
        <div>Holding</div>
      </a>
      <a href="#" class="tooltip_">

        <i class="bi bi-shop-window"></i>
        <div>Comercios</div>

      </a>
      <a href="#" class="active tooltip_">
        <i class="bi bi-wallet2"></i>
        <div>Promociones</div>

      </a>
      <a href="#" class="tooltip_">
        <i class="bi bi-cash-stack"></i>
        <div>Cupones</div>
      </a>
      <a href="#" class="text-muted">
        <i class="bi bi-plus-circle"></i>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style  lang="scss" src="@/scss/main.scss">

</style>