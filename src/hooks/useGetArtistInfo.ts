import {useQuery} from '@tanstack/react-query';
import di from '../di';

export function useGetArtistInfo(artist: string) {
  return useQuery({
    queryKey: ['artist', artist],
    queryFn: () => {
      return di.artistUseCase.getArtistInfo(artist);
    },
  });
}
