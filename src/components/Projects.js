import React from 'react';
import pj1Image from '../img/pj1.png'

function Projects() {
    return (
        <section style={{height: '100vh', background: '#d0d0d0'}}>
            <h2 style={{alignItems: 'center'}}>Projects</h2>
            <div style={{display: 'flex', marginTop: '100px', justifyContent: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={pj1Image} style={{width: '700px', borderRadius: '30px'}}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px'}}>
                    <p style={{fontWeight: 'bold'}}>Fit Connect</p>
                    <p>운동 정보와 식단추천, 주변 헬스장 정보등을 제공하는 웹 프로젝트</p>
                    <p>2024.09~2024.10</p>
                    <li>
                        운동 가이드 제공
                    </li>
                    <li>
                        운동 루틴저장,불러오기,삭제
                    </li>
                    <li>
                        달력에서 운동수행 날짜 기록, 확인
                    </li>
                    <p style={{backgroundColor: '#DE8F5F', padding: '7px', borderRadius: '12px'}}>SpringBoot,JavaScript, thymeleaf,
                        Java, JPA, MySQL </p>
                    <p style={{opacity: 0.5}}>
                        JavaScript에 익숙<br/>
                        SpringBoot의 구조와 DAO,DTO등의 개념 공부
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;

