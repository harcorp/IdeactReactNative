import {useQuery} from '@tanstack/react-query';
import di from '../di';

export function useGetTopTracksByCountry(country: string) {
  return useQuery({
    queryKey: ['topTracks', country],
    queryFn: () => {
      return di.geoUseCase.getTopTracksByCountry(country);
    },
  });
}
