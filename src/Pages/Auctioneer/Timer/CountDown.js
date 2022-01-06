import React, {useState, useRef, useEffect} from 'react';
import './Tes.css';

const DashBoardProfile = ({dates}) => {
    const [timerDays, setTimerDays]=useState(0);
    const [timerHours,setTimerHours]=useState(0);
    const [timerMinutes,setTimerMinutes]=useState(0);
    const [timerSeconds,setTimerSeconds]=useState(0);
    // const [dist,setDist]=useState(0);

    let interval = useRef();
   
        const startTimer = () => {
                // This the final number which will come from database
            const countdownnumber = new Date(`${dates} 11:59:59 PM`).getTime();
            // console.log('countdownnumber');
            // console.log(countdownnumber);
            
            interval.current= setInterval(()=>{
                const now = new Date().getTime();
                const distance = countdownnumber - now;
                // setDist(1000/(distance/1000));
                // console.log('d',distance);
                
                // console.log(distance);
    
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / ( 1000 * 60 * 60)));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                // console.log(distance)
                // console.log(seconds)
                
                if( distance < 0){
                    // stop timer
                    // console.log('clear')
                    clearInterval(interval.current);
                    return;
                }else{
                    // upnumber timer
                    console.log('updating');
                    setTimerDays(days)
                    setTimerHours(hours)
                    setTimerMinutes(minutes)
                    setTimerSeconds(seconds)
                    // setFill(fill+10)
                    console.log(days,hours,minutes,seconds);
                }
            }, 1000);
        };
    // startTimer();
    useEffect(()=>{
        // console.log('in useEffect');
        startTimer();
        return ()=>{
            clearInterval(interval.current)
        }
    })
    
    return (
        <div className='container-fluid'>
            {/* for web view */}
            <div className="timer-main-container-web">
                <div className="timer-box-container">
                    <h2>{timerDays}</h2>
                    <h3>Days</h3>
                    <div style={{width: '100%',backgroundColor: 'yellow' ,height: '10px'}}>
                        <div style={{width: `${(100-((timerDays/24)*100))}px`,backgroundColor: 'red', height: '100%'}}></div>
                    </div>
                </div>
                <div className="timer-box-container">
                    <h2>{timerHours}</h2>
                    <h3>Hours</h3>
                    <div style={{width: '100%',backgroundColor: 'yellow' ,height: '10px'}}>
                        <div style={{width: `${(100-((timerHours/24)*100))}px`,backgroundColor: 'red', height: '100%'}}></div>
                    </div>
                </div>
                <div className="timer-box-container">
                    <h2>{timerMinutes}</h2>
                    <h3>Minutes</h3>
                    <div style={{width: '100%',backgroundColor: 'yellow' ,height: '10px'}}>
                        <div style={{width: `${(100-((timerMinutes/60)*100))}px`,backgroundColor: 'red', height: '100%'}}></div>
                    </div>
                </div>
                <div className="timer-box-container">
                    <h2>{timerSeconds}</h2>
                    <h3>Seconds</h3>
                    <div style={{width: '100%',backgroundColor: 'yellow' ,height: '10px'}}>
                        <div style={{width: `${(100-((timerSeconds/60)*100))}px`,backgroundColor: 'red', height: '100%'}}></div>
                    </div>
                </div>
            </div>
            {/* for small display view */}
            <div className="timer-main-container-small">
                <div className="timer-box-container-small">
                    <h4>{timerDays}</h4>
                    <h5>Days</h5>
                    <div style={{width: '100%',backgroundColor: 'yellow' ,height: '10px'}}>
                        <div style={{width: `${50-((timerDays/24)*50)}px`,backgroundColor: 'red', height: '100%'}}></div>
                    </div>
                </div>
                <div className="timer-box-container-small">
                    <h4>{timerHours}</h4>
                    <h5>Hours</h5>
                    <div style={{width: '100%',backgroundColor: 'yellow' ,height: '10px'}}>
                        <div style={{width: `${50-((timerHours/24)*50)}px`,backgroundColor: 'red', height: '100%'}}></div>
                    </div>
                </div>
                <div className="timer-box-container-small">
                    <h4>{timerMinutes}</h4>
                    <h5>Minutes</h5>
                    <div style={{width: '100%',backgroundColor: 'yellow' ,height: '10px'}}>
                        <div style={{width: `${50-((timerMinutes/60)*50)}px`,backgroundColor: 'red', height: '100%'}}></div>
                    </div>
                </div>
                <div className="timer-box-container-small">
                    <h4>{timerSeconds}</h4>
                    <h5>Seconds</h5>
                    <div style={{width: '100%',backgroundColor: 'yellow' ,height: '10px'}}>
                        <div style={{width: `${(50-((timerSeconds/60)*50))}px`,backgroundColor: 'red', height: '100%'}}></div>
                    </div>
                </div>
            </div>
            <h3 style={{color: '#ff7f47',textAlign: 'center', marginTop:'5px'}}>Time Remaining</h3>
        </div>
    );
}
export default DashBoardProfile;