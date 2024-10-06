import {defineConfig} from "vite";
import reactPluginSwc from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactPluginSwc()],
	resolve: {
		alias: {
			"@components": "src/components",
			"@data": "src/data",
			"@models": "src/models",
			"@services": "src/services",
		},
	},
});
