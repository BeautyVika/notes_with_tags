import React, {useEffect} from 'react';
import './App.css';
import {MyNotes} from "./components/myNotes/MyNotes";
import Typography from "@mui/material/Typography";
import {AppUseSelector, useAppDispatch} from "./store/store";
import {getAllNotes} from "./store/notesReducer";

function App() {
    const notes = AppUseSelector(state => state.notes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllNotes())
    }, [])

    return (
        <div className='App'>
            <Typography
                sx={{
                    marginTop: '30px',
                    color: '#4d4d4d',
                    fontSize: '2rem',
                    fontWeight: '300',
                    lineHeight: '1.5',
                    textDecoration: 'underline',
                    textDecorationColor: '#0BB7A5'
                }}
                variant="h1"
                component="h1">
                My Notes
            </Typography>

            <MyNotes notes={notes}/>
        </div>
    );
}

export default App;
