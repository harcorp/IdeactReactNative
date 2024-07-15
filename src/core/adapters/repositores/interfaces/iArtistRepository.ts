import {IArtistInfoResponseDto} from '../../../domain';

export interface IArtistRepository {
  getInfo(artist: string): Promise<IArtistInfoResponseDto>;
}
