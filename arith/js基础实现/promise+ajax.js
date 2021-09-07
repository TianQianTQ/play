function ajax(url) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status >=200  && xhr.status <=300 || xhr.status == 304) {
          resolve(xhr.response)
        } else  {
          reject(xhr.response)
        }
      }
    }
  })
}