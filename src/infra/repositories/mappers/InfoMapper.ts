import { Info } from '@/domain/entities/Info';
import { InfoDto } from './../dtos/InfoDto';
export class InfoMapper {
  static toDomain(infoDto: InfoDto): Info {
    return new Info(infoDto);
  }
}
