import {StreamableEntity} from './Streamable.entity.ts';
import {ArtistEntity} from './Artist.entity.ts';
import {ImageEntity} from './Image.entity.ts';

export interface TrackEntity {
  name: string;
  duration: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: StreamableEntity;
  artist: ArtistEntity;
  image: ImageEntity[];
  '@attr': Attr;
}

export interface Attr {
  rank: string;
}
