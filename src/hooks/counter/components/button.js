import PropTypes from 'prop-types';
const ButtonComponent = (props) =>{
    return (
        <>
        <button
        type={props.type}
        onClick={(props.click)}
        >{props.children}</button>
        </>
    )
}
ButtonComponent.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    click: PropTypes.func.isRequired
}
export default ButtonComponent;