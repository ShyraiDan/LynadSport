import mongoose, { Schema } from 'mongoose'

const newsSchema = new Schema(
  {
    title: String,
    imagePath: String
  },
  {
    timestamps: true
  }
)

const News = mongoose.models.News || mongoose.model('News', newsSchema)

export default News

export interface INews {
  _id: string
  title: string
  createdAt: string
  updatedAt: string
  imagePath: string
}
