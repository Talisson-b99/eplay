export class Game {
  category: string
  description: string
  title: string
  infos: string[]
  system: string
  image: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    title: string,
    infos: string[],
    system: string,
    image: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.system = system
    this.title = title
    this.infos = infos
  }
}
