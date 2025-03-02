import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import LoadingCircle from "../components/LoadingCircle";

export default function Logout() {

    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    useEffect(()=>{
        try {
            logout();
            setTimeout(()=>{
                navigate("/");
            }, 1000);
        } catch (err) {
            console.log(err);
        }
    },[])

    return <>
        Logging you out...
        <LoadingCircle/>
    </>
}