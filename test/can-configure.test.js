import { describe, it, expect } from "vitest";
import { canReconfigure } from "../src/canReconfigure";

describe('canReconfigure', (from)=>{
  // if (from === undefined) throw new Error('from is required')

  it('should be a fuction', ()=>{
    expect(canReconfigure).toBeTypeOf('function')
  })

  it('should throw if first parameter is not a string', ()=>{
    expect(()=>canReconfigure(1)).toThrow();
  })

  it('should throw if second parameter is not a string', ()=>{
    expect(()=>canReconfigure('1')).toThrow();
  })

  it('should return a boolean', ()=>{
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if string provided have diferents length', ()=>{
    expect(canReconfigure('abc', 'de')).toBe(false);
  })

  it('should return false if string provided have different length even with unique letters', ()=>{
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('should return false if string provided have diferent number of unique letters', ()=> {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if strings has diffeten orden of transformation', ()=>{
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})