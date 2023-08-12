import { ReactNode, MouseEvent } from "react";
interface Props {
    children: ReactNode;
    withCloseBtn: boolean;
    onClose: (event: MouseEvent) => void;
}
const Alert = ({ children, onClose, withCloseBtn }: Props) => {
    return (
        <>
            {withCloseBtn ? <div className="alert alert-primary alert-dismissible" role="alert">
                {children}
                <button onClick={(e) => onClose(e)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> :
                <div className="alert alert-primary" role="alert">
                    {children}
                </div>
            }
        </>
    )
}

export default Alert;