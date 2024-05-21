import { StyledRegisterPage } from "./style"
import { RegisterForm } from "../../components/RegisterForm"
import { useNavigate } from "react-router-dom"
import { StyledH1 } from "../../styles/typography"
import { StyledLink } from "../../styles/link"
import { UserContext } from "../../providers/UserContext"
import { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { themes } from "../../styles/themes"
import { Global } from "../../styles/global"
import { AppContainer } from "../../styles/app"

export const RegisterPage = () => {
    const navigate = useNavigate()
    const { currentTheme, setCurrentTheme, getOpositeTheme } = useContext(UserContext)

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Global />
            <AppContainer>
                <StyledRegisterPage>
                    <header>
                        <StyledH1 fontSize="18" fontWeight="900" color="primary"> HubSim</StyledH1>
                        <button onClick={() => setCurrentTheme(getOpositeTheme())}>
                            Mode
                        </button>
                        <StyledLink backgroundcolor="grey3" to="/">
                            Back
                        </StyledLink>
                    </header>
                    <RegisterForm />
                </StyledRegisterPage>
            </AppContainer>
        </ThemeProvider>
    )
}