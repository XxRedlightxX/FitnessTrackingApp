"use client";
import {useState} from "react";
import LogoMenu from "./LogoMenuComponent"
import ListeMenu from "./ListeMenuComponent"
import  "../../Styles/ComponentsMenuStyles/MenuComponentStyle.scss";


function Menu() {

    return (
        <div className="Menu-Component">
            <LogoMenu/>
            <ListeMenu/>

        </div>
    )


}


export default Menu;
