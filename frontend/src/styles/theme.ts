const theme = {
	colors: {
		primaryBackground: '#242424',
		secondaryBackground: '#141414',
		primaryFontColor: '#e9e9e9',
		secondaryFontColor: '#a8a8a8',
		primaryButtonBackground: '#6daaf8',
		primaryButtonBackgroundHover: '#9dceff',
		destructiveButtonBackground: '#d64646',
	},
} as const

export type Theme = typeof theme

export default theme
