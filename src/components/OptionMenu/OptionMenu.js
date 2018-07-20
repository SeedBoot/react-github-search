import React from 'react';

import './OptionMenu.css';

class OptionMenu extends React.Component {
    render() {
        return (
            <div className="option-menu">
                {this.props.children}
            </div>
        )
    }
}

export default OptionMenu;
