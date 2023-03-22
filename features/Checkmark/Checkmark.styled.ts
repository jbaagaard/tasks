import styled, { css } from "styled-components";
import { Status } from "../types";

export const Checkmark = styled.button<{ status: Status }>`
  height: 2rem;
  width: 2rem;
  border-radius: 6.1875rem;
  box-sizing: border-box;
  color: ${(props) => props.theme.greenText};
  ${(props) => props.status === "Not Started" && "background-color: none"};
  ${(props) =>
    props.status === "In Progress" &&
    "background-color: " + props.theme.yellow};
  ${(props) =>
    props.status === "Done" && "background-color: " + props.theme.green};
`;
