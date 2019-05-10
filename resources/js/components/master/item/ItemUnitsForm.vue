<template>
  <form>
    <div class="form-group">
      <label>Unit Name</label>
      <input type="text" class="form-control" v-model="form.name" placeholder="ex: pieces" :disabled="isLoading">
    </div>
    <div class="form-group">
      <label>Unit Description</label>
      <input type="text" class="form-control" v-model="form.description" placeholder="" :disabled="isLoading">
    </div>
    <div class="form-group">
      <label>Unit Code</label>
      <input type="text" class="form-control" v-model="form.code" placeholder="ex: pcs" :disabled="isLoading">
    </div>
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" v-model="form.is_active" id="isActive" :disabled="isLoading">
      <label class="custom-control-label" for="isActive">is active : {{form.is_active}}</label>
    </div>
    <div class="mt-5">
      <button type="button" class="btn btn-primary btn-block" :disabled="isLoading" @click="onSubmit"><i v-if="isLoading" class="fas fa-spinner fa-spin mr-2"></i>Save</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  mounted() {
    let data = this.$store.getters.findItemUnits(this.$route.params.id)

    if (typeof data !== 'undefined'){
      this.url = `/master/items/units/${this.$route.params.id}`
      this.method = 'PUT'
      this.form = data
    }
  },
  data() {
    return {
      isLoading: false,
      url: '/master/items/units',
      method: 'POST',
      form: {
        name: '',
        code: '',
        is_active: true
      }
    }
  },
  methods: {
    ...mapActions({
      storeItemUnits: 'storeItemUnits'
    }),
    onSubmit: function(){
      this.isLoading = true
      this.storeItemUnits({method: this.method, url: this.url, data: this.form})
          .then(function(){
            this.isLoading = false
            this.$notify({ group: 'notification', type: 'success', text: 'data saved' })
            this.$router.push('/master/item/units')
          }.bind(this))
          .catch(error => {
            this.isLoading = false
            this.$notify({ group: 'notification', type: 'error', text: 'failed save data' })
            console.log(error)
          })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
