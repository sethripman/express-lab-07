const mongoose = require('mongoose');
const Recipe = require('./Recipe');

describe('Recipe model', () => {
  it('has a required name', () => {
    const recipe = new Recipe();
    const { errors } = recipe.validateSync();

    expect(errors.name.message).toEqual('Path `name` is required.');
  });

  it('has a name, directions, and ingredients field', () => {
    const recipe = new Recipe({
      name: 'Cookies',
      directions: [
        'preheat oven to 375',
        'mix ingredients',
        'put dough on cookie sheet',
        'bake for 10 minutes'
      ],
      ingredients: [
        {
          name: 'cookie dough',
          amount: 1,
          measurement: 'cookies-worth'
        },
        {
          name: 'the finest toothpaste',
          amount: 5,
          measurement: 'globs'
        }
      ]
    });

    expect(recipe.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      name: 'Cookies',
      directions: [
        'preheat oven to 375',
        'mix ingredients',
        'put dough on cookie sheet',
        'bake for 10 minutes'
      ],
      ingredients: [
        {
          _id: expect.any(mongoose.Types.ObjectId),
          name: 'cookie dough',
          amount: 1,
          measurement: 'cookies-worth'
        },
        {
          _id: expect.any(mongoose.Types.ObjectId),
          name: 'the finest toothpaste',
          amount: 5,
          measurement: 'globs'
        }
      ]
    });
  });
});
