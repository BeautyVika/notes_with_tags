import React, {FC} from "react";
import Button from "@mui/material/Button";

type ModalsButtonType = {
    handleClose: () => void,
    handleSave: () => void,
}

export const ModalsButton: FC<ModalsButtonType> = ({handleClose, handleSave}) => {
    return (
        <>
            <Button variant={'outlined'} color={'success'} sx={{borderColor: '#0BB7A5', color: '#0BB7A5'}} onClick={handleClose}>
                Cancel
            </Button>
            <Button variant={'contained'} color={'success'} sx={{backgroundColor: '#0BB7A5', color: '#fff'}} onClick={handleSave}>
                Save
            </Button>
        </>
    )
}