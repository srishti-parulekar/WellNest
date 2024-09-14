import React, { useEffect, useState } from 'react';
import SearchUser from '../SearchUser/SearchUser';
import PopularUserCard from '../PopularUserCard/PopularUserCard';
import { Card } from '@mui/material';

const RightPart = () => {
  const [unfollowedUsers, setUnfollowedUsers] = useState([]);
  const currentUserId = 1; // Replace with the actual logged-in user ID
  const followedUserIds = [2, 3]; // Replace with the actual followed user IDs

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
        .then(response => {
            if (!response.ok) {
                console.error(`Error: ${response.status} ${response.statusText}`);
                return response.text(); // Continue to return text for debugging purposes
            }
            return response.json(); // Convert to JSON directly
        })
        .then(jsonData => {
            console.log('Fetched users:', jsonData);
            if (!Array.isArray(jsonData)) {
                console.error('Expected an array of users');
                return;
            }

            // Filter out the current user and users that the current user already follows
            const filteredUsers = jsonData.filter(user => 
                user.id !== currentUserId && !followedUserIds.includes(user.id)
            );

            console.log('Filtered users:', filteredUsers);
            setUnfollowedUsers(filteredUsers);
        })
        .catch(error => console.error('Error fetching users:', error));
}, []);

  return (
    <div className='pr-5'>
      <SearchUser />

      <Card className='p-5 my-8' style={{ backgroundColor: '#fffae0' }}>
        <div className='flex justify-between py-5 items-center'>
          <p className='font-semibold opacity-70 text-[#5a3825]'>Suggestions for you!</p>
          <p className='text-xs font-semibold opacity-95 text-[#5a3825]'>View All</p>
        </div>
        <div className='space-y-1'>
          {unfollowedUsers.length > 0 ? (
            unfollowedUsers.map((user) => (
              <PopularUserCard key={user.id} user={user} />
            ))
          ) : (
            <p>No users to show.</p> // Display message if no users
          )}
        </div>
      </Card>
    </div>
  );
};

export default RightPart;
