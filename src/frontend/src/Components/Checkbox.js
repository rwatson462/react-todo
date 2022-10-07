
const Checkbox = ({checked, onChange, label}) => {
    return (
        <span className="checkbox" onClick={onChange}>
            <span className={`far fa-fw ${checked ? "fa-check-square" : "fa-square"}`}></span> {label}
        </span>
    )
}

export default Checkbox
