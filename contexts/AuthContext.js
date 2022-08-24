import { useToast } from "@chakra-ui/react";
import React from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState()
    const toast = useToast()

    const handleLogin = () => {
        setIsLoggedIn(true);
        successToast("Login successfull")

    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        successToast("Logout successfull")
    }

    function successToast(message) {
        toast({

            title:  message 
        })
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}