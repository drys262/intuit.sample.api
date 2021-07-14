/* eslint-disable no-console */
/* eslint-disable no-param-reassign,no-underscore-dangle */

import mongoose, { Document } from 'mongoose';

mongoose.Promise = Promise;

export async function start(uri?: string): Promise<void> {
  await mongoose.connect(`${uri || 'mongodb://localhost/intuit-api'}`, {
    poolSize: parseInt(process.env.MONGODB_POOL_SIZE || '5', 10),
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export async function stop() {
  await mongoose.disconnect();
}

export const toJSON = {
  transform(_doc: {}, ret: Document) {
    ret.id = ret._id.toHexString();

    delete ret._id;
    delete ret.__v;
  },
  virtuals: true,
};
