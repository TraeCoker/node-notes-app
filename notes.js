const fs = require('fs')

const getNotes = () => "Your notes..."

const addNote = (title, body) =>{
    const notes = loadNotes()
    notes.push({
        title,
        body
    })

    saveNotes(notes)
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