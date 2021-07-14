import { Request, Response } from 'express';
import AccountModel from '../../models/account';
import request from '../../library/request';

export default async function (_req: Request, res: Response) {
  try {
    const response = await request.get(
      'v3/company/4620816365171545090/query?query=select * from Account&minorversion=59',
    );

    const {
      data: {
        QueryResponse: { Account },
      },
    } = response;

    await AccountModel.create(
      Account.map((acc: any) => ({ ...acc, _id: acc.id })),
    );

    res.send(Account);
  } catch (error) {
    res.status(500);
  }
}
