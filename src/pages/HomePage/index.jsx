import { StyledHomePage } from "./style"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { StyledH2, StyledSpan, StyledH1 } from "../../styles/typography.js"
import { StyledButton } from "../../styles/button.js"

export const HomePage = ({ user, setUser }) => {
    const navigate = useNavigate()

    const logout = () => {
        setUser(null)
        navigate("/")
    }

    return (
        <StyledHomePage>
            <header>
                <StyledH1 fontSize="18" fontWeight="900" color="primary" >HubSim</StyledH1>
                <StyledButton backgroundcolor="grey3" onClick={logout}>Back</StyledButton>
            </header>

            <div>
                <StyledH2 fontSize="18" fontWeight="700" color="grey0">Hello, {user.name}</StyledH2>
                <StyledSpan fontSize="12" fontWeight="600" color="grey1">{user.course_module}</StyledSpan>
            </div>

            <div>
                <StyledH2 fontSize="18" fontWeight="700" color="grey0">What a shame! We're under development {":("}</StyledH2>
                <StyledSpan fontSize="12" fontWeight="600" color="grey1">
                    Our application is under development. Stay tuned for updates!
                </StyledSpan>
            </div>
        </StyledHomePage>
    )
}