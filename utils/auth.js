import { User } from '../users/user.model'

export const signin = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: 'Email and Password required' })
    }
  
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(401).send({ message: 'not auth' })
    }
    try {
      const match =await user.checkPassword(req.body.password)
      if (!match) {
        return res.status(401).send({ message: 'not auth' })
      }
      return res.status(201).json({ data: user })
    } catch (e) {
      console.error(e)
      return res.status(400).send({ message: 'not auth' })
    }
  }