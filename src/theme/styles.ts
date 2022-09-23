export const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    "::-webkit-scrollbar": {
      width: "6px",
    },
    "::-webkit-scrollbar-track": {
      background: "black",
    },
    "::-webkit-scrollbar-thumb": {
      background: "lightgray",
    },
    textarea: {
      "::-webkit-scrollbar": {
        width: "4px",
      },
      "::-webkit-scrollbar-track": {
        background: "light",
      },
      "::-webkit-scrollbar-thumb": {
        background: "coral",
        rounded: "xl",
      },
    },
    "@keyframes levitate": {
      "0%": {
        transform: "translate(0)",
      },
      "25%": {
        transform: "translate(-4px, -4px)",
      },
      "50%": {
        transform: "translate(4, 4)",
      },
      "75%": {
        transform: "translate(-4px, 4px)",
      },
      "100%": {
        transform: "translate(0, 0)",
      },
    },
    "@keyframes translateRotatingToRight": {
      "0%": {
        transform: "translateX(0px) rotate(0deg)",
      },
      "50%": {
        transform: "translateX(50px) rotate(180deg)",
      },
      "100%": {
        transform: "translateX(0px) rotate(360deg)",
      },
    },

    "@keyframes shake": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "10%": {
        transform: "rotate(-10deg)",
      },
      "20%": {
        transform: "rotate(12deg)",
      },
      "30%": {
        transform: "rotate(-10deg)",
      },
      "40%": {
        transform: "rotate(9deg)",
      },
      "50%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(0deg)",
      },
    },
    // "@keyframes shake": {
    //   "0%": {
    //     transform: "rotate(0deg)",
    //   },
    //   "10%": {
    //     transform: "rotate(-10deg)",
    //   },
    //   "20%": {
    //     transform: "rotate(12deg)",
    //   },
    //   "30%": {
    //     transform: "rotate(-10deg)",
    //   },
    //   "40%": {
    //     transform: "rotate(9deg)",
    //   },
    //   "50%": {
    //     transform: "rotate(0deg)",
    //   },
    //   "100%": {
    //     transform: "rotate(0deg)",
    //   },
    // },

    "@keyframes fadeIn": {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    "@keyframes fadeOut": {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
  },
};