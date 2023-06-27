import { MantineThemeOverride } from "@mantine/core"

// To generate a color array:
// 1. Go to: https://omatsuri.app/color-shades-generator
// 2. Set saturation shift to 0% and drag darken/lighten % slider all the way to the right.
// 3. Slowly drag darken/lighten slider to the left until desired primary shade is the 7th item.
// 4. Copy and paste the color array into this theme object and delete any items past 9.

export const theme: MantineThemeOverride = {
  colors: {
    gold: [
      "#FDFCF3",
      "#F3F0C7",
      "#EBE5A0",
      "#E4DB7D",
      "#DED35D",
      "#D8CB41",
      "#D0C22B",
      "#B7AB26",
      "#A19621",
      "#8E841D"
    ],
    purple: [
      "#876AC2",
      "#9978af",
      "#8363c5",
      "#8568c1",
      "#946cba",
      "#776cbb",
      "#965bb5",
      "#876AC2", //hover color
      "#04131F",
      "#030D14"
    ],
    red: [
      "#FFEDE5",
      "#FFCAB5",
      "#FFAB8A",
      "#FF8F63",
      "#FF7540",
      "#FF5F20",
      "#FF4A04",
      "#E74000",
      "#CD3900",
      "#B73300"
    ],
    teal: [
      "#FCFFFE",
      "#BDFCF5",
      "#86F9EC",
      "#57F6E5",
      "#2EF4DF",
      "#0DEFD7",
      "#0BD0BB",
      "#09B19F",
      "#089687",
      "#078073"
    ],
    facebook: [
      "#4267B2",
      "#4267B2",
      "#4267B2",
      "#4267B2",
      "#4267B2",
      "#325397",
      "#325397",
      "#325397",
      "#325397"
    ],
    gray: [
      "#E4E6E7",
      "#A5AEB4",
      "#718493",
      "#4D6576",
      "#324D61",
      "#1C3B52",
      "#0A2E49",
      "#0E1E2A",
      "#0D1319",
      "#0A0D0F"
    ]
  },
  black: "#0A2E49",

  primaryColor: "purple",
  headings: {
    fontWeight: 500
  },
  components: {
    ActionIcon: {
      defaultProps: {
        radius: 0
      }
    },
    Anchor: {
      styles: theme => ({
        root: {
          textDecoration: "underline"
        }
      })
    },
    Avatar: {
      defaultProps: {
        radius: 100
      },
      styles: theme => ({
        placeholder: {
          fontWeight: 500
        }
      })
    },
    Button: {
      defaultProps: {
        loaderPosition: "right",
        radius: 0
      },
      //@ts-ignore
      styles: (theme, params) => ({
        root: {
          fontWeight: 500,
          fontStretch: "100%",
          ":disabled": {
            backgroundColor: "#E4E6E7",
            filter: "grayscale(100%)"
          },
          backgroundColor:
            params.variant === "light" ? theme.colors.gray[0] : undefined,

          ":hover": {
            backgroundColor:
              params.variant === "light" ? theme.colors.gray[1] : undefined //'"#E4E6E7"
          }
        }
      })
    },
    Text: {
      styles: theme => ({
        root: {
          fontWeight: 340,
          fontStretch: "100%"
        }
      })
    }
  }
}
