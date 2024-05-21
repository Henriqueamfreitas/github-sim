import { StyledLoginPage } from "./style"
import { LoginForm } from "../../components/LoginForm"
import { StyledH1 } from "../../styles/typography"
import { AppContainer } from "../../styles/app"
import { UserContext } from "../../providers/UserContext"
import { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { themes } from "../../styles/themes"
import { Global } from "../../styles/global"


export const LoginPage = ({ }) => {
    const { currentTheme, setCurrentTheme, getOpositeTheme } = useContext(UserContext)

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Global/>
            <AppContainer>
                <StyledLoginPage>
                    <StyledH1 fontSize="18" fontWeight="900" color="primary" >HubSim</StyledH1>
                    <button onClick={() => setCurrentTheme(getOpositeTheme())}>
                        Mode
                    </button>
                    <LoginForm />
                </StyledLoginPage>
            </AppContainer>
        </ThemeProvider>
    )
}