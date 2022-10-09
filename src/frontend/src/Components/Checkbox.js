import CheckboxCheckedIcon from "./Icons/CheckboxCheckedIcon"
import CheckboxUncheckedIcon from "./Icons/CheckboxUncheckedIcon"

const Checkbox = ({checked, onChange, label}) => {
    return (
        <span className="checkbox" onClick={onChange}>
            {checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
            {label}
        </span>
    )
}

export default Checkbox
