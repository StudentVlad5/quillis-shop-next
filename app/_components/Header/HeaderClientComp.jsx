'use client';

import React from 'react';

import { HeaderSectionWrap, HeaderUnderLine } from './Header.styled';
import { useState, useEffect } from 'react';
// import { headerBottomComponent } from 'redux/header_bottom/selectors';
// import { useSelector } from 'react-redux';

export const HeaderClientComp = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState("false");
//   const headerBottom = useSelector(headerBottomComponent);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled("true");
      } else {
        setIsScrolled("false");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderSectionWrap $isScrolled={isScrolled}>
      {children}
      <HeaderUnderLine className={"true"} />
    </HeaderSectionWrap>
  );
};
