import {Dispatch} from "redux";

export const notes: Array<NoteType> = JSON.parse(localStorage.getItem('notes') || '[]')

export type NoteType = {
    id: string
    description: string
    tags: Array<string>
}
let initialState: Array<NoteType> = []

type InitialStateType = typeof initialState

export const notesReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type){
        case "ADD-NOTE":
            return [...state, {...action.newNote}]
        case "GET-NOTES":
            return [...action.notes]
    }
    return state
}

export const addNotes = (newNote: NoteType) => {
    return {type: "ADD-NOTE", newNote} as const
}
export const getAllNotesFromLocalStorage = (notes: Array<NoteType>) => {
    return {type: "GET-NOTES", notes} as const
}

//thunks
export const getAllNotes = () => (dispatch: Dispatch) => {
    if(notes.length > 0) {
        dispatch(getAllNotesFromLocalStorage(notes))
    }
}

export const addNewNotes = (newNote: NoteType) => (dispatch: Dispatch) => {
    localStorage.setItem('notes', JSON.stringify([...notes, newNote]))
    dispatch(addNotes(newNote))
}

export const deleteNote = (idNote: string) => (dispatch: Dispatch) => {
    const notesAfterDelete = notes.filter(a => a.id !== idNote)
    localStorage.setItem('notes', JSON.stringify([...notesAfterDelete]))
    dispatch(getAllNotesFromLocalStorage(notesAfterDelete))
}