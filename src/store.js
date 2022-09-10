import { writable } from "svelte/store";

export const character = writable({
  head_part: {
    accessories: "hair",
    eyes: {
      right: "right_1",
      middle: null,
      left: "left_1",
    },
    mouth: "mouth_1",
  },
  body_part: {
    accessories: "tie",
    hands: {
      left: "left_1",
      right: "right_1",
    },
    legs: {
      left: "left_1",
      right: "right_1",
    },
    body_color: "#ffea31",
  },
});
