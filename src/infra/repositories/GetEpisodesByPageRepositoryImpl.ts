import { HttpClient } from '@/data/protocols/HttpClient';
import {
  GetEpisodesByPageRepository,
  GetEpisodesByPageRepositoryResult,
} from '@/domain/repositories/GetEpisodesByPageRepository';
import { InfoDto } from './dtos/InfoDto';
import { Either, left, right } from '@/shared/either';
import { UnexpectedError } from '@/domain/use-cases/errors/UnexpectedError';
import { InfoMapper } from './mappers/InfoMapper';
import { EpisodeDto } from './dtos/EpisodeDto';
import { EpisodeMapper } from './mappers/EpisodeMapper';
import { makeApiUrl } from '@/constants/makeApiUrl';
export interface ResponseGetAllEpisodes {
  info: InfoDto;
  results: EpisodeDto[];
}
export class GetEpisodesByPageRepositoryImpl
  implements GetEpisodesByPageRepository
{
  constructor(private httpClient: HttpClient) {}
  async execute(
    page: number,
  ): Promise<Either<UnexpectedError, GetEpisodesByPageRepositoryResult>> {
    const { data, statusCode } =
      await this.httpClient.get<ResponseGetAllEpisodes>(
        makeApiUrl(`/episode?page=${page}`),
      );
    if (statusCode === 200) {
      return right({
        episodes: data.results.map(EpisodeMapper.toDomain),
        info: InfoMapper.toDomain(data.info),
      });
    }
    return left(new UnexpectedError());
  }
}
