import React from 'react';
import { data } from "../data/data"
import { AiFillEdit } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";



function Labels() {
    return (
        <div style={{
            boxShadow: "0px 1px 3px gray",
            padding: 8
        }}>
            {data.map((label) => (
                <div key={label.id} class="text-primary" style={{
                    fontSize: 9,
                    fontFamily: "bolder",
                }}>
                    <br /><AiFillEdit style={{
                        marginTop: -10,
                        marginRight: 8,
                        fontSize: 20,
                        cursor: "pointer",
                    }} /> {label.name}< BsChevronRight class='text-primary' />{label.etat}< BsChevronRight class='text-primary' />{label.pirads}  </div>
            ))}
        </div>
    );
}

export default Labels;