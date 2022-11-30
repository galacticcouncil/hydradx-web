export type ThemeType = typeof light // This is the type definition for my theme object.

export const light = {
	colors: {
		primary: "#85D1FF",
	},
	button: {
		color: "#000",
		background: "#fff",
	},

	hamMenu: {
		color: "#FFFFFF",
		bottomColor: "#9EA9B1",
	},
	backgrounds: {},
	fonts: {
		primary: "#EBEBEB",
		secondary: "#ACB2B5",
	},
	breakpoints: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		xxl: "1536px",
	},
} as const

// export const dark: ThemeType = {
// 	colors: {

// 	},
// 	breakpoints: {
// 		sm: "640px",
// 		md: "768px",
// 		lg: "1024px",
// 		xl: "1280px",
// 		xxl: "1536px",
// 	},
// } as const

const theme = light // set the light theme as the default.
export default theme
