import type {Config} from "tailwindcss";
import daisyui from "daisyui";
import tailwindTypography from "@tailwindcss/typography";

export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		tailwindTypography,
		daisyui,
	],
	daisyui: {
		themes: ["light", "dark", "fantasy", "dim"],
	}
} satisfies Config;
