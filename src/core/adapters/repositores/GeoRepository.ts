import {IGeoRepository} from './interfaces';
import {ITopTracksResponseDto, TrackEntity} from '../../domain';
import {IHttp} from '../infrastructures';
import {IStorage} from '../infrastructures';

export class GeoRepository implements IGeoRepository {
  static METHOD = 'geo.gettoptracks';
  static LIST_TRACK_STORAGE_KEY = 'LIST_TRACK_STORAGE_KEY';

  constructor(
    private readonly http: IHttp,
    private readonly storage: IStorage,
  ) {}

  async getTopTracks(
    country: string,
    limit: number,
  ): Promise<ITopTracksResponseDto> {
    const res = await this.http.request<ITopTracksResponseDto>({
      method: 'GET',
      url: 'https://ws.audioscrobbler.com/2.0/',
      params: {
        method: GeoRepository.METHOD,
        country,
        limit,
        format: 'json',
        api_key: 'c19c47264b0dfd0973d63aa54cb6788c',
      },
    });
    return res.data;
  }

  async saveTracksList(tracks: TrackEntity[]): Promise<void> {
    await this.storage.setItem(
      GeoRepository.LIST_TRACK_STORAGE_KEY,
      JSON.stringify(tracks),
    );
  }

  async getTrackList(): Promise<TrackEntity[]> {
    const res = await this.storage.getItem(
      GeoRepository.LIST_TRACK_STORAGE_KEY,
    );
    if (res) {
      return JSON.parse(res) as TrackEntity[];
    }
    return [];
  }
}
