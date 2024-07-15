import {IGeoUseCases} from './interfaces/iGeoUseCases.ts';
import {IGeoRepository} from '../../adapters';
import {TrackEntity} from '../entities';

export class GeoUseCases implements IGeoUseCases {
  constructor(private readonly geoRepository: IGeoRepository) {}

  async getTopTracksByCountry(country: string): Promise<TrackEntity[]> {
    const res = await this.geoRepository.getTopTracks(country, 50);
    return res.tracks.track;
  }

  async saveListenTrack(track: TrackEntity): Promise<void> {
    const trackList = await this.geoRepository.getTrackList();
    const isReproduced = trackList.some(t => t.mbid === track.mbid);
    if (!isReproduced) {
      if (trackList.length === 10) {
        trackList.shift();
      }
      await this.geoRepository.saveTracksList([...trackList, track]);
    }
  }

  async getListenTracks(): Promise<TrackEntity[]> {
    return this.geoRepository.getTrackList();
  }
}
