import {useQuery} from '@tanstack/react-query';
import di from '../di';

export function useGetListenTracks() {
  return useQuery({
    queryKey: ['tracks', 'listen'],
    queryFn: () => {
      return di.geoUseCase.getListenTracks();
    },
  });
}
