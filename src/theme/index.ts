import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { breakpoints } from "./breakpoints";
import { components } from "./components";

const theme = extendTheme({
  styles,
  colors,
  fonts,
  breakpoints,
  components,
});

export default theme;
