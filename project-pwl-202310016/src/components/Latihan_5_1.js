import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './Layout'

export default class Latihan_5_1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "My Apps"
        }
        this.onInputchange = this.onInputchange.bind(this);
    }
    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <Layout title={this.state.title} >
                <div className="w-lg-400px mx-3">
                    <div className="bg-body rounded shadow-sm p-10 p-lg-15">
                        <form method='post' autoComplete='off' className='form w-100' >
                            <div className="text-center mb-10">
                                <h1 className='text-dark mb-3'>Widget One</h1>
                                <div className="text-gray-400 fw-bold fs-5">
                                    Please fill up this form with correctly
                                </div>
                            </div>

                            <div className="fv-row mb-10 fv-plugins-icon-container">
                                <label className="form-label fs-6 fw-bolder text-dark">Type the title of this web</label>
                                <input type="text" name="title" className='form-control form-control-lg form-control-solid' defaultValue={this.state.title}
                                    onChange={this.onInputchange} />
                            </div>

                            <div className="text-center">
                                <button type='button' className='btn btn-lg btn-primary w-100 mb-5'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
}
