<template>
  <ListCouponsComponent />
  <DetailedStatisticsComponent />

</template>
<script>
import ListCouponsComponent from '@/components/ListCouponsComponent.vue'
import DetailedStatisticsComponent from "@/components/DetailedStatisticsComponent.vue"
export default {
  name: "SeeMoreComponent",
  components: {
    ListCouponsComponent,
    DetailedStatisticsComponent
  }
}
</script>
<style lang="scss" src="@/scss/main.scss">

</style>
