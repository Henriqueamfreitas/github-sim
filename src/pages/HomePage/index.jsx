import { StyledHomePage } from "./style"
import { StyledH2, StyledSpan, StyledH1 } from "../../styles/typography.js"
import { StyledButton } from "../../styles/button.js"
import { UserContext } from "../../providers/UserContext.jsx"
import { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { themes } from "../../styles/themes"
import { Global } from "../../styles/global"
import { AppContainer } from "../../styles/app"

export const HomePage = ({ }) => {
    const { currentTheme, setCurrentTheme, getOpositeTheme, user, logout } = useContext(UserContext);

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Global />
            <AppContainer>
                <StyledHomePage>
                    <header>
                        <StyledH1 fontSize="18" fontWeight="900" color="primary" >HubSim</StyledH1>
                        <button onClick={() => setCurrentTheme(getOpositeTheme())}>
                            Mode
                        </button>
                        <StyledButton backgroundcolor="grey3" onClick={logout}>Back</StyledButton>
                    </header>

                    <div>
                        <StyledH2 fontSize="18" fontWeight="700" color="grey0">Hello, {user?.name}</StyledH2>
                        <StyledSpan fontSize="12" fontWeight="600" color="grey1">{user?.course_module}</StyledSpan>
                    </div>

                    <div>
                        <StyledH2 fontSize="18" fontWeight="700" color="grey0">What a shame! We're under development {":("}</StyledH2>
                        <StyledSpan fontSize="16" fontWeight="400" color="grey">
                            Our application is under development. Stay tuned for updates!
                        </StyledSpan>
                    </div>
                </StyledHomePage>
            </AppContainer>
        </ThemeProvider>
    )
}