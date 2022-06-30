import React from 'react';
import classNames from 'classname';
import "./Button.scss";

const Buttons = ({children, size, color, outline, fullWidth}) => {
    return (
        // <button className={`Button ${size}`}>{children}</button>
        <button className={classNames('Button',size, color, {outline,fullWidth})}>{children}</button>
    );
};

export default Buttons;