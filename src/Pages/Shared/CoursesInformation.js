import React from 'react';
import { useParams } from 'react-router-dom';

const CoursesInformation = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>course id{id}</h2>
        </div>
    );
};

export default CoursesInformation;