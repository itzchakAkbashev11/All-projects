
import styles from '../assets/circle.module.css';
import { FaArrowUpLong } from "react-icons/fa6";

const Clock = ({ HSI }) => {

  const rotationAngle = HSI % 360;

  const deg = {
    transform: `rotate(${-rotationAngle}deg)`
  };

  const arrowRotation = {
    transform: `rotate(${rotationAngle}deg)`
  };

  const numbers = [];
// add numbers to circle with validation and push to array
  for (let i = 0; i <= 360; i += 90) {
    const transformStyle = {
      transform: `rotate(${i}deg) translate(0, -180px)`
    };
    let text = i === 0 || i === 360 ? '0' : i;
    numbers.push(
      <span key={i} className={styles.number} style={transformStyle}>{text}</span>
    );


  };
    return (

      <>
      <h1>HIS:</h1>
      <div className='py-8'>
           <div 
        className={`${styles.circle} text-2xl`}  style={deg}>
        {numbers}
        <div style={arrowRotation}>
          <FaArrowUpLong size={65} color='orange' />
        </div>
      </div>
      </div>
    </>
    );
  
}

export default Clock;


//   return (
//     <>
//       <div
//         onMouseEnter={() => setShowHSI(true)}
//         onMouseLeave={() => setShowHSI(false)}
//         className={styles.circle} style={deg}>
//         {numbers}
//         <div style={arrowRotation}>
//           <BsArrowUp size={75} />
//         </div>
//       </div>

//       {showHSI && <div className='text-3xl text-red-600'>{HSI}&deg;</div>}

//     </>
//   );


// };
