'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
const LinkedLilst = require('../index');

describe('Linked List', () => {

  it('testing creating LinkedTest', () => {
    const LL = new LinkedLilst();
    expect(LL).toBeInstanceOf();
    expect(LL.head).toBeNull();
  });


  it('insert to empty LL', () => {
    const LL = new LinkedLilst();
    LL.insert('A');
    expect(LL.head.value).toEqual('A');
    expect(LL.head.next).toBeNull();
  });


  it('test insert to LL if not empty', () => {
    const LL = new LinkedLilst();
    LL.insert('A');
    LL.insert('B');
    expect(LL.head.value).toEqual('B');
    expect(LL.head.next.value).toEqual('A');
    expect(LL.head.next.next).toBeNull();
  });


  it('test if node include value', () => {
    const LL = new LinkedLilst();
    LL.insert('A');
    LL.insert('B');
    LL.includes('A');
    LL.includes('B');
    LL.includes('C');
    expect(LL.includes('A')).toBe(true);
    expect(LL.includes('B')).toBe(true);
    expect(LL.includes('C')).toBe(false);
  });

  it('test of string', () => {
    const link = new LinkedLilst();
    link.insert('C');
    link.insert('B');
    link.insert('A');
    expect(link.toString()).toBe('{A} ->{B} ->{C} ->Null');
  });
});
