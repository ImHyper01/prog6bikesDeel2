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

    // return <section>
    //     <h1>{note && note.title}</h1>
    //     <h2>By: {note && note.author}</h2>
    //     <p>{note && note.body}</p>
    // </section>

    console.log(note)

    return <section>

        <header>
            <h1>Note details</h1>
            <p>{note?.title}</p>
            <p>{note?.body}</p>
            <p>{note?.author}</p>
        </header>
    </section>

}