"use client"
import Image from "next/image";
import DumbbellIcon from "next/image";
import { useEffect } from "react";
import  "../../Styles/ComponentsMenuStyles/LogoMenuComponentStyle.scss";

function Logo() {
    return(
        <div className="Logo-box">
            
            <div>
                <h1>Fitness</h1>
            </div>
            <div className="test">
                <DumbbellIcon
                    className="image2"
                    src="/dumbbell.svg"
                    alt="Next.js logo"
                    width={40}
                    height={40}
                    priority
                />
            </div>
        </div>
    )
}


export default Logo;