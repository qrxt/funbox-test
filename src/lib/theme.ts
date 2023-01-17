const primaryTextFont = `"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
"Lucida Sans", Arial, sans-serif`;
const secondaryTextFont = `"Exo 2", "Lucida Sans", Arial, sans-serif`;

// TODO: theme -> components, etc

const theme = {
  primaryText: {
    color: "#000000",
    font: primaryTextFont,
  },
  secondaryText: {
    color: "#666666",
    font: secondaryTextFont,
  },
  contrastText: {
    color: "#ffffff",
    font: secondaryTextFont,
  },

  border: {
    default: {
      color: "#1698D9",
    },
  },

  decoration: {
    color: "#1698D9",
  },
};

export default theme;
