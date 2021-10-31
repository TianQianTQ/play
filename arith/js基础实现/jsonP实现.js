const jsonp = ({ url, params, callbackName }) => {
    const generateUrl = () => {
        let dataSrc = ''
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                dataSrc += `${key}=${params[key]}&`
            }
        }
        dataSrc += `callback=${callbackName}`
        return `${url}?${dataSrc}`
    }
    return new Promise((resolve, reject) => {
        const scriptEle = document.createElement('script')
        scriptEle.src = generateUrl()
        document.body.appendChild(scriptEle)
        window[callbackName] = data => {
            resolve(data)
            document.removeChild(scriptEle)
        }
    })
}

// reduce实现

Array.prototype.reduce = function(callbackFn, initVal) {
    let arr = Object(this),
        len = arr.length,
        k = 0, acc;
    if (initVal) {
        acc = initVal
    } else {
        if (len === 0) {
            throw new TypeError('xxx');
        }
        
    }

}
