export const iconsData = [
  {
    id: 1,
    key: "tech-man",
    value: "👨🏻‍💻",
  },
  {
    id: 2,
    key: "text-message",
    value: "💬",
  },
  {
    id: 3,
    key: "coffe-mug",
    value: "☕️",
  },
  {
    id: 4,
    key: "athlete-man",
    value: "🏋🏻‍♂️",
  },
  {
    id: 5,
    key: "books",
    value: "📚",
  },
  {
    id: 5,
    key: "clock",
    value: "⏰",
  },
];

export const taskStatesArr = {
  completed: {
    src: "/src/assets/Done_round_duotone.svg",
    alt: "done round icon",
    classNames: ["task-list__item--completed", "task-state__box--completed"],
  },
  progress: {
    src: "/src/assets/Time_atack_duotone.svg",
    alt: "time atack icon",
    classNames: ["task-list__item--progress", "task-state__box--progress"],
  },
  canceled: {
    src: "/src/assets/close_ring_duotone.svg",
    alt: "close ring icon",
    classNames: ["task-list__item--canceled", "task-state__box--canceled"],
  },
  uninitialized: {
    classNames: [
      "task-list__item--uninitialized",
      "task-list__state--uninitialized",
    ],
  },
};
