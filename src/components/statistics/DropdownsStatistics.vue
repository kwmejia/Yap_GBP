<template >
  <div id="dropdowns_container">
    <el-dropdown>
      <el-button type="primary">
        Clasificación <i class="bi bi-caret-down-fill ms-1"></i>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu class="p-2">
          <el-dropdown-item class="item_dropdown mt-2">
            <i class="bi bi-award-fill text-warning ms-2"></i> Vip
          </el-dropdown-item>
          <el-dropdown-item class="item_dropdown mt-2">
            <i class="bi bi-award text-warning ms-2"></i>
            Gold
          </el-dropdown-item>
          <el-dropdown-item class="item_dropdown mt-2">
            <i class="bi bi-award text-gray ms-2"></i>
            Silver
          </el-dropdown-item>
          <el-dropdown-item class="item_dropdown mt-2">
            <i class="bi bi-award text-gray ms-2"></i>
            Diamante
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown>
      <el-button type="primary">
        Plan<i class="bi bi-caret-down-fill ms-1"></i>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu class="p-2">
          <el-dropdown-item class="item_dropdown mt-2 d-block">
            <p class="p-0 m-0 text">Plan#1</p>
            <p class="text-muted p-0 m-0 des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </el-dropdown-item>
          <el-dropdown-item class="item_dropdown mt-2 d-block">
            <p class="p-0 m-0 text">Plan#2</p>
            <p class="text-muted p-0 m-0 des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </el-dropdown-item>
          <el-dropdown-item class="item_dropdown mt-2 d-block">
            <p class="p-0 m-0 text">Plan#3</p>
            <p class="text-muted p-0 m-0 des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown>
      <el-button type="primary">
        Restaurantes<i class="bi bi-caret-down-fill ms-1"></i>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu class="p-2">
          <el-dropdown-item class="item_dropdown mt-2 ">
            <p class="p-0 m-0 text">Macotaco</p>
          </el-dropdown-item>
          <el-dropdown-item class="item_dropdown mt-2 ">
            <p class="p-0 m-0 text">Juicy Burger</p>
          </el-dropdown-item>
          <el-dropdown-item class="item_dropdown mt-2 ">
            <p class="p-0 m-0 text">Angie Asado</p>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>


    <el-button type="primary">Filtrar</el-button>


    <el-tooltip class="box-item" effect="dark" content="Filtrar" placement="bottom-start">
      <el-button><i class="bi bi-back"></i></el-button>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  name: "DropdownsStatistics"
}
</script>

<style lang="scss" src="@/scss/main.scss">

</style>