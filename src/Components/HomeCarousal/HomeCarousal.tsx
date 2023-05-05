import { useEffect, useReducer, useRef, useState } from 'react'
import CarousalImage1 from '../../assets/Images/CarousalImage1.jpeg'
import CarousalImage2 from '../../assets/Images/CarousalImage2.jpeg'
import CarousalImage3 from '../../assets/Images/CarousalImage3.jpeg'
import CarousalImage4 from '../../assets/Images/CarousalImage4.jpeg'
import CarousalImage5 from '../../assets/Images/CarousalImage5.jpeg'
import './HomeCarousal.scss';
import Tilt from 'react-parallax-tilt';

const CarousalData = [
    {
        key: 0,
        image: CarousalImage1,
        title: 'Stone Chariot',
        subtitle:"-Hampi",
        description: 'A piece of heaven!'
    },
    {
        key: 1,
        image: CarousalImage2,
        title: 'Gokundi',
        subtitle:"-Orissa",
        description: 'Let your dreams come true!'
    },
    {
        key: 2,
        image: CarousalImage3,
        title: 'Harishchandragad',
        subtitle:"-Ahmednagar, Maharashtra",
        description: 'A piece of heaven!'
    },
    {
        key: 3,
        image: CarousalImage4,
        title: 'Butterfly Beach',
        subtitle:"-Goa",
        description: 'Let your dreams come true!'
    },
    {
        key: 4,
        image: CarousalImage5,
        title: 'Om Beach',
        subtitle:"-Gokarna",
        description: 'A piece of heaven!'
    }
]
type State = {
    slideIndex: number;
};
const initialState: State = {
    slideIndex: 0
};
type Slide = {
    key: number;
    image: string;

};


type Action =
    | {
        type: "NEXT";
    }
    | {
        type: "PREV";
    };
const slidesReducer = (state: State, event: Action) => {
    const { slideIndex } = state;
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex: (slideIndex + 1) % CarousalData.length
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex:
                slideIndex === 0 ? CarousalData.length - 1 : slideIndex - 1
        };
    }
};
export default function HomeCarousal(props: React.ReactNode) {
    const [state, dispatch] = useReducer(slidesReducer, initialState);
    const [CarousalVisible, setCarousalVisible] = useState(false)
    const [onMouseEnter, setonMouseEnter] = useState(false);
    const MyCarousalRef = useRef()
    useEffect(()=>{
        let CarousalObserver = new IntersectionObserver((entries)=>{
            setCarousalVisible(entries[0].isIntersecting)
        });
        CarousalObserver.observe(MyCarousalRef.current)
    },[])

    const handleNextSlide = () => {
        dispatch({ type: "NEXT" });
    };

    const handlePrevSlide = () => {
        dispatch({ type: "PREV" });
    };
    return (
        <div className={'CarousalWrapper'} >
            <div ref={MyCarousalRef} className={`slides ${CarousalVisible ? "showSlides" : ""}`}>
                <button onClick={handlePrevSlide}>‹‹</button>

                {
                    [...CarousalData, ...CarousalData, ...CarousalData].map((item, index) => {
                        let offset = CarousalData.length + (state.slideIndex - index);
                        const active = offset === 0 ? true : null;
                        console.log(active, '12')
                        return (
                            <div className='slide' data-active={active} style={{ "--offset": offset, "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1 }} >
                                <Tilt className='TiltCarousal' onEnter={()=>active ? setonMouseEnter(true) : null} onLeave={()=>setonMouseEnter(false)} style={{ height: 500, width: 300, }} perspective={900} tiltEnable={active != null} tiltReverse={true} >
                                    <div className='CarousalItemWrapper' style={{ backgroundImage: `url(${item.image})` }} >
                                    <div className={`slideContentInner ${onMouseEnter ? "slideContentInnerHovered" : ""} `}>
                                        <h2 className="slideTitle">{item.title}</h2>
                                        <h3 className="slideSubtitle">{item.subtitle}</h3>
                                        <p className="slideDescription">{item.description}</p>
                                    </div>
                                    </div>
                                </Tilt>
                            </div>
                        )
                    })
                }

                <button onClick={handleNextSlide}>››</button>
            </div>
        </div>
    )
}
