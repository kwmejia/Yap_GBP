<template>
  <h4 class="m-0">{{ name }}</h4>

  <div class="d-flex gap-3 align-items-center">
    <div class="tooltip_">
      <span>{{ users }}</span>
      <i class="bi bi-inboxes"></i>
    </div>
    <div>
      <span>{{ shops }}</span>
      <i class="bi bi-shop-window"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "CouponItem",
  props: {
    name: String,
    users: Number,
    shops: Number,
  }

}
</script>

<style lang="scss" >

</style>