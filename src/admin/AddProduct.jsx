import React, { useState, useEffect } from 'react'
import { API } from '../config'
import axios from 'axios'
import { isAuthenticated } from '../auth/authIndex'

const AddProduct = () => {
    const { token } = isAuthenticated()
    const [categories, setCategory] = useState([])
    useEffect(() => {
        axios.get(`${API}/allcategory`)
            .then(res => {
                setCategory(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const [productData, setProductData] = useState({
        productName: '',
        productPrice: '',
        countInStock: '',
        productDescription: '',
        productImage: '',
        category: ''
    })
    const { productName, productPrice, countInStock, productDescription, productImage, category } = productData
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleChange = name => event => {
        setProductData({ ...productData, error: false, [name]: event.target.value })
    }

    const handleImageChange = event => {
        setProductData({ ...productData, productImage: event.target.files[0] })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('productName', productName)
            formData.append('productPrice', productPrice)
            formData.append('countInStock', countInStock)
            formData.append('productDescription', productDescription)
            formData.append('productImage', productImage)
            formData.append('category', category)

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.post(`${API}/postproduct`, formData, config)
            setSuccess(true)
            setError('')
            setProductData({
                productName: '',
                productPrice: '',
                countInStock: '',
                productDescription: '',
                productImage: '',
                category: ''
            })
        }
        catch (err) {
            setError(err.response.error)
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
            Product Added Successfully
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
                                Add Product Form
                            </h3>
                            <div className="mb-2">
                                <label htmlFor="pname">Product Name</label>
                                <input type="text" name="pname" id="pname" className='form-control' onChange={ handleChange('productName')} value={productName} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="price">Product Price</label>
                                <input type="number" name="price" id="price" className='form-control' onChange={handleChange('productPrice')} value={productPrice} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="stock">Product in Stock</label>
                                <input type="number" name="stock" id="stock" className='form-control' onChange={handleChange('countInStock')} value={countInStock} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="description">Product Description</label>
                                <textarea name="description" id="description" className='form-control' cols="40" rows="5" onChange={handleChange('productDescription')} value={productDescription}></textarea>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="image">Product Image</label>
                                <input type="file" name="image" id="image" className='form-control' onChange={handleImageChange} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="category">Category</label>
                                <select name="category" id="category" className='form-control' onChange={handleChange('category')}>
                                    <option>Choose Category</option>
                                    {categories && categories.map((c, i) => (
                                        <option value={c._id} key={i}>
                                            {c.category_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-2">
                                <button className="btn btn-primary" onClick={handleSubmit}>
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct