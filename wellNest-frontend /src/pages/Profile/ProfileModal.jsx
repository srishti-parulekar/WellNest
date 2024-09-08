import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField'; 
import { updateProfileAction } from '../../redux/Auth/auth.action';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    outline: "none",
    overflowY: "scroll", 
    borderRadius: 3,
};

export default function ProfileModal({ open, handleClose }) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: ""
        },
        onSubmit: (values) => {
            dispatch(updateProfileAction(values));
            handleClose();
        },
    });

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                            <p>Edit Profile</p>
                        </div>
                        <Button type="submit">Save</Button>
                    </div>
                    <div>
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
                </div>
                    </div>
                    <div className='space-y-3'>
                        <TextField
                            fullWidth
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                        />
                    </div>
                </form>
            </Box>
        </Modal>
    );
}
