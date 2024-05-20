import { StyledLoginForm } from "./style"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "./loginFormSchema"
import { Input } from "../Input"
import { api } from "../../services/api.js"
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { StyledP, StyledH2 } from "../../styles/typography.js"
import { StyledButton } from "../../styles/button.js"
import { StyledLink } from "../../styles/link.js"
import { UserContext } from "../../providers/UserContext.jsx"
import { useContext } from "react"

export const LoginForm = ({ }) => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema),
    })

    const submit = async (formData) => {
        try{
            const response = await api.post("/sessions", formData) 
            setUser(response.data.user)
            toast.success("Congratulations! You're being redirected to the login page.")
            setTimeout(() => {
                navigate("/home")
            }, 5000)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return(
        <StyledLoginForm onSubmit={handleSubmit(submit)}>
            <StyledH2 fontSize="14" fontWeight="700" color="grey0">Login</StyledH2>

            <Input
                label="E-mail"
                error={
                    errors.email ? 
                    <StyledP fontSize="10" fontWeight="400" color="negative">{errors.email.message}</StyledP> : 
                    null
                }
                htmlFor="email"
                type="email"
                name="email"
                placeholder="Enter your email here"
                {...register("email")}
            />

            <Input
                label="Password"
                error={
                    errors.password ? 
                    <StyledP fontSize="10" fontWeight="400" color="negative">{errors.password.message}</StyledP> : 
                    null
                }
                htmlFor="password"
                type="password"
                name="password"
                placeholder="Enter your password here"
                {...register("password")}
            />

            <StyledButton backgroundcolor="primary" type="submit">Login</StyledButton>
            <StyledP fontSize="10" fontWeight="600" color="grey1" >Don't have an account yet?</StyledP>
            <StyledLink backgroundcolor="grey1" to="register">
                Register
            </StyledLink>
            <ToastContainer />
        </StyledLoginForm>
    )
}