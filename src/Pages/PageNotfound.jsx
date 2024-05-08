import React from 'react';

const PageNotfound = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3 p-2 align-items-center justify-content-center mt-5">
                <div className="card">
                    
                    <div className="card-header bg-white text-center ">
                        <h1>You're looking fot the page is Not found.</h1>
                        <img className='imgBox' src="src/assets/404-not-found.jpg" alt="" />
                    </div>
                    
                </div>
                </div>
                {/* <img className='imgBox' src="src/assets/404-not-found.jpg" alt="" /> */}
            </div>
        </div>
    );
};

export default PageNotfound;