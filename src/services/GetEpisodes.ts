import { IHttpService } from '@/interfaces';
import { EpisodeDto, Info } from '@/models';

export interface ResponseGetAllEpisodes {
  info: Info;
  results: EpisodeDto[];
}

export class GetEpisodes {
  constructor(private readonly httpService: IHttpService) {}
  getAllEpisodes(page: number) {
    return this.httpService.get<ResponseGetAllEpisodes>(
      `https://rickandmortyapi.com/api/episode?page=${page}`,
    );
  }
  getOneEpisode(id: number) {
    return this.httpService.get<EpisodeDto>(
      `https://rickandmortyapi.com/api/episode/${id}`,
    );
  }
}
