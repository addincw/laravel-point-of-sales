<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
      <h6 class="m-0 font-weight-bold">
        <span v-for="(breadscrumb, k) in breadscrumbs" :key="k">
          <span v-if="k != 0"> /</span>
          <router-link class="text-primary" v-if="typeof breadscrumb.path !== 'undefined'" :to="breadscrumb.path">{{ breadscrumb.name }}</router-link>
          <span v-else>{{ breadscrumb.name }}</span>
        </span>
      </h6>
      <span v-show="seen">
        <router-link class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" to="/master/item-categories/create"><i class="fas fa-plus fa-sm text-white-50"></i> Add new</router-link>
      </span>
    </div>

    <div class="card-body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      seen: true,
      breadscrumbs: []
    }
  },
  watch: {
    '$route' () {
      if (this.$route.path == '/master/item-categories/create' || this.$route.path == `/master/item-categories/${this.$route.params.id}/edit`) {
        this.seen = false
      }else {
        this.seen = true
      }

      this.breadscrumbs = this.$route.meta.breadscrumbs
    }
  },
  mounted () {
    this.breadscrumbs = this.$route.meta.breadscrumbs
  },
}
</script>

<style scoped>
</style>
