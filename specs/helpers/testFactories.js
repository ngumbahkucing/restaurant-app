import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteResto from '../../src/scripts/data/favorite-resto';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteResto,
    resto,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
