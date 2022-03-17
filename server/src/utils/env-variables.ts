import { EnvVariables } from '../types/env-variables.type';

const { parsed } = require('dotenv').config({
  path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});

export const envVariables: EnvVariables = parsed;
