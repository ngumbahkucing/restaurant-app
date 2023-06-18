import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteResto from '../src/scripts/data/favorite-resto';

// eslint-disable-next-line no-undef
describe('Favorite Resto Contract Test Implementation', () => {
  // eslint-disable-next-line no-undef
  afterEach(async () => {
    (await FavoriteResto.getAllResto()).forEach(async (resto) => {
      await FavoriteResto.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteResto);
});
