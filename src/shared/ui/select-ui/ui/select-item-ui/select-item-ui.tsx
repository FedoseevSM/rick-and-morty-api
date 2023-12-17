export const SelectItemUI = (props) => {
    return (
        <option {...props}>
            {props.children}
        </option>
    )
}