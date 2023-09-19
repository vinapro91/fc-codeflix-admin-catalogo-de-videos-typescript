import { ValueObject } from "../value-object";




class StringValueObject extends ValueObject{
  constructor(readonly value: string) {
    super();
  }
}

describe("ValueObject", () => {

    test("should be equal", () => {
        const value = "test";
        const valueObject = new StringValueObject(value);
        const valueObject2 = new StringValueObject(value);
        expect(valueObject.equals(valueObject2 as any)).toBeTruthy();
        }
    );

    test("should not be equal", () => {
        const value = "test";
        const valueObject = new StringValueObject(value);
        const valueObject2 = new StringValueObject(value + "1");
        expect(valueObject.equals(valueObject2 as any)).toBeFalsy();
        }
    );
        
});