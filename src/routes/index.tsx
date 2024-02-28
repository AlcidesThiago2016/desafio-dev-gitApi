import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainPage(){
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}