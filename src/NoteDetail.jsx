import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const notesCollection = "https://docent.cmi.hro.nl/bootb/demo/notes/"

export function NoteDetail() {
    const params = useParams()

    const [note, setNote] = useState([])

    const loadNotes = () => {
        fetch(notesCollection + params.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setNote(result))
            .catch(error => console.log("ERROR: " + error))

    }

    useEffect(() => {
        loadNotes()
    }, []);

    return <section>
        <h1>Title: {note && note.title}</h1>
        <h2>By: {note && note.author}</h2>
        <p>Description: {note && note.body}</p>
    </section>


}