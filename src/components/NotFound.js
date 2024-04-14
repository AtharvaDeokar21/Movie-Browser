import React from 'react';
import Hero from './Hero';

const NotFound = () => {
    return (
        <>
            <Hero text="404 - Page Not Found" />
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <p className="lead">
                            Oops! The page you're looking for does not exist.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound;
