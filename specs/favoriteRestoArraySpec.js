import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return, eqeqeq
    return favoriteRestos.find((resto) => resto.id == id);
  },

  getAllResto() {
    return favoriteRestos;
  },

  putResto(resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestos.push(resto);
  },

  deleteResto(id) {
    // eslint-disable-next-line eqeqeq
    favoriteRestos = favoriteRestos.filter((resto) => resto.id != id);
  },
};

// eslint-disable-next-line no-undef
describe('Favorite Resto Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-undef, no-return-assign
  afterEach(() => favoriteRestos = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
