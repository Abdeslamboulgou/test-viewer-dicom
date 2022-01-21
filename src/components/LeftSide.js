import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillEdit } from "react-icons/ai";
import { GiClick } from "react-icons/gi";
import { FaHandPaper } from "react-icons/fa";
import { IoMdContrast, IoMdImage, IoIosArrowForward } from "react-icons/io";
import { BsPlusSquareFill, BsTools, BsTagFill, BsFillPlusCircleFill, BsShieldFillPlus, BsFillLayersFill, BsZoomIn } from "react-icons/bs";
import { Button, Popover, Offcanvas, OverlayTrigger } from 'react-bootstrap';
import LabelsTemplate from './LabelsTemplate';



function LeftSide() {
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="btn" onClick={handleShow} className="me-2" style={{
          position: "relative",
          top: -105,
          right: 530,

        }}>
          Lablings <IoIosArrowForward />
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props} style={{
          marginTop: 55,
          marginLeft: 102,
          width: 280,
          height: "88vh",
        }}>
          <Offcanvas.Body>
            <div>
              <BsTagFill class="text-primary" /> Labling template
              <hr />
              <LabelsTemplate />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  return (
    <div>

      {['bottom'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`} style={{ marginTop: 10 }}>
              <Popover.Body >
                <div class="d-flex flex-column">
                  <div class="p-2 ">
                    <span class="p-1 "><button type="button" class="btn btn-primary"><GiClick /></button></span>
                    <span class="p-1"><button type="button" class="btn"><FaHandPaper /></button></span>
                    <span class="p-1"><button type="button" class="btn "><IoMdContrast /></button></span>
                  </div>
                  <div class="p-2 ">
                    <span class="p-1"><button type="button" class="btn">< IoMdImage /></button></span>
                    <span class="p-1"><button type="button" class="btn"><BsPlusSquareFill /></button></span>
                    <span class="p-1"><button type="button" class="btn"><BsFillPlusCircleFill /></button></span>
                  </div >
                  <div class="p-2 ">
                    <span class="p-1 "><button type="button" class="btn"><BsShieldFillPlus /></button></span>
                    <span class="p-1 "><button type="button" class="btn"><AiFillEdit /></button></span>
                    <span class="p-2 "><button type="button" class="btn"><BsZoomIn /></button></span>
                  </div>
                  <div class="p-2 "><button type="button" class="btn btn-primary"><BsFillLayersFill /></button></div>

                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="btn" style={{ marginRight: 200, marginTop: -255 }}><BsTools style={{ fontSize: 20, }} /> </Button>
        </OverlayTrigger>
      ))}
      <div>
        {['start'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </div>


    </div>
  );
}

export default LeftSide;