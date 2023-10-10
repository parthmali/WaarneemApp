<template>
  <div class="space-y-3 rounded-md px-8 py-6 shadow-2xl">
    <!--  -->
    <div class="flex flex-col space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-xl">{{ value.title }}</span>
        <button class="h-6 w-6" @click="handleEdit()">
          <IconMdiPen />
        </button>
      </div>
      <span class="text-sm">{{ value.description }}</span>
    </div>
    <!--  -->
    <div class="flex flex-col space-y-2">
      <span class="text-xl">Dates</span>
      <div class="space-y-2">
        <!-- For Loop Here -->
        <div
          v-for="record in value.records"
          :key="record.timestamp"
          class="flex items-center justify-between rounded bg-primary-500 p-2 text-sm text-white"
        >
          <div class="flex items-center justify-between w-2/3">
            <div>{{ formatDate(record.date) }}</div>
            <div>{{ record.startTime }}</div>
            <div>{{ record.endTime }}</div>

            <div>{{ record.category }}</div>
          </div>
          <div>
            <span>{{ getPrice(record.price) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate, getPrice } from "~/utils/index.js";

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
    getPrice,
    handleEdit() {
      this.$root.$emit("open-drawer");

      setTimeout(() => {
        this.$root.$emit("edit", this.value);
      }, 500);
    },
  },
};
</script>
