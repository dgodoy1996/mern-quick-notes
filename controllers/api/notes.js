const Note = require('../../models/note')

module.exports = {
    index,
    show,
    getNotes,
    create
}

async function index(req, res) {
    const notes = await Note.find({})
    res.json(notes)
}

async function show(req, res) {
    const notes = await Note.findById(req.params.id)
    res.json(notes)    
}

async function getNotes(req, res) {
    const user = req.user._id
    const notes = await Note.find({user})
    res.json(notes)
}

async function create(req, res) {
    req.body.user = req.user
    const notes = await Note.find({})
    res.json(notes)
}