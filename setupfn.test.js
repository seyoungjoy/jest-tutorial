const fn = require("./setupfn");
// let num = 0;
/** 테스트 전 작업 */
// beforeEach(()=>{
//     num = 0;
// })
/** 테스트 후 작업 */
// afterEach(()=>{
//     num = 0;
// })

// test("0 더하기 1 은 1이야", () => {
//     num = fn.add(num,1);
//     expect(num).toBe(1);
// })
//
// test("0 더하기 2 은 2이야", () => {
//     num = fn.add(num,2);
//     expect(num).toBe(2);
// })
//
// test("0 더하기 3 은 3이야", () => {
//     num = fn.add(num,3);
//     expect(num).toBe(3);
// })

/** beforeAll/afterAll test 전 후로 한번씩만 설정 */
let user;

beforeAll(async () => {
    user = await fn.connectUserDb();
});
afterAll(()=> {
    return fn.disconnectDb();
})

test("이름이 Mike", () => {
    expect(user.name).toBe("Mike");
})

test("나이이 30", () => {
    expect(user.age).toBe(30);
})

test("성별은 남성", () => {
    expect(user.gender).toBe("male");
})

/** describe 카테고리를 나눌 수 있음.*/

describe("Car 관련 작업", () => {
    let car;

    beforeAll(async () => {
        car = await fn.connectCarDb();
    })
    afterAll(() => {
        return fn.disconnectCarDb()
    })

    test("이름이 Mike", () => {
        expect(car.name).toBe("Mike");
    })

    test("브랜드는 bmw", () => {
        expect(car.brand).toBe("bmw");
    })

    test("색상은 red", () => {
        expect(car.color).toBe("red");
    })

})

/** only : 해당 테스트만 실행 */
/** skip : 해당 테스트 건너뛰고 실행*/