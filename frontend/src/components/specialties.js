import {Link, useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from "react-bootstrap";


const Specialties = () => {


    return(
        <div className="">
            <br/>
            <br/>
            <br/>
            <h2 className="center t-cent">Обучение</h2>
            <br/>
            <Accordion className="cent">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Факултет Навигационен</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                        <li>Корабоводене</li>
                        <li>Логистика</li>
                            <li>Мениджмънт на водния транспорт</li>
                            <li>Корабоплаване</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Факултет Инженерен</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Корабни машини и механизми</li>
                            <li>Информационни и комуникационни технологии</li>
                            <li>Киберсигурност</li>
                            <li>Корабна механика</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Факултет Кибернизация</Accordion.Header>
                    <Accordion.Body>
                        <li>Изкуствен интелект</li>
                        <li>Мега интелект</li>
                        <li>Супер интелект</li>
                        <li>Просто интелект</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Факултет Юридически</Accordion.Header>
                    <Accordion.Body>
                        <li>Физиологична психология</li>
                        <li>Когнитивна психология</li>
                        <li>Експериментална психология</li>
                        <li>Психология на личността</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Факултет Архитектурен</Accordion.Header>
                    <Accordion.Body>
                        <li>Архитектура</li>
                        <li>Архитектура и урбанистика</li>
                        <li>Строителство на сгради и съоръжения</li>
                        <li>Изкуства</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Факултет Данъчни изследвания</Accordion.Header>
                    <Accordion.Body>
                        <li>Данъчен и митнически контрол </li>
                        <li>Рушвети</li>
                        <li>Съдебни криминалистически експертизи</li>
                        <li>Данъчен микроанализ</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Факултет Международна икономика и администрация</Accordion.Header>
                    <Accordion.Body>
                        <li>Бизнес администрация и мениджмънт</li>
                        <li>Публична администрация и мениджмънт</li>
                        <li>Международни икономически отношения</li>
                        <li>Финанси и счетоводство</li>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>



            {/*<Link to='/'>Go back</Link>*/}
        </div>
    )
}


export default Specialties