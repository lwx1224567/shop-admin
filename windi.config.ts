import { defineConfig } from "windicss/helpers";

export default defineConfig({
theme: {
extend: {
colors: {
primary: "#111111",
secondary: "#222222"
},
fontFamily: {
display: ["Poppins", "sans-serif"]
}
}
},
attributify: {
prefix: "w:"
},
safelist: [
"p-1", "p-2", "p-3", "p-4",
...Array.from({ length: 10 }, (_, i) => `mt-${i + 1}`)
]
});