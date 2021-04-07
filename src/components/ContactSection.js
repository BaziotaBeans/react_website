import React, { useState } from 'react'; 
import { Map } from '../utils/Images';
import '../css/ContactSection.css';
import Button from './Button';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'






const ContactSection = () => {
    const [value, setValue] = useState('Your Message');
    let isClickedTextArea = false;
    

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const button_info = {
        color: 'blue',
        text: 'Send'
    };

    return (
        <section class="contact-section m-auto" id="contact">
            <div className="contact-section__text-block">
                <h2>Contact Us</h2>
                <p>Most calendars are designed for teams. Slate is designed for freelancers.</p>
            </div>
            <div className="row">
                <div className="col-left">
                    <form action="">
                        <span>Contact Us</span>
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                        <textarea name="" value={value} onChange={handleChange} />
                        <Button {...button_info}/>
                    </form>
                </div>
                <div className="col-right">
                    <div className="items">
                        <div className="item">
                            <span className="icon">
                                <i class="uil uil-map-marker"></i>
                            </span>
                            <span className="text-info">
                                6386 Spring St undefined Anchorage, 
                                Georgia 12473 United States
                            </span>
                        </div>
                        <div className="item">
                        <span className="icon">
                                <i class='bx bx-mobile'></i>
                            </span>
                            <span className="text-info">
                                (+244) 995-248-236
                            </span>
                        </div>
                        <div className="item">
                        <span className="icon">
                                <i class='bx bx-envelope'></i>
                            </span>
                            <span className="text-info">
                                willie.jennings@example.com
                            </span>
                        </div>
                    </div>

                    <div className="map-container">
                        {/* <img src={Map} alt="map"/> */}
                        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    <div className="social-media">
                        <a href="#"><i class="uil uil-twitter"></i></a>
                        <a href="#"><i class="uil uil-facebook"></i></a>
                        <a href="#"><i class="uil uil-linkedin"></i></a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection;
