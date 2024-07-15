import {ITopTracksResponseDto, TrackEntity} from '../../../domain';

export interface IGeoRepository {
  getTopTracks: (
    country: string,
    limit: number,
  ) => Promise<ITopTracksResponseDto>;
  saveTracksList: (tracks: TrackEntity[]) => Promise<void>;
  getTrackList: () => Promise<TrackEntity[]>;
}
