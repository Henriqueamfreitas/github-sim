import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { toast } from 'react-toastify'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    const registerUser = async (formData) => {
        delete formData.confirmPassword
        try {
            const response = await api.post("/users", formData)
            toast.success("Congratulations! You're now registered.")
            setTimeout(() => {
                navigate("/")
            }, 5000)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const loginUser = async (formData) => {
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

    return (
        <UserContext.Provider value={{ user, setUser, registerUser, loginUser }}>
            {children}
        </UserContext.Provider>
    )
}