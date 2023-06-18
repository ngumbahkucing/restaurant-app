const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Like Resto');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#resto');
  I.see('Tidak ada resto untuk ditampilkan', '.resto_not_found');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto_not_found');
  I.amOnPage('/');
  I.seeElement('#restaurant-item');
  // pause();
  // eslint-disable-next-line no-undef
  const firstFilm = locate('.link-detail').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant-item');
  const likedFilmTitle = await I.grabTextFrom('.link-detail');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

// eslint-disable-next-line no-undef
Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto_not_found');
  I.amOnPage('/');
  I.seeElement('#restaurant-item');
  // pause();
  // eslint-disable-next-line no-undef
  const firstFilm = locate('.link-detail').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant-item');
  const likedFilmTitle = await I.grabTextFrom('.link-detail');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
  I.click(firstFilm);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Tidak ada resto untuk ditampilkan', '.resto_not_found');
});
