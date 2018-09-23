const Parser = require('../src/index')

describe('identifierName', () => {
  it('one element', () => {
    expect(Parser.parse('a', (parser) => parser.identifierName())).toEqual({
      type: 'IDENTIFIER_NAME',
      elements: [
        {
          type: 'IDENTIFIER_NAME_ELEMENT',
          id: {
            type: 'IDENTIFIER',
            value: 'a',
          },
          typeArguments: undefined,
        },
      ],
    })
  })

  it('two elements', () => {
    expect(Parser.parse('a.b', (parser) => parser.identifierName())).toEqual({
      type: 'IDENTIFIER_NAME',
      elements: [
        {
          type: 'IDENTIFIER_NAME_ELEMENT',
          id: {
            type: 'IDENTIFIER',
            value: 'a',
          },
          typeArguments: undefined,
        },
        {
          type: 'IDENTIFIER_NAME_ELEMENT',
          id: {
            type: 'IDENTIFIER',
            value: 'b',
          },
          typeArguments: undefined,
        },
      ],
    })
  })
})
