import {IArtistUseCases} from './interfaces/iArtistUseCases.ts';
import {IArtistRepository} from '../../adapters';
import {ArtistEntity} from '../entities';

export class ArtistUseCases implements IArtistUseCases {
  constructor(private readonly artistRepository: IArtistRepository) {}

  async getArtistInfo(artistName: string): Promise<ArtistEntity> {
    const res = await this.artistRepository.getInfo(artistName);
    return res.artist;
  }
}
