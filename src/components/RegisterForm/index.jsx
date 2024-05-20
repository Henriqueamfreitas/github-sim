import { registerFormSchema } from "./registerFormSchema"
import { StyledRegisterForm } from "./style"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { StyledSpan, StyledH2, StyledP } from "../../styles/typography.js"
import { StyledButton } from "../../styles/button.js"
import { UserContext } from "../../providers/UserContext.jsx"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export const RegisterForm = () => {
    const { registerUser } = useContext(UserContext);
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors, dirtyFields,  } } = useForm({
        resolver: zodResolver(registerFormSchema),
    })

    const submit = async (formData) => {
        registerUser(formData)
    }

    return(
        <StyledRegisterForm onSubmit={handleSubmit(submit)}>
            <StyledH2 fontSize="14" fontWeight="700" color="grey0">Create your account</StyledH2>
            <StyledSpan fontSize="10" fontWeight="400" color="grey1">fast and free, let's go</StyledSpan>

            <Input
                label="Name"
                error={
                    errors.name ? 
                    <StyledP fontSize="10" fontWeight="400" color="negative">{errors.name.message}</StyledP> : 
                    null
                }
                htmlFor="name"
                type="text"
                name="name"
                placeholder="Enter your name here"
                {...register("name")}
            />

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

            <Input
                label="Confirm password"
                error={
                    errors.confirmPassword ? 
                    <StyledP fontSize="10" fontWeight="400" color="negative">{errors.confirmPassword.message}</StyledP> : 
                    null
                }
                htmlFor="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password here"
                {...register("confirmPassword")}
            />

            <Input
                label="Bio"
                error={
                    errors.bio ? 
                    <StyledP fontSize="10" fontWeight="400" color="negative">{errors.bio.message}</StyledP> : 
                    null
                }
                htmlFor="bio"
                type="text"
                name="bio"
                placeholder="Tell us about yourself"
                {...register("bio")}
            />

            <Input
                label="Contact"
                error={
                    errors.contact ? 
                    <StyledP fontSize="10" fontWeight="400" color="negative">{errors.contact.message}</StyledP> : 
                    null
                }
                htmlFor="contact"
                type="text"
                name="contact"
                placeholder="Enter your contact here"
                {...register("contact")}
            />

            <Input
                label="Course"
                error={
                    errors.course_module ? 
                    <StyledP fontSize="10" fontWeight="400" color="negative">{errors.course_module.message}</StyledP> : 
                    null
                }
                select={true}
                htmlFor="course_module"
                name="course_module"
                {...register("course_module")}
            />
            {
                Object.keys(dirtyFields).length>0 ?
                <StyledButton backgroundcolor="primary" disabled={false} type="submit">Register</StyledButton>:
                <StyledButton backgroundcolor="primaryNegative" disabled={true} type="submit">Register</StyledButton> 
            }
            <ToastContainer />
        </StyledRegisterForm>
    )
}