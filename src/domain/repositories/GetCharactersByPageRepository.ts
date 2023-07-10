import { Info } from '../entities/Info';
import { Character } from '../entities/Character';
import { Either } from '@/shared/either';
import { UnexpectedError } from '../use-cases/errors/UnexpectedError';

export interface GetCharactersByPageRepository {
  execute(
    page: number,
  ): Promise<Either<UnexpectedError, GetCharactersByPageRepositoryResult>>;
}
export interface GetCharactersByPageRepositoryResult {
  info: Info;
  characters: Character[];
}
