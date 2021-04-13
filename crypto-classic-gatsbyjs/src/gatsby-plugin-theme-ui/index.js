const Theme = {
  breakpoints: [
    '480px',
    '640px',
    '768px',
    '1024px',
    '1220px',
    '1366px',
    '1620px',
  ],
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // example colors with dark mode
  colors: {
    text: '#02073E', // body color and primary color
    text_secondary: '#676A8B', // secondary body color
    heading: '#02073E', // primary heading color
    heading_secondary: '#161718', // heading color
    background: '#FFFFFF', // body background color
    background_secondary: '#F9FBFD', // secondary background color
    border_color: '#E9EDF5', // border color
    primary: '#3CC68A', // primary button and link color
    secondary: '#30c', // secondary color - can be used for hover states
    muted: '#7B8188', // muted color
    accent: '#609', // a contrast color for emphasizing UI
  },
  fonts: {
    body: 'DM Sans',
    heading: 'DM Sans',
    archivo: 'Archivo',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px',
  },
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: [
        '100%',
        null,
        null,
        '780px',
        '1020px',
        '1200px',
        null,
        '1350px',
      ],
      px: [4, null, 5, 6],
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'space-between',
    },
    main: {},
    footer: {
      backgroundColor: 'background_secondary',
    },
  },
  section: {
    banner: {
      borderTop: (t) => `1px solid ${t.colors.border_color}`,
      borderBottom: (t) => `1px solid ${t.colors.border_color}`,
      backgroundColor: 'background_secondary',
      py: [3, 5],
    },
    feature: {
      py: 5,
    },
    workflow: {
      py: 5,
    },
    product: {
      borderTop: (t) => `1px solid ${t.colors.border_color}`,
      borderBottom: (t) => `1px solid ${t.colors.border_color}`,
      backgroundColor: 'background_color',
      py: 5,
    },
    offer: {
      py: 5,
    },
    package: {
      py: 5,
    },
    support: {
      py: 5,
    },
    testimonial: {
      py: 5,
    },
    faq: {
      py: 5,
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      letterSpacing: 'heading',
      color: 'heading',
    },
    heroPrimary: {
      fontSize: [5, 55],
      fontWeight: 'normal',
      lineHeight: ['40px', '80px'],
      letterSpacing: '-1px',
      textAlign: ['center', 'left'],
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      // fontSize: [6, 7, 8],
      // fontWeight: 'display',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: '30px',
      color: '#0F2137',
    },
    heroSecondary: {
      color: 'text_secondary',
      lineHeight: ['30px', '42px'],
      letterSpacing: '0.1em',
      textAlign: ['center', 'left'],
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137',
    },
    muted: {
      lineHeight: '26px',
      color: 'muted',
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px',
    },
  },
  links: {
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      display: ['none', null, 'inline-block'],
      p: 2,
      // transitionProperty: 'background-color',
      // transitionTimingFunction: 'ease-out',
      // transitionDuration: '.2s',
      // borderRadius: 2,
      // '&:hover': {
      //   bg: 'highlight',
      // },
      // '&.active': {
      //   color: 'primary',
      //   bg: 'highlight',
      // },
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none'],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    primary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        bg: 'dark',
      },
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
    },
    text: {
      backgroundColor: 'transparent',
      color: '#3183FF',
      pl: 0,
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      // boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5,
    },
    featureCard: {
      display: 'flex',
      alignItems: ['center', 'flex-start'],
      flexDirection: ['column', 'row'],
      p: [0, 3],
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },

  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      WebkitFontSmoothing: 'antialiased',
      backgroundColor: 'white',
      color: 'text',
      a: {
        cursor: 'pointer',
        textDecoration: 'none',
      },
      '.modal-video-close-btn': {
        cursor: 'pointer',
        top: '-25px',
        right: '-25px',
        width: ' 25px',
        height: '25px',
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto',
      },
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7',
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
};

export default Theme;
