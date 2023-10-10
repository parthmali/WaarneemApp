<template>
  <aside
    class="w-full md:w-sidebar sm:w-sidebar-sm bg-sidebar-bg h-screen fixed top-0 right-0 overflow-y-auto z-50"
  >
    <div class="flex items-center justify-end">
      <!-- Drawer -->
      <div
        class="flex h-screen w-full flex-col justify-between bg-white p-4 shadow-xl"
      >
        <div class="space-y-8 overflow-auto">
          <!-- Heading -->
          <div class="flex justify-between items-center">
            <span class="border-b-4 border-orange-500 text-xl font-bold"
              >Create / Edit</span
            >
            <IconMdiClose @click.native="handleClose" class="cursor-pointer" />
          </div>

          <!-- Input Fields -->
          <div class="flex flex-col items-center justify-start space-y-4">
            <!-- Title -->
            <div class="flex w-full flex-col space-y-1 text-sm">
              <span class="">Title</span>
              <input
                type="text"
                v-model="title"
                class="rounded border border-black p-1"
                placeholder="Enter Title Here"
              />
            </div>
            <!-- Description -->
            <div class="flex w-full flex-col space-y-1 text-sm">
              <span class="">Description</span>
              <textarea
                v-model="description"
                class="w-full rounded border border-black p-2"
                rows="4"
                placeholder="Enter Description Here"
              ></textarea>
            </div>

            <!-- Dates -->
            <div class="flex w-full flex-col space-y-1 text-sm">
              <span class="">Dates</span>
              <DatePicker v-model="records" />
            </div>
          </div>
          <!-- Selected Thing cards -->
          <div v-for="(data, dindex) in records" :key="dindex">
            <div class="flex items-center justify-between">
              <span class="font-bold">{{ formatDate(data.date) }}</span>
              <div class="h-6 w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
                  />
                </svg>
              </div>
            </div>
            <div class="space-y-3 rounded bg-gray-700 p-2 text-xs text-white">
              <!-- Time & Price -->
              <div class="flex items-center justify-between gap-2">
                <!-- Starting Time -->
                <div class="w-full space-y-1">
                  <span class="">Start Time</span>
                  <input
                    type="time"
                    v-model="data.startTime"
                    class="w-full rounded bg-white text-black py-2"
                  />
                </div>
                <!-- End Time -->
                <div class="w-full space-y-1">
                  <span class="">End Time</span>
                  <input
                    type="time"
                    v-model="data.endTime"
                    class="w-full rounded bg-white text-black py-2"
                  />
                </div>
                <!-- Price -->
                <div class="w-full space-y-1">
                  <span class="">Price</span>
                  <input
                    v-model.number="data.price"
                    type="number"
                    class="w-full rounded bg-white text-black py-2"
                  />
                </div>
              </div>
              <!-- Type -->
              <div class="space-y-1 text-black">
                <span class="text-white">Type</span>
                <div class="">
                  <select
                    id="dropdown"
                    name="dropdown"
                    v-model="data.category"
                    class="block w-full rounded border p-2 shadow-md focus:ring focus:ring-indigo-300"
                  >
                    <option selected value="">Select an option</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Ambulance">Ambulance</option>
                    <option value="Telephone">Telephone</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sticky bottom-0 flex items-center gap-4 bg-white px-2 py-2">
          <button
            @click="handleDelete"
            class="w-1/2 rounded border-2 border-gray-700 px-4 py-1 hover:bg-gray-200"
            v-if="id"
          >
            DELETE
          </button>

          <button
            @click="handleClose"
            class="w-1/2 rounded border-2 border-gray-700 px-4 py-1 hover:bg-gray-200"
            v-else
          >
            CANCEL
          </button>

          <button
            @click="handleSubmit"
            class="w-1/2 rounded border bg-gray-700 px-4 py-1 text-white hover:bg-gray-800"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
import { formatDate } from "~/utils/index.js";
import { cloneDeep } from "lodash-es";
export default {
  data() {
    return {
      records: [],
      title: "",
      description: "",
      id: null,
    };
  },

  mounted() {
    this.$root.$on("edit", (payload) => {
      this.title = payload.title;
      this.description = payload.description;
      // this.records = JSON.parse(JSON.stringify(payload.records));
      this.records = cloneDeep(payload.records);
      this.id = payload.id;
    });
  },
  methods: {
    formatDate,
    handleDelete() {
      this.$store.commit("removeShift", this.id);

      this.handleClose();
    },
    handleClose() {
      this.reset();
      this.$root.$emit("close-drawer");
    },
    handleSubmit() {
      if (this.id) {
        this.$store.commit("editShift", {
          id: this.id,
          title: this.title,
          description: this.description,
          records: this.records,
        });
      } else {
        this.$store.commit("addShift", {
          id: uuidv4(),
          title: this.title,
          description: this.description,
          records: this.records,
        });
      }

      this.handleClose();
    },
    reset() {
      this.title = "";
      this.description = "";
      this.records = [];
      this.id = null;
    },
  },
};
</script>
