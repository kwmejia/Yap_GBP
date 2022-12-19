<template >
  <div id="graphics_container">
    <div class="row d-flex">

      <div class="col-4 p-0 pl-2 m-0">
        <div class="cont_pie">
          <PieGraphic />
        </div>
      </div>
      <div class=" col-8  px-2 m-0">
        <div class="cont_dotted">
          <DottedBarGraphic />
        </div>
      </div>


      <div class=" col-12 px-2 mt-3">
        <div class="cont_dotted">
          <DistributionElectricity />
        </div>
      </div>

      <div class=" col-12 px-2 mt-3">
        <div class="cont_dotted">
          <HeatmapGraphic />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import PieGraphic from '@/components/statistics/graphics/PieGraphic.vue'
import DottedBarGraphic from '@/components/statistics/graphics/DottedBarGraphic.vue'
import DistributionElectricity from '@/components/statistics/graphics/DistributionElectricity.vue'
import HeatmapGraphic from '@/components/statistics/graphics/HeatmapGraphic.vue'
export default {
  name: "GraphicsComponent",
  components: {
    PieGraphic,
    DottedBarGraphic,
    DistributionElectricity,
    HeatmapGraphic
  }

}
</script>

<style lang="scss" src="@/scss/main.scss">

</style>