import React, { useState } from "react";
import { openModal } from "../../../../../layouts/components/modals/ModalPopUp";
import CallAxios from "../../../Library/CallAxios";
import { PropTypes } from 'prop-types';

export function Form(props) {
  const [postData, setPostData] = useState({
    name: "",
    description: "",
    stock: 0,
    price: "",
    is_active: 1,
  });
  // const [setSelectedImg] = useState("");

  const submitForm = (e) =>{
    e.preventDefault();
    // let img = UploadImages(postData.images);
    // console.log(img);
    // return null;
    const param = {
        method: "POST",
        url:"http://localhost:8080/api/products",
        headers:{'Content-Type':'application/json'},
        data:postData
    };
    CallAxios(param).then((response) => {
        if(response.error){
            openModal({header:"Error", message:response.error});
        }else{
            let results = response.data;
            if(results){
                openModal({header:"Info", message:"Successfully submited"});
                // eslint-disable-next-line react/prop-types
                props.GET_ALL_PRODUCT();
            }else{
                openModal({header:"Error", message:"Failed submit"});
            }
        }
    })
  }

  // const UploadImages = (file) =>{
  //   let formData = new FormData();
  //   formData.append('file', file);
  //   const param = {
  //     method: "POST",
  //     url:"http://localhost:8080/api/products/images",
  //     headers:{'Content-Type':'application/json',"Content-type": "multipart/form-data"},
  //     data:formData
  // };
  // CallAxios(param).then((response) => {
  //     if(response.error){
  //         openModal({header:"Error", message:response.error});
  //     }else{
  //         let results = response.data;
  //         if(results){
  //             openModal({header:"Info", message:"Successfully submited"});
  //             props.GET_ALL_PRODUCT();
  //         }else{
  //             openModal({header:"Error", message:"Failed submit"});
  //         }
  //     }
  // })
  // const handlerImages = (e) =>{
  //   if (e.target.files && e.target.files[0]) {
  //     let img = e.target.files[0];
      
  //     //setPostData({...postData, images:formData})
  //     setSelectedImg(img);
  //   }else{
  //     openModal({header:"Infomation", message:"No selected file founded."})
  //   }
    
  // }

  return (
    <div className="card bg-white">
      <div className="card-header border-0 py-3">
        <div className="card-title d-flex flex-column">
          <h3 className="text-dark">Form Product</h3>
          <p className="text-muted fs-7">
            Please fill up the form with correctly
          </p>
        </div>
      </div>
      <div className="card-body pt-0">
        <form method="post" autoComplete="off" id="form-product" onSubmit={(e)=>submitForm(e)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" defaultValue={postData.name} onChange={(e)=>setPostData({...postData, name:e.target.value})} />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea name="desc" className="form-control" defaultValue={postData.description} onChange={(e)=>setPostData({...postData, description:e.target.value})}></textarea>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input type="number" name="name" className="form-control" defaultValue={postData.stock} onChange={(e)=>setPostData({...postData, stock:e.target.value})} />
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="mb-3">
                <label className="form-label">Price</label>
                <div className="input-group">
                  <span className="input-group-text">Rp</span>
                  <input type="text" name="price" className="form-control" defaultValue={postData.price} onChange={(e)=>setPostData({...postData, price:e.target.value})} />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mb-3">
            <label className="form-label">Images</label>
            <input type="file" name="image" className="form-control" defaultValue={postData.images} onChange={(e)=>handlerImages(e)} />
            <img src={(selectedImg) ? URL.createObjectURL(selectedImg) : require("../../../../../assets/media/products/icon-images.png") } className="w-100px h-100px border rounded mt-4" alt="product-img" />
          </div> */}


          <div className="text-end mt-3">
            <button className="btn btn-light" type="button">
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Form.PropTypes = {
  GET_ALL_PRODUCT: PropTypes.any.isRequired
}
