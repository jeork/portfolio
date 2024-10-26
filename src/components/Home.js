import React from 'react';
import './Home.css'

function Home() {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{color: '#333'}}>안녕하세요!</h1>
            <p style={{textAlign: 'center', fontSize: '18px', margin: '20px 0', maxWidth: '700px', lineHeight: '1.5'}}>
                신입 웹 개발자로 Java, JavaScript, Springboot를 주로 사용하고 있습니다.<br/><br/>
                <b>
                    <span>"제자리에 머무는 사람이 아닌</span> 발전하는 사람이 되자"<br/><br/>
                </b>
                <span>라는 가치관으로 매일 성장하려고</span> <span>노력하고 있습니다.</span><br/>
            </p>
            <p style={{color: '#D3D3D3', fontSize: '14px'}}>
                본 포트폴리오는 React를 활용해 직접 만들었습니다.
            </p>
        </section>
    );
}

export default Home;
