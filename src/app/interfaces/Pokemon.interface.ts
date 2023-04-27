export default interface PokemonData {
  id: string;
  number: string;
  name: string;
  image: string;
  fetchedAt: string;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
}

export type PokemonsInfo = {
  count: number;
};
