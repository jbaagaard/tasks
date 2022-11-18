import * as S from "./Popup.styled";
import { ReactNode } from "react";
import { createPortal } from "../createPortal";

const [PortalProvider, PortalContainer, Portal] = createPortal();

export const PopupProvider = PortalProvider;

export const PopupContainer = PortalContainer;

const PopupPortal = Portal;

interface PopupProps {
  onCancel: () => void;
  children: ReactNode;
}
const Popup = ({ onCancel, children }: PopupProps) => {
  return (
    <PopupPortal>
      <S.Wrapper onClick={onCancel}>
        <S.Popup onClick={(event) => event.stopPropagation()}>
          {children}
        </S.Popup>
      </S.Wrapper>
    </PopupPortal>
  );
};

export default Popup;
