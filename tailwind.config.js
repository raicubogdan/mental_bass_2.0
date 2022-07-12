module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-black': '#323232',
        'transparent-black': 'rgba(16, 15, 20, 0.5)',
        'light-gray': '#373737',
        'background-gray': '#323232',
        'dark-gray-container': '#404040',
        'accent-color-orange': '#FF5C00',
        'pending-orange': '#FFAB2D',
        'active-green': '#2E974B',
        'chart-up-green': '#3DBAA2',
        'system-grey-1': '#8E8E93',
        'system-grey-2': '#636366',
        'system-grey-3': '#AEAEB2',
        'system-grey-4': '#C4C4C4',
        'stroke-card-5': '#515054',
        'stroke-card-6': '#262629',
        'light-grey': '#4E4E4E',
        'bar-chart-green': '#2BC155',
        'stroke-card-grey-1': '#4e4e52',
        'stroke-card-grey-2': '#3a3a3d',
        'dark-grey-1': '#100F14', // card bg
        'dark-grey-1/50': '#100F1480', // card bg with 50% opacity
        'dark-grey-2': '#0E0D11', // buttons
        'dark-grey-3': '#0E0D12', // table bg / odd row bg
        'dark-grey-4': '#141417', // even row bg
        'dark-grey-5': '#11111F', // background color for accepted pill status
        'dark-grey-6': '#1f1f24',
        'dark-grey-7': '#1b1b1c', // background color for accepted pill status
        'blue-1': '#0A84FF',
        'blue-2': '#246BFD',
        'action-valid': '#246BFD',
        'action-invalid': 'rgba(255, 46, 46, 0.7)',
        'red-1': '#D8382D',
        'orange-1': '#FE7B02',
      },
      fontSize: {
        6: '6px',
        8: '8px',
        10: '10px',
        11: '11px',
        12: '12px',
        22: '22px',
      },
      width: {
        403: '403px',
        78: '78px',
        106: '106px',
        1024: '1024px',
        128: '32rem',
        30: '7.5rem',
        1233: '1233px',
        1240: '1240px',
        268: '268px',
      },
      height: {
        120: '30rem',
        124: '31rem',
      },
      minHeight: {
        120: '30rem',
        124: '31rem',
        176: '44rem',
        60: '15rem',
        540: '540px',
      },
      minWidth: {
        16: '64px',
        12: '48px',
        24: '90px',
        64: '256px',
      },
      maxWidth: {
        268: '268px',
        300: '300px',
        164: '41rem',
        1233: '1233px',
        1240: '1240px',
      },
      borderRadius: {
        10: '10px',
      },
      screens: {
        '2xl': '1280px',
        xs: '420px',
        xxs: '320px',
      },
      spacing: {
        18: '1.125rem',
      },
      fontFamily: {
        LEDLIGHT: ["LEDLIGHT"],
        cynatar: ["cynatar"],
        orbitron: ["orbitron"],
      },
    },
    fontSize: {
      xxs: '0.6875',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  plugins: [],
};
