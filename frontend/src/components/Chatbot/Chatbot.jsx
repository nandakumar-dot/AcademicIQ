import React, { useContext, useEffect, useState } from 'react';
import './Chatbot.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
import DropDownProfile from '../DropDownProfile/DropDownProfile.jsx';

const Chatbot = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    const handleCardClick = async (type) => {
        if (type === "profile") {
            await setInput("what is react?");
            await onSent();
        }
    };

    const [extended, setExtended] = useState(true);
    const [openProfile, setOpenProfile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <div className={`main ${extended ? '' : 'collapsed'}${isOpen ? ' open' : ''}`}>
            <div className="nav">
                <p onClick={() => setExtended(prev => !prev)}>Gemini</p>
                {extended ? (
                    <>
                        <img onClick={() => setOpenProfile(prev => !prev)} src={assets.user_icon} alt="" />
                        {openProfile && <DropDownProfile />}
                    </>
                ):null}
            </div>
            {extended && (
                <div className="main-container">
                    {!showResult ? (
                        <>
                            <div className="greet">
                                <p><span>Hi</span></p>
                                <p className="subgreet">Let's get started ...</p>
                            </div>
                            <div className="cards">
                                <div className="card" onClick={() => handleCardClick("profile")}>
                                    <p>Create a roadmap: Find your path</p>
                                    <img src={assets.bulb_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Create a profile: Find and be found</p>
                                    <img src={assets.message_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Improve the readability of the following code</p>
                                    <img src={assets.code_icon} alt="" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="result">
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loading ? (
                                    <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                ) : (
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="main-bottom">
                        <div className="search-box">
                            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter your prompt here" />
                            <div>
                                <img src={assets.mic_icon} alt="" />
                                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
