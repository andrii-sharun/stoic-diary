
const startServer = async (app, port, db) => {
  try {
    await db.connect()
    app.listen(port, () =>
      console.log(`Server listen on port ${port} and ready for request!`)
    )
  } catch (e) {
    console.error(e)
  }
}

export default startServer