import PropTypes from 'prop-types';
const InputComponent = (props) => {
    return(
        <>
        <input type={props.type}
        name={props.name}
        defaultValue={props.value}
        className={props.class}
        onChange={props.change}></input>
        </>
    )
}
InputComponent.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.number
}
export default InputComponent;