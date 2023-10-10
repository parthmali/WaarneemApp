<template>
  <div class="bg-white p-2 w-full border rounded">
    <v-date-picker
      v-model="selected.date"
      @input="getDates"
      :day-format="'YYYY-MM-DD'"
    >
      <template #default="{ inputValue, togglePopover, hidePopover }">
        <div class="flex flex-wrap">
          <button
            v-for="(date, i) in dates"
            :key="date.date.getTime()"
            class="flex items-center bg-indigo-100 hover:bg-indigo-200 text-sm text-indigo-600 font-semibold h-8 px-2 m-1 rounded-lg border-2 border-transparent focus:border-indigo-600 focus:outline-none"
            @click.stop="dateSelected($event, date, togglePopover)"
            ref="button"
          >
            {{ date.date.toLocaleDateString() }}
            <svg
              class="w-4 h-4 text-gray-600 hover:text-indigo-600 ml-1 -mr-1"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              @click.stop="removeDate(date, hidePopover)"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </template>
    </v-date-picker>
    <button
      type="button"
      class="text-sm text-indigo-600 font-semibold hover:text-indigo-500 px-2 h-8 focus:outline-none"
      @click.prevent="addDate"
    >
      + Add Date
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dates: [],
      selected: {},
    };
  },
  methods: {
    getDates() {
      this.$emit("input", this.dates);
    },
    addDate() {
      this.dates.push({
        date: new Date(),
        startTime: null,
        endTime: null,
        price: 40,
        type: "Consultation",
        // dd MMM yyyy
      });
      this.$nextTick(() => {
        const btn = this.$refs.button[this.$refs.button.length - 1];
        btn.click();
      });
    },
    removeDate(date, hide) {
      this.dates = this.dates.filter((d) => d !== date);
      hide();
    },
    dateSelected(e, date, toggle) {
      this.selected = date;
      toggle({ ref: e.target });
    },
  },
};
</script>
