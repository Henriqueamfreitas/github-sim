import { StyledRegisterPage } from "./style"
import { RegisterForm } from "../../components/RegisterForm"
import { useNavigate } from "react-router-dom"
import { StyledH1 } from "../../styles/typography"
import { StyledLink } from "../../styles/link"

export const RegisterPage = () => {
    const navigate = useNavigate()
    
    return(
        <StyledRegisterPage>
            <header>
                <StyledH1 fontSize="18" fontWeight="900" color="primary"> HubSim</StyledH1>
                <StyledLink backgroundcolor="grey3"  to="/">
                    Back
                </StyledLink>
            </header>
            <RegisterForm />
        </StyledRegisterPage>
    )
}