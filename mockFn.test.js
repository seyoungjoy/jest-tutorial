// mock function
// mock.calls에는 호출되었던 값들이 저장되어있다.
// 함수가 총 몇번 호출되었는지, 인수는 무엇인지 확인할 수 있다.
/** mock.calls : 호출되었던 값들의 length와 요소가 담겨있음. */
// const mockFn = jest.fn();
//
// mockFn();
// mockFn(1);
//
// test("함수는 2번 호출욉니다.", () => {
//     expect(mockFn.mock.calls.length).toBe(2);
// })
//
// test("2번째로 호출된 함수에 전달된 첫번째 인수는 1이다.", () => {
//     expect(mockFn.mock.calls[1][0]).toBe(1);
// })

/** mock.results : return되는 value값들이 담겨있음. */
// const mockFn = jest.fn();
//
// function forEachAdd1(arr){
//     return arr.map(num => num+1);;
// }
//
// test("전달된 값은 11,21,31 입니다.", () => {
//     const test1 = forEachAdd1([10,20,30]);
//     console.log(test1);
//     expect(test1).toStrictEqual([11,21,31])
// })

const mockFn = jest.fn(num => num+1);

mockFn(10);
mockFn(20);
mockFn(30);

// test("함수 호출은 3번 됩니다.", () => {
//     console.log(mockFn.mock.results);
//     expect(mockFn.mock.calls.length).toBe(3);
// })
/*
[
    { type: 'return', value: 11 },
    { type: 'return', value: 21 },
    { type: 'return', value: 31 }
]
*/

test("10에서 1증가한 값이 반환", () => {
    expect(mockFn.mock.results[0].value).toBe(11);
})
test("20에서 1증가한 값이 반환", () => {
    expect(mockFn.mock.results[1].value).toBe(21);
})
test("30에서 1증가한 값이 반환", () => {
    expect(mockFn.mock.results[2].value).toBe(31);
})

/** returnValueonce*/