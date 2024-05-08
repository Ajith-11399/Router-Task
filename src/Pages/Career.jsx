import React from 'react';
import Tabs from '../Components/Tabs';
import Card from '../Components/Card';

const Career = ({dataApi}) => {
    const career = dataApi.filter((element) => element.id === "career")
    return (
        <div>
            <div className="container">
                <Tabs />
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3 p-2">
                    {career.map((element, index) => {
                        return(
                            <Card element={element} index={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Career;