const router = require('express').Router()
const { Song } = require('../models')

router.get('/song', async function (req, res) {
  const song = await Song.findAll({})
  res.json(song)
})

router.post('/song', async function ({ body }, res) {
  const song = await Song.create(body)
  res.json(song)
})

router.delete('/song/:id', async function ({ params: { id } }, res) {
  await Song.destroy({ where: { id } })
  res.sendStatus(200)
})

module.exports = router