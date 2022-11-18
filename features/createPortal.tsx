import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

export interface PortalContextValue {
	element: null | ReactNode;
	setElement: (element: null | ReactNode) => void;
}

export interface PortalProviderProps {
	children?: ReactNode;
}

export interface PortalProps {
	children: ReactNode;
}

export function createPortal() {
	const PortalContext = createContext<PortalContextValue>(null!);

	const PortalProvider = ({ children }: PortalProviderProps) => {
		const [element, setElement] = useState<null | ReactNode>(null);

		return (
			<PortalContext.Provider value={{ element, setElement }}>
					{children}
			</PortalContext.Provider>
		);
	};

	const PortalContainer = () => {
		const { element } = useContext(PortalContext);

		if (!element) return null;

		return <>{element}</>;
	};

	const Portal = ({ children }: PortalProps) => {
		const { setElement } = useContext(PortalContext);

		useEffect(() => {
			setElement(children);

			return () => {
				setElement(null);
			};
		}, [children, setElement]);

		return null;
	};

	return [PortalProvider, PortalContainer, Portal] as const;
}
