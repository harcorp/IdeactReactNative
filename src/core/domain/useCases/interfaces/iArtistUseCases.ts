import {ArtistEntity} from '../../entities';

export interface IArtistUseCases {
  getArtistInfo(artistName: string): Promise<ArtistEntity>;
}
