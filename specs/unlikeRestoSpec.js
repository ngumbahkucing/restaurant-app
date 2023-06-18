import FavoriteResto from '../src/scripts/data/favorite-resto';
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
  });

  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await FavoriteResto.deleteResto('rqdv5juczeskfw1e867');
  });

  // eslint-disable-next-line no-undef
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });

  // eslint-disable-next-line no-undef
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });
    await FavoriteResto.deleteResto('rqdv5juczeskfw1e867');
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });
});
