/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // 手書きの譜面（マニュスクリプト）用紙をイメージした配色
        paper: "#EFE8D8",
        "paper-dark": "#E4DAC2",
        ink: "#221F1A",
        "ink-soft": "#4A453C",
        pine: "#3F6357", // 信号・波形のアクセント
        "pine-dark": "#2C4A41",
        ochre: "#BD8A2C", // 真鍮のようなハイライト
        rule: "#A69C86", // 五線・罫線の色
      },
      fontFamily: {
        display: ['"Shippori Mincho"', "serif"],
        body: ['"Zen Kaku Gothic New"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
