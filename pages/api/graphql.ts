import { schema } from '../../graphql/schema'

export default function handler(req, res) {
  res.status(200).send(schema)
}
