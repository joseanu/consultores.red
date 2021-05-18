const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: ["./**/*.{html,js}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			green: "#b8e826",
		},
		fontFamily: {
			sans: ["space grotesk", "sans-serif"],
			mono: ["space mono", "monospace"],
		},
		extend: {
			width: {
				13: "3.75rem",
				160: "40rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
