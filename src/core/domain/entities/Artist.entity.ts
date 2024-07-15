import {ImageEntity} from './Image.entity.ts';
import {StatsEntity} from './Stats.entity.ts';
import {TagEntity} from './Tag.entity.ts';
import {BioEntity} from './Bio.entity.ts';

export interface ArtistEntity {
  name: string;
  mbid: string;
  url: string;
  image?: ImageEntity[];
  streamable?: string;
  ontour?: string;
  stats?: StatsEntity;
  tags?: Tags;
  bio?: BioEntity;
}

export interface Tags {
  tag: TagEntity[];
}
