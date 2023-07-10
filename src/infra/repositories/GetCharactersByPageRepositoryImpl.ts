import { HttpClient } from '@/data/protocols/HttpClient';
import {
  GetCharactersByPageRepository,
  GetCharactersByPageRepositoryResult,
} from '@/domain/repositories/GetCharactersByPageRepository';
import { CharacterDto } from './dtos/CharacterDto';
import { InfoDto } from './dtos/InfoDto';
import { Either, left, right } from '@/shared/either';
import { UnexpectedError } from '@/domain/use-cases/errors/UnexpectedError';
import { CharacterMapper } from './mappers/CharacterMapper';
import { InfoMapper } from './mappers/InfoMapper';
import { makeApiUrl } from '@/constants/makeApiUrl';
export interface ResponseGetAllCharacters {
  info: InfoDto;
  results: CharacterDto[];
}
export class GetCharactersByPageRepositoryImpl
  implements GetCharactersByPageRepository
{
  constructor(private httpClient: HttpClient) {}
  async execute(
    page: number,
  ): Promise<Either<UnexpectedError, GetCharactersByPageRepositoryResult>> {
    const { data, statusCode } =
      await this.httpClient.get<ResponseGetAllCharacters>(
        makeApiUrl(`/character?page=${page}`),
      );
    if (statusCode === 200) {
      return right({
        characters: data.results.map(CharacterMapper.toDomain),
        info: InfoMapper.toDomain(data.info),
      });
    }
    return left(new UnexpectedError());
  }
}
