import { Request, Response } from 'express'

export default async (_: Request, res: Response) => {
    return res.redirect('https://github.com/NotGabry/hits')
}
