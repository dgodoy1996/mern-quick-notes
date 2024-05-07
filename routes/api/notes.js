const express = require('express')
const router = express.Router()
const notesCtrl = require('../../controllers/api/notes')

router.get('/', notesCtrl.index)
router.get('/notes/:id', notesCtrl.getNotes)
router.get('/:id', notesCtrl.show)
router.post('/notes/:id', notesCtrl.create)