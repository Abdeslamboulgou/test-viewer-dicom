import React from 'react';
import { data } from "../data/data"
import { VscDebugRestart } from "react-icons/vsc";
import { BiFullscreen } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { RiFileCopyFill } from "react-icons/ri";


function Contenu() {
    return (
        <div>
            {data.map((label) => label.id === 1 ? (
                <div key={label.id} class="text-primary" style={{
                    fontSize: 9,
                    fontFamily: "bolder",
                }}>
                    <div>
                        <img class="img-thumbnail" src={label.img} alt={`${label.name}`} style={{
                            height: 580,
                            width: 610,
                            objectFit: "cover",
                            marginTop: -150,
                            marginLeft: 20
                        }} /> </div>
                    <div>
                        <button type="button" className="btn btn-primary" style={{
                            marginTop: -70,
                            marginLeft: 560,
                            borderRadius: 100
                        }}>
                            <VscDebugRestart style={{ fontSize: 16 }} /></button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary" style={{
                            marginTop: -97,
                            marginRight: 520,
                            borderRadius: 100
                        }}>
                            < BiFullscreen style={{ fontSize: 16 }} /></button>
                    </div>
                    <div>
                        <span type="button" className="btn btn-danger" style={{
                            marginTop: -1180,
                            marginLeft: 565,
                            fontSize: 5
                        }}>
                            < TiDelete style={{ fontSize: 14 }} /></span>
                    </div>
                    <div>
                        <span className="btn btn-primary" style={{
                            marginTop: -1208,
                            marginLeft: 410,
                            fontSize: 9
                        }}>
                            < RiFileCopyFill style={{ fontSize: 12 }} /> SSH_DWI FAST</span>
                    </div>

                </div>) : null
            )}
        </div>
    );
}

export default Contenu;