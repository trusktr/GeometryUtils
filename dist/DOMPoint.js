const x_ = Symbol('x');
const y_ = Symbol('y');
const z_ = Symbol('z');
const w_ = Symbol('w');
export class DOMPointReadOnly {
    [x_] = 0;
    [y_] = 0;
    [z_] = 0;
    [w_] = 1;
    constructor(x = 0, y = 0, z = 0, w = 0) {
        this[x_] = Number(x);
        this[y_] = Number(y);
        this[z_] = Number(z);
        this[w_] = Number(w);
    }
    get x() {
        return this[x_];
    }
    get y() {
        return this[y_];
    }
    get z() {
        return this[z_];
    }
    get w() {
        return this[w_];
    }
    matrixTransform(_matrix) {
        throw new Error('matrixTransform is not implemented yet.');
        // TODO
        // let result = new this.constructor(this)
        //const x
        //const y
        //const z
        //const w
        // return result
    }
    toJSON() {
        return {
            x: this[x_],
            y: this[y_],
            z: this[z_],
            w: this[w_],
        };
    }
    static fromPoint(other) {
        return new this(other.x, other.y, other.z, other.w);
    }
}
export class DOMPoint extends DOMPointReadOnly {
    get x() {
        return this[x_];
    }
    get y() {
        return this[y_];
    }
    get z() {
        return this[z_];
    }
    get w() {
        return this[w_];
    }
    set x(value) {
        this[x_] = Number(value);
    }
    set y(value) {
        this[y_] = Number(value);
    }
    set z(value) {
        this[z_] = Number(value);
    }
    set w(value) {
        this[w_] = Number(value);
    }
}
//# sourceMappingURL=DOMPoint.js.map