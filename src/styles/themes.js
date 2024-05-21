// Objeto com a definição do estilo para o tema lightTheme
const darkTheme = {
  colors: {
    grey5: "#000000",
    grey4: "#121214",
    grey3: "#212529",
    grey2: "#343B41",
    grey1: "#868E96",
    grey0: "#F8F9FA",
    grey: "#FFFFFF",
    primary: "#FF577F",
    primaryFocus: "#FF427F",
    primaryNegative: "#59323F",
    success: "#3FE864",
    negative: "#E83F5B",
  }
}

// Objeto com a definição do estilo para o tema darkTheme
const lightTheme = {
  colors: {
    grey5: "#FFFFFF",
    grey4: "#F8F9FA",
    grey3: "#868E90",
    grey2: "#343B41",
    grey1: "#212529",
    grey0: "#121214",
    grey: "#000000",
    primary: "#FF577F",
    primaryFocus: "#FF427F",
    primaryNegative: "#59323F",
    success: "#3FE864",
    negative: "#E83F5B",
  }
}

// Exportando as definições de estilo (lightTheme e darkTheme)
// no objeto themes, que será usado na props theme do 
// componente auxiliar <ThemeProvider>
export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
