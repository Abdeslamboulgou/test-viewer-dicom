import React from 'react';
import { data } from "../data/data"
import { AiFillEdit, AiFillPlusSquare } from "react-icons/ai";
import { IoMdImage } from "react-icons/io";



function LabelsTemplate() {
    return (
        <div>
            <div style={{
                boxShadow: "0px 1px 3px gray",
                padding: 6,
            }}>
                {data.map((label) => label.etat === "ANORMAL" ? (
                    <div key={label.id} class="text-primary text-wrap" style={{
                        fontSize: 9,
                        fontFamily: "bolder",
                    }}>
                        <br />{label.label}<IoMdImage class="text-success" style={{
                            marginLeft: 80,
                            fontSize: 20,
                            cursor: "pointer",
                        }} /> </div>) : (<div class="text-primary text-wrap" style={{
                            fontSize: 9,
                            fontFamily: "bolder",
                        }}>{label.label}<AiFillPlusSquare style={{
                            marginLeft: 75,
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                        }} />
                            <div style={{
                                marginTop: 10,
                                backgroundColor: "lightgray",
                            }}> - {label.name} <AiFillEdit style={{
                                marginLeft: 150,
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                            }} /></div> 
                            </div>
                ))}
            </div>
        </div>
    );
}

export default LabelsTemplate;