// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./TravelGalleryStyles.scss";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import CarousalImage1 from '../../assets/Images/CarousalImage1.jpeg';
import CarousalImage2 from '../../assets/Images/CarousalImage2.jpeg';
import CarousalImage3 from '../../assets/Images/CarousalImage3.jpeg';
import CarousalImage4 from '../../assets/Images/CarousalImage4.jpeg';
import CarousalImage5 from '../../assets/Images/CarousalImage5.jpeg';

const ImagesArray = [
  { ImagePath: CarousalImage1, Title: 'Stone Chariot, Hampi', Description: 'Ornate carving of a divine, Hindu vehicle situated on the grounds of the Vijaya Vitthala Temple.' },
  { ImagePath: CarousalImage2, Title: 'Rajgad, Pune', Description: 'Historical hilltop fortress & popular trekking site.' },
  { ImagePath: CarousalImage4, Title: 'Cola Beach, South Goa', Description: 'Crystal clear green colors and its calming swimmable waters' },
  { ImagePath: CarousalImage3, Title: 'Harishchandragad, Maharashtra', Description: 'One of the most challenging treks' },
  { ImagePath: CarousalImage5, Title: 'Om beach, Gokarna', Description: 'Sand-&-rock beach with road access amid forested hills.' },
]
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ imagePath, Index, Title, Description }: { imagePath: string, Index: number, Title: string, Description: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={imagePath} alt="Gallery Image" className="ImageStyle" />
      </div>
      <motion.div style={{ y }} >
        <h2 ><i>{`#00${Index + 1}`}</i></h2>
        <h4>{Title}</h4>
        <p>{Description}</p>
      </motion.div>
    </section>
  );
}

export default function TravelGallery() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="GalleryWrapper" >
      {ImagesArray.map((image, index) => (
        <Image imagePath={image.ImagePath} Title={image.Title} Description={image.Description} Index={index} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      {/* <motion.div className="Details" style={{}} >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi doloribus vel ullam explicabo, 
          accusamus optio cumque quisquam illo animi laborum reprehenderit saepe cupiditate aperiam, 
          ducimus veniam iusto culpa dolorem possimus. Enim placeat eligendi quam sequi, doloremque 
          reiciendis unde illum ad ipsam dolorem ea corrupti, dolorum harum tenetur exercitationem hic 
          dignissimos excepturi deleniti? Soluta dicta eveniet hic vitae. Temporibus, autem quos excepturi 
          laboriosam nam distinctio vel alias fugit sapiente mollitia. Ipsa possimus nihil corrupti ipsum.
           Molestiae, perspiciatis magni sequi mollitia deserunt laudantium ut. Animi ducimus porro hic
            quisquam id expedita eos consequatur tempora, suscipit, reprehenderit dolore nemo aliquid 
            quas quod molestias.</p>
      </motion.div> */}
      <div className="NullComponent" ></div>
    </div>
  );
}
