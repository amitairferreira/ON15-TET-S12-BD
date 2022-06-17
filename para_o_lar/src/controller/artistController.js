const ArtistModel = require('../models/artistModel')

const createArtist = async (request, response) => {
  const { name, birthDate, nationality, releasedAlbums, prizes, musicalGenre } =
    request.body

  if (!name) {
    return response
      .status(400)
      .json({ message: 'O nome do artista não pode ser vazio' })
  }

  try {
    const newArtist = new ArtistModel({
      nome: name,
      dataDeNascimento: birthDate,
      nacionalidade: nationality,
      albunsLancados: releasedAlbums,
      premios: prizes,
      generoMusical: musicalGenre
    })
    const savedArtist = await newArtist.save()
    response.status(201).json(savedArtist)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

const findAllArtist = async (request, response) => {
  try {
    const allArtists = await ArtistModel.find()
    response.status(200).json(allArtists)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

const findById = async (request, response) => {
  try {
    const findArtist = await ArtistModel.findById(request.params.id)
    response.status(200).json(findArtist)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

const findByName = async (request, response) => {
  const { name } = request.query
  let query = {}

  if (name) query.nome = new RegExp(name, 'i') //query.nome = name

  try {
    const allArtists = await ArtistModel.find(query)
    response.status(200).json(allArtists)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

module.exports = {
  createArtist,
  findAllArtist,
  findById,
  findByName
}
