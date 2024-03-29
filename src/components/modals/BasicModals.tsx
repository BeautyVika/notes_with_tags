import React, {FC, ReactNode} from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}
type BasicModalsPropsType ={
    children : ReactNode
    handleClose: () => void
    open: boolean
}

export const BasicModal: FC<BasicModalsPropsType> = ({children,open,handleClose}) => {

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>{children}</Box></Modal>

    )
}
