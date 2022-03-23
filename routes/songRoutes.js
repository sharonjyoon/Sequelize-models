const router = require('express').Router()
const { Song } = require('../models')

router.get('/songs', async function (req, res) {
  const songs = await Song.findAll({})
  res.json(song)
})

router.post('/songs', async function ({ body }, res) {
  const song = await Song.create(body)
  res.json(song)
})

router.delete('/songs/:id', async function ({ params: { id } }, res) {
  await Song.destroy({ where: { id } })
  res.sendStatus(200)
})
router.delete('/songs/:id', async function ({ params: { id } }, res) {
  await Song.destroy({ where: { id } })
  res.sendStatus(200)
});

module.exports = router