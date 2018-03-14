// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {property = 1;};
const createNotEnumerableProperty = () => {

};
const createProtoMagicObject = () => {
    let temp = () => {};
    temp.prototype = temp.__proto__;
    return temp;
};
const incrementor = (() => {
    let counter = 0;
    let ReturnFunc = function Lol() {
        counter++;
        return Lol;
    };
    ReturnFunc.valueOf = () => counter;
    return ReturnFunc;
})();
const asyncIncrementor = () => {};
const createIncrementer = (() => {
    let counter = 0;
    let ResultFunc = function* Lol() {};
    ResultFunc.prototype.next = () => {
        return {
            value: ++counter,
            done: true
        };
    };
    return ResultFunc;
})();

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = (value) => {
    value.sort((x,y) => {
        return y - x;
    });
    return value;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;