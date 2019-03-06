<template>
  <div class="card mb-2">
    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
      <h6 class="m-0 font-weight-bold"><span class="text-primary">[{{category.code}}]</span> {{ category.name }}</h6>
      <div class="dropdown no-arrow">
        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
          <router-link class="dropdown-item" :to="`/master/item-categories/${category.id}/edit`"><i class="fas fa-edit text-gray mr-2"></i>Edit</router-link>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" @click="$emit('confirmation', category.id)"><i class="fas fa-trash text-danger mr-2"></i>Delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: Object
  }
}
</script>

<style lang="css" scoped>
</style>
