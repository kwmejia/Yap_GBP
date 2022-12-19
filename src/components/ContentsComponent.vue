<template>

  <ListCouponsComponent @newCoupon="setCoupon" />
  <DescriptionCouponComponent :couponSelected="coupon" />
  <StatisticsCouponComponent :couponSelected="coupon" />

</template>

<script>
import ListCouponsComponent from "@/components/ListCouponsComponent.vue";
import DescriptionCouponComponent from "@/components/DescriptionCouponComponent.vue"
import StatisticsCouponComponent from "@/components/StatisticsCouponComponent.vue"
import { data } from "@/data/data"

export default {
  name: "ContentsComponent",
  components: {
    ListCouponsComponent,
    DescriptionCouponComponent,
    StatisticsCouponComponent
  },
  data() {
    return {
      coupon: data[0]
    }
  },
  methods: {
    setCoupon(coupon) {
      this.coupon = coupon;
    }
  }

}
</script>

<style lang="scss" src="@/scss/main.scss">

</style>
