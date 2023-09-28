/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors : {
			newgray : '#EBEBEB',
			newgray2: '#7D7D7D',
			newgray3 : '#35383F',
			newblack : '#232529',
			javascript : '#ffd97d',
			react : '#48b8d0',
			htmlcolor : '#ff9b85',
			blanco : '#FEFEFE',
		},
		fontFamily : {
			'quicksand': ['"Quicksand"', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
