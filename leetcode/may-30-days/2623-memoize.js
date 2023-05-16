/**
 * @param {Function} fn
 */
 function memoize(fn) {
    let cache = {};
    return function(...args) {
        let key = [...args].toString();
        if (!cache.hasOwnProperty(key)) {
            cache[key] = fn(...args);
        }
        return cache[key];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */