// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./TravelGalleryStyles.scss";
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import CarousalImage1 from '../../assets/Images/CarousalImage1.jpeg';
import CarousalImage1Loading from '../../assets/Images/CarousalImage1Loading.jpg';
import CarousalImage2 from '../../assets/Images/CarousalImage2.jpeg';
import CarousalImage2Loading from '../../assets/Images/CarousalImage2Loader.jpg';
// import CarousalImage3 from '../../assets/Images/CarousalImage3.jpeg';
import CarousalImage4 from '../../assets/Images/CarousalImage4.jpeg';
import CarousalImage4Loading from '../../assets/Images/CarousalImage4Loading.jpg';
import CarousalImage5 from '../../assets/Images/CarousalImage5.jpeg';
import CarousalImage5Loading from '../../assets/Images/CarousalImage5Loading.jpg';
import TravelGalleryImage1 from '../../assets/Images/TravelGallery1.jpg';
import TravelGalleryImage1Loading from '../../assets/Images/TravelGallery1Loading.jpg';
import TravelGalleryImage2 from '../../assets/Images/TravelGallery2.jpg';
import TravelGalleryImage2Loading from '../../assets/Images/TravelGallery2Loading.jpeg';
import TravelGalleryImage3 from '../../assets/Images/TravelGallery3.jpg';
import TravelGalleryImage3Loading from '../../assets/Images/TravelGallery3Loader.jpg';

import TravelGalleryImage4 from '../../assets/Images/TravelGallery4.jpg';
import TravelGalleryImage4Loading from '../../assets/Images/TravelGallery4Loading.jpg';
import ProfilePicture from '../../assets/Images/ProfilePicture.jpeg'
import ProfilePictureLoading from '../../assets/Images/ProfilePictureLoader.jpg'

const ImagesArray = [
  { ImagePath: TravelGalleryImage2, ImageLoader:TravelGalleryImage2Loading, Title: 'Polem Beach, Goa', Description: 'Southern most beach in Goa, Picturesque stretch of white sand, fringed with palm trees & palapas & known for its calm waters' },
  { ImagePath: CarousalImage2, ImageLoader : CarousalImage2Loading , Title: 'Rajgad, Pune', Description: 'Historical hilltop fortress & popular trekking site.' },
  { ImagePath: ProfilePicture, ImageLoader : ProfilePictureLoading, Title: 'Cabo de Rama, Goa', Description: 'Sand-&-rock beach with road access amid forested hills.' },
  { ImagePath: TravelGalleryImage3, ImageLoader : TravelGalleryImage3Loading, Title: 'Sanapur Lake, Hampi', Description: 'Fed by Tungabhadra Dam canal, this beautiful lake is located new Hampi.' },
  // { ImagePath: TravelGalleryImage5, ImageLoader : "" , Title: 'Om beach, Gokarna', Description: 'Sand-&-rock beach with road access amid forested hills.' },
  { ImagePath: CarousalImage1, ImageLoader : CarousalImage1Loading , Title: 'Stone Chariot, Hampi', Description: 'Ornate carving of a divine, Hindu vehicle situated on the grounds of the Vijaya Vitthala Temple.' },
  { ImagePath: TravelGalleryImage1, ImageLoader : TravelGalleryImage1Loading, Title: 'Kokankada- Harishchandragad, Maharashtra', Description: 'Cliff facing towards the western side of Maharashtra that is Kokan, hence the name. It contains the most Scenic view & Beautifull sunset.' },
  { ImagePath: CarousalImage4, ImageLoader : CarousalImage4Loading, Title: 'Cola Beach, South Goa', Description: 'Crystal clear green colors and its calming swimmable waters' },
  { ImagePath: CarousalImage5, ImageLoader : CarousalImage5Loading , Title: 'Om beach, Gokarna', Description: 'Sand-&-rock beach with road access amid forested hills.' },
  { ImagePath: TravelGalleryImage4, ImageLoader : TravelGalleryImage4Loading , Title: 'Alandi, Maharashtra', Description: 'This temple is located near Alandi, One of the most famous and sacred place in Maharashtra' },
  // { ImagePath: CarousalImage3, ImageLoader : "" , Title: 'Harishchandragad, Maharashtra', Description: 'One of the most challenging treks' },
]

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ imagePath, imageLoader, Title, Description }: { imagePath: string, imageLoader:string, Title: string, Description: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div className="LoaderBackground" style={{backgroundImage:`url(${imageLoader})`}} ref={ref}>
        <img src={imagePath} alt="Gallery Image" className="ImageStyle" loading="lazy" />
      </div>
      <motion.div style={{ y }} >
        <h4><i>{Title}</i></h4>
        {/* <h4>{Title}</h4> */}
        <p>{Description}</p>
      </motion.div>
    </section>
  );
}

export default function TravelGallery() {
  const { scrollYProgress } = useScroll();

  useEffect(()=>{
    const blurredImgDiv = document.querySelectorAll(".LoaderBackground");
    blurredImgDiv.forEach((div)=>{
      const origImg = div.querySelector("img");
      function loaded(){
        div.classList.add("loadedImg")
      }
      if(origImg?.complete){
        loaded()
      }
      else{
        origImg?.addEventListener('load',loaded);
      }
    })
  },[]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="GalleryWrapper" >
      {ImagesArray.map((image) => (
        <Image imagePath={image.ImagePath} imageLoader={image.ImageLoader} Title={image.Title} Description={image.Description} />
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
