import React, {useState} from "react";
import {BasicModal} from "./BasicModals";
import Typography from "@mui/material/Typography";
import {ModalsButton} from "../../common/components/modalsButton/ModalsButton";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import IconButton from "@mui/material/IconButton";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {useAppDispatch} from "../../store/store";
import {addNewNotes} from "../../store/notesReducer";
import {v1} from "uuid";
import s from "./AddModals.module.scss"

export const AddModals = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
    }
    const [tags, setTags] = useState<Array<string>>([])
    const [note, setNote] = useState<string>('')

    const dispatch = useAppDispatch()

    const handleSave = () => {
        dispatch(addNewNotes({id: v1(), description: note, tags: tags}))
        handleClose()
        setTags([])
        setNote('')
    }

    const onChangeHandler = (e: any) => {
        const value = e.currentTarget.value;
        const newArr = value.split(' ').filter((str: string) => Array.from(str)[0] === '#')
        setTags(newArr)
        setNote(value)
    }

    return (
        <>
            <IconButton onClick={handleOpen}>
                <ControlPointIcon sx={{color: '#0BB7A5', cursor: 'pointer'}} fontSize={'large'}/>
            </IconButton>

            <BasicModal open={open} handleClose={handleClose}>
                <Typography variant="h6" component="h2">
                    ADD NEW NOTE
                </Typography>

                <TextareaAutosize className={s.area} onChange={onChangeHandler}/>

                <div className={s.tags}>
                    {tags.map((t, index) => {
                        return <span style={{color: '#0BB7A5', fontWeight: 'bold'}} key={index}>{t}</span>
                    })}
                </div>

                <Typography sx={{mt: 2}} display={'flex'} justifyContent={'space-between'}>
                    <ModalsButton handleClose={handleClose} handleSave={handleSave}/>
                </Typography>

            </BasicModal>
        </>
    )
}