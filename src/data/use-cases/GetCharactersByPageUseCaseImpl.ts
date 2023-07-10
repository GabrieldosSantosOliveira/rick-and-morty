import { UnexpectedError } from '@/domain/use-cases/errors/UnexpectedError';
import { Either } from '@/shared/either';
import {
  GetCharactersByPageUseCase,
  GetCharactersByPageUseCaseResult,
} from '@/domain/use-cases/GetCharactersByPageUseCase';
import { GetCharactersByPageRepository } from '@/domain/repositories/GetCharactersByPageRepository';

export class GetCharactersByPageUseCaseImpl
  implements GetCharactersByPageUseCase
{
  constructor(
    private readonly getCharactersByPageRepository: GetCharactersByPageRepository,
  ) {}
  async execute(
    page: number,
  ): Promise<Either<UnexpectedError, GetCharactersByPageUseCaseResult>> {
    const allCharactersByPage =
      await this.getCharactersByPageRepository.execute(page);
    return allCharactersByPage;
  }
}
