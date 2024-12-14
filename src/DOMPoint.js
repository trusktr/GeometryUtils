import { _ } from './utilities'

export
class DOMPointReadOnly {
    constructor(x,y,z,w) {
        _(this).x = (x !== undefined) ? Number(x) : 0
        _(this).y = (y !== undefined) ? Number(y) : 0
        _(this).z = (z !== undefined) ? Number(z) : 0
        _(this).w = (w !== undefined) ? Number(w) : 1
    }

    get x() { return _(this).x }
    get y() { return _(this).y }
    get z() { return _(this).z }
    get w() { return _(this).w }

    matrixTransform(matrix) {
        let result = new this.constructor(this)
        // TODO
        //const x
        //const y
        //const z
        //const w

        return result
    }

    toJSON() { return Object.assign({}, _(this)) }

    static fromPoint(other) {
        return new this(other.x, other.y, other.z, other.w)
    }
}

export
class DOMPoint extends DOMPointReadOnly {
    get x() { return super.x }
    get y() { return super.y }
    get z() { return super.z }
    get w() { return super.w }

    set x(value) { _(this).x = Number(value) }
    set y(value) { _(this).y = Number(value) }
    set z(value) { _(this).z = Number(value) }
    set w(value) { _(this).w = Number(value) }
}

export default DOMPoint
