// Using Matchers
const fn = require("./fn")

/** toBe : 반환값이 숫자일 때 사용.*/
// test("1은 1이야", () => {
//     expect(1).toBe(1);
// })
//
// test("2 더하기 3은 5야", () => {
//     expect(fn.add(2,3)).toBe(5);
// })
//
// test("3더하기 3은 5가 아니야", () => {
//     expect(fn.add(3,5)).not.toBe(5);
// })

/** toEqual : 반환값이 객체일 때 사용. toStickEqual가 더 엄격하게 검사.*/
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//     expect(fn.makeUser("Mike", 30)).toEqual({
//         name:"Mike",
//         age:30
//     })
// })
//
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//     expect(fn.makeUser("Mike", 30)).toStrictEqual({
//         name:"Mike",
//         age:30
//     })
// })

/** toBeNull/toBeUndefined/toBeDefined*/
// test("null은 null이다.", () => {
//     expect(null).toBeNull();
// })

/** toBeTruthy/toBeFalsy : 반환값이 true/false인지 테스트 */
// test("비어있지 않은 문자열은 true 입니다.", ()=> {
//     expect(fn.add("hello","world")).toBeTruthy()
// })

/**
 toBeGreaterThan 크다
 toBeGreaterThanRoEqual 크거나 같다
 toBeLessThan 작다
 toBeLessThanOrEqual 작거나 같다
*/
// test("ID는 10자 이하여야 합니다.", () => {
//     const id="THE_BLACK";
//     expect(id.length).toBeLessThanOrEqual(10);
// })
//
// test("비밀번호 4자리", ()=> {
//     const pw = "1234";
//     expect(pw.length).toBe(4);
// })

/** toBeCloseTo : 반환값이 소수점일 때 */
// 자바스크립트는 소수점을 정확하게 계산하지 못한다. 이진법을 사용하기 때문에 소수점 변환 과정에서 무한소수가 되어버림.
// test("0.1 더하기 0.2는 0.3 입니다", () => {
//     expect(fn.add(0.1,0.2)).toBeCloseTo(0.3);
// })

/** toMatch : 정규표현식으로 문자열 검색 */
// test("Hello world에 a라는 글자가 있나?", () => {
//     expect("Hello world").toMatch(/a/);
// })

/** toContain : 배열 요소 테스트 */
// test("유저리스트에 Young 이 있나?", () => {
//     const user = "Mike";
//     const userList = ["Tom", "Mike", "Kai"];
//     expect(userList).toContain(user);
// })

/** toThrow : 특정에러가 발생하는지 테스트 */
// test("이거 에러 나나요?", () => {
//     expect(() => fn.throwErr().toThrow("xx"));
// })













