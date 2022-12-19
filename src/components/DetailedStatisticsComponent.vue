<template>
  <section id="detailed_container" class="col p-0 m-0 ">
    <section class="header_section">
      <div class="d-flex justify-content-between">
        <a href="#">
          <i class="fas fa-chevron-left"></i>
        </a>
        <div class="description">
          <h3>Estadisticas detalladas del cupón</h3>
          <p></p>
        </div>
      </div>
    </section>

    <div class="detailed">
      <DropdownsStatistics />
      <CardsStatiticsComponent />
      <GraphicsComponent />
    </div>

  </section>
</template>
<script>

import DropdownsStatistics from "@/components/statistics/DropdownsStatistics.vue"
import CardsStatiticsComponent from "@/components/statistics/CardsStatiticsComponent.vue"
import GraphicsComponent from "@/components/statistics/GraphicsComponent.vue"

export default {
  name: "DetailedStatisticsComponent",
  components: {
    DropdownsStatistics,
    CardsStatiticsComponent,
    GraphicsComponent
  }
}
</script>

<style lang="scss" src="@/scss/main.scss">

</style>