module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    600: "rgb(37, 99, 235)",
                    100: "rgb(224, 231, 255)"
                },
            },
            screens: {
                mobile: {min: "240px", max: "640px"},
                sm: {min:"641px", max: "819px"},
                md: {min: "820px", max: "1023px"},
                lg: {min: "1080px"},
            },
        }
    },
    plugins: [],
}