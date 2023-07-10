import { EpisodeDto } from '../dtos/EpisodeDto';
import { Episode } from '@/domain/entities/Episode';
export class EpisodeMapper {
  static toDomain(episodeDto: EpisodeDto): Episode {
    return new Episode({
      airDate: episodeDto.air_date,
      characters: episodeDto.characters,
      created: new Date(episodeDto.created),
      episode: episodeDto.episode,
      id: episodeDto.id,
      name: episodeDto.name,
      url: episodeDto.url,
    });
  }
}
