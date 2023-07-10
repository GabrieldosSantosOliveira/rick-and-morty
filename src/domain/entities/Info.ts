export interface InfoProps {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export class Info {
  constructor(private readonly props: InfoProps) {}
  public get count() {
    return this.props.count;
  }
  public get pages() {
    return this.props.pages;
  }
  public get next() {
    return this.props.next;
  }
  public get prev() {
    return this.props.prev;
  }
}
