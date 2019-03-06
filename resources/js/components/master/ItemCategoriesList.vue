<template>
  <div>
    <mini-card v-for="(category, k) in itemCategories" :key="k" :category="category" v-on:confirmation="showConfirmationPrompt($event)" />

    <confirmation-prompt :seen="seen" :data="findItemCategory(id)" v-on:close="seen = false">
      <template v-slot:actions>
        <button class="btn" @click="onDelete(id)" :disabled="isLoading"><i v-if="isLoading" class="fas fa-spinner fa-spin mr-2"></i>Yes, sure!</button>
        <button class="btn" @click="seen = false" :disabled="isLoading">No, cancel</button>
      </template>
    </confirmation-prompt>
  </div>
</template>

<script>
import MiniCard from '../BaseMiniCard.vue'
import ConfirmationPrompt from '../BaseConfirmationPrompt.vue'
import axios from '../../axios'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  data (){
    return {
      isLoading: false,
      id: '',
      seen: false
    }
  },
  components: {
    MiniCard,
    ConfirmationPrompt
  },
  computed: {
    ...mapGetters({
      findItemCategory: 'findItemCategory'
    }),
    ...mapState({
      itemCategories: 'itemCategories'
    })
  },
  mounted (){
    this.loadItemCategories()
  },
  methods: {
    onDelete: function() {
      this.isLoading = true,
      this.deleteItemCategories(this.id)
          .then(() => {
            this.isLoading = false
            this.seen = false
            this.$router.push('/master/item-categories')
          })
    },
    showConfirmationPrompt: function(id){
        this.seen = true
        this.id = id
    },
    ...mapActions({
      loadItemCategories: 'loadItemCategories',
      deleteItemCategories: 'deleteItemCategories'
    })
  }
}
</script>

<style lang="css" scoped>
</style>
