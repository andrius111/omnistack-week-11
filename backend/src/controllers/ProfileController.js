const connection = require('../database/connection')


module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization

    if (!ong_id) {
      return response.status(401).json({ error: 'Unauthorized.' })
    }

    const incidents = await connection('incidents')
                            .select('*')
                            .where('ong_id', ong_id)

    return response.json(incidents)
  }
}