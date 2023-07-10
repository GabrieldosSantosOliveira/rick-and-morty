import { Info } from '../entities/Info';
import { Character } from '../entities/Character';
import { Either } from '@/shared/either';
import { UnexpectedError } from './errors/UnexpectedError';

export interface GetCharactersByPageUseCase {
  execute(
    page: number,
  ): Promise<Either<UnexpectedError, GetCharactersByPageUseCaseResult>>;
}
export interface GetCharactersByPageUseCaseResult {
  info: Info;
  characters: Character[];
}
