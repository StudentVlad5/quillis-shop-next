import theme from '@/app/_components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const SelectContainerCurrency = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.brown2};
  font-size: ${theme.fontSizes.extra};
  font-style: normal;
  font-family: ${theme.fonts[0]};
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0;
  text-transform: none;
  position: relative;
  background: transparent;
  border: transparent;

  @media screen and (min-width: 768px) {
    /* left: 165px; */
  }
`;

export const SelectCurrency = styled.select`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.brown2};
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-family: ${theme.fonts[0]};
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0;
  /* text-transform: uppercase; */
  position: relative;
  background: transparent;
  border: transparent;

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.large};
  }
  @media screen and (min-width: 1280px) {
    font-size: ${theme.fontSizes.extra};
  }
  transition: ${theme.transition[0]};

  &:focus,
  &:hover,
  &:focus-visible {
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
    outline: 0;
    outline-offset: 0;
  }
  &.active {
    outline: 0;
    outline-offset: 0;
  }
`;
