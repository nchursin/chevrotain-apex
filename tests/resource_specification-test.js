"use strict";
const Parser = require("../src/index");

describe("resourceSpecification", () => {
  it("one resource", () => {
    expect(
      Parser.parse("( A.B a = this )", parser => parser.resourceSpecification())
    ).toEqual({
      type: "RESOURCE_SPECIFICATION",
      resources: {
        type: "RESOURCES",
        resources: [
          {
            type: "RESOURCE",
            modifiers: [],
            typeType: {
              type: "CLASS_OR_INTERFACE_TYPE",
              elements: [
                {
                  type: "CLASS_OR_INTERFACE_TYPE_ELEMENT",
                  name: "A",
                  typeArguments: undefined
                },
                {
                  type: "CLASS_OR_INTERFACE_TYPE_ELEMENT",
                  name: "B",
                  typeArguments: undefined
                }
              ]
            },
            id: {
              type: "VARIABLE_DECLARATOR_ID",
              id: "a",
              cntSquares: 0
            },
            expression: {
              type: "THIS"
            }
          }
        ]
      }
    });
  });

  it("multiple resources", () => {
    expect(
      Parser.parse("( A.B a = this; B.C b = this )", parser =>
        parser.resourceSpecification()
      )
    ).toEqual({
      type: "RESOURCE_SPECIFICATION",
      resources: {
        type: "RESOURCES",
        resources: [
          {
            type: "RESOURCE",
            modifiers: [],
            typeType: {
              type: "CLASS_OR_INTERFACE_TYPE",
              elements: [
                {
                  type: "CLASS_OR_INTERFACE_TYPE_ELEMENT",
                  name: "A",
                  typeArguments: undefined
                },
                {
                  type: "CLASS_OR_INTERFACE_TYPE_ELEMENT",
                  name: "B",
                  typeArguments: undefined
                }
              ]
            },
            id: {
              type: "VARIABLE_DECLARATOR_ID",
              id: "a",
              cntSquares: 0
            },
            expression: {
              type: "THIS"
            }
          },
          {
            type: "RESOURCE",
            modifiers: [],
            typeType: {
              type: "CLASS_OR_INTERFACE_TYPE",
              elements: [
                {
                  type: "CLASS_OR_INTERFACE_TYPE_ELEMENT",
                  name: "B",
                  typeArguments: undefined
                },
                {
                  type: "CLASS_OR_INTERFACE_TYPE_ELEMENT",
                  name: "C",
                  typeArguments: undefined
                }
              ]
            },
            id: {
              type: "VARIABLE_DECLARATOR_ID",
              id: "b",
              cntSquares: 0
            },
            expression: {
              type: "THIS"
            }
          }
        ]
      }
    });
  });

  it("multiple resources with ending semicolon", () => {
    expect(
      Parser.parse("( A.B a = this; B.C b = this; )", parser =>
        parser.resourceSpecification()
      )
    ).toEqual({
      type: "RESOURCE_SPECIFICATION",
      resources: {
        type: "RESOURCES",
        resources: [
          {
            type: "RESOURCE",
            modifiers: [],
            typeType: {
              type: "CLASS_OR_INTERFACE_TYPE",
              elements: [
                {
                  type: "CLASS_OR_INTERFACE_TYPE_ELEMENT",
                  name: "A",
                  typeArguments: undefined
                },
                {
                  type: "CLASS_OR_INTERFACE_TYPE_ELEMENT",
                  name: "B",
                  typeArguments: undefined
                }
              ]
            },
            id: {
              type: "VARIABLE_DECLARATOR_ID",
              id: "a",
              cntSquares: 0
            },
            expression: {
              type: "THIS"
            }
          },
          {
            type: "RESOURCE",
            modifiers: [],
            typeType: {
              type: "CLASS_OR_INTERFACE_TYPE",
              elements: [
                {
                  type: "CLASS_OR_INTERFACE_TYPE_ELEMENT",
                  name: "B",
                  typeArguments: undefined
                },
                {
                  type: "CLASS_OR_INTERFACE_TYPE_ELEMENT",
                  name: "C",
                  typeArguments: undefined
                }
              ]
            },
            id: {
              type: "VARIABLE_DECLARATOR_ID",
              id: "b",
              cntSquares: 0
            },
            expression: {
              type: "THIS"
            }
          }
        ]
      }
    });
  });
});