import styled from "styled-components";

export const ButtonSelect = styled.button`
  display: flex;
  align-content: center;
  width: fit-content;
  background: ${props => (props.active ? "none" : "#e9ebee")} transparent;
  color: ${props => (props.active ? "#2eba69" : "rgba(0, 0, 0, 0.3)")};
  font-size: 17px;
  margin: 0 8px 0 0;
  padding: 0.25em 1.25em;
  border: ${props =>
    props.active ? "2px solid #2eba69" : "1px solid #e9ebee"};
  border-radius: 8px;
  outline: none !important;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonLocation = styled.button`
  display: flex;
  align-content: center;
  width: fit-content;
  background: transparent;
  color: black;
  font-size: 1em;
  margin: 0;
  padding: 0.25em 1em 0.25em 1em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  outline: none !important;

  > span {
    > i {
      > svg {
        margin-right: 5px;
        margin-top: 5px;
      }
    }
  }
`;
