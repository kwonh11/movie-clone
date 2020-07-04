import React from 'react';

function About (props) {
    React.useEffect(()=>{
        window.location.href='https://kwonh11.github.io/gitpage';
    },[])
    return (
        <div className="about__conatiner">
            <span>
                "Freedom is the freedom to say that two plus two make four. if 
                that is granted, all else
                follows."
            </span>
            <span>-- George Orwell, 1984</span>
        </div>
    );
}

export default About;