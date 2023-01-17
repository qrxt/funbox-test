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
  activeText: {
    color: "#D91667",
  },

  border: {
    default: {
      color: "#1698D9",
    },
    hover: {
      color: "#2EA8E6",
    },
    selected: {
      color: "#D91667",
    },
    selectedHover: {
      color: "#E52E7A",
    },
  },

  decoration: {
    default: {
      color: "#1698D9",
    },
    selected: {
      color: "#D91667",
    },
  },
  link: {
    default: {
      color: "#1698D9",
    },

    hover: {
      color: "#2EA8E6",
    },

    focus: {
      color: "#2EA8E6",
    },
  },

  transition: (prop: string) => `${prop} 0.25s ease-in-out`,
};

export default theme;
