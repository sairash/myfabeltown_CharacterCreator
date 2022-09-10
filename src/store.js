import { writable, readable } from "svelte/store";

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

export const character_set = readable({
  head_part: {
    accessories: [
      {
        name: "null",
        command: "hair",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/hair.png",
      },
      {
        name: "crown",
        command: "crown",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/crown.png",
      },
    ],
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
