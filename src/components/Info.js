
import React from 'react';
import notionImage from '../img/notion.jpg';
import githubImage from '../img/github.jpg';

function Info() {
    return (
        <section style={{height: '30vh', background: '#f8f8f8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '20px'}}>
            <h2 style={{marginBottom: '20px'}}>Info</h2>
            <div style={{display: 'flex', gap: '20px'}}>
                <a href="https://github.com/jeork" target="_blank" rel="noopener noreferrer">
                    <img src={githubImage} style={{width: '80px', borderRadius: '50%', transition: 'transform 0.2s'}} alt="GitHub" />
                </a>
                <a href="https://pushy-polonium-714.notion.site/7b7f96460e1346508d15d8cdc370dc6b" target="_blank" rel="noopener noreferrer">
                    <img src={notionImage} style={{width: '80px', borderRadius: '20%', transition: 'transform 0.2s'}} alt="Notion" />
                </a>
            </div>
        </section>
    );
}

export default Info;
