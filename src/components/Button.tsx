import { ReactNode, useState } from "react"
import Alert from "./Alert";

interface Props {
    buttonType: string;
    label: string;
    onClick: () => void;
}
function Button({ buttonType, label, onClick }: Props) {
    const availableButtonTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light', 'info'];
    return (
        <>
            <div className="btn-group">
                <button type="button" className={
                    availableButtonTypes.includes(buttonType) ?
                        "btn btn-" + buttonType :
                        "btn btn-primary"
                }
                    onClick={onClick}>
                    {label}
                </button>
            </div>
        </>
    )
}

export default Button