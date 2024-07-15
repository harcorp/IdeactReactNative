import {useMutation, useQueryClient} from '@tanstack/react-query';
import di from '../di';
import {TrackEntity} from '../core';

export function useSaveListenTrack() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['tracks', 'save'],
    mutationFn: (track: TrackEntity) => {
      return di.geoUseCase.saveListenTrack(track);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['tracks', 'listen'],
      });
    },
  });
}
