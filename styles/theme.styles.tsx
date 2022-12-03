export type ThemeType = typeof light // This is the type definition for my theme object.

export const light = {
	colors: {
		primary: "#85D1FF",
	},
	button: {
		default: {
			color: "#fff",
			background: "#F6297C",
			boxShaddow:
				"0px 0px 0px -1px rgba(195, 145, 200, 0.3), 0px 13px 47px -12px rgba(246, 41, 124, 0.66)",
		},
		blue: {
			color: "#85D1FF",
			background: "rgba(76, 213, 243, 0.12)",
			border: "1px solid #85D1FF",
		},
	},
	hamMenu: {
		color: "#FFFFFF",
		bottomColor: "#9EA9B1",
	},
	header: {
		background: "rgba(4, 7, 19, 0.6)",
		navItem: {
			color: "#999ba7",
			hoverColor: "#fff",
		},
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
