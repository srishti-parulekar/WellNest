import React from 'react'

const PopularUserCard = () => {
  return (
    <div>
        <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Srishti Parulekar"
                subheader="maybesrishti"
            />
    </div>
  )
}

export default PopularUserCard