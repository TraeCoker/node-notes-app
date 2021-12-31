const fs = require('fs')

const getNotes = () => "Your notes..."

const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0){
        notes.push({
            title,
            body
        })

        saveNotes(notes)
        console.log("New note added!")
    } else {
        console.log("Note title taken!")
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e){
        return []
    }
    
}

module.exports = {
    getNotes,
    addNote
}