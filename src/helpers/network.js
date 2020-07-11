export const getData = (endPoint, API_ROOT) => {
  return fetch(`${API_ROOT}/${endPoint}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        /* 

        Можно лучше - return Promise.reject(new Error(`Error: ${res.status}`));
        */
        Promise.reject('Error')
      }
    })
    .then(json => json)
    /*
    Можно лучше - .catch(err => alert(`Error: ${err}`))
    */
    .catch(err => alert('getData error '))
}
