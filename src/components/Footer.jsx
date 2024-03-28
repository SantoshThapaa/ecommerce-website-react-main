import React from 'react'

const Footer = () => {
    return (
        <>
            <div class="container-fluid bg-dark text-white">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
                            </ul>
                        </div>

                        <div class="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" style={{backgroundRepeat: 'no-repeat', backgroundSize: '20px', backgroundPosition: '97% center'}}/>
                                        <button class="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2023 Company, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-body-emphasis" href="#">
                                <i className='fa-brands fa-facebook fa-beat fs-2 text-primary'></i>
                            </a></li>
                            <li class="ms-3"><a class="link-body-emphasis" href="#">
                                <i className='fa-brands fa-twitter fa-spin fs-2 text-info'></i>
                            </a></li>
                            <li class="ms-3"><a class="link-body-emphasis text-danger" href="#">
                                <i className='fa-brands fa-instagram fa-spin fa-spin-reverse fs-2'></i>
                            </a></li>
                            
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer