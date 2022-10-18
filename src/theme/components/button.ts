export const Button = {
  baseStyle: {
    transition: ".3s",
  },
  variants: {
    primary: {
      bg: "#1C2B3A",
      color: "pink",
      w: "fit-content",
      _hover: {
        bg: "black",
        color: "white",
        _disabled: {
          bg: "#1C2B3A",
        },
      },
    },
    "gradient-green": {
      color: "#222",
      bg: "greendient",
      _hover: {
        filter: "brightness(1.3)",
      },
    },
  },
  defaultProps: {},
};
