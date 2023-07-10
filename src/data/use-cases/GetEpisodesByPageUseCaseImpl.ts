import { UnexpectedError } from '@/domain/use-cases/errors/UnexpectedError';
import { Either, left, right } from '@/shared/either';
import {
  GetEpisodesByPageUseCase,
  GetEpisodesByPageUseCaseResult,
} from '@/domain/use-cases/GetEpisodesByPageUseCase';
import { GetEpisodesByPageRepository } from '@/domain/repositories/GetEpisodesByPageRepository';

export class GetEpisodesByPageUseCaseImpl implements GetEpisodesByPageUseCase {
  constructor(
    private readonly getEpisodesByPageRepository: GetEpisodesByPageRepository,
  ) {}
  async execute(
    page: number,
  ): Promise<Either<UnexpectedError, GetEpisodesByPageUseCaseResult>> {
    const allEpisodesByPage = await this.getEpisodesByPageRepository.execute(
      page,
    );
    return allEpisodesByPage;
  }
}
