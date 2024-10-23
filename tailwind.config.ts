import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            borderWidth: {
                "10": "10px",
                "12": "12px",
            },
            textColor: {
                "gradient-border":
                    "linear-gradient(to right, #FF4E83, #FFBB54)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-border":
                    "linear-gradient(to right, #FF4E83, #FFBB54)",
            },
            screens: {
                mobile: { max: "799px" }, // Mobile view for < 800px
                desktop: { min: "800px" }, // Desktop view for >= 800px
            },
            borderImage: {
                "gradient-border":
                    "linear-gradient(to right, #FF4E83, #FFBB54)",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            colors: {
                "custom-red": "#FF6D51",
            },
            zIndex: {
                "999": "999",
            },
        },
    },
    plugins: [],
};
export default config;
