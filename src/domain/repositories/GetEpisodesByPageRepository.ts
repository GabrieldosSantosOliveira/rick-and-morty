import { Info } from '../entities/Info';
import { Either } from '@/shared/either';
import { UnexpectedError } from '../use-cases/errors/UnexpectedError';
import { Episode } from '../entities/Episode';

export interface GetEpisodesByPageRepository {
  execute(
    page: number,
  ): Promise<Either<UnexpectedError, GetEpisodesByPageRepositoryResult>>;
}
export interface GetEpisodesByPageRepositoryResult {
  info: Info;
  episodes: Episode[];
}
