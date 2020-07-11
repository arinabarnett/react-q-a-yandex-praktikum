import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ user }) => {
  return (
    /*

    Использовать <></>, упрощенный вариант <React.Fragment>
    */
    <React.Fragment>
      <h2>Профиль</h2>
      <p>Вас зовут: {user.name}</p>
    </React.Fragment>
  )
}

/* 

При написании Profile.proptypes, пропсы некорректно валидируются, т.к необходимо использовать propTypes 
(propTypes через camelCase) для того, чтобы пропсы компонента Profile корректно валидировались

https://medium.com/deepscan/a-few-things-every-new-react-developer-should-know-part-1-93940e11800a

*/
Profile.proptypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Profile
