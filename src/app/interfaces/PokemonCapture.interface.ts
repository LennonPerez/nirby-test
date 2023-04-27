export interface PokemonCaptureBase {
  pokemonId: string;
  pokemonName: string;
  pokemonType: string;
  pokemonImageUrl: string;
  captureTime: Date;
}

export interface PokemonCaptureToSave extends PokemonCaptureBase {
  userId: string;
}
export interface PokemonCapture extends PokemonCaptureToSave {
  id: string;
}
