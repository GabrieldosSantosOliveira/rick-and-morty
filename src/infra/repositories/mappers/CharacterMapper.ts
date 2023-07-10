import {
  Character,
  CharacterGender,
  CharacterStatus,
} from '@/domain/entities/Character';
import { CharacterDto } from './../dtos/CharacterDto';
export class CharacterMapper {
  static toDomain(characterDto: CharacterDto): Character {
    return new Character({
      created: new Date(characterDto.created),
      episodes: characterDto.episode,
      gender: characterDto.gender as CharacterGender,
      id: characterDto.id,
      image: characterDto.image,
      location: characterDto.location,
      name: characterDto.name,
      origin: characterDto.origin,
      species: characterDto.species,
      status: characterDto.status as CharacterStatus,
      type: characterDto.type,
      url: characterDto.url,
    });
  }
}
