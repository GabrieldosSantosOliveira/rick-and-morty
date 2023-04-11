import { IHttpService } from '@/interfaces';
import { Info, CharacterDto } from '@/models';
export interface ResponseGetAllCharacters {
  info: Info;
  results: CharacterDto[];
}

export class GetCharacters {
  constructor(private httpService: IHttpService) {}
  getAllCharacters(page: number) {
    return this.httpService.get<ResponseGetAllCharacters>(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    );
  }
  getOneCharacter(id: number) {
    return this.httpService.get<CharacterDto>(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
  }
}
