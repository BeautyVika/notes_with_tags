import React, {useEffect} from 'react';
import s from './MyNotes.module.scss'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import {AddModals} from "../../components/modals/AddModals";
import {AppUseSelector, useAppDispatch} from "../../store/store";
import {Note} from "./note/Note";
import {getAllNotes} from "../../store/notesReducer";

export const MyNotes = () => {

    const notes = AppUseSelector(state => state.notes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllNotes())
    },[])


    return (
        <div className={s.notes}>

            <Typography className={s.title} variant="h1" component="h1">My Notes</Typography>

            <div className={s.searchContainer}>
                <TextField color={"success"} label="note search" variant="outlined" />

                <IconButton>
                    <SearchIcon sx={{color: '#0BB7A5'}} fontSize={'large'}/>
                </IconButton>

                <AddModals/>
            </div>

            <div className={s.notesContainer}>
            {notes.map((note) => {
                return <Note key={note.id}
                             tags={note.tags}
                             id={note.id}
                             description={note.description}/>
            })}
            </div>

        </div>
    );
};
