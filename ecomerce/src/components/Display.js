import React from "react";
import './display.css'
import { Button } from "./Button";
export const Display = () => {
    return (
        <div className="container_display">
            <div className="right">
                <div className="img"></div>
                <div className="title">City night</div>
            </div>
            <Button bgColor="#912112" content="Delete"></Button>
        </div>
    )
}