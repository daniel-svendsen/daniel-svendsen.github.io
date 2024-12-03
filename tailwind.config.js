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
			animation: {
				pop: 'pop 1.5s ease-in-out', // Lägg till pop-animationen
			},
			keyframes: {
				pop: {
					'0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0' },
					'50%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity: '1' },
					'100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
};
