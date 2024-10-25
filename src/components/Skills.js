import React from 'react';
import htmlImage from '../img/html5.jpg'
import cssImage from '../img/css3.jpg'
import jsImage from '../img/js.jpg'
import javaImage from '../img/java.png'
import springImage from '../img/spring-boot.png'
import mysqlImage from '../img/sql.jpg'
import thymeleafImage from '../img/thymeleaf.png'
import pythonImage from '../img/python.png'
import jpaImage from '../img/jpa.png'

function Skills() {
    return (
        <section style={{height: '100vh',background: '#e0e0e0'}}>
            <h2>Skills</h2>
            <div id="skills-div" style={{marginRight: '100px'}}>
                <table className="skills-table" style={{marginTop: '100px', borderCollapse:'separate', borderSpacing:'0 50px'}}>
                    <tbody>
                    <tr>
                        <td>
                            <img src={htmlImage}/>
                            <br/>HTML<br/>
                        </td>
                        <td>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '80%'}}></div>
                            </div>
                            <div>80%</div>
                        </td>
                        <td>
                            <img src={cssImage}/>
                            <br/>CSS<br/>
                        </td>
                        <td>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '80%'}}></div>
                            </div>
                            <div>80%</div>
                        </td>
                        <td>
                            <img src={jsImage}/>
                            <br/>JavaScript<br/>
                        </td>
                        <td>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '70%'}}></div>
                            </div>
                            <div>70%</div>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <img src={springImage}/>
                            <br/>Spring Boot<br/>
                        </td>
                        <td>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '60%'}}></div>
                            </div>
                            <div>60%</div>
                        </td>
                        <td>
                            <img src={javaImage}/>
                            <br/>Java<br/>
                        </td>
                        <td>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '70%'}}></div>
                            </div>
                            <div>70%</div>
                        </td>
                        <td>
                            <img src={thymeleafImage}/>
                            <br/>Thymeleaf<br/>
                        </td>
                        <td>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '60%'}}></div>
                            </div>
                            <div>60%</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={mysqlImage}/>
                            <br/>MySQL<br/>
                        </td>
                        <td>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '70%'}}></div>
                            </div>
                            <div>70%</div>
                        </td>
                        <td>
                            <img src={jpaImage}/>
                            <br/>JPA<br/>
                        </td>
                        <td>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '50%'}}></div>
                            </div>
                            <div>50%</div>
                        </td>
                        <td>
                            <img src={pythonImage}/>
                            <br/>Python<br/>
                        </td>
                        <td>
                            <div className="progress-bar">
                                <div className="progress" style={{width: '50%'}}></div>
                            </div>
                            <div>50%</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>

    )
        ;
}

export default Skills;
