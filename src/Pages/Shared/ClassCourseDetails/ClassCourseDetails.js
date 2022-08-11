import React from 'react';
import { useParams } from 'react-router-dom';

const ClassCourseDetails = () => {
    const { id} = useParams();
    return (
        <div>
            <h1>

            id:{id}
            </h1>
        </div>
    );
};

export default ClassCourseDetails;