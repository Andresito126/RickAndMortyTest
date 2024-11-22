export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    location: {
      name: string;
    };
    origin: {
      name: string;
    };
    episode: string[];      
}
