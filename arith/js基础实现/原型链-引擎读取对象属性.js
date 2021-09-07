function getPrototype(obj, protoName) {
    if (obj.hasOwnProperty(protoName)) return obj[protoName];
    if (obj._proto_ === null) return undefined;
    return getPrototype(obj._proto_, protoName);
}