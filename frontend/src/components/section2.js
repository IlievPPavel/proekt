import PropTypes from 'prop-types'
import {Container} from "react-bootstrap";
import Students from '../images/shokolad.jpg';


const Section2 = () => {
    return(
        <div className="sect2 t-cent">
            <h4 className="center">Обучение</h4>
            <br />
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-6 talign2">

            <p>ВВМУ „Н. Й. Вапцаров“ – Варна, извършва обучение на студенти бакалаври и магистри в редовна и задочна форма, курсанти в редовна форма и докторанти в
                редовна и задочна форма.</p>
            <p>Учебният процес с курсантите и студентите – редовна форма на обучение, е организиран и се провежда всяка година в два семестъра.
                Всеки семестър има продължителност 15 седмици за редовно обучение и 2 или 3 седмици за задочно обучение. Първият семестър на учебната година,
                наречен зимен, започва през септември и завършва през декември или януари. Вторият семестър, наречен летен, започва след зимната отпуска за
                курсантите, която е 14 дни, а за студентите – след зимната ваканция, която е 20 дни.
            </p>
            <p>След всеки семестър се провежда съответната редовна изпитна сесия, която е с различна продължителност,
                в зависимост от броя на изпитите, и e в рамките на 15 – 20 календарни дни.
            </p>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6">
                    <img src={Students} alt='university picture' height="250" width="500"/>
                </div>

                </div>
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


export default Section2