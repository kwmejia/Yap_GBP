<template>
  <div class="list_container h-100 col-3 m-0 p-0">
    <section class="header_section">
      <div class="d-flex justify-content-between">
        <a href="#">
          <i class="fas fa-chevron-left"></i>
        </a>
        <div class="description">
          <h3>Para los más fieles</h3>
          <p>Grupo activo</p>
        </div>
      </div>

      <div class="d-flex h-100 ">
        <a href="#">
          <i class="bi bi-plus-circle"></i>
        </a>


        <el-dropdown>

          <el-icon class="el-icon--right ">
            <a class="mt-3  ">
              <i class="bi bi-list-nested"></i>
            </a>
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Editar</el-dropdown-item>
              <el-dropdown-item>Editar (fecha inscripción)</el-dropdown-item>
              <el-dropdown-item>Finalizar</el-dropdown-item>
              <el-dropdown-item disabled>Duplicar</el-dropdown-item>
              <el-dropdown-item>Eliminar</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

      </div>
    </section>


    <section class="search_cont mt-2 w-100 text-center px-3">
      <el-input v-model="couponSearch" placeholder="Buscar" class="w-100" clearable @input="searchCoupon">
        <template #suffix>
          <i class="bi bi-search "></i>
        </template>
      </el-input>
    </section>


    <section class="list_coupons mt-3">
      <div class="coupon mt-1" v-for="(coupon, index) in couponsfilter" :key="coupon.id" @click="selectCoupon(coupon)">
        <CouponItem :name="coupon.nombre" :users="coupon.usuarios" :shops="coupon.comercios" :key="index" />
      </div>

    </section>
  </div>
</template>


<script>
import { data } from "@/data/data";
import CouponItem from "@/components/CouponItem.vue"

export default {
  name: "ListCouponsComponent",
  components: {
    CouponItem
  },


  data() {
    return {
      coupons: data,
      couponsfilter: data,
      couponSearch: '',
      active: false
    }
  },
  methods: {
    searchCoupon() {
      this.couponsfilter = this.coupons.filter(cuopon => cuopon.nombre.trim().toLowerCase().includes(this.couponSearch.toLowerCase()))
    },
    selectCoupon(coupon) {
      this.active = true
      this.$emit('newCoupon', coupon);
    }

  }
}
</script>

<style lang="scss" src="@/scss/main.scss">

</style>
