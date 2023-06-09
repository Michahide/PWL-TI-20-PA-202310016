import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Form() {
    const objTitle = {
        title: "Quis ke 2"
    }

    const [title, setTitle] = useState(objTitle);
    const quantity = 2;
    const website = 'https://www.google.com'+'halo'+quantity;
   

    return (
        <div>
            <h1>Saat ini sedang berlangsung {title.title}</h1>
            <div className="fv-row mb-10 fv-plugins-icon-container">
                <form className='form-quiz' method='post' id="form-quiz" >
                    <label className="form-label fs-6 fw-bolder text-dark">Masukkan Text:</label>
                    <input type="text" name="mname" className='form-control form-control-lg form-control-solid bg-red' style={{ border: "1px solid black" }} defaultValue={title.title} onChange={(e) => setTitle({ ...objTitle, title : e.target.value })} />
                    <button type="submit" className='btn btn-lg' style={{ backgroundColor: "#C8BFE7", color: "white" }}>Ok</button>
                </form>
            </div>
            {website}
            <Link to={website}>Hati</Link>
            <p>Clik <Link to="https://www.google.com">here</Link> to access the profile page.</p>
        </div>
    )
}
