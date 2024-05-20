import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { toast } from 'react-toastify'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    
    const token = localStorage.getItem("@token")
    useEffect(() => {
        const loadData = async () => {
            if(token){
                try {
                    const response = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    }) 
                    setUser(response.data)
                    navigate("/home")
                } catch (error) {
                    console.log(error)
                    localStorage.removeItem("@token")
                }
            }
        }

        loadData()
    }, [])


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
            localStorage.setItem("@token", response.data.token)
            toast.success("Congratulations! You're being redirected to the login page.")
            setTimeout(() => {
                navigate("/home")
            }, 5000)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("@token")
        navigate("/")
    }


    return (
        <UserContext.Provider value={{ user, setUser, registerUser, loginUser, logout }}>
            {children}
        </UserContext.Provider>
    )
}