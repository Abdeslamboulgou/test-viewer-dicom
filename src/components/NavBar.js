import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { HiArrowLeft } from "react-icons/hi";
import { BsCheck2All, BsChevronRight, BsFillBookmarkFill } from "react-icons/bs";
import { Dropdown } from 'react-bootstrap';
import { AiOutlineLeft} from "react-icons/ai";



function NavBar() {
    return (

        <div className="container shadow-lg p-2 mb-5 bg-white ">
            <div className="row">
                <div className="col">
                    <HiArrowLeft className="text-primary" style={{
                        marginTop: 7,
                        marginRight: 90,
                        padding: 8,
                        borderRadius: 30,
                        fontSize: 25,
                        boxShadow: "0px 1px 4px gray",
                        cursor: "pointer",

                    }} />
                </div>
                <div className="col">
                    <Dropdown style={{
                         height: 20, 
                         width: 200 ,  
                         marginRight: 120, }}>
                        <Dropdown.Toggle variant="btn" id="dropdown-basic">
                            <BsFillBookmarkFill class='text-primary' /> EMERGENCY-PELVIC
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">tumeur vs no tumeur</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">patho vs non patho </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="col-6">
                <button type="button"  style={{
                            marginRight: 10,
                            color: "white",
                            padding: 5,
                            fontSize: 8,
                            borderRadius: 40,
                            boxShadow: "0px 2px 4px gray",
                            border: "none",

                        }}> < AiOutlineLeft class='text-primary' /></button>
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        TODO
                    </button>
                    <span style={{ marginLeft: 10 }}>
                        <button type="button" className="btn btn-primary"> <BsCheck2All /></button>
                    </span>
                    <span>
                        <button type="button"  style={{
                            marginLeft: 10,
                            color: "white",
                            padding: 5,
                            fontSize: 8,
                            borderRadius: 40,
                            boxShadow: "0px 2px 4px gray",
                            border: "none",

                        }}> < BsChevronRight  class='text-primary'  /></button>
                    </span>
                </div>
                <div className="col">

                </div>
            </div>

        </div>

    );
}

export default NavBar;