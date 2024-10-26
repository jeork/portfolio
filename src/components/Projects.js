
import React from 'react';
import pj1Image from '../img/pj1.png';
import './Projects.css'; // CSS 파일 import

function Projects() {
    return (
        <section className="projects-section">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-content">
                <div>
                    <img src={pj1Image} className="project-image" />
                </div>
                <div className="project-details">
                    <p className="project-title">Fit Connect</p>
                    <p className="project-description">운동 정보와 식단추천, <span>주변 헬스장 정보등을 제공하는 </span>웹 페이지</p>
                    <p className="project-description">2024.09~2024.10</p>
                    <ul>
                        <li>운동 가이드 제공</li>
                        <li>운동 루틴저장, 불러오기, 삭제</li>
                        <li>달력에서 운동수행 날짜 기록, 확인</li>
                    </ul>
                    <p className="project-tech-stack">
                        SpringBoot, JavaScript, Thymeleaf, Java, JPA, MySQL
                    </p>
                    <p className="project-notes">
                        JavaScript에 익숙<br />
                        SpringBoot의 구조와 DAO, DTO 등의 개념 공부
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
