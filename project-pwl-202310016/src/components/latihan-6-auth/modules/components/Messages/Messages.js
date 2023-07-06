import React, { Component } from 'react'

export default class Messages extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Chat message</h1>
                <div className="mx-auto d-flex justify-content-center">
                    <div className="card w-50 bg-white">
                        <div className="card-body">

                        </div>
                        <div className="card-footer p-3">
                            <div className="input-group">
                                <input type="text" name="chat" className='form-control border-primary' placeholder='Typing here' />
                                <button type='button' className='btn btn-primary'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
