/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xlt: "300px",
        lt: '350px',
        360: "360px",
        sm: '480px',
        md: '768px',
        emd: '900px',
        lg: '976px',
        mac: "1344px",
        1250: '1350px',
        xl: '1440px',
        xxl: "1500px",
        xxxl: "1700px",
        1900: "1900px",
        "max-w-xl": "1080px",
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        text: '#E1EAFD',
        dim: '#5B657A',
        primary: '#010C1E',
        secondary: '#3F8EFF',
        landing_blue: "#1D9BF0",
        settings_bg: "#0D2449",
        hero_bg: "#548cf7",
        setting_profile_bg: "#010C1E"
      },

      // backdropBlur: {
      //   '700px': '700px', // Custom blur size
      // },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', // Custom shadow
      },
      scrollbar: {
        none: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none', /* IE/Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      },
    },

    backgroundImage: {
      'learning-bg': "url(/src/assets/images/Biorobots.png)",
      'expand-bg': "url(../../assets/images/guest img/expand bg.svg) ",
      'leads-bg': "url(/src/assets/images/leadsBg.png)",
      'custom-gradient': 'linear-gradient(94.06deg, #1D9BF0 2%, #E1EAFD 99.97%, #010C1E 100%)',
      "gradient-text": "linear-gradient(to bottom, #E1EAFD, #878C97)",
      'blue-gradient': 'linear-gradient(to bottom, #1D9BF0, #1D9BF0, #0653C0)',
      'custom-blue': '0px 0px 60px 0px rgba(29, 155, 240, 0.25)',
      // 'poweredby-gradient': 'linear-gradient(to top right, #0D2449 50%, #010C1E 75%, rgba(1, 12, 30, 0) 100%)',
      'poweredby-gradient': 'linear-gradient(to top right,#0D2449 10%, #010C1E 75%, rgba(1, 12, 30, 0) 80%)',
      "video-price-gradient": "linear-gradient(to top, #010C1E 0%, #1D9BF033 50%, #010C1E 100%)"
      ,
      'gradient-upgrade': "url('/src/assets/images/gradient-upgrade-bg.svg')",

      "gradient-card": "linear-gradient(to bottom, #1D9BF0,#E1EAFD )",
      "gradient-card-reverse": "linear-gradient(to bottom,#E1EAFD , #1D9BF0)"
    },
    borderImage: {
      'gradient-border': 'linear-gradient(to right, #1D9BF0, #E1EAFD)',
    },
    boxShadow: {
      'gradient-border': '0 0 0 3px inset rgba(0,0,0,0), 0 0 10px rgba(0, 0, 0, 0.1)',
    },
    dropShadow: {
      custom: '0px 4px 100px 5px #0653C099',
    },

  },

}