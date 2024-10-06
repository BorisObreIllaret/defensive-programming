import type {Config} from "tailwindcss";
import daisyui from "daisyui";

export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		daisyui
	],
	daisyui: {
		themes: ["light", "dark", "fantasy", "dim"],
	}
} satisfies Config;

