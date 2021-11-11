const request = require('supertest')
const server = `http://localhost:${process.env.PORT || 3000}`;


describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 404 status and a text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(404);
      });

      it('response contains message in the body', () => {
        return request(server)
          .get('/')
          .expect('Go home Rebecca, you\'re drunk')
      });
    });
  });


  describe('/handleSubmit', () => {
    // comma separated values e.g. vodka,gin
    let ingredients = 'vodka,gin'
    // refer to the list below for possible value
    let category = 'Cocktail'
    const endpoint = '/handleSubmit'

    // sample request url
    // http://localhost:3000/handleSubmit?ingredients=vodka,gin&category=Ordinary Drink

    // list of categories for reference purposes
    // const categories = ['Ordinary Drink', 'Cocktail', 'Punch / Party Drink', 'Shot', 'Cocktail']

    describe('GET ', () => {
      it('responds with 200 code and json object containing strDrink field that has a value of  from external API when provided with $ingredients and $category in the request query', () => {
        const url = `${endpoint}?ingredients=${ingredients}&category=${category}`
        return request(server)
          .get(url)
          .expect('Content-Type', /application\/json/)
          .expect(200)
          .then(data => {
            const res = JSON.parse(data.text)
            expect(res[0].strDrink).toBe('Army special')
          });
      });

      it('responds with 200 code and json object containing suggestion to pick another category when provided with $ingredients and $category but no drinks were found with provided ingredients in the selected category', () => {
        ingredients = 'mezcal';
        category = 'Ordinary Drink'
        const url = `${endpoint}?ingredients=${ingredients}&category=${category}`

        return request(server)
          .get(url)
          .expect('Content-Type', /application\/json/)
          .expect(200)
          .then(data => {
            const res = JSON.parse(data.text)
            expect(res.suggestion).toBe('Sorry, no drinks with those ingredients fit your mood.\n But if you were feeling Cocktail then we found some recipes for you!')
          });
      });

      it('responds with 200 code and json object containing suggestion to modify user\'s search if no drinks found with provided ingredients', () => {
        ingredients = 'xxx';
        category = 'Shot';
        const url = `${endpoint}?ingredients=${ingredients}&category=${category}`

        return request(server)
          .get(url)
          .expect('Content-Type', /application\/json/)
          .expect(200)
          .then(data => {
            const res = JSON.parse(data.text)
            expect(res.suggestion).toBe('We\'re sorry, no drinks using all of those ingredients were found. Try modifying your search.')
          });
      });
    });


    describe('/placeholderforPopular', () => {
      describe('GET', () => {
        it('responds with 200 code and json object  containing popular drinks', () => {
          return request(server)
            .get('/placeholderforPopular')
            .expect('Content-Type', /application\/json/)
            .expect(200)
            .then(data => {
              const res = JSON.parse(data.text)
              expect(res.drinks[0].strDrink).toBe('Mojito')
              expect(res.drinks[1].strDrink).toBe('Old Fashioned')
            });
        })
      })
    });

    describe('/placeholderforRandom', () => {
      describe('GET', () => {
        it('responds with 200 code and json object  containing random drink', () => {
          return request(server)
            .get('/placeholderforRandom')
            .expect('Content-Type', /application\/json/)
            .expect(200)
            .then(data => {
              const res = JSON.parse(data.text)
              expect(res.drinks[0].strDrink).toBeTruthy()
            });
        })
      })
    });





  });










});

