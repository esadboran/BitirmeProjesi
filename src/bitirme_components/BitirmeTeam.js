import React from 'react';
import { Card } from 'primereact/card';


const BitirmeTeam = () => {
    
    return (
        
        <div className="card">
            <h4>Project Owner</h4>
            <div className="border-round border-1 surface-border p-4">
                <div className="flex mb-3">
                <img src={'assets\\demo\\images\\Esad.jpeg'} alt="Esad Boran" className="mr-2" style={{ borderRadius: '50%', width: '4rem', height: '4rem' }} />
                    <div>
                        <h4>Esad Boran</h4>
                        <p>Computer Engineer</p>
                        <p>Junior Software Engineer</p>
                    </div>
                </div>
                <p>
                I recently graduated from Hacettepe University. I have skills in C# ASP.NET for backend development and a basic understanding of Java Spring for backend. Additionally, I am conducting research and developing projects in Machine Learning and Deep Learning with Python.
                Currently, I am continuing my journey as a full stack developer.
                </p>
                <div className="flex justify-content-between mt-3">
                    <a href="https://github.com/esadboran" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-github mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}></i>
                    </a>
                    <a href="https://linkedin.com/in/esadboran" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-linkedin mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}></i>
                    </a>
                    <a href="mailto:esatsuphi@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-envelope mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}></i>
                    </a>
                </div>
            </div>
            <div className="border-round border-1 surface-border p-4">
                <div className="flex mb-3">
                <img src={'assets\\demo\\images\\Yusuf.jpeg'} alt="Yusuf Koca" className="mr-2" style={{ borderRadius: '50%', width: '4rem', height: '4rem' }} />
                    <div>
                        <h4>Yusuf Koca</h4>
                        <p>Computer Engineer</p>
                        <p>Ai Engineer</p>
                    </div>
                </div>
                <p>Interested in artificial intelligence and philosophy. Curious about the concept of knowledge, learning and consciousness. Is eager to learn new
tools or programming languages. Cares about optimization and efficiency. As a philosophy lover, dreams about a model that can form its own
philosophical ideas and views.</p>
                <div className="flex justify-content-between mt-3">
                
                    <a href="https://github.com/yusufkoca0" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-github mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}></i>
                    </a>
                    <a href="https://linkedin.com/in/yusuf-koca-pi" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-linkedin mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}></i>
                    </a>
                    <a href="mailto:kocayusuf095@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-envelope mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}></i>
                    </a>
                </div>
            </div>
            <div className="border-round border-1 surface-border p-4">
                <div className="flex mb-3">
                    <img src={'assets\\demo\\images\\Peker.jpg'} alt="Mustafa Emir Peker" className="mr-2" style={{ borderRadius: '50%', width: '4rem', height: '4rem' }} />
                    <div>
                        <h5>Mustafa Emir Peker</h5>
                        <p>Computer Engineer</p>
                        <p>Junior Software Engineer</p>
                    </div>
                </div>
                <p>Hi, I am Mustafa Emir. I recently graduated from Hacettepe University. I am interested in web development , blockchain solutions, machine learning applications and computer&network security.
                     I am looking for opportunities that will contribute to my overall software development experience .
                </p>
                <div className="flex justify-content-between mt-3">
                
                    <a href="https://github.com/Peker05" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-github mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}></i>
                    </a>
                    <a href="https://linkedin.com/in/mustafa-emir-peker-a7708a1b5" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-linkedin mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}></i>
                    </a>

                    <a href="mailto:mustafaemirpeker.mep@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-envelope mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}></i>
                    </a>
                </div>
                
                
        </div>
        <h4>Advisor</h4>
        <div className="border-round border-1 surface-border p-4">
        <Card>
            <div className="flex mb-3" style={{ justifyContent: 'center', alignItems: 'center' }}>
                <img src={'assets\\demo\\images\\advisor.jpg'} alt="Dr. Özgür Erkent" className="mr-2 align-items-center" style={{ display: "block", borderRadius: '50%', width: '12rem', height: '12rem' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
                    <h4>Dr. Özgür Erkent</h4>
            </div>
        </Card>
        <div className="flex justify-content-center align-items-center mt-3">
            <a href="https://web.cs.hacettepe.edu.tr/~ozgurerkent/" target="_blank" rel="noopener noreferrer">
                <i className="pi pi-link p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}></i>
            </a>
        </div>
        </div>
    </div>

    );
};

export default BitirmeTeam;
