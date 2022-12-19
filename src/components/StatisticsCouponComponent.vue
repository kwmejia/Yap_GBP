<template >
  <div class="col p-0 statistics_container">
    <section class="header_section">
      <div class="d-flex justify-content-between">
        <a href="#">
          <i class="fas fa-chevron-left mb-2"></i>
        </a>
        <div class="description">
          <h3 class="mb-4">Estadisticas Generales del cupon</h3>
        </div>
      </div>
    </section>


    <div id="statistics">
      <div class="statistics_global">
        <div class="cupones_apli">
          <span class="title_estadistica ">Cupones aplicados</span>
          <span class="valor_estadistica">
            {{ couponSelected.estadisticas.cupones_aplicados }}
          </span>
        </div>

        <div class="ventas">
          <span class="title_estadistica">Ventas</span>
          <span class="valor_estadistica">
            ${{ couponSelected.estadisticas.ventas }}
          </span>
        </div>
      </div>

      <!--Cards-->

      <div id="cards">
        <div class="card_">
          <div class="d-flex align-items-center">
            <div class="cont_img me-2">
              <i class="bi bi-gift"></i>
            </div>
            <p class="title_card m-0">Valor Obsequiado </p>
          </div>
          <span class="value">
            {{ couponSelected.estadisticas.valor_obsequiado }}
          </span>
        </div>

        <div class="card_">
          <div class="d-flex align-items-center">
            <div class="cont_img me-2">
              <i class="bi bi-person"></i>
            </div>
            <p class="title_card m-0">Clientes que reclamaron <br> el cashback</p>
          </div>
          <span class="value">
            {{ couponSelected.estadisticas.reclamos }}
          </span>
        </div>

        <div class="card_">
          <div class="d-flex align-items-center">
            <div class="cont_img me-2">
              <i class="bi bi-person"></i>
            </div>
            <p class="title_card m-0">Clientes que compraron </p>
          </div>
          <span class="value">
            {{ couponSelected.estadisticas.compras }}
          </span>
        </div>

        <div class="card_">
          <div class="d-flex align-items-center">
            <div class="cont_img me-2">
              <i class="bi bi-cash-stack"></i>
            </div>
            <p class="title_card m-0">Cupones aplicados la última semana</p>
          </div>
          <span class="value">
            {{ couponSelected.estadisticas.cupones_apli_ult_semana }}
          </span>
        </div>

        <div class="card_">
          <div class="d-flex align-items-center">
            <div class="cont_img me-2">
              <i class="bi bi-shop-window"></i>
            </div>
            <p class="title_card m-0">Restaurantes participantes</p>
          </div>
          <span class="value">
            {{ couponSelected.estadisticas.res_participantes }}
          </span>
        </div>



        <div class="w-100 d-flex justify-content-end mt-1">
          <router-link class="show_more_btn" to="/estadisticas">
            <i class="bi bi-bar-chart-steps"></i>
            <p class="p-0 m-0 text-center">Ver mas estadisticas</p>
          </router-link>
        </div>

        <div class="planes w-100">
          <h3>Planes del cupón</h3>
          <h3>
            VIP
            <i class="bi bi-award-fill text-warning ms-2"></i>
          </h3>

          <div class="cards ">
            <CouponPlansCardComponent v-for="(data, index) in couponSelected.estadisticas.planes_cupon.vip" :key="index"
              :data="data" />
          </div>

          <h3 class="mt-3">
            Gold
            <i class="bi bi-award text-warning ms-2"></i>

          </h3>
          <div class="cards">
            <CouponPlansCardComponent v-for="(data, index) in couponSelected.estadisticas.planes_cupon.gold"
              :key="index" :data="data" />
          </div>

          <h3 class="mt-3">
            Silver
            <i class="bi bi-award text-gray ms-2"></i>
          </h3>
          <CouponPlansCardComponent v-for="(data, index) in couponSelected.estadisticas.planes_cupon.silver"
            :key="index" :data="data" />

        </div>

      </div>

    </div>

  </div>
</template>

<script>

import CouponPlansCardComponent from "@/components/CouponPlansCardComponent.vue"


export default {
  name: "StatisticsCouponComponent",
  props: {
    couponSelected: Object
  },
  components: {
    CouponPlansCardComponent
  },
  mounted() {
    console.log(this.couponSelected)
  }
}
</script>



<style lang="scss" src="@/scss/main.scss">

</style>
