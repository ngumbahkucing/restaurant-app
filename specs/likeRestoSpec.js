import FavoriteResto from '../src/scripts/data/favorite-resto';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {

    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();

  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {

    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteResto.getResto('rqdv5juczeskfw1e867');
    expect(resto).toEqual({ id: 'rqdv5juczeskfw1e867' });

    FavoriteResto.deleteResto('rqdv5juczeskfw1e867');
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });
    await FavoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllResto()).toEqual([{ id: 'rqdv5juczeskfw1e867' }]);
    FavoriteResto.deleteResto('rqdv5juczeskfw1e867');
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({  });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });
});


