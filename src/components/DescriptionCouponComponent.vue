<template >
  <div class="col p-0 description_container">

    <section class="header_section">
      <div class="d-flex justify-content-between">
        <a href="#">
          <i class="fas fa-chevron-left"></i>
        </a>
        <div class="description">
          <h3>{{ couponSelected.nombre }}</h3>
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


    <section id="description">

      <h4 class="section_title">Datos generales</h4>
      <h4 class="title">Descripción de las condiciones</h4>
      <p>{{ couponSelected.datos_generales.descripcion }}</p>

      <h4 class="title">Aplicación de cupón:
        <p>{{ couponSelected.datos_generales.aplicacion_cupon }}</p>
      </h4>
      <h4 class="title">Tipo de cupón:
        <p>{{ couponSelected.datos_generales.tipo_cupon }}</p>
      </h4>
      <h4 class="title">Código:
        <p>{{ couponSelected.datos_generales.codigo }}</p>
      </h4>


      <h4 class="section_title">Datos del descuento</h4>
      <h4 class="title">Tipo de descuento:
        <p>{{ couponSelected.datos_descuento.tipo_descuento }}</p>
      </h4>
      <h4 class="title">Valor de descuento:
        <p>{{ couponSelected.datos_descuento.valor_descuento }}</p>
      </h4>
      <h4 class="title">Porcentaje de descuento:
        <p>{{ couponSelected.datos_descuento.porcentaje_descuento }}</p>
      </h4>

      <h4 class="section_title">Datos de cashback</h4>
      <h4 class="title">Tipo de descuento:
        <p>{{ couponSelected.datos_cashback.tipo_descuento }}</p>
      </h4>
      <h4 class="title">Valor de descuento:
        <p>{{ couponSelected.datos_cashback.valor_descuento }}</p>
      </h4>
      <h4 class="title">Porcentaje de descuento:
        <p>{{ couponSelected.datos_cashback.porcentaje_descuento }}</p>
      </h4>

      <h4 class="section_title">Condiciones para aplicar al público</h4>
      <h4 class="title">Órdenes solicitadas:
        <p>{{ couponSelected.condiciones_publico.ordenes_solicitadas }}</p>
      </h4>
      <h4 class="title">Antigüedad:
        <p>{{ couponSelected.condiciones_publico.antiguedad }}</p>
      </h4>
      <h4 class="title">Cupones usados:
        <p>{{ couponSelected.condiciones_publico.cupones_usados }}</p>
      </h4>
      <h4 class="title">Edad:
        <p>{{ couponSelected.condiciones_publico.edad }}</p>
      </h4>
      <h4 class="title">Valor de la última compra:
        <p>{{ couponSelected.condiciones_publico.valor_ult_compra }}</p>
      </h4>
      <h4 class="title">Fecha de la última compra:
        <p>{{ couponSelected.condiciones_publico.fecha_ult_compra }}</p>
      </h4>
      <h4 class="title">Último acceso:
        <p>{{ couponSelected.condiciones_publico.ultimo_acceso }}</p>
      </h4>
      <h4 class="title">Género:
        <p>{{ couponSelected.condiciones_publico.genero }}</p>
      </h4>
      <h4 class="title">Ciudad:
        <p>{{ couponSelected.condiciones_publico.ciudad }}</p>
      </h4>

      <h4 class="section_title">Límites del cupón</h4>
      <h4 class="title">Vigencia:
        <p>{{ couponSelected.condiciones_publico.vigencia }}</p>
      </h4>
      <h4 class="title">Fecha inscripción restaurantes:
        <p>{{ couponSelected.limites_cupon.fecha_insc_restaurantes }}</p>
      </h4>
      <h4 class="title">Valor mínimo de compra:
        <p>{{ couponSelected.limites_cupon.valor_minimo }}</p>
      </h4>
      <h4 class="title">Valor máx. de descuento:
        <p>{{ couponSelected.limites_cupon.valor_max_descuento }}</p>
      </h4>

      <h4 class="section_title">Restaurantes</h4>
      <h4 class="title">Etiquetas de restaurantes:
        <p>{{ couponSelected.restaurantes.title }}</p>
      </h4>
    </section>
  </div>
</template>

<script>


export default {
  name: "DescriptionCouponComponent",
  props: {
    couponSelected: Object
  },

}
</script>



<style lang="scss" src="@/scss/main.scss">

</style>
