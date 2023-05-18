import React from "react";

export default function Barra(props){
    return (
        <div>
        <nav  className={"navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button"} style={{background: 'rgb(34, 34, 34)',borderRadius: '20',borderTopLeftRadius: '20',borderTopRightRadius: '20',borderBottomRightRadius: '20',borderBottomLeftRadius: '20',borderStyle: 'none',paddingTop: '0', paddingBottom: '5px'}}>
        <div className="container"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div><a className="navbar-brand" href="/"><span style={{textShadow: '0px 0px 8px'}}>Rick and Morty </span> </a></div>
            <div className="collapse navbar-collapse" id="navcol-1" style={{color: 'rgb(255,255,255)'}}>
                <ul className="navbar-nav nav-right">
                    <li className="nav-item"><a className="nav-link active" href="index.html" style={{color: 'rgba(224,217,217,0.9)',textShadow: '0px 0px 12px'}}>home </a></li>
                    <li className="nav-item"><a className="nav-link" href="faq.html" style={{color: 'rgba(224,217,217,0.9)',textShadow: '0px 0px 12px'}}>faq </a></li>
                    <li className="nav-item"><a className="nav-link" href="contact.html" style={{color: 'rgba(224,217,217,0.9)',textShadow: '0px 0px 12px'}}>contact </a></li>
                </ul>
                <p className="ms-auto navbar-text actions"><a className="login" href="login.html" style={{color: 'rgba(224,217,217,0.9)'}}>Log In</a> <a className="btn btn-light action-button" role="button" href="signup.html" style={{color: 'rgba(0,0,0,0.9)',background: 'var(--bs-gray-200)',borderRadius: '10px',borderStyle: 'solid',borderColor: 'rgba(0,0,0,0.9)',fontSize: '16px',padding: '5px 8px'}}>Sign Up</a></p>
            </div>
        </div>
        </nav>
        </div>
    )
}