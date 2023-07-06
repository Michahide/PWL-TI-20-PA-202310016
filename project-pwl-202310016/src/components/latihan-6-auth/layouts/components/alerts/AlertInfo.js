import React from 'react'
import { Alert } from 'react-bootstrap'
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prop-types
export default function AlertInfo({ variant, message }) {
    return (
        <Alert key={variant} variant={variant}>
            {message}
        </Alert>
    )
}

AlertInfo.PropTypes = {
    variant: PropTypes.any.isRequired,
    message: PropTypes.any.isRequired
}

