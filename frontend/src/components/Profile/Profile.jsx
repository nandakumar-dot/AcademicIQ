import React, { useState, useEffect } from 'react';
import './Profile.css';
import { motion } from 'framer-motion';
import { profileimgs } from '../../assets/profileimgs/profileimg';

const profiles = [
    { image: profileimgs.image1, name: 'Person 1', description: 'Description 1' },
    { image: profileimgs.image2, name: 'Person 2', description: 'Description 2' },
    { image: profileimgs.image3, name: 'Person 3', description: 'Description 3' },
    { image: profileimgs.image4, name: 'Person 4', description: 'Description 4' },
    { image: profileimgs.image5, name: 'Person 5', description: 'Description 5' },
    { image: profileimgs.image6, name: 'Person 6', description: 'Description 6' },
    { image: profileimgs.image7, name: 'Person 7', description: 'Description 7' },
    { image: profileimgs.image8, name: 'Person 8', description: 'Description 8' },
    { image: profileimgs.image9, name: 'Person 9', description: 'Description 9' }
];

const Profile = () => {
    return (
        <div className="profbg">
            <div className="profile">
                {profiles.map((profile, index) => (
                    <motion.div
                        key={index}
                        className="prof"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={profile.image} alt={profile.name} />
                        <h3>{profile.name}</h3>
                        <p>{profile.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
