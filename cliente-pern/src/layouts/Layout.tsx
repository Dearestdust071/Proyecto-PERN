import React from 'react'
import {Outlet} from "react-router-dom";
export default function Layout() {
    return (
        <>
            <header>
                <h1>REGISTROS</h1>
                <Outlet/>
            </header>
        </>
    )
}
