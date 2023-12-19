import React from "react";
import SearchLocation from "./SearchLocation";


export default function Home(){
    return(
        <div className="">
            <h1>Welcome</h1>
            <p>Find out details about any country you want to travel to</p>
            <SearchLocation/>
        </div>
    )
}