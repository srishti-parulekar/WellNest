import React from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Tabs, Tab, Button } from '@mui/material';
import PostCard from '../../components/Post/PostCard';

const tabs = [
    { value: "post", name: "Posts" },
    { value: "blog", name: "Blogs" },
    { value: "liked", name: "Liked" },
    { value: "repost", name: "Reposts" }
];


const posts = [1, 1, 1, 1, 1];


const ProfilePage = () => {
    const { id } = useParams(); 
    const [value, setValue] = React.useState('post'); // State for managing active tab


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='p-8 w-full'>
            <div className='rounded-md'>
                
                <div className='h-[15rem]'>
                    <img
                        className='w-full h-full rounded-t-md object-cover'
                        src="https://cdn.pixabay.com/photo/2016/06/24/15/48/pattern-1477380_1280.png"
                        alt="Profile Background"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'fallback-image-url.png'; }}
                    />
                </div>

                
                <div className='px-5 flex justify-between items-center mt-5 h-[5rem]'>
                    <Avatar
                        className="transform -translate-y-24"
                        sx={{ width: "10rem", height: "10rem" }}
                        src="https://marketplace.canva.com/EAFltPVX5QA/1/0/1600w/canva-cute-cartoon-anime-girl-avatar-ZHBl2NicxII.jpg"
                    />
                    <Button sx={{ borderRadius: "20px" }} variant="outlined">Edit Profile</Button>
                </div>

                
                <div className='p-5'>
                    <div>
                        <h1 className='py-1 font-bold text-xl'>Srishti Parulekar</h1>
                        <p>@maybesrishti</p>
                    </div>
                    <div className='flex gap-2 items-center py-3'>
                        <span>41 posts</span>
                        <span>35 followers</span>
                        <span>5 following</span>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
                            voluptates at. Eos, beatae. Et officia autem recusandae, laboriosam
                            repellat, molestias numquam consectetur delectus sequi, aperiam possimus
                            commodi iure suscipit nisi.</p>
                    </div>
                </div>

                
                <section className='mt-4'>
                    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="Profile tabs"
                        >
                            {tabs.map((item) => (
                                <Tab
                                    key={item.value}
                                    value={item.value}
                                    label={item.name}
                                />
                            ))}
                        </Tabs>
                    </Box>

                    
                    <div className='flex justify-center'>
                        {value === "post" && (
                            <div className='space-y-5 w-[70%] my-10'>
                                {posts.map((item, index) => 
                                    <div key={index} className='border border-slate-500'>
                                        
                                        <PostCard />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProfilePage;
