import React from 'react';
import s from './MyNotes.module.scss'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Typography from "@mui/material/Typography";

export const MyNotes = () => {
    return (
        <div className={s.notesContainer}>
            <Typography className={s.title} variant="h1" component="h1">My Notes</Typography>
            {/*<div className={s.title}>My Notes</div>*/}

            <div className={s.searchContainer}>
                <TextField color={"success"} label="note search" variant="outlined" />

                <IconButton>
                    <SearchIcon sx={{color: '#0BB7A5'}} fontSize={'large'}/>
                </IconButton>

                <IconButton>
                    <ControlPointIcon sx={{color: '#0BB7A5'}} fontSize={'large'}/>
                </IconButton>
            </div>


        </div>
    );
};
