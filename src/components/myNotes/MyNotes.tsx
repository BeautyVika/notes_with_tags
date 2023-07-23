import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from './MyNotes.module.scss'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {AddModals} from "../../components/modals/AddModals";
import {Note} from "./note/Note";
import {NoteType} from "../../store/notesReducer";

type MyNotesType = {
    notes: Array<NoteType>
}

export const MyNotes: FC<MyNotesType> = ({notes}) => {

    const [search, setSearch] = useState<string>('')
    const [allNotes, setAllNotes] = useState<Array<NoteType>>([])

    useEffect(() => {
        setAllNotes(notes);
    }, [notes])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    const onSearchHandler = () => {
        if(search === '') return setAllNotes(notes)

        const searchArr = search.split(' ')
        const filteredNotes = notes.filter(e =>  e.tags.some( r => searchArr.includes(r)))
        setAllNotes(filteredNotes)
    }

    return (
        <div className={s.notes}>

            <div className={s.searchContainer}>
                <TextField color={"success"}
                           className={s.searchField}
                           label="note search"
                           variant="outlined"
                           onChange={handleChange}
                />

                <IconButton onClick={onSearchHandler}>
                    <SearchIcon sx={{color: '#0BB7A5'}} fontSize={'large'}/>
                </IconButton>

                <AddModals/>
            </div>

            <div className={s.notesContainer}>
                {allNotes.map((note) => {
                    return <Note key={note.id}
                                 tags={note.tags}
                                 id={note.id}
                                 description={note.description}/>
                })}
            </div>

        </div>
    );
};
