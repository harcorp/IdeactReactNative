import {IArtistUseCases, IGeoUseCases} from '../../core';

export interface IUseCases {
  geoUseCase: IGeoUseCases;
  artistUseCase: IArtistUseCases;
}
