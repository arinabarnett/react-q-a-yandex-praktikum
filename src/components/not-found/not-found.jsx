import React from 'react'

/*

В компоненте NotFound отстутствует валидация пропса data, который в принципе не используется внутри компонента 
*/
const NotFound = ({ data }) => {
  return (
    <React.Fragment>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
    </React.Fragment>
  )
}

export default NotFound
