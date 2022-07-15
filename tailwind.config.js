/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      game: ['"Press Start 2P", cursive'],
    },
    extend: {
      backgroundImage: {
        "animate-bg":
          "linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%)",
      },
      animation: {
        scale: "scale 0.5s ease-out",
        rotateA: "rotateA 2s linear infinite 0.5s",
        rotateB: "rotateB 2s linear infinite",
        bgPos: "bgPos 1s linear infinite",
        toastShow: "toast-show 0.5s 1",
        toastHide: "toast-hide 0.5s 1 forwards",
        grow: "grow 0.6s linear",
        goIn: "goIn 0.5s ease-in-out",
        goOut: "goOut 0.5s ease-in-out",
        show: "show 0.2s ease-out",
        hide: "hide 0.2s ease-out 0.5s",
        growLine: "growLine 10s linear infinite",
      },
      keyframes: {
        scale: {
          "100%": {
            transform: "translate(-50%, -50%) scale(10);",
            opacity: 0,
          },
        },
        rotateA: {
          "0%": {
            transform: "rotate(0deg);",
          },
          "25%": {
            transform: "rotate(0deg);",
          },
          "50%": {
            transform: "rotate(180deg);",
          },
          "75%": {
            transform: "rotate(180deg);",
          },
          "100%": {
            transform: "rotate(360deg);",
          },
        },
        rotateB: {
          "0%": {
            transform: "rotate(90deg);",
          },
          "25%": {
            transform: "rotate(90deg);",
          },
          "50%": {
            transform: "rotate(270deg);",
          },
          "75%": {
            transform: "rotate(270deg);",
          },
          "100%": {
            transform: "rotate(450deg);",
          },
        },
        bgPos: {
          "0%": {
            "background-position": "50% 0;",
          },
          "100%": {
            "background-position": "-150% 0;",
          },
        },
        "toast-show": {
          "0%": {
            transform: "translateX(110%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "toast-hide": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(110%)",
          },
        },
        grow: {
          to: {
            transform: "translate(-50%, -50%) scale(10);",
            opacity: "0;",
          },
        },
        goIn: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(120deg);",
          },
          "30%": {
            transform: "translate(-50%, -50%) rotate(-20deg);",
          },
          "60%": {
            transform: "translate(-50%, -50%) rotate(10deg);",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(0deg);",
          },
        },
        goOut: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg);",
          },
          "60%": {
            transform: "translate(-50%, -50%) rotate(20deg);",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(-120deg);",
          },
        },
        show: {
          "0%": {
            transform: "translate(-50%, -50%) scale(0);",
          },
          "30%": {
            transform: "translate(-50%, -50%) scale(1.4);",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(1);",
          },
        },
        hide: {
          "0%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(0);",
          },
        },
        growLine: {
          "0%": {
            transform: "scaleX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
