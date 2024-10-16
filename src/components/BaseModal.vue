<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="modalActive"
        class="absolute top-0 left-0 flex justify-center w-full h-screen px-8 bg-black bg-opacity-30"
      >
        <Transition name="modal-inner">
          <div
            v-if="modalActive"
            class="self-start max-w-screen-md p-4 mt-16 bg-white rounded-lg shadow-xl"
          >
            <slot />
            <button
              class="px-6 py-2 mt-3 mb-2 font-medium text-white rounded-full float-end bg-weather-primary hover:bg-weather-secondary"
              @click="onClickCloseModal"
            >
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);
const props = defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
const onClickCloseModal = () => {
  emit("closeModal");
};
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}
.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
