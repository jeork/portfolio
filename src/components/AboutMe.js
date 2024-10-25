import React from 'react';
import ojImage from '../img/oj.jpg';
import nameImage from '../img/name.png';
import graduateImage from '../img/graduate.png';
import birthImage from '../img/birth.png';
import phoneImage from '../img/phone.png';
import homeImage from '../img/home.png';
import mailImage from '../img/mail.png';

function AboutMe() {
    return (
        <section style={{height: '100vh'}}>
            <div id="about_me" className="main_content">
                <h1 style={{textAlign: "center"}}>about me</h1>
                <div align="center">
                    <div className="t" style={{
                        width: '950px', borderRadius: '40px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', backgroundColor: '#f9f9f9'
                    }}>
                        <div className="t3_1">
                            <img src={ojImage} style={{marginTop: '50px', width: '250px', borderRadius: '150px'}}/>
                        </div>
                        <div className="t3_2" align="center">
                            <div className="info">
                                <img src={nameImage} style={{width: '40px'}}/>
                                <br/>
                                <p className="infoText">오제록</p>
                            </div>
                            <div className="info">
                                <img src={graduateImage} style={{width: '40px'}}/>
                                <br/>
                                <p className="infoText" style={{width: '100px;'}}>서경대학교<br/>(컴퓨터 공학과)</p>
                            </div>

                            <div className="info">
                                <img src={phoneImage} style={{width: '40px'}}/>
                                <br/>
                                <p className="infoText">010.4936.3347</p>
                            </div>


                        </div>

                        <div className="t3_3" align="center">
                            <div className="info">
                                <img src={birthImage} style={{width: '40px'}}/>
                                <br/>
                                <p className="infoText">1998.01.05</p>
                            </div>
                            <div className="info">
                                <img src={homeImage} style={{width: '40px'}}/>
                                <br/>
                                <p className="infoText">경기도<br/> 남양주시</p>
                            </div>

                            <div className="info">
                                <img src={mailImage} style={{width: '40px'}}/>
                                <br/>
                                <p className="infoText">asdasd031@naver.com</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
