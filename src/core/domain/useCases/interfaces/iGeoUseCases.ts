import {TrackEntity} from '../../entities';

export interface IGeoUseCases {
  getTopTracksByCountry(country: string): Promise<TrackEntity[]>;
  saveListenTrack(track: TrackEntity): Promise<void>;
  getListenTracks(): Promise<TrackEntity[]>;
}
