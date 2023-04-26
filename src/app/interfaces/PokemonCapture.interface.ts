export interface PokemonCaptureBase {
  userId: string;
  pokemonId: string;
  pokemonName: string;
  pokemonType: string;
  pokemonImageUrl: string;
  captureTime: Date;
}

export interface PokemonCapture extends PokemonCaptureBase {
  id: string;
}
