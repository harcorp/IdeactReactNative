import {IRepositories} from './interfaces/iRepositories.ts';
import {IUseCases} from './interfaces/iUseCases.ts';
import {ArtistUseCases, GeoUseCases} from '../core';

export const appUseCases = (repositories: IRepositories): IUseCases => ({
  geoUseCase: new GeoUseCases(repositories.geoRepository),
  artistUseCase: new ArtistUseCases(repositories.artistRepository),
});
