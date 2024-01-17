/**
 * @jest-environment jsdom
 *
 **/

const { game } = require("../scripts/game");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Game object contains correct keys", () => {
    test("Score key exits", () => {
        expect("score" in game).toBe(true);
    });
    test("current game key exits", () => {
        expect("currentGame" in game).toBe(true);
    })

})