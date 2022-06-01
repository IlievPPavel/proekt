import PropTypes from 'prop-types'
import fakemap from '../images/fakemap.JPG';
import Students from "../images/shokolad.jpg";
import Map from "ol/Map"
import View from "ol/View"
import TileLayer from "ol/layer/Tile"
import XYZ from "ol/source/XYZ";
import React from "react";
import {useEffect} from "react";
import {useState, useRef} from "react";
import 'ol/ol.css';
import OSM from 'ol/source/OSM';


const Contacts = ({title}) => {
    // const [map, setMap] = useState();
    // const mapElement = useRef();
    // const mapRef = useRef();
    // mapRef.current = map;
    // useEffect(() => {
    //     // call api or anythingconsole.log("loaded");
    //    const mapp = new Map({
    //         target: mapElement.current,
    //         layers:
    //             [new TileLayer
    //             ({source: new OSM() })],
    //         view: new View({center: [27.9332997, 43.2121267], zoom: 15})
    //     });
    //    setMap(mapp);
    // },[]);

    return (

        <div class='header'>
            <img class='map' src={fakemap} alt='university picture' height="550" width="100%"/>
            {/*43.2121267,27.9332997,18*/}
            {/*    <div style={{height:'100vh',width:'100%'}} ref={mapElement} className="map-container">*/}


            {/*</div>*/}
            <br/>
            <br/>

            <h1 className="t-cent">Контакти</h1>
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-6 talign">

                    <p>Пощенски адрес: <br/>
                        България, гр.Варна 9002, ул. „Васил Друмев“ № 73</p>
                    <p>Телефони</p>
                    <ul>
                        <li>централа: 052 632 015, 052 552 222
                        </li>
                        <li>факс: 052/ 303 163;</li>
                        <li>канцелария на „Учебен отдел“: 052 552 380;</li>
                        <li>канцелария на факултет „Инженерен“ 052 552 379;</li>
                        <li>канцелария на факултет „Навигационен“: 052 552 378;</li>
                    </ul>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6 talign">
                    <p>Банкова сметка на ВВМУ „Н. Й. Вапцаров“:</p>
                    <p>Банка: Банка ДСК</p>
                    <p><strong>IBAN:</strong> BG0000000000000</p>
                    <p><strong>SWIFT/BIC:</strong> 0000000</p>

                </div>

            </div>

        </div>


    )
}

export default Contacts
