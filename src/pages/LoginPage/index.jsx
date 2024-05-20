import { StyledLoginPage } from "./style"
import { LoginForm } from "../../components/LoginForm"
import { StyledH1 } from "../../styles/typography"

export const LoginPage = ({ user, setUser }) => {
    return(
        <StyledLoginPage>
            <StyledH1 fontSize="18" fontWeight="900" color="primary" >HubSim</StyledH1>
            <LoginForm />
        </StyledLoginPage>
    )
}