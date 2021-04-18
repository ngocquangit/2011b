// define component
import React from 'react';
class ButtonCounter extends React.Component {
    render()
    {
        return(
            <>
            {/* jsx */}
            <button 
            className="btn" 
            type={this.props.type}
            onClick={()=>this.props.click()}
            >
                {this.props.children}
            </button>
            </>
        )
    }
}
export {ButtonCounter}; 