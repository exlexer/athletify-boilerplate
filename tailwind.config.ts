import type { Config } from "tailwindcss";
import daisyThemes from "daisyui/src/theming/themes";

import colors from "./colors.json";
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          default: "#316CC0",
          disabled: "#9FC6FF",
          light: "#E0E7FF",
          dark: "#1F2937",
          semidark: "#232E3E",
          outlined: {
            border: "#97C3F0",
          },
        },
        buttons: {
          danger: {
            bg: "#C8493E",
          },
        },
        message: {
          info: {
            bg: "#ECFEFF",
            border: "#0E7490",
          },
          warning: {
            bg: "#FFEDD5",
            text: "#C2410C",
          },
          danger: {
            bg: "#FFF5F5",
            border: "#FC8181",
            text: "#B91C1C",
          },
        },
        background: {
          light: {
            1: "#FFFFFF",
            2: "#F5F5F5",
            3: "#D9D9D9",
          },
          normal: {
            default: "#818cf8",
          },
          info: { default: "#00718E", light: "#CAF9FD" },
          action: "#316CC0",
          content: "#F3F4F6",
          secondary: "#F9FAFB",
          contentalt: "#F9FAFB",
        },
        error: "#DB382A",
        status: {
          info: {
            default: "#4076C4",
            medium: "#C7DFF7",
            light: "#CFFAFE",
          },
          success: {
            default: "#57AE4E",
            medium: "#1F7A1F",
            light: "#DCFCE7",
          },
          danger: {
            default: "#DB382A",
            medium: "#C41C1C",
            light: "#FEE2E2",
          },
          warning: {
            default: "#9A5B13",
            light: "#EBA22E",
          },
        },
        text: {
          primary: {
            action: "#17809D",
            emphasis: {
              high: "#111719",
              medium: "#374151",
              low: "#6B7280",
            },
          },
          neutral: "#9CA3AF",
          tertiary: "#4B5563",
          gray: {
            default: "#4b5563",
          },
          error: "#B91C1C",
          content: "#8B919E",
        },
        border: {
          default: "#D1D5DB",
          light: "#E5E7EB",
          dark: "#9CA3AF",
          selected: "#97C3F0",
          danger: "#F09898",
          primary: "#316CC0",
        },
        gray: {
          1: "#1E1E1E",
          2: "#747577",
          3: "#EAEAED",
          4: "#75787E",
          5: "#FAFAFA",
          6: "#B5B8BE",
        },
        success: {
          3: "#3ECA7E",
        },
        warning: {
          border: "#FBC84B",
          background: "#E97126",
        },
        surface: {
          secondary: "#6A7383",
        },
        icon: "#6B7280",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        corporate: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...daisyThemes["corporate"],
          "primary-content": "#fff",
          "--rounded-box": "0.3rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.3rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "0.5rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
          error: "#C8493E",
          primary: "#316CC0",
          info: "#CFFAFE",
        },
      },
    ],
  },
} satisfies Config;
