import {hello} from "./hello"

describe('webhooks', () => {
    it('returns true', () => {
        expect(true).toEqual(true)
    })
})

describe('hello', ()=>{
    it('returns "Hello World', ()=>{
        expect(hello()).toBe("Hello World")
    })
})