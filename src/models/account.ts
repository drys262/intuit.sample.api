import mongoose, { Document, Schema } from 'mongoose';
import { ID } from '../types';
import { toJSON } from '../library/mongoose';

export type AccountAttributes = {
  Name: string;
  SubAccount: boolean;
  FullyQualifiedName: string;
  Active: boolean;
  Classification: string;
  AccountType: string;
  AccountSubType: string;
  CurrentBalance: number;
  CurrentBalanceWithSubAccounts: number;
  CurrencyRef: { value: string; name: string };
  domain: string;
  sparse: boolean;
  SyncToken: string;
  MetaData: {
    CreateTime: string;
    LastUpdatedTime: string;
  };
};

export type AccountDocument = Document & {
  Id: ID;
} & AccountAttributes;

const schema = new Schema(
  {
    _id: String,
    Id: String,
    Name: String,
    SubAccount: Boolean,
    FullyQualifiedName: String,
    Active: Boolean,
    Classification: String,
    AccountType: String,
    AccountSubType: String,
    CurrentBalance: Number,
    CurrentBalanceWithSubAccounts: Number,
    CurrencyRef: {},
    domain: String,
    sparse: Boolean,
    SyncToken: String,
    MetaData: {},
  },
  { toJSON, _id: false },
);

export default mongoose.model<AccountDocument>('Account', schema);
