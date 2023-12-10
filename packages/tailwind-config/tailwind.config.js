/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		//apps directory
		"./src/**/*.{js,ts,jsx,tsx}",

		//packages directory
		"../../packages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	prefix: "",
	plugins: [],
};
