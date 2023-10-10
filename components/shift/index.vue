<template>
  <!-- Shifts Section -->
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <span class="border-b-4 border-secondary-500 text-xl font-bold">
        Shifts
      </span>

      <button
        class="rounded-md bg-primary-500 px-7 py-1 text-white hover:bg-primary-600"
        @click="add"
      >
        ADD SHIFT
      </button>
    </div>
    <!-- Card -->
    <template v-if="shifts.length">
      <ShiftCard v-for="(shift, index) in shifts" :key="index" :value="shift" />
    </template>
    <h6 v-else>No Records Found</h6>
  </div>
</template>
<script>
export default {
  methods: {
    add() {
      this.$root.$emit("open-drawer");
    },
  },
  props: {
    shifts: {
      type: Array,
      default: [],
    },
  },
};
</script>
