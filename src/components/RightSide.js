import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import NavBar from './NavBar';
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdCollectionsBookmark } from "react-icons/md";
import LabelsViewer from './LabelsViewer';



function RightSide() {

    function OffCanvasExample({ name, ...props }) {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Button variant="btn" onClick={handleShow} className="me-2" style={{
                    position: "relative",
                    top: -96,
                    left: 530,
                }}>
                    <BsGrid3X3GapFill class='text-primary' style={{
                        fontSize: 20,
                        cursor: "pointer",
                    }} />
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props} style={{
                    marginTop: 55,
                    marginRight: 120,
                    width: 265,
                    height: "88vh",
                }}>
                    <Offcanvas.Body>
                        <div>
                            <MdCollectionsBookmark class="text-primary" /> Labels viewer 1
                            <hr />
                            <LabelsViewer />
                        </div>
                        <br />
                        <div style={{ marginTop: 60 }}>
                            <MdCollectionsBookmark class="text-primary" /> Labels viewer 2
                            <hr />
                            <LabelsViewer />
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }
    return (
        <div>
            <NavBar />
            {['end'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
        </div>
    );
}

export default RightSide;