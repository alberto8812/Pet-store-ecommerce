import React from 'react'
import  { useEffect, useRef } from 'react'
import img1 from "../../../img/foto_1.jpg";
import img2 from "../../../img/foto_2.jpg"
import img3 from "../../../img/foto_3.jpg"
import img4 from "../../../img/foto_4.jpg"
import {ReactComponent as FlechaIzquieRda} from "../../../img/reshot-icon-arrow-first-page-SAHP576EN2.svg"
import {ReactComponent as FlechaDerecha} from "../../../img/reshot-icon-arrow-last-page-98L6DTREBQ.svg"
import styled from 'styled-components';
/////////
const Carousel = props => {
    const slideshow = useRef(null)
    const intervalSlideshow=useRef(null)

    const next=()=>{
        if(slideshow.current.children.length>0){
            const firsElement=slideshow.current.children[0];
            slideshow.current.style.transition=`3000ms ease-out all`;

           const widthslide=slideshow.current.children[0].offsetWidth;

            slideshow.current.style.transform=`translateX(-${widthslide}px)`;

            const transcition=()=>{

            ///reinicia la posicion del selidshow
            slideshow.current.style.transition='none';
            slideshow.current.style.transform=`translateX(0)`;

            //// envia el primer elemento al final

            slideshow.current.appendChild(firsElement)

            slideshow.current.removeEventListener('transitionend',transcition)
            }

           slideshow.current.addEventListener('transitionend',transcition)
        }
    }
    const back=()=>{
        if(slideshow.current.children.length>0){
            const lastElement=slideshow.current.children[slideshow.current.children.length-1];
            slideshow.current.insertBefore(lastElement,slideshow.current.firstChild);
            slideshow.current.style.transition=`none`;

            const widthslide=slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform=`translateX(-${widthslide}px)`;

            setTimeout(()=>{
                slideshow.current.style.transition=`3000ms ease-out all`;
                slideshow.current.style.transform=`translateX(0)`;
            },30);


        }
    }

//  useEffect(() => {
//     intervalSlideshow.current=setInterval(() => {
//         next();
//    }, 5000);

//    //elimnar intervalos
//    slideshow.current.addEventListener('mouseenter',()=>{
//     clearInterval(intervalSlideshow.current);
//    })
//    //reanidar el intervalo
//    slideshow.current.addEventListener('mouseleave',()=>{
//     intervalSlideshow.current=setInterval(() => {
//         next();
//    }, 5000);
//    })
//  }, [])


  return (
    <mainContainer>
        <ConstainerSlideshow ref={slideshow}>
            <Slide>
                <a href='#' target='_self'>
                <img src={img1} alt=''/>
                </a>
            <TextoSlide>
                 <p>15% de descuento</p>
             </TextoSlide>
            </Slide>
            <Slide>
                <a href='#' target='_self'>
                <img src={img2} alt=''/>
                </a> 
            <TextoSlide>
                 <p>15% de descuento</p>
             </TextoSlide>
            </Slide>
            <Slide>
                <a href='#' target='_self'>
                <img src={img3} alt=''/>
                </a>
            <TextoSlide>
                 <p>15% de descuento</p>
             </TextoSlide>
            </Slide>
            <Slide>
                <a href='#' target='_self'>
                <img src={img4} alt=''/>
                </a>
            <TextoSlide >
                 <p>15% de descuento</p>
             </TextoSlide>
            </Slide>

       </ConstainerSlideshow>
       <Controls>
        <Boton onClick={back}>
        <FlechaIzquieRda/>
        </Boton >
        <Boton derecha onClick={next}>
        <FlechaDerecha/>  
        </Boton>
       </Controls>
    </mainContainer>
  )
}
const mainContainer = styled.div`
    position:relative;
`;

const ConstainerSlideshow=styled.div`
    display:flex;
    flex-wrap:nowrap; 
`;

const Slide=styled.div`
   min-width:100%;
   overflow:hidden;
   transition:0.3S ease all;
   z-index:10;
   max-height:500px;
   position:relative;
   img{
     width:100%;
     vertical-align:top;
   }`;

const TextoSlide=styled.div`
    backgrounD:rgba(0,0,0,.5);
    color:#fff;
    width:100%;
    padding:10px 60px;
    text-align:center;
    position:absolute;
    bottom: 0;
    @media screen and (max-with:700px){
        position:relative;
        background:#fff;
    };
`;

const Controls=styled.div`
   position:absolute;
   top:0;
   z-index:20;
   width:100%;
   height: 100%;
   pointer-events:none;

`;

const Boton=styled.button`
  pointer-events:all;
  background:none;
  border:none;
  cursor: pointer;
  outline:none;
  width: 50px;
  height:400px;
  text-align:center;
  position:absolute;
  transition:.3s ease all;
 

  path{
    filter:${props=>props.derecha?'drop-shadow(-2px 0px 0px #fff)':'drop-shadow(2px 0px  0px #fff)'};
  }

  ${props=>props.derecha? 'right:0' :'left:0'}
`;


export default Carousel
