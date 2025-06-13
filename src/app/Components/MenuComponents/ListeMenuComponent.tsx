"use client";
import {useState} from "react";
import { ReactSVG } from 'react-svg'
import Image from "next/image";
import logo from '../../../../public/chart.svg';
import  "../../Styles/ComponentsMenuStyles/ListeMenuComponentStyle.scss";

function ListeMenu() {

    

    return (
        <div >
           <nav>
            <ul className="tess">
                <li>
                <a href="#">
                    <Image
                     className="nav-icon"
                    src="/overview.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                    />
                    <span>Overview</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <Image
                     className="nav-icon"
                    src="./dumbbell.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                    />
                    <span>Workout</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <Image
                     className="nav-icon"
                    src="./diet_plan.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                    />
                    <span>Diet Plan</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <Image
                     className="nav-icon"
                    src="./goal.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                    />
                    <span>Goals</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <Image
                     className="nav-icon"
                    src="schedule.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                    />
                    <span>My Schedule</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <Image
                     className="nav-icon"
                    src="./chart.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                    />
                    <span>My Progress</span>
                </a>
                </li>
            </ul>
            </nav>
        </div>
    )


}


export default ListeMenu;