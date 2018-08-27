import { Mongo } from 'meteor/mongo';

const Data = new Mongo.Collection('data');
const Id = new Mongo.Collection('id');
export {Data, Id};
