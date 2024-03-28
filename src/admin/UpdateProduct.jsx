import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '../config'
import { isAuthenticated } from '../auth/authIndex'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const UpdateProduct = () => {
    const params = useParams()
    const { token } = isAuthenticated()
    const id = params.productId
    const [categories, setCategories] = useState([])
    const [initialValues, setInitialValues] = useState({})
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [countInStock, setCountInStock] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productImage, setProductImage] = useState(null)
    const [categoryId, setCategoryId] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        axios.get(`${API}/allcategory`)
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => console.log(err))
        axios.get(`${API}/productdetails/${id}`)
            .then(res => {
                setInitialValues(res.data)
                setProductName(res.data.productName)
                setProductPrice(res.data.productPrice)
                setCountInStock(res.data.countInStock)
                setProductDescription(res.data.productDescription)
                setProductImage(res.data.productImage)
                setCategoryId(res.data.category._id)
            })
            .catch(err => console.log(err))
    }, [])
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('productName', productName)
            formData.append('productPrice', productPrice)
            formData.append('countInStock', countInStock)
            formData.append('productDescription', productDescription)
            formData.append('productImage', productImage)
            formData.append('category', categoryId)

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.put(`${API}/updateproduct/${id}`, formData, config)
            setSuccess(true)
            setError('')
        }
        catch (err) {
            setError(err.response.data.error)
            setSuccess(false)
        }
    }
    // to show error message
    const showError = () => (
        error &&
        <div className="alert alert-danger">
            {error}
        </div>
    )
    // to show success message
    const showSuccess = () => (
        success &&
        <div className="alert alert-success">
            Product Updated Successfully
        </div>
    )
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <form className="shadow p-3">
                            {showError()}
                            {showSuccess()}
                            <h3 className='text-center'>
                                Update Product Form
                            </h3>
                            <div className="mb-2">
                                <label htmlFor="pname">Product Name</label>
                                <input type="text" name="pname" id="pname" className='form-control' onChange={e => setProductName(e.target.value)} value={productName} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="price">Product Price</label>
                                <input type="number" name="price" id="price" className='form-control' onChange={e => setProductPrice(e.target.value)} value={productPrice} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="stock">Product in Stock</label>
                                <input type="number" name="stock" id="stock" className='form-control' onChange={e => setCountInStock(e.target.value)} value={countInStock} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="description">Product Description</label>
                                <textarea name="description" id="description" className='form-control' cols="40" rows="5" onChange={e => setProductDescription(e.target.value)} value={productDescription}></textarea>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="image">Product Image</label>
                                <input type="file" name="image" id="image" className='form-control' onChange={e => setProductImage(e.target.files[0])} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="category">Category</label>
                                <select name="category" id="category" className='form-control' onChange={e => setCategoryId(e.target.value)}>
                                    <option value={categoryId}>{initialValues.category && initialValues.category.category_name}</option>
                                    {categories && categories.map((c, i) => (
                                        <option value={c._id} key={i}>
                                            {c.category_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-2">
                                <button className="btn btn-primary" onClick={handleSubmit}>
                                    Update Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct