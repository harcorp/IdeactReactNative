import {TrackEntity} from '../entities';

export interface ITopTracksResponseDto {
  tracks: {
    track: TrackEntity[];
  };
}
