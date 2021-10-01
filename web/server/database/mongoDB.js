import mongoose from "mongoose"

export default class MongoDB {
  constructor(config) {
    const { dbName, dbUser, dbPassword } = config
    const url = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.qspvm.mongodb.net/${dbName}?retryWrites=true&w=majority`

    this.connect = async () => {
      try {
        await mongoose.connect(url, { useNewUrlParser: true, UseUnifiedTopology: true })
      } catch (err) {
        console.error(err)
      }
    }
  }
}
