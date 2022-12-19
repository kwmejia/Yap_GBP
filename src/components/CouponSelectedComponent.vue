<template>
  <ListCouponsComponent @newCoupon="setCoupon" />
  <DescriptionCouponComponent :couponSelected="couponSelected" />
  <StatisticsCouponComponent :couponSelected="couponSelected" />
</template>


<script>
import DescriptionCouponComponent from "@/components/DescriptionCouponComponent.vue"
import StatisticsCouponComponent from "@/components/StatisticsCouponComponent.vue"

export default {
  name: "CouponSelectedComponent",
  components: {
    DescriptionCouponComponent,
    StatisticsCouponComponent
  },
  props: {
    couponSelected: Object
  }
}
</script>

<style lang="scss" src="@/scss/main.scss">

</style>