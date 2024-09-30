//NEXT
import Head from 'next/head'    
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
//REACT
import { useState, useEffect, useRef, Fragment } from 'react'
//TRANSALATION
import { useTranslations } from 'next-intl'
//FRONT
import { Flex, Box, Text, Image, Icon, Button, Grid, SliderMark, Slider, SliderFilledTrack, SliderTrack, SliderThumb } from '@chakra-ui/react'
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.compat.css"
//COMPONENTS
import Footer from '../Content/Components/footer'
import FAQS from '../Content/Components/faqs'
import AnimatedText from '@/Content/Widgets/AnimatedText'

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}


const CustomMessages = ({index}:{index:number}) => {
    const messagesList = [
        [
            {sender:0, content:'Hola, hice un pedido hace una semana pero no he recibido nunguna notificación, me gustaría saber como va.'}, 
            {sender:1, content:'Claro, ¿Podrías porporcionarme tu número de pedido?'},
            {sender:0, content:'Sí, el número es el 502023242'}, 
            {sender:1, content:'Tu pedido nº 500088650 ya ha sido entregado en la tienda. Tienes un plazo de una semana para recogerlo. Si necesitas más ayudo, aquí estoy.'} 
        ],
        [
            {sender:0, content:'Hola, me equivoqué poniendo el mail y no puedo confirmar mi pedido, me gustaría cambiarlo'}, 
            {sender:1, content:'Sin problema, necesitaría el número de teléfono asociado al pedido para verificar tu identidad y el nuevo correo.'},
            {sender:0, content:'Vale, el número es 656 30 63 61 y quiero recibir el nuevo correo en javioliverperez@gmail.com'}, 
            {sender:1, content:'Está todo correctoJavier, ya deberías haber recibido el nuevo correo'} 
        ],
        [
            {sender:0, content:'¿El “SmartTV UHD 55" es compatible con Alexa?'}, 
            {sender:1, content:'Hola, sí que lo es y también con Google Assistant. ¿Puedo ayudarte con algo más?'},
            {sender:0, content:'¿Incluye soporte de pared?'}, 
            {sender:1, content:'No, pero con la compra del televisor tienes un 25% de descuento en cualquiero soporte.'} 
        ],
        [
            {sender:0, content:'Vivo en Gilet, Valencia, ¿Dónde puedo ir a comprar?'}, 
            {sender:1, content:'¡Claro!, La tienda más cercana se encuentra en Sagunto:\n\n- Centro Comercial Nuevo Epicentre L.129 (Sagunto)\n- Código Postal: 46000\n- Horario: lunes-jueves 10.00h-21.00h, viernes-sábados 10.00h-21.30h\n46500'},
            {sender:0, content:'Vale, muchas gracias'}, 
        ],
        [
            {sender:0, content:'Quería saber si hay alguna tienda con stock de la referencia 4739875 en Valencia'}, 
            {sender:1, content:'Para poder ayudarte mejor, ¿me podrías decir qué talla deseas consultar'},
            {sender:0, content:'La talla 42'}, 
            {sender:1, content:'He encontrado stock de la referencia 4739875 en la talla 42 en la tienda situada en C/ Colón, 17. CP: 46004, Valencia. Hay 3 unidades disponibles. Si necesitas más información, ¡dímelo!'} 
        ],
        [
            {sender:0, content:'¿El “SmartTV UHD 55" es compatible con Alexa?'}, 
            {sender:1, content:'Hola, sí que lo es y también con Google Assistant. ¿Puedo ayudarte con algo más?'},
            {sender:0, content:'¿Incluye soporte de pared?'}, 
            {sender:1, content:'No, pero con la compra del televisor tienes un 25% de descuento en cualquiero soporte.'} 
        ],
        [
            {sender:0, content:'Hola, me gustaría hacer una reserva para el próximo viernes día 15'}, 
            {sender:1, content:'Por supuesto, ¿A qué hora quieres hacer la reserva?'},
            {sender:0, content:'A las 21:30, somos 7 personas'}, 
            {sender:1, content:'Perfecto, tu reserva ha sido confirmado, te esperamos el viernes a las 21:30.'} 
        ],
        [
            {sender:0, content:'Hola, me gustarían enviar mi currículum'}, 
            {sender:1, content:'Buenas tardes, ¿En qué departamento te gustaría trabajar?'},
            {sender:0, content:'Ventas'},
            {sender:1, content:'¡Genial! Para poder contactarte en el futuro, ¿podrías escribirme tu dirección de correo electrónico, por favo ?'}, 
        ],
        [
            {sender:0, content:'¿Que documentación tengo que aportar para solicitar un crédito?'}, 
            {sender:1, content:'Debes presentar el CIF, el beneficio neto y cantidad de deuda de la empresa, el importe que desea solicitar y el plazo de devolución. Después de ésto nos pondremos a estudiar su caso.'},
            {sender:0, content:'Ok, aquí los tenéis:\nCIF:B12341234\nBeneficio neto:109.234€\nDeuda:49.034€\nY deseo solicitar 70.000€ a devolver en 3 años.'}, 
            {sender:1, content:'Muy bien, los datos parecen correctos y han superado el estudio automático inicial, en unos días nos pondremos en contacto con usted.'} 
        ]
    ]

    return (
        <Box zIndex={100} width={'40%'} left={'30%'}  bottom={'10px'} position={'absolute'} >
            {messagesList[index].map((message, index) => {
                  const lines = message.content.split('\n');

                return (
                <Flex w='100%' flexDir={message.sender?'row':'row-reverse'} key={`message-${index}`} >
                    <Box shadow={'lg'} px='10px' py='8px' mt='8px' maxW={'80%'} borderRadius={message.sender?'.2rem .7rem .7rem .7rem':'.7rem .2rem .7rem .7rem'} bg={message.sender?'brand.text_blue':'brand.gray_1'} > 
                         {lines.map((line, index2) => (
                            <Text   key={`line-${index}-${index2}`}color={message.sender?'white':'brand.clear_black'}   fontSize={{base: '.55em',sm:'.55em', md: '.6em', lg: '.65em' }}>
                            {line}
                            {index < lines.length - 1 && <br />}
                            </Text>
                        ))}
            
                    </Box>
                </Flex>)
            })}
        </Box>
    )
}   

const UseBox = ({title, description, imageUrl, index}:{title:string, description:string, imageUrl:string, index:number}) => {
    return (<>
        <Flex color='white'>
            <Text flex='1' color='white' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} fontWeight={400}>{title}</Text>
            <Text flex='1' color='brand.gray_1' fontSize={{base: '.6em',sm:'.6em', md: '.7em', lg: '.8em' }} fontWeight={300} >{description}</Text>
        </Flex>
        <Flex justifyContent={'center'} position={'relative'}mt={{ base: "2vh", md: "2vh", lg: "2vh", xl: "8vh" }}> 
            <Box position={'relative'} width={'100%'}>
                <Box zIndex={99} bg={Math.trunc(index/3) === 1?'brand.text_blue':'brand.black_button'} opacity={Math.trunc(index/3) === 1?0.2:0.4} height={'100%'} width={'100%'} position='absolute' />
                <Image zIndex={98} src={imageUrl} width={'100%'}  mt='20px'/>
            </Box>
            <CustomMessages index={index}/>
        </Flex>
    </>)
}

const ScrollableBoxes = ({businessTypeIndex}:{businessTypeIndex:number}) => {

    //TRANSLATION
    const t = useTranslations('Solutions')

    //BUSINESS TYPES MAP
    const businessTypes = [ 'Online', 'Physical', 'Services']
    const imagesUrls = ['/images/ecommerce.png', '/images/store.png', '/images/service.png']
    const svgStyles = [
        {right:'-30vw', color:'rgb(5, 102, 255)', path:'m60.21,195.98l785.74-113.71s-318.14,468.95-217.16,470.99,356.52-201.54,421.77-148.69c65.25,52.86-26.19,291.81-29.52,304.62,0,0,210.18-104.18,244.9-151.56'},
        {left:'-30vw', color:'rgb(0, 20, 51)', path:'m60.21,195.98l785.74-113.71s-318.14,468.95-217.16,470.99,356.52-201.54,421.77-148.69c65.25,52.86-26.19,291.81-29.52,304.62,0,0,210.18-104.18,244.9-151.56'},
        {right:'-30vw', color:'rgb(5, 102, 255)', path:'m60.21,195.98l785.74-113.71s-318.14,468.95-217.16,470.99,356.52-201.54,421.77-148.69c65.25,52.86-26.19,291.81-29.52,304.62,0,0,210.18-104.18,244.9-151.56'}
    ]

    //REFS
    const boxRef1 = useRef<HTMLDivElement>(null)
    const boxRef2 = useRef<HTMLDivElement>(null)
    const boxRef3 = useRef<HTMLDivElement>(null)
    const boxRef4 = useRef<HTMLDivElement>(null)

    const refsArrays = [boxRef1, boxRef2, boxRef3, boxRef4]
    const [scales, setScales] = useState([1, 1, 1, 1, 1, 1])
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            let noResize:boolean = false
            const newScales = refsArrays.map((ref, index) => {
                if (ref.current) {
                    const boxTop = ref.current.getBoundingClientRect().top;
                    const boxAccumulationTop = windowHeight * 0.1 
                    if (boxTop <= boxAccumulationTop) {
                        noResize =true
                    }
                    const startScalingPoint = boxAccumulationTop + windowHeight * 0.1 
                    if (windowHeight * 0.1  <= boxTop && boxTop <= startScalingPoint) {
                        const distanceFromTop = Math.max(0, startScalingPoint - boxTop)
                        const scale = Math.max(0.85, Math.min(1, 1 - distanceFromTop * 0.0008))
                        return scale;
                    }
                }
                return 1
            })
         if (!noResize) setScales(newScales)     
        }
        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll)}
    }, [refsArrays])

    const svgRef = useRef(null)
    useEffect(() => {
      const path = svgRef.current ?  svgRef?.current?.querySelector('.path') : ''
        const activateAnimation = (entries:any, observer:any) => {
        entries.forEach((entry:any) => {
          if (entry.isIntersecting) {
            path.style.strokeDashoffset = '0'
            observer.unobserve(entry.target)
          }
        })
      }
      const observer = new IntersectionObserver(activateAnimation, {threshold: 0.8 })
      if (svgRef.current) observer.observe(svgRef.current)
      return () => {
        if (svgRef.current) observer.unobserve(svgRef.current)
      }
    }, [])

    return (
        <Flex flexDir={'column'} alignItems={'center'} position={'relative'}> 
            <Box position='absolute' top={'35vh'}  right={svgStyles[businessTypeIndex].right}  left={svgStyles[businessTypeIndex].left} zIndex={1} height={'10vh'} width={'80vw'}> 
                <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="-500 0 1358 754"ref={svgRef} >
                    <path
                        className="path"
                        fill="transparent"
                        stroke={svgStyles[businessTypeIndex].color}
                        strokeWidth="65"
                        strokeLinejoin="bevel" 
                        d={svgStyles[businessTypeIndex].path}
                        strokeDasharray="3000" 
                        strokeDashoffset="3000" 
                        style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                    />
            </svg>

            </Box>

            <Flex flexDir={'column'} maxW={'800px'} textAlign={'center'} pt={{ base: "2vh", md: "2vh", lg: "2vh", xl: "3vh" }} mt={{ base: "6vh", md: "7vh", lg: "8vh", xl: "10vh" }} justifyContent={'center'} position='sticky' top={'10vh'} ref={boxRef1}  zIndex={10} transform={`scale(${scales[0]})`} transition="transform 0.3s ease" >
                <Box> 
                    <Flex display={'inline-block'} justifyContent={'center'} alignItems={'center'} bg={'brand.text_blue'} color={'white'} px='15px' py='5px' borderRadius={'2rem'}>
                        <Text fontSize={{base: '.8em',sm:'.8em', md: '.9em', lg: '1em'}}  fontWeight={500}> {t(businessTypes[businessTypeIndex])}</Text>
                    </Flex>
                </Box>
                <Text fontSize={{ base: '1.5em',sm:'1.6em', md: '1.8em', lg: '2em' }} fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                    {t(`${businessTypes[businessTypeIndex]}Title`)}
                </Text>
                <Text mt='10px' maxW={'800px'} fontWeight={300} fontSize={{base: '.8em',sm:'.8em', md: '.9em', lg: '1em' }}color="brand.text_gray"   overflowWrap="break-word" whiteSpace="pre-wrap">{t(`${businessTypes[businessTypeIndex]}Des`)}</Text>
            </Flex>
            {Array.from(Array(3).keys()).map((index) => (
                <Box ref={refsArrays[index + 1]} p='30px 30px 0 30px' width={'100%'}  maxW={'800px'} zIndex={100 + index} top={'10vh'} translateY={`${index * 20}px`} bg={businessTypeIndex === 1?'brand.text_blue':'brand.black_button'} opacity={10} shadow={'lg'} position={'sticky'} key={`${businessTypeIndex}-case-${index}`} mt='2vh' transform={`translateY(${index * 16}px) scale(${scales[index + 1]})`} borderRadius={'1rem'}  transition="transform 0.3s ease opacity 0.3s ease">
                    <UseBox title={t(`UseCase_${index + businessTypeIndex * 3}`)} index={index + businessTypeIndex * 3} description={t(`UseCaseDes_${index + businessTypeIndex * 3}`)} imageUrl={imagesUrls[businessTypeIndex]}/>
                </Box>
            ))}
        </Flex>)
}

const Solutions = () =>{

    //TRANSLATED TEXT
    const t = useTranslations('Solutions')
    const router = useRouter()
  
    //FAQS LIST
    const faqsList = [[t('FAQ_1'), t('FAQ_ANSWER_1')], [t('FAQ_2'), t('FAQ_ANSWER_2')], [t('FAQ_3'), t('FAQ_ANSWER_3')], [t('FAQ_4'), t('FAQ_ANSWER_4')], [t('FAQ_5'), t('FAQ_ANSWER_5')], [t('FAQ_6'), t('FAQ_ANSWER_6')], [t('FAQ_6'), t('FAQ_ANSWER_6')]]

    return(<> 

        <Head>
            <title>MATIL</title>
            <meta name="description" content="Impulsa tu negocio con soluciones de IA. Mejora la atención al cliente, aumenta las ventas proactivas y envía correos masivos personalizados con nuestra tecnología innovadora. Descubre cómo la inteligencia artificial puede transformar tu empresa."/>
        </Head>

            <Box position='absolute' top={'25vh'}  left={'-30vw'} zIndex={1} height={'10vh'} width={'80vw'}> 
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1358 754">
                    <path 
                        className="path" 
                        fill="transparent" 
                        stroke="rgb(5, 102, 255)" 
                        strokeWidth="65" 
                        strokeLinejoin="bevel" 
                        d="m60.21,195.98l785.74-113.71s-318.14,468.95-217.16,470.99,356.52-201.54,421.77-148.69c65.25,52.86-26.19,291.81-29.52,304.62,0,0,210.18-104.18,244.9-151.56"
                        strokeDasharray="3000" 
                        strokeDashoffset="3000">
                        <animate 
                        attributeName="stroke-dashoffset" 
                        from="3000" 
                        to="0" 
                        dur="1.5s" 
                        begin={`${(t('Title').split(' ').length * 70 + 700) / 1000}s`}
                        repeatCount="1" 
                        fill="freeze" />
                    </path>
                    </svg>
                </Box>

     

        <Flex  zIndex={1}  flexDir='column' width={'100vw'} overflow={'hidden'} alignItems={'center'}  bg='white' pb={{ base: "10vh", md: "11vh", lg: "13vh", xl: "15vh" }}>
            
            <Flex flexDir='column' width={'100vw'} alignItems={'center'}  > 
                <Box   width="100%" position={'relative'} px='4vw' color='black' textAlign={'center'} pb={{ base: "6vh", md: "8vh", lg: "10vh", xl: "12vh" }} pt={{ base: "10vh", md: "11vh", lg: "13vh", xl: "15vh" }}  maxW="1200px" >
                    <Flex  zIndex={2}  alignItems={'center'}  flexDir={'column'} > 
                        <ScrollAnimation animateIn="fadeIn" animateOnce >
                            <Text  zIndex={2}  color='brand.text_blue' fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >{t('PreTitle')}</Text> 
                        </ScrollAnimation>

                        <Text fontSize={{ base: '2.2em',sm:'2.5em', md: '2.8em', lg: '3em' }} fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" >
                            <AnimatedText text={t('Title')}/>
                        </Text>
                        
                        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={t('Title').split(' ').length * 70 + 300}> 
                            <Text mt='10px' maxW={'800px'} fontWeight={300} fontSize={{base: '.8em',sm:'.8em', md: '.9em', lg: '1em' }}color="brand.text_gray"   overflowWrap="break-word" whiteSpace="pre-wrap">
                                {t('SubTitle')}
                            </Text>
                        </ScrollAnimation>
                    </Flex>
                </Box>
            </Flex>

            <Box textAlign={'center'}  zIndex={10} maxWidth={'1000px'} >
                <ScrollAnimation animateIn="fadeIn" animateOnce delay={t('Title').split(' ').length * 70 + 600}> 
                    <Text fontSize={{ base: '1.6em',sm:'1.7em', md: '1.9em', lg: '2.1em' }} fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                        {t('UsesCasesDes')}
                    </Text>
                </ScrollAnimation>
            </Box>
            <Flex flexDir={'column'} alignItems={'center'} zIndex={1000} opacity={1} width={'100%'} maxW={'1000px'}> 
                {Array.from(Array(3).keys()).map((index) => (
                    <ScrollAnimation key={`use-case-${index}`} animateIn="fadeIn" animateOnce delay={index === 0?t('Title').split(' ').length * 70 + 800:0}>            
                        <ScrollableBoxes businessTypeIndex={index}/>
                    </ScrollAnimation>
                ))}
            </Flex>
    

    
        </Flex>  

        <FAQS faqsList={faqsList}/>
        <Footer/>
    </>)
}

export default Solutions

   
  