const request = require('supertest')
const app = require('../src/app')
const { add, multi } = require('../src/utils/arithmetics')

// Arithmetics functions
describe('When calling add() with 2 and 2', () => {
  test('It should answer 4', async () => {
    const result = add(2, 2)
    expect(result).toBe(4)
  })
})
describe('When calling multi() with 2 and 1', () => {
  test('It should answer 2', async () => {
    const result = multi(2, 1)
    expect(result).toBe(2)
  })
})

// HTTP
describe('Test the root path', () => {
  test('It should answer to the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})
