import React, { useContext, useRef, useState } from "react";


function Step1() {
    const [errors, setErrors] = useState({name: false, img:false, desc:false });
    return (
        <main className="mt-3 mx-4 full-width">
            <div className="row ">
                <div className="col-md-3 p-3">
                    <div className="form-group"><label htmlFor="name">Cloud Component Name</label></div>
                </div>
                <div className="col-md-8 p-3">
                    <div className="form-group"><input type="text" className="form-control" id="name" name="name" defaultValue /></div>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-3 p-3">
                    <div className="form-group"><label htmlFor="inputId3">Choose Image</label></div>
                </div>
                <div className="col-md-8 p-3">
                    <div className="form-group"><input type="file" className="form-control" id="inputId3" name="img" /></div>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-3 p-3">
                    <div className="form-group"><label htmlFor="inputId2">Description</label></div>
                </div>
                <div className="col-md-8 p-3">
                    <div className="form-group"><textarea className="form-control" id="inputId2" rows={3} name="desc" defaultValue={""} /></div>
                </div>
            </div>
        </main>
    )
}

export default Step1


