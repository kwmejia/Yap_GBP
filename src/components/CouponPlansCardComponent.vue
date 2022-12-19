<template>
  <div class="card_">
    <el-tooltip class="box-item" effect="light" content="Cupones Max" :show-arrow="false">
      <div class="d-flex">
        <i class="bi bi-fullscreen "></i>
        <span class="text-muted">{{ data.cupones_max }}</span>
      </div>
    </el-tooltip>

    <el-tooltip class="box-item" effect="light" content="Valor" :show-arrow="false">
      <div class="d-flex">
        <i class="bi bi-cash-coin"></i>
        <span class="text-muted">{{ data.valor }}</span>
      </div>
    </el-tooltip>


    <el-tooltip class="box-item" effect="light" content="Variación de la comisión" :show-arrow="false">
      <div class="d-flex">
        <i class="bi bi-layer-forward"></i>
        <span class="text-muted">{{ data.valoracion }}</span>
      </div>
    </el-tooltip>

    <el-tooltip class="box-item tool" effect="light" content="Comercios con este plan" :show-arrow="false">
      <div class="d-flex">
        <i class="bi bi-shop-window"></i>
        <span class="text-muted">{{ data.comercios_plan }}</span>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "CouponPlansCardComponent",
  props: {
    data: {
      required: false
    }
  }
}
</script>

<style lang="sass" >

</style>