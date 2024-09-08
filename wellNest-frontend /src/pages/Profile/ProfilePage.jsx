import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Box, Tabs, Tab, Button, Card } from '@mui/material';
import PostCard from '../../components/Post/PostCard';
import ProfileModal from './ProfileModal'; 

const tabs = [
    { value: "post", name: "Posts" },
    { value: "blog", name: "Blogs" },
    { value: "liked", name: "Liked" },
    { value: "repost", name: "Reposts" }
];

const ProfilePage = () => {
    const { id } = useParams();
    const { auth } = useSelector(store => store);
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('post');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenProfileModal = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card className='p-8 w-full' style={{ backgroundColor: '#fff6cc'}}>
            <div className='rounded-md text-[#78350f]'>
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
                    <Button sx={{ borderRadius: "20px", color:"#78350f", borderColor:"#78350f"}} variant="outlined" onClick={handleOpenProfileModal}>Edit Profile</Button>
                </div>
                <div className='p-5'>
                    <div>
                        <h1 className='py-1 font-bold text-xl'>{auth.user?.firstName + " " + auth.user?.lastName}</h1>
                        <p>@{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lastName.toLowerCase()}</p>
                    </div>
                    <div className='flex gap-2 items-center py-3'>
                        <span>41 posts</span>
                        <span>35 followers</span>
                        <span>5 following</span>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates at...</p>
                    </div>
                </div>
                <section className='mt-4'>
                    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="Profile tabs">
                            {tabs.map((item) => (
                                <Tab key={item.value} value={item.value} label={item.name} />
                            ))}
                        </Tabs>
                    </Box>
                    <div className='flex justify-center'>
                        {value === "post" && (
                            <div className='space-y-5 w-[70%] my-10'>
                                {[1, 1, 1, 1, 1].map((item, index) => (
                                    <div key={index} className='border border-slate-100 rounded-md'>
                                        <PostCard />
                                    </div>
                                ))}
                            </div>
                        )}
                        {value === "repost" && (
                            <div className='space-y-5 w-[70%] my-10'>
                                {[1, 1, 1, 1, 1].map((item, index) => (
                                    <div key={index} className='border border-slate-100 rounded-md'>
                                        <PostCard />
                                    </div>
                                ))}
                            </div>
                        )}
                        {value === "liked" && (
                            <div className='space-y-5 w-[70%] my-10'>
                                {[1, 1, 1].map((item, index) => (
                                    <div key={index} className='border border-slate-100 rounded-md'>
                                        <PostCard />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <ProfileModal open={open} handleClose={handleClose} />
        </Card>
    );
};

export default ProfilePage;
