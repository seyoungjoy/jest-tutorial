const fn = require("./asnycFn");

/** 콜백함수 인자로 done을 넣어서 실행하면 done이 실행될때까지 기다렸다가 테스트를 실행.*/
// test("3초 후에 받아온 이름은 Mike", (done) => {
//     function callback(name){
//         try{
//             expect(name).toBe("Mike")
//             done();
//         } catch(error){
//             done();
//         }
//     }
//     fn.getName(callback);
// })

/** Promise 테스트 : return 필수*/
// test("3초 후에 반아온 나이는 30", () => {
//     return fn.getAge().then(age => {
//         expect(age).toBe(31);
//     })
// })

/** resolves, rejects */
// test("3초 후에 반아온 나이는 30", () => {
//     return expect(fn.getAge()).resolves.toBe(30);
// })

/** async */
test("3초 후에 반아온 나이는 30", async() => {
    const age = await fn.getAge();
    expect(age).toBe(30);
})

test("3초 후에 반아온 나이는 30", async () => {
    await expect(fn.getAge()).resolves.toBe(30);
})