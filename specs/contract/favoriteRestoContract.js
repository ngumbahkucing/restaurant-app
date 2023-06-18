const itActsAsFavoriteRestoModel = (favoriteResto) => {
  // eslint-disable-next-line no-undef
  it('should return the restaurant that has been added', async () => {
    favoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
    favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getResto('rqdv5juczeskfw1e867'))
      .toEqual({ id: 'rqdv5juczeskfw1e867' });
    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getResto('s1knt6za9kkfw1e867'))
      .toEqual({ id: 's1knt6za9kkfw1e867' });
    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getResto(3))
      .toEqual(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteResto.putResto({ aProperty: 'property' });

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllResto())
      .toEqual([]);
  });

  // eslint-disable-next-line no-undef
  it('can return all of the restaurant that have been added', async () => {
    favoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
    favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllResto())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
      ]);
  });

  // eslint-disable-next-line no-undef
  it('should remove favorite restaurant', async () => {
    favoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
    favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });
    favoriteResto.putResto({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteResto.deleteResto('rqdv5juczeskfw1e867');

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllResto())
      .toEqual([
        { id: 's1knt6za9kkfw1e867' },
        { id: 'w9pga3s2tubkfw1e867' },
      ]);
  });

  // eslint-disable-next-line no-undef
  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
    favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });
    favoriteResto.putResto({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteResto.deleteResto(4);

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllResto())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
        { id: 'w9pga3s2tubkfw1e867' },
      ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestoModel };
