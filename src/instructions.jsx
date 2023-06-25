import { useState } from "react";

export default function Instructions (){
   
    return (
    <div>
    <h2>How To Play?</h2>
    <ul>
        <li>Each Digit must be unique (0-9).</li>
        <li>The number can start with a Zero.</li>
        <li>Bulls Represent the Digit is placed in correct position.</li>
        <li>Cows Represent the Digit in the answer but not placed correctly</li>
        <li>when you have 4 bulls you Win!!.</li>
        <li>Duplicates digits or letters show invalid input</li>
    </ul>
    

    </div>
);

}