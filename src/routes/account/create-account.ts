import { Request, Response } from 'express';
import request from '../../library/request';

export default async function (req: Request, res: Response) {
  try {
    const missingFields = [];

    if (req.body && !req.body.Name) {
      missingFields.push('Name');
    }

    if (req.body && !req.body.AccountType) {
      missingFields.push('AccountType');
    }

    if (missingFields.length > 0) {
      res
        .status(500)
        .send({ message: `Missing fields: ${missingFields.join(',')}` });
    }

    const { Name, AccountType } = req.body;

    const response = await request.post(
      'v3/company/4620816365171545090/account?minorversion=59',
      { Name, AccountType },
    );

    res.send(response.data.Account);
  } catch (error) {
    res.status(500);
  }
}
