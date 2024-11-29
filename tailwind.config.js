/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			zIndex: {
				50: '50',
			},
			maxHeight: {
				60: '15rem', // Maximal höjd för dropdown
			},
			boxShadow: {
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', // Dropdown-skugga
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
};
