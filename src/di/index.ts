import {infrastructures} from './infrastructures.ts';
import {repositories} from './repositories.ts';
import {appUseCases} from './useCases.ts';
import {IUseCases} from './interfaces/iUseCases.ts';

const cInfrastructures = infrastructures();
const cRepositories = repositories(cInfrastructures);
const cUseCases = appUseCases(cRepositories);

export default {
  geoUseCase: cUseCases.geoUseCase,
  artistUseCase: cUseCases.artistUseCase,
} satisfies IUseCases;
