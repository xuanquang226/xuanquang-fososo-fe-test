'use client';
import TopInfoBar from "./TopInfoBar";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import UserAction from "./UserAction";
import NavbarBottom from "./NavbarBottom";
import { useState } from "react";
export default function Header(){
    return(
        <div className={`flex flex-col gap-5 md:text-sm`}> 
            <TopInfoBar />
            <div className={`header-content w-4/5 my-0 mx-auto grid grid-cols-[2fr_6fr_4fr]
                            gap-10 items-center text-black`}>
                <Logo/>
                <SearchBar/>
                <UserAction/>
            </div>
            <NavbarBottom/>
        </div>      
    );
}