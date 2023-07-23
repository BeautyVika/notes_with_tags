import React, {FC} from 'react';
import Paper from "@mui/material/Paper";
import {EditModals} from "../../modals/EditModals";
import {DeleteModals} from "../../modals/DeleteModals";
import s from "./Note.module.scss";

type NoteType = {
    description: string
    tags: Array<string>
    id: string
}

export const Note: FC<NoteType> = ({description, tags, id}) => {

    return (
        <Paper elevation={3} sx={style}>
            <p className={s.text}>{description}</p>

            {tags.map((t, index) => <span style={{fontWeight: 'bold'}} key={index}>{t}</span>)}

            <div>
                <EditModals noteId={id} noteDescription={description} tagsNote={tags}/>
                <DeleteModals noteId={id} noteDescription={description}/>
            </div>
        </Paper>

    );
};

const style = {
    width: '300px',
    padding: '15px 0',
    textAlign: 'center',
    fontSize: '1.2rem',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}