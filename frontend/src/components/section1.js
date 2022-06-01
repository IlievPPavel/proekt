import PropTypes from 'prop-types'
import {Container} from "react-bootstrap";

const Section1 = () => {
    return(
        <div className="sect t-cent">

                <h4 className="center">AcadNaval</h4>
             <p>Висшето военноморско училище „Н. Й. Вапцаров“ е най-старото техническо учебно заведение в Република България, а неговата история и
                 настоящата му дейност го утвърждават като най-авторитетния център за подготовка.
             </p>
            <p>Традициите в българското морско образование датират от 1881 г., когато се открива Морското училище – първото техническо учебно заведение в България
                за обучение на машинисти и огняри.
            </p>
            <p>От 3.12.1904 г. то е вече Машинно училище при флота – средно техническо училище за обучение на механици за военния и гражданския флот,
                държавните железници, въздухоплаването и др.
            </p>

        </div>
    )
}

// Default Props
// Header.defaultProps = {
//     title: 'Test na header',
// }
//
// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }

// const headingStyle = {
//     color: 'black',
// }


export default Section1