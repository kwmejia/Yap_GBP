<template >
  <div id="cards_container">
    <div class="row ">

      <div class="col-6 px-4">
        <div class="card_">
          <div class="d-flex h-100 aling-items-center">
            <div class="cont_icon">
              <i class="bi bi-stop-btn-fill"></i>
            </div>
            <p>Cupones aplicados</p>
          </div>
          <div class="value">500</div>
        </div>
      </div>

      <div class="col-6 px-4">
        <div class="card_">
          <div class="d-flex h-100 aling-items-center">
            <div class="cont_icon">
              <i class="bi bi-cash-stack"></i>

            </div>
            <p>Valor ventas</p>
          </div>
          <div class="value">$5.200.000</div>
        </div>
      </div>

      <div class="col-6 px-4">
        <div class="card_">
          <div class="d-flex h-100 aling-items-center">
            <div class="cont_icon">
              <i class="bi bi-gift"></i>
            </div>
            <p>Valor obsequiado</p>
          </div>
          <div class="value">$520.000</div>
        </div>
      </div>

      <div class="col-6 px-4">
        <div class="card_">
          <div class="d-flex h-100 aling-items-center">
            <div class="cont_icon">
              <i class="bi bi-person"></i>
            </div>
            <p>Clientes que compraron</p>
          </div>
          <div class="value">500</div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "CardsStatiticsComponent"
}
</script>


<style lang="scss" src="@/scss/main.scss">

</style>