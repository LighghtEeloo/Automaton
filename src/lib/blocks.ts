export type BlockT = {
    id: number;
    y: number;
    x: number;
    color: number;
}

export default {
    init(w: number, j: number = 0) {
        let blocks = [];
        for (let i = 0; i <= w; i++) {
            blocks.push({ id: w * j + i, y: j, x: i, color: 0 });
        }
        blocks[w].color = 1;
        // blocks[w / 2].color = 1;
        return blocks;
    },
    iter(last: BlockT[], w: number, j: number) {
        let blocks = [];
        for (let i = 0; i <= w; i++) {
            let a = i == 0 ? 0 : last[i - 1].color;
            let b = last[i].color;
            let c = i == w ? 0 : last[i + 1].color;
            blocks.push({ id: w * j + i, y: j, x: i, color: this.query(`${a}${b}${c}`) });
        }
        return blocks;
    },
    query(q: string) {
        return {
            "111": 0,
            "110": 1,
            "101": 1,
            "100": 0,
            "011": 1,
            "010": 1,
            "001": 1,
            "000": 0
        }[q];
        // return {
        //     "111": 0,
        //     "110": 1,
        //     "101": 1,
        //     "100": 0,
        //     "011": 1,
        //     "010": 1,
        //     "001": 1,
        //     "000": 0
        // }[q];
    }
}