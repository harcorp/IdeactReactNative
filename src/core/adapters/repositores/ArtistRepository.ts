import {IArtistRepository} from './interfaces';
import {IHttp} from '../infrastructures';
import {IArtistInfoResponseDto} from '../../domain';

export class ArtistRepository implements IArtistRepository {
  static METHOD = 'artist.getinfo';

  constructor(private readonly http: IHttp) {}

  async getInfo(artist: string): Promise<IArtistInfoResponseDto> {
    const res = await this.http.request<IArtistInfoResponseDto>({
      method: 'GET',
      url: 'https://ws.audioscrobbler.com/2.0/',
      params: {
        method: ArtistRepository.METHOD,
        artist,
        format: 'json',
        api_key: 'c19c47264b0dfd0973d63aa54cb6788c',
      },
    });

    return res.data;
  }
}
