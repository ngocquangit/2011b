import React from 'react';
class HeaderComponent extends React.PureComponent {
    render() {
        console.log('HeaderComponent đã được render');
        return (
            <>
            <h1>This is a header</h1>
            </>
        )
    }
}
export default HeaderComponent;