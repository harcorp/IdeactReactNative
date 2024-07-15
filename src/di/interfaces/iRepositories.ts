import {IArtistRepository, IGeoRepository} from '../../core';

export interface IRepositories {
  geoRepository: IGeoRepository;
  artistRepository: IArtistRepository;
}
