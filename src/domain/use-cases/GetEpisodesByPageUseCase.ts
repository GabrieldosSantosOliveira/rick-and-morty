import { Info } from '../entities/Info';
import { Either } from '@/shared/either';
import { UnexpectedError } from './errors/UnexpectedError';
import { Episode } from '../entities/Episode';

export interface GetEpisodesByPageUseCase {
  execute(
    page: number,
  ): Promise<Either<UnexpectedError, GetEpisodesByPageUseCaseResult>>;
}
export interface GetEpisodesByPageUseCaseResult {
  info: Info;
  episodes: Episode[];
}
