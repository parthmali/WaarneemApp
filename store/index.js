// holds your root state

import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  shifts: [
    {
      id: 1,
      title: "Department Alpha",
      description: "This team is working 5 days",
      records: [
        {
          date: new Date(),
          startTime: "10:04",
          endTime: "18:00",
          category: "Consultation",
          price: 70,
        },
        {
          date: new Date(),
          startTime: "10:00",
          endTime: "19:30",
          category: "Telephone",
          price: 50,
        },
        {
          date: new Date(),
          startTime: "10:00",
          endTime: "19:30",
          category: "Ambulance",
          price: 100,
        },
      ],
    },
  ],
});

// contains your mutations
export const mutations = {
  //   setCounter(state, value) {
  //     state.counter = value;
  //   },

  addShift(state, payload) {
    state.shifts.push({
      id: uuidv4(),
      ...payload,
    });
  },
  removeShift(state, id) {
    state.shifts = state.shifts.filter((shift) => shift.id !== id);
  },
  editShift(state, payload) {
    state.shifts = state.shifts.map((shift) => {
      if (shift.id === payload.id) {
        shift = payload;
        return shift;
      } else return shift;
    });
  },
};
// your root getters
export const getters = {
  //   myGetter(state) {
  //     return state.counter + 1000;
  //   },
};
