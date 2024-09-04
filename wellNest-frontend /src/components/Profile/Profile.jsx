import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const { id } = useParams(); // Correct hook usage
    return (
        <div className='py-10 w-[70%]'>
            <div className='rounded-md'>
                <div className='h-[15rem]'>
                    <img 
                        src="https://cdn.pixabay.com/photo/2016/06/24/15/48/pattern-1477380_1280.png" 
                        alt="Profile Background" 
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
