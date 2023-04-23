import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navg = useNavigate();
  return (
    <>
      <div className="footer-cont flex jac" onClick={() => navg('/')}>
        <p style={{ fontSize: '25px', fontStretch: 'extra-condensed', userSelect: 'none', cursor: 'pointer' }}>&copy; book <span style={{ color: 'red' }}>my</span> show</p>
      </div>
    </>
  )
}
export default Footer;