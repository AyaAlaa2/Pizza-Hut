import React, { useState ,useRef} from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import menuCategory from './fetchMenuData.jsx'
import { useNavigate } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

export default function MEnuCatBtn() {
  const menuCategoryItem = menuCategory();
  const totalButtons = 6;
  const buttonsPerView = 5;
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const ref = useRef(null)

  const handlePrev = () => {
    setStartIndex(prev => Math.max(prev - buttonsPerView, 0));
  };

  const handleNext = () => {
    setStartIndex(prev => Math.min(prev + buttonsPerView, totalButtons - buttonsPerView));
  };

  const handleButtonClick = (link) => {
    setActiveIndex(link);
    navigate(`/order/${link}`);
  };

  return (
    <Row className="BtnGroup align-items-center overflow-hidden position-fixed z-3 w-75">
        <Col xs={1}>
         <Button onClick={handlePrev} disabled={startIndex === 0} className="btnPrev">
         <FaChevronLeft />
         </Button>
        </Col>

       <Col xs={10}>
       <Row className="justify-content-center flex-nowrap mx-2 gap-5">
          {
            menuCategoryItem
            .slice(startIndex, startIndex + buttonsPerView)
            .map((item) => (
                <Col xs={1} md={2} key={item.id} onClick={() => handleButtonClick(item.title)} className={`btnItems ms-2 ${activeIndex === item.title ? 'active' : ''}`} > {item.title} </Col>
            ))
        }
        </Row>
       </Col>

      <Col xs={1}>
      <Button
        onClick={handleNext}
        disabled={startIndex + buttonsPerView >= totalButtons}
        className="btnNext"
      >
       <FaChevronRight />
      </Button>
      </Col>
    </Row>
  );
};