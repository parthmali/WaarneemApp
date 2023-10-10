<template>
  <div class="flex overflow-hidden">
    <!-- Main Content -->
    <div class="flex-1">
      <div class="flex items-center justify-center">
        <div class="main container relative z-20">
          <div class="space-y-8 p-4">
            <!-- Filters Section -->
            <div class="space-y-4">
              <span class="border-b-4 border-secondary-500 text-xl font-bold">
                Filter
              </span>
              <div class="flex items-center gap-2 w-screen">
                <span class="mr-4">Filter on Price</span>
                <div>
                  <vue-slider
                    v-model="priceRange"
                    :min="0"
                    :max="maxPrice"
                  ></vue-slider>
                </div>
              </div>
            </div>
            <!-- Shift Details -->
            <Shift :shifts="list" />
          </div>
        </div>
      </div>
    </div>
    <!-- Right Sidebar -->
    <Sidebar v-if="isDrawerOpen" :visible="isDrawerOpen" />
  </div>
</template>

<script>
import { list } from "postcss";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  name: "IndexPage",
  mounted() {
    this.$root.$on("open-drawer", () => {
      this.openDrawer();
    });

    this.$root.$on("close-drawer", () => {
      this.closeDrawer();
    });
  },
  data() {
    return {
      isDrawerOpen: false, // Initially closed
      priceRange: [0, 100],
    };
  },
  components: {
    VueSlider,
  },
  computed: {
    maxPrice() {
      var highest = 0;
      const list = this.$store.state.shifts;
      list.forEach((element) => {
        element.records.forEach((data) => {
          if (highest < data.price) {
            highest = data.price;
          }
        });
      });
      this.priceRange = [0, highest];
      return parseInt(highest);
    },
    list() {
      const value = [];

      const shifts = this.$store.state.shifts;
      const minPrice = this.priceRange[0];
      const maxPrice = this.priceRange[1];

      shifts.forEach((shift) => {
        let records = [];
        shift.records.forEach((data) => {
          if (data.price >= minPrice && data.price <= maxPrice) {
            records.push(data);
          }
        });

        if (records.length) {
          const newShift = {
            ...shift,
            records,
          };
          value.push(newShift);
        }
      });

      return value;
    },
  },
  methods: {
    openDrawer() {
      this.isDrawerOpen = true;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    },
  },
};
</script>
