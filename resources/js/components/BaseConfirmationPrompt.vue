<template>
  <div :class="['modal fade', {'show': seen}]"  :style="{'display': display}" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirmation Prompt</h5>
          <button type="button" class="close" @click="$emit('close')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Sure to delete this [{{ data.code }}] {{ data.name }}?</p>
        </div>
        <div class="modal-footer">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seen: Boolean,
    data: Object
  },
  computed: {
    display: function() {
      return this.seen? 'block' : 'none'
    }
  }
}
</script>

<style lang="css" scoped>
.modal{
  background: #0000004a;
}
.modal-footer{
  padding: 0;
  justify-content: space-between;
}
.btn{
  border-radius: 0;
  width: 50%;
}
</style>
