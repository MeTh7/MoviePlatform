export interface Criteria {
  favorites: number[];
  favoritesOnly: boolean;
  searchTitle: string;
  orderBy: 'alphabet' | 'popularity' | 'critics';
  genre?: number;
}
