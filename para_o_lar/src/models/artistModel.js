const mongoose = require('mongoose')

const ArtistSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: mongoose.Types.ObjectId
    },
    nome: {
      type: String,
      required: true
    },
    dataDeNascimento: Date,
    nacionalidade: String,
    albunsLancados: Number,
    premios: Boolean,
    generoMusical: [String]
  },
  { timestamps: true }
)

const Model = mongoose.model('artista', ArtistSchema)
module.exports = Model
