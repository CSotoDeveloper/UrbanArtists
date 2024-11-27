/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FF0075",
				secondary: "#00EAD3",
        accent: "#FFAA00",
			},
			gridTemplateColumns:{
				'auto': 'repeat(auto-fill, minmax(200px,1fr))'
			}
		},
	},
	plugins: [],
};
