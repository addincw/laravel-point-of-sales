<template>
  <div>
    <mini-card v-for="(unit, k) in itemUnits" :key="k" :data="unit" v-on:confirmation="showConfirmationPrompt($event)" />

    <confirmation-prompt :seen="seen" :data="unit" v-on:close="seen = false">
      <template v-slot:actions>
        <button class="btn" @click="onDelete(id)" :disabled="isLoading"><i v-if="isLoading" class="fas fa-spinner fa-spin mr-2"></i>Yes, sure!</button>
        <button class="btn" @click="seen = false" :disabled="isLoading">No, cancel</button>
      </template>
    </confirmation-prompt>
  </div>
</template>

<script>
import MiniCard from '../../BaseMiniCard.vue'
import ConfirmationPrompt from '../../BaseConfirmationPrompt.vue'
import axios from '../../../axios'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  data (){
    return {
      isLoading: false,
      id: '',
      seen: false,
      unit: { id: '', name: '', code: '' }
    }
  },
  components: {
    MiniCard,
    ConfirmationPrompt
  },
  computed: {
    ...mapGetters({
      findItemUnit: 'findItemUnit'
    }),
    ...mapState({
      itemUnits: 'itemUnits'
    })
  },
  mounted (){
    this.loadItemUnits()
  },
  methods: {
    onDelete: function() {
      this.isLoading = true,
      this.deleteItemUnits(this.id)
          .then(() => {
            this.isLoading = false
            this.seen = false
            this.$notify({ group: 'notification', type: 'success', text: 'data deleted' })
            this.$router.push('/master/item/units')
          })
          .catch(() => this.$notify({ group: 'notification', type: 'error', text: 'failed delete data' }))
    },
    showConfirmationPrompt: function(id){
        this.seen = true
        this.id = id
        this.unit = this.findItemUnit(id)
    },
    ...mapActions({
      loadItemUnits: 'loadItemUnits',
      deleteItemUnits: 'deleteItemUnits'
    })
  }
}
</script>

<style lang="css" scoped>
</style>
