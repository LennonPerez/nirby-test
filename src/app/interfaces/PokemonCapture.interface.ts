export interface PokemonCaptureBase {
  pokemonId: string;
  pokemonName: string;
  pokemonImageUrl: string;
  captureTime: Date;
  pokemonTypes: Array<{
    name: string;
    url: string;
  }>;
}

export interface PokemonCaptureToSave extends PokemonCaptureBase {
  userId: string;
}
export interface PokemonCapture extends PokemonCaptureToSave {
  id: string;
}
export interface PokemonCaptureToShow
  extends Omit<PokemonCapture, 'captureTime'> {
  captureTime: string;
}
