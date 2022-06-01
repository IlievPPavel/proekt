import PropTypes from 'prop-types'
import Unipic from '../images/unipic.jpg';




const Header = ({ title }) => {
    return(
        <header class='header'>
        <img src={Unipic} alt='university picture' height="550" width="100%"/>
        {/*<h1>{title}</h1>*/}
        {/*    <p>nqkakuv tekst</p>*/}
        </header>
    )
}

// Default Props
 Header.defaultProps = {
   title: 'Test na header',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'black',
// }


export default Header