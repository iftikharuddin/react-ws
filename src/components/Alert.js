import React from 'react';

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        props.alert && <div className="container my-3">
         <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">

                <strong>{capitalize(props.alert.type)}</strong>{props.alert.message}

            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        </div>
    );
}

export default Alert;