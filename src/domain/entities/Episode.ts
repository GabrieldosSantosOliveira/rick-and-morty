export interface EpisodeProps {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
export class Episode {
  constructor(private readonly props: EpisodeProps) {}
  public copyWith(props: Partial<EpisodeProps>) {
    return new Episode({
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
  public get airDate() {
    return this.props.airDate;
  }
  public get episode() {
    return this.props.episode;
  }
  public get characters() {
    return this.props.characters;
  }
  public get url() {
    return this.props.url;
  }
  public get created() {
    return this.props.created;
  }
}
