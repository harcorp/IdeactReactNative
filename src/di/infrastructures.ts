import {IInfrastructures} from './interfaces/iInfrastructures.ts';
import {Http, Storage} from '../core';

export const infrastructures = (): IInfrastructures => ({
  http: new Http(),
  storage: new Storage(),
});
