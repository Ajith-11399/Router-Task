import React from 'react';
import Tabs from '../Components/Tabs';
import Card from '../Components/Card';

const DataScience = ({dataApi}) => {
    const ds = dataApi.filter((ele) => ele.id === "ds")
    return (
        <div>
            <div className="container">
                <Tabs />
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3 p-2">
                    {ds.map((element, index) => {
                        return(
                            <Card element={element} index={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default DataScience;