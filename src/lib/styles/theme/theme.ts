/* eslint-disable sonarjs/no-duplicate-string */
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {},
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#000000",
        color: "#FFDBC1",
        minHeight: "100vh",
      },
    },
  },
  components: {
    Alert: {
      baseStyle: {
        title: {
          fontWeight: 600,
          color: "white",
        },
      },
      variants: {},
    },
    Button: {
      baseStyle: {
        borderRadius: "9999px",
      },
      sizes: {
        md: {
          fontSize: "md",
          py: 3,
          px: 6,
        },
      },
      variants: {
        solid: {
          bg: "rgba(255, 130, 41, 1)",
          border: "border: 1px solid #C0C0C0",
          color: "black",
          _hover: {
            bg: "#78C03F",
          },
        },
        big: {
          bg: "rgba(255, 130, 41, 1)",
          border: "border: 1px solid #C0C0C0",
          color: "black",
          padding: "10% 15%",
          fontWeight: "bolder",
          _hover: {
            bg: "#78C03F",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 900,
      },
      variants: {
        subheading: {
          fontWeight: "400",
          textTransform: "uppercase",
          fontSize: "md",
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          _placeholder: {
            color: "rgba(84, 84, 84, 0.5)",
          },
        },
      },
      variants: {
        filled: {
          field: {
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "transparent",
            outline: "none",
            borderRadius: "5px",
            bg: "hsla(0, 0%, 33%, 0.04)",
            boxShadow: "0px -3px 5px 0px hsla(0, 0%, 0%, 0.05) inset",
            _focusVisible: {
              borderColor: "transparent",
              bg: "hsla(0, 0%, 33%, 0)",
            },
            _hover: {
              bg: "hsla(0, 0%, 33%, 0.1)",
            },
            "::file-selector-button": {
              display: "none",
            },
          },
        },
      },
    },
    Link: {
      variants: {
        profile: {
          color: "#6CAC39",
          fontSize: { base: "sm", lg: "md" },
          _hover: {
            textDecoration: "underline",
          },
          _focus: {
            textDecoration: "underline",
          },
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          _placeholder: {
            color: "rgba(84, 84, 84, 0.5)",
          },
        },
      },
      variants: {
        filled: {
          field: {
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "transparent",
            outline: "none",
            borderRadius: "5px",
            bg: "hsla(0, 0%, 33%, 0.04)",
            boxShadow: "0px -3px 5px 0px hsla(0, 0%, 0%, 0.05) inset",
            _focusVisible: {
              borderColor: "transparent",
              bg: "hsla(0, 0%, 33%, 0)",
            },
            _hover: {
              bg: "hsla(0, 0%, 33%, 0.1)",
            },
            "::file-selector-button": {
              display: "none",
            },
          },
        },
      },
    },
    Switch: {
      baseStyle: {
        track: {
          bg: "hsla(0, 0%, 33%, 0.04)",
          _hover: {
            bg: "rgba(84, 84, 84, 0.08)",
          },
          _checked: {
            bg: "rgba(84, 84, 84, 0.9)",
            _hover: {
              bg: "#2A2A2A",
            },
          },
        },
      },
    },
    Tabs: {
      variants: {
        line: {
          tablist: {
            borderColor: "inherit",
          },
          tab: {
            borderBottom: "none",
            borderColor: "transparent",
            color: "rgba(84, 84, 84, 0.5)",
            _selected: {
              borderTop: "2px solid",
              color: "#545454",
              borderColor: "currentColor",
              fontWeight: 600,
            },
            _disabled: {
              _active: { bg: "none" },
            },
          },
        },
      },
    },
    Tag: {
      variants: {
        solid: {
          container: {
            position: "relative",
            bg: "rgba(84, 84, 84, 0.04)",
            boxShadow: "inset 0px -3px 5px rgba(0, 0, 0, 0.05)",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "center",
          },
          label: {
            color: "#545454",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "19px",
            letterSpacing: "0em",
          },
          closeButton: {
            position: "absolute",
            color: "#545454",
            right: 3,
          },
        },
      },
    },
    Text: {
      variants: {
        ghost: {
          color: "rgba(84, 84, 84, 0.5)",
        },
      },
    },
    Textarea: {
      baseStyle: {
        _placeholder: {
          color: "rgba(84, 84, 84, 0.5)",
        },
      },
      variants: {
        filled: {
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "transparent",
          outline: "none",
          borderRadius: "5px",
          bg: "hsla(0, 0%, 33%, 0.04)",
          boxShadow: "0px -3px 5px 0px hsla(0, 0%, 0%, 0.05) inset",
          _focusVisible: {
            borderColor: "transparent",
            bg: "hsla(0, 0%, 33%, 0)",
          },
          _hover: {
            bg: "hsla(0, 0%, 33%, 0.1)",
          },
          "::file-selector-button": {
            display: "none",
          },
        },
      },
    },
  },
});

export default theme;
