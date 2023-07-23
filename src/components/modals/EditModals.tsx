import React, {FC, useState} from "react";
import IconButton from "@mui/material/IconButton";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {BasicModal} from "./BasicModals";
import Typography from "@mui/material/Typography";
import {useAppDispatch} from "../../store/store";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import {ModalsButton} from "../../common/components/modalsButton/ModalsButton";
import s from "./AddModals.module.scss"
import {updateNote} from "../../store/notesReducer";

type EditModalsPropsType = {
    noteId: string
    noteDescription: string
    tagsNote: Array<string>
}

export const EditModals: FC<EditModalsPropsType> = ({noteId, noteDescription, tagsNote}) => {

    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState(false)
    const [tags, setTags] = useState<Array<string>>(tagsNote)
    const [note, setNote] = useState<string>(noteDescription)

    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        setEdit(false)
    }
    const onEdit = () => setEdit(true)

    const dispatch = useAppDispatch()

    const onChangeHandler = (e: any) => {
        const value = e.currentTarget.value;
        console.log(value)
        const newArr = value.split(' ').filter((str: string) => Array.from(str)[0] === '#')
        setTags(newArr)
        setNote(value)
    }
    const handleSave = () => {
        dispatch(updateNote(noteId, {description: note, tags}))
        handleClose()
    }

    return (
        <>
            <IconButton onClick={handleOpen}>
                <RemoveRedEyeIcon sx={{color: '#0BB7A5', marginRight: '8px'}}/>
            </IconButton>

            <BasicModal open={open} handleClose={handleClose}>
                <div className={s.titleContainer}>
                    <Typography variant="h5" component="h2">
                        EDIT NOTE
                    </Typography>

                    <IconButton onClick={onEdit}>
                        <BorderColorIcon sx={{color: '#0BB7A5', marginRight: '8px'}}/>
                    </IconButton>
                </div>

                {edit
                    ? <TextareaAutosize value={note}
                                        onChange={onChangeHandler}
                                        className={s.area} />
                    : <p>{noteDescription}</p>}

                <div className={s.tags}>
                    {tags.map((t, index) => {
                        return <span key={index}>{t}</span>
                    })}
                </div>

                <Typography sx={{mt: 2}} display={'flex'} justifyContent={'space-between'}>
                    <ModalsButton handleClose={handleClose} handleSave={handleSave}/>
                </Typography>

            </BasicModal>
        </>
    )
}