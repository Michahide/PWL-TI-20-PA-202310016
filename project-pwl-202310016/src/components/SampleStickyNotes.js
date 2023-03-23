import React from 'react'
import { Button } from 'react-bootstrap';

export default function () {
    
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Sticky Notes
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button variant="primary">Go somewhere</Button>
                </div>
            </div>
        </div>
    )
}

const NoteItem = () => {
    return (
        <div className="card">
            <div className="card-header">
                <span onClick="add">+</span>
                <span>X</span>
            </div>
            <div className="card-body">
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    )
}
