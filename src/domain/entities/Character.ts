export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';
export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
export interface CharacterProps {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: Origin;
  location: Location;
  image: string;
  episodes: string[];
  url: string;
  created: Date;
}
export class Character {
  constructor(private readonly props: CharacterProps) {}
  public copyWith(props: Partial<CharacterProps>) {
    return new Character({
      ...this.props,
      ...props,
    });
  }
  public get id() {
    return this.props.id;
  }
  public get name() {
    return this.props.name;
  }

  public get status() {
    return this.props.status;
  }
  public get species() {
    return this.props.species;
  }
  public get type() {
    return this.props.type;
  }
  public get gender() {
    return this.props.gender;
  }
  public get origin() {
    return this.props.origin;
  }
  public get location() {
    return this.props.location;
  }
  public get image() {
    return this.props.image;
  }
  public get episodes() {
    return this.props.episodes;
  }
  public get url() {
    return this.props.url;
  }
  public get created() {
    return this.props.created;
  }
}
