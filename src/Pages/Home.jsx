import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 text-center mt-5 align-items-center justify-content-center">
                     <h1>This is a Router Task.  <br />Just by clicking the below button to view the Blogs page and <br /> view the full blogs.</h1>
                     <Link to='/all' className='mt-5' target='_new'><button className='btn btn-primary'>Go to Blogs Section</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;