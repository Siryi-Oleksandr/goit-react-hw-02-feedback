import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 15px;
  border-radius: 8px;
  /* background-color: #88c426; */
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  /* border-color: transparent; */
  outline: none;
  transition: all 250ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 15px;
  }
  &:active {
    transform: scale(0.95);
  }
  &:hover,
  &:focus {
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
