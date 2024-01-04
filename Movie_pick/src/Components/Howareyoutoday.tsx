import React, { useState } from 'react';
import '../Styles/Howareyoutoday.css';
import { options, questions } from './questions';
import Navbar from './Navbar';

export const Howareyoutoday = () => {
    const [showNextButton, setShowNextButton] = useState(false);
    const [happyBackgroundColor, setHappyBackgroundColor] = useState('');
    const [neutralBackgroundColor, setNeutralBackgroundColor] = useState('');
    const [sadBackgroundColor, setSadBackgroundColor] = useState('');
    const [clicked,setclicked] = useState(false)
    const [queindex, setQueIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [currOption ,setCurrOption]=useState("");
 

    const handlefeeling = (feeling: string) => {
        setShowNextButton(true);
        setHappyBackgroundColor(feeling === 'happy' ? 'crimson' : '');
        setNeutralBackgroundColor(feeling === 'neutral' ? 'crimson' : '');
        setSadBackgroundColor(feeling === 'sad' ? 'crimson' : '');
    };

    const handleOptionSelect = (option:string) => {
        setSelectedOptions((prevOptions) => [...prevOptions, option]);
        setCurrOption(option);
    };
 
    const handlePrevious = () => {
    //    setQueIndex((prevIndex) => Math.max(prevIndex - 1, 0));
       if (currOption === "No, it doesn't matter") {
        console.log("matched")
        setQueIndex((prevIndex) => Math.min(prevIndex - 2));
        }
        else {
        console.log("Not matched")
        setQueIndex((prevIndex) => Math.min(prevIndex -1));
        }
      };
   
      const handleNext = () => {
       if (currOption === "No, it doesn't matter") {
        console.log("matched")
        setQueIndex((prevIndex) => Math.min(prevIndex + 2, questions.length - 1));
        }
        else {
        console.log("Not matched")
        setQueIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
        }
        setSelectedOptions([]);
      };

    return (
        <div className='howareyou'>
            <Navbar/>
            {!clicked && <div className='question1'>
                <h1>How are you today?</h1>
            </div>}
            {!clicked &&<div className='feelings'>
                <div
                    className='happy'
                    onClick={() => handlefeeling('happy')}
                    style={{ backgroundColor: happyBackgroundColor }}
                >
                    <i className="fa-solid fa-face-smile"></i>
                    <h3>Happy</h3>
                </div>
                <div
                    className='neutral'
                    onClick={() => handlefeeling('neutral')}
                    style={{ backgroundColor: neutralBackgroundColor }}
                >
                    <i className="fa-solid fa-face-meh"></i>
                    <h3>Neutral</h3>
                </div>
                <div
                    className='sad'
                    onClick={() => handlefeeling('sad')}
                    style={{ backgroundColor: sadBackgroundColor }}
                >
                    <i className="fa-solid fa-face-frown-open"></i>
                    <h3>Sad</h3>
                </div>
            </div>}

            {!clicked &&<div className='nextbutton'>
                {showNextButton && (
                    <button id="nextbutton" onClick={() => { setclicked(true)}} >
                        Next
                    </button>
                )}
            </div>}
        {clicked &&
                <div className='quiz'>
                <h2>{questions[queindex]}</h2>
                <form>
                    {options[queindex].map((option, index) => (
                    <div key={index}>
                        {queindex === 0 || queindex === 3 || queindex === 4 ? (
                        <div>
                            <input
                            type="radio"
                            id={`option${index}`}
                            name="ratingOptions"
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleOptionSelect(option)}
                            />
                            <label className='option' htmlFor={`option${index}`}>{option}</label>
                        </div>
                        ) : (
                        <div>
                            <input
                            type="checkbox"
                            id={`option${index}`}
                            checked={selectedOptions.includes(option)}
                            onChange={() =>{handleOptionSelect(option)}}
                            />
                            <label className='option' htmlFor={`option${index}`}>{option}</label>
                        </div>
                        )}
                    </div>
                    ))}
                </form>
                <button className='btn back-btn' onClick={handlePrevious} disabled={queindex === 0}>
                <i className="fa-solid fa-arrow-left txt-xsm"></i> back
                </button><br />
                <button className='btn next-btn' onClick={handleNext} disabled={queindex === questions.length - 1}>
                    Next
                </button>
                </div>
            }
        </div>
        
    );
};
