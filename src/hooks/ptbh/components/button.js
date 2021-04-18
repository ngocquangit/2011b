import PropTypes from 'prop-types';
import React from 'react';
const ButtonComponent = (props) =>{
    return (
        <>
        <button
        type={props.type}
        onClick={(props.click)}
        >Giải phương trình bậc 2</button>
        </>
    )
}
ButtonComponent.propTypes = {
    type: PropTypes.string,
    click: PropTypes.func
}
export default React.memo(ButtonComponent);