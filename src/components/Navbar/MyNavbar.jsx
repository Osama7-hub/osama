import React, { useEffect, useState } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import './navbar.css'
import NavToggle from './NavToggle';
import NavLinks from './NavLinks';

function MyNavbar({ myLinks }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // تحديث حالة شريط التنقل بناءً على موضع التمرير
      window.scrollY > 250 ? setIsFixed(true) : setIsFixed(false)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // تنظيف الحدث عند تفريغ المكون
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className={isFixed ? 'fixed' : ''}>
      <Container>
        <Navbar.Brand href="/"><img src="./imgs/code.png" alt="Logo" width={30} height={30} /></Navbar.Brand>
        <NavToggle links={myLinks} className="NavToggle" />
        <Navbar.Collapse id="responsive-navbar-nav"><NavLinks /></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;