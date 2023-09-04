
interface Props {
    btnType: "button" | "submit" | "reset" | undefined;
    Colors: string;
    label: string;
    onClick?: () => void;
    btnId?: string;
}
function Button({ btnType, Colors, label, btnId, onClick }: Props) {
    const availableColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light', 'info'];
    return (
        <>
            <div className="btn-group">
                <button id={btnId} type={btnType} className={
                    availableColors.includes(Colors) ?
                        "btn btn-" + Colors :
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