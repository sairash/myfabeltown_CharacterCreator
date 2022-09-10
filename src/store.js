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
          "https://github.com/sairash/myfabletown_images/raw/main/png/extra/cross.png",
      },
      {
        name: "crown",
        command: "crown",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/crown.png",
      },
      {
        name: "Donald",
        command: "donald_hair",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/donald_hair.png",
      },
      {
        name: "Emo Hair",
        command: "emo_hair",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/emo_hair.png",
      },
      {
        name: "Frog Hat",
        command: "frog_hat",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/frog_hat.png",
      },
      {
        name: "Brown Hat",
        command: "brown_hat",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/brown_hat.png",
      },
      {
        name: "Hat",
        command: "hat",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/hat.png",
      },
      {
        name: "Mohawk",
        command: "mohawk",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/mohawk.png",
      },
      {
        name: "Peter Pan",
        command: "peter_pan",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/peter_pan.png",
      },
      {
        name: "Poop",
        command: "poop",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/poop.png",
      },
      {
        name: "Sad Eyes",
        command: "sad_eyes",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/sad_eyes.png",
      },
      {
        name: "Star Hat",
        command: "star_hat",
        image:
          "https://github.com/sairash/myfabletown_images/raw/main/png/head_part/accessories/star_hat.png",
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
