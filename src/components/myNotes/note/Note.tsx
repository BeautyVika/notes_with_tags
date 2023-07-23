import React, {FC} from 'react';
import Paper from "@mui/material/Paper";
import {EditModals} from "../../modals/EditModals";
import {DeleteModals} from "../../modals/DeleteModals";

type NoteType = {
    description: string
    tags: Array<string>
    id: string
}

export const Note: FC<NoteType> = ({description, tags, id}) => {

    return (
        <Paper elevation={3} sx={
            {
                width: '300px',
                padding: '15px 0',
                textAlign: 'center',
                fontSize: '1.2rem',
                minHeight: '100px'
            }}>
            <p>{description}</p>
            {tags.map(t => <span>{t}</span>)}



            <div>
                <EditModals/>
                <DeleteModals noteId={id} noteDescription={description}/>
            </div>
        </Paper>

    );
};
