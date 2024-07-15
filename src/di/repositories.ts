import {IInfrastructures} from './interfaces/iInfrastructures.ts';
import {IRepositories} from './interfaces/iRepositories.ts';
import {ArtistRepository, GeoRepository} from '../core';

export const repositories = (
  infrastructures: IInfrastructures,
): IRepositories => ({
  geoRepository: new GeoRepository(
    infrastructures.http,
    infrastructures.storage,
  ),
  artistRepository: new ArtistRepository(infrastructures.http),
});
