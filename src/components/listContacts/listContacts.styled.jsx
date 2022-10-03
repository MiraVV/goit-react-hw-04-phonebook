import styled from '@emotion/styled';

export const ListElement = styled.li`
  margin: 10px;
`;

export const DeleteBtn = styled.button`
  margin-left: 20px;
  border: solid 1px grey;
  border-radius: 3px;
  background-color: lightgrey;
  padding: 5px 10px;
  cursor: pointer;
  :hover,
  focus {
    background-color: #6495ed;
    transform: scale(1.08);
  }
`;
