import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { API, IMG_URL } from '../config'
import { isAuthenticated } from '../auth/authIndex'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ShowProduct = () => {
    const {token} = isAuthenticated()
    const [products,setProducts]= useState([])
    useEffect(()=>{
        axios.get(`${API}/showproduct`)
        .then(res=>{
            setProducts(res.data)
        })
        .catch(err=>console.log(err))
    },[])
    // delete product
    const deleteProduct = id =>{
        const confirmed = window.confirm('Are you sure you want to delete this product?')
        if(confirmed){
            axios.delete(`${API}/deleteproduct/${id}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res=>{
                toast.success('Product deleted')
                setProducts(products.filter(p=>p._id!=id))
            })
            .catch(err=>{
                toast.error('Failed to delete product')
            })
        }
    }
    return (
        <>
            <ToastContainer theme='colored' position='top-right' />
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.map((item,i)=>(
                                    <tr key={i}>
                                        <td>{item.productName}</td>
                                        <td>{item.productPrice}</td>
                                        <td>{item.countInStock}</td>
                                        <td>{item.productDescription}</td>
                                        <td><img src={`${IMG_URL}/${item.productImage}`} alt={item.productName} width={'100'} /></td>
                                        <td>{item.category.category_name}</td>
                                        <td>
                                            <Link to={`/admin/updateproduct/${item._id}`} className='btn btn-primary mb-3'><FaEdit/></Link>
                                            <button className="btn btn-danger" onClick={()=>deleteProduct(item._id)}>
                                                <FaTrash/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShowProduct