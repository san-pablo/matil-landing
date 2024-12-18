//NEXT
import { GetStaticPropsContext } from 'next'
import Image from 'next/image'
import Head from 'next/head'
//REACT
import { useState, useEffect, useMemo } from 'react'
import MeshGradientBackground from '@/Content/Gradient/gradient'
//TRANSLATION
import { useTranslations } from 'next-intl'
//FRONT
import { Flex, Text, Box, Icon, Grid } from '@chakra-ui/react'
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.compat.css"
//COMPONENTS
import Footer from '@/Content/Components/footer'
import FAQS from '@/Content/Components/faqs'
import AnimatedText from '@/Content/Widgets/AnimatedText'
import Chatbot from '@/Content/Widgets/Chatbot'
import AnimatedPercentage from '@/Content/Widgets/AnimatedStat'
import CompaniesRiver from '@/Content/Widgets/CompaniesRiver'
import HighlightText from '@/Content/Functions/HighlightText'
//ICONS
import {  FaFile, FaDatabase } from "react-icons/fa6"
import { IoCall, IoSettingsSharp, IoShieldCheckmarkSharp } from "react-icons/io5"
import { MdMarkChatUnread } from "react-icons/md"
 
const Matilda =()=>{  
    
    //TRANSLATION
    const t = useTranslations('Matilda')
    const t_chats = useTranslations('Chats')

    //FEATURES LIST
    const featuresList = [
        {max:71, title:t('Automation'), color:'#11efe3', image:'/images/customer-support.png'},
        {max:63, title:t('CSAT'), color:'#0073e6', image:'/images/client.png'},
        {max:93, title:t('ResponseTime'), color:'#00299c', image:'/images/support-team.png'}
    ]
    const improvesList = [
        {title:t('Productivity'), description:t('ProductivityDes'), icon:'/images/icons/arrows.svg'},
        {title:t('Analytics'), description:t('AnalyticsDes'), icon:'/images/icons/chart.png'},
        {title:t('MultiLanguage'), description:t('MultiLanguageDes'), icon:'/images/icons/world.svg'},
        {title:t('Atention'), description:t('AtentionDes'), icon:'/images/icons/clock.svg'},
    ]

    const integrationProcessList = [
        {title:t('Study'), description:t('StudyDes'), icon:'/images/icons/study.svg'},
        {title:t('Development'), description:t('DevelopmentDes'), icon:'/images/icons/code.svg'},
        {title:t('Test'), description:t('TestDes'), icon:'/images/icons/shield.svg'},
        {title:t('FollowUp'), description:t('FollowUpDes'), icon:'/images/icons/check.svg'}, 
    ]
    
    const MatildaChatsComponent =  () => {

        const [currentChat, setCurrentChat] = useState<number>(0)
        const [progress, setProgress] = useState<number[]>([0, 0, 0])
        
        const chats:[number, {text:string, botMessage:boolean}][][] = [
            [
                [1000, { text: t_chats('Chat_21'), botMessage: false }],
                [100, { text: t_chats('Chat_22'), botMessage: true }],
                [2500, { text: t_chats('Chat_23'), botMessage: false }],
                [100, { text: t_chats('Chat_24'), botMessage: true }],
                [2500, { text: t_chats('Chat_25'), botMessage: false }],
                [100, { text: t_chats('Chat_26'), botMessage: true }],
                [2500, { text: t_chats('Chat_27'), botMessage: false }],
                [100, { text: t_chats('Chat_28'), botMessage: true }],
                [2000, { text: t_chats('Chat_29'), botMessage: true }]
            ],
            [
                [1000, { text: t_chats('Chat_31'), botMessage: false }],
                [100, { text: t_chats('Chat_32'), botMessage: true }],
                [2500, { text: t_chats('Chat_33'), botMessage: false }],
                [100, { text: t_chats('Chat_34'), botMessage: true }],
                [2500, { text: t_chats('Chat_35'), botMessage: false }],
            ],
            [
                [1000, { text: t_chats('Chat_41'), botMessage: false }],
                [100, { text: t_chats('Chat_42'), botMessage: true }],
                [2500, { text: t_chats('Chat_43'), botMessage: false }],
                [100, { text: t_chats('Chat_44'), botMessage: true }],
                [2500, { text: t_chats('Chat_45'), botMessage: false }],
                [100, { text: t_chats('Chat_46'), botMessage: true }],
            ],

        ]

        useEffect(() => {
            const totalDuration = chats[currentChat].reduce((acc, [delay]) => acc + delay + 1200, 0) + 3000
            let startTime = Date.now()
            const interval = setInterval(() => {
                const elapsedTime = Date.now() - startTime
                let progressCopy = [...progress]
                progressCopy[currentChat] = Math.min((elapsedTime / totalDuration) * 100, 100)
                setProgress(progressCopy)
                if (elapsedTime >= totalDuration) {
                    clearInterval(interval)
                    if (currentChat < chats.length - 1) setCurrentChat(currentChat + 1)
                }
            }, 100)
            return () => clearInterval(interval)
        }, [currentChat])


        const chatContent = useMemo(() => (
            <Chatbot currentChat={chats[currentChat]} />
        ), [currentChat])

        return(
        <Flex flex={'1'} justifyContent={'center'} zIndex={2} >
            <ScrollAnimation animateIn="fadeIn" animateOnce > 
                <Box bg='white' borderColor={'#eaebee'} borderWidth={'7px'} height={'590px'}  width={'310px'}   borderRadius={'2rem'}  overflow={'hidden'} boxShadow={'0 44px 89px -18px rgba(50,50,93,.35),0 26px 54px -26px rgba(0,0,0,.3),inset 0 -1px 3px 0 rgba(10,37,64,.35)'} >
                    {chatContent}
                </Box>
            </ScrollAnimation>
        </Flex>)
    }

    //FAQS LIST
    const faqsList = [[t('FAQ_1'), t('FAQ_ANSWER_1')], [t('FAQ_2'), t('FAQ_ANSWER_2')], [t('FAQ_3'), t('FAQ_ANSWER_3')], [t('FAQ_4'), t('FAQ_ANSWER_4')], [t('FAQ_5'), t('FAQ_ANSWER_5')], [t('FAQ_6'), t('FAQ_ANSWER_6')], [t('FAQ_7'), t('FAQ_ANSWER_7')]]

    return(<>
        <Head>
            <link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
            <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
            <meta name="apple-mobile-web-app-title" content="MyWebSite" />
            <link rel="manifest" href="/images/favicon/site.webmanifest" />
            <title>{t('Title')}</title>
            <meta name="description" content={t('Description')} /> 
        </Head>

        <Flex flexDir='column' width={'100vw'} alignItems={'center'} >
           
            {/*HERO AND EXAMPLES CHATS COMPONENT*/}
            <Flex flexDir='column' width={'100vw'} alignItems={'center'}> 
                <Flex maxW={'1200px'} position='relative' flexDir={{ base: "column", md: 'row'}}  py={'150px'} gap='50px' > 
                    <Box flex={'1'}  width="100%" position={'relative'} px='4vw' color='black'   maxW="1200px" >
                        <Flex  zIndex={2}  flexDir={'column'} > 
                            <Text as='h1' fontSize={'5xl'}  zIndex={2} fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                <AnimatedText text={t('Hero')}/>
                            </Text>
                            <ScrollAnimation style={{ zIndex:2}} animateIn="fadeInUp" animateOnce delay={t('Hero').split(' ').length * 70 + 300}> 
                                <Text mt='10px'  maxW={'800px'} fontWeight={300} fontSize={'sm'}color="brand.text_gray"   overflowWrap="break-word" whiteSpace="pre-wrap">
                                    {t('Subhero')}
                                </Text>
                            </ScrollAnimation>
                        </Flex>
                     </Box>
                     <MatildaChatsComponent/>  
                </Flex>
            </Flex>
            <Box width={'100vw'} zIndex={0} mt='-25vh' height={'60vh'} position={{ base: "absolute", md: 'relative'}} top={{ base: "100vh", md: '0'}} clipPath='polygon(0 0, 100% 60%, 100% 100%, 0 40%)'> 
                <MeshGradientBackground colors={["#11efe3",  "#0073e6", "#00299c",  "#00299c"]}/>
            </Box>

            <Flex width="100%" pb='75px' px='4vw' justifyContent={'center'} >
                 <Grid maxW="1200px"  width="100%" gap={'32px'} templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(4, 1fr)", xl: "repeat(4, 1fr)" }}>
                    {improvesList.map((improve, index)=> (
                        <ScrollAnimation delay={100 * index} key={`improve-${index}`} style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                            <Image height={40} width={40} alt={t(`AltImage${index + 1}`)} src={improve.icon}/>
                            <Flex mt='20px' gap='10px'> 
                                <Box height={'25px'} width={'2px'} bg='brand.text_blue'/>
                                <Box flex='1'> 
                                    <Text  as='h3'  zIndex={1} position="relative"  fontSize={'sm'}  fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                    {improve.title}
                                    </Text>
                                    <Text   as='h4' mt='10px' zIndex={1} position="relative" fontSize={'sm'}  color='brand.text_gray' fontWeight={'300'}>
                                        <HighlightText text={improve.description} color1='rgb(100, 116, 145)' color2='rgb(5, 102, 255)'/>
                                    </Text>
                                </Box>
                            </Flex>
                        </ScrollAnimation>
                    ))}
                </Grid>
            </Flex> 


            <Flex width="100%" textAlign={'center'}  bg='brand.white_bg'  flexDirection={'column'} alignItems={'center'} justifyContent={'center'} py='75px' px='4vw'   >   
                <Text maxW="1000px" as='h2'  fontSize={'3xl'} >{t('FeaturesTitle')}</Text>

                <Flex maxW="1200px"  width="100%" color='white'  gap={'32px'} my='50px' flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}>
                    {featuresList.map((feature, index)=> (
                        <ScrollAnimation delay={100 * index} key={`feature-${index}`} style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                            <Flex flexDir={'column'} justifyContent={'space-between'} position='relative' flex='1' textAlign={'center'} overflow={'hidden'} borderRadius={'.5rem'} bg={`url(${feature.image})`} bgSize="cover" bgPosition="center" bgRepeat="no-repeat"   py='60px' boxShadow={'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}>
                                <Box  position="absolute" top={0} left={0} right={0} bottom={0} bg={`linear-gradient(transparent 0%, ${feature.color})`} zIndex={0} />   
                                <Text  zIndex={1} position="relative" fontSize={'5xl'}  fontWeight="600" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                    {<AnimatedPercentage start={0} end={feature.max}/>} %
                                </Text>
                                <Text as='h3' zIndex={1} position="relative" fontSize={'md'} fontWeight={'500'}>{feature.title}</Text>
                            </Flex>
                        </ScrollAnimation>
                    ))}
                </Flex>
            </Flex>
      
            {/*MATILDA FEATURES*/}
            <Box  bg='brand.white_bg'>
                <Flex  bgGradient='linear(to-br,#00299c, rgb(0, 20, 51))' px='4vw'     clipPath='polygon(0 100px, 100% 0, 100% 100%, 0 100%)' width={'100vw'} justifyContent={'center'}  > 
                    <Flex  width="100vw"  flexDir={'column'}  alignItems={'center'}   py={{ base:"calc(5vh + 100px)", md: "calc(7vh + 100px)", lg: "calc(8vh + 50px)", xl: "calc(10vh + 50px)" }} > 
                            
                            <Text  as='h2'  color={'white'} maxW={'800px'} textAlign={'center'} fontSize={'3xl'} fontWeight={500}>{t('Matilda_Title')}</Text>
                            {/*FIRST LINE*/}
                            <Flex maxW="1000px" mt='75px' width="100%"  gap={'32px'} flexDir={{ base: "column", md: "column", lg: "row-reverse", xl: "row-reverse" }}>
                                <ScrollAnimation style={{flex:'2'}} animateIn="fadeInUp" animateOnce >
                                    <Text  as='h3'  textAlign={{ base: 'center',sm:'center', md: 'start', lg: 'start' }} color='white' flex='2' fontSize={'3xl'}>
                                     {t('Matilda_Feature')}
                                    </Text>
                                </ScrollAnimation >

                                <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                    <Box bg='brand.text_blue'  borderRadius={'1rem'} p='20px'>
                                        <Flex gap='15px' alignItems={'center'} color='white'> 
                                            <Icon as={IoCall} color='' boxSize={'35px'}/>
                                            <Text  as='h3'  fontSize={'lg'} fontWeight={'500'}>{t('Features_Calls')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text  as='h4'  fontWeight={300} color='white'  fontSize={'xs'}>{t('Features_Calls_Subtitle')}</Text>
                                    </Box>
                                </ScrollAnimation>
                            </Flex> 
                        
                            {/*SECOND LINE*/}
                            <Flex maxW="1000px" width="100%" gap={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }} mt={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  flexDir={{ base: "column", md: "column", lg: "row-reverse", xl: "row-reverse" }}>
                                <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                    <Box bg='brand.text_blue' color='white' borderRadius={'1rem'} p='20px' height={'100%'}>
                                        <Flex gap='15px' alignItems={'center'}> 
                                            <Icon as={FaFile}  boxSize={'34px'}/>
                                            <Text  as='h3' fontSize={'lg'} fontWeight={500}>{t('Features_Files')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text  as='h4' fontWeight={300} fontSize={'xs'}>{t('Features_Files_Subtitle')}</Text>
                                    </Box>   
                                </ScrollAnimation>

                                <ScrollAnimation  style={{flex:'2'}}animateIn="fadeIn" animateOnce >
                                    <Box  bg='gray.100' borderRadius={'1rem'} p='20px'  height={'100%'}>
                                        <Flex gap='15px' color='black'  alignItems={'center'}> 
                                            <Icon as={MdMarkChatUnread}  boxSize={'35px'}/>
                                            <Text  as='h3' fontSize={'lg'} fontWeight={500}>{t('Features_Conversation')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text  as='h4' fontWeight={300} color='brand.text_gray'  fontSize={'xs'}>{t('Features_Conversation_Subtitle')}</Text>
                                    </Box>
                                </ScrollAnimation>
                            </Flex> 

                            {/*THIRD LINE*/}
                            <Flex maxW="1000px" width="100%"  gap={{base: "30px", md: "30px", lg: "40px", xl: "50px" }}  mt={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}>
                                
                                <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                    <Box bg='brand.text_blue' color='white' borderRadius={'1rem'} p='20px' height={'100%'}>
                                        <Flex gap='15px' alignItems={'center'}> 
                                            <Icon as={FaDatabase}  boxSize={'34px'}/>
                                            <Text  as='h3' fontSize={'lg'} fontWeight={500}>{t('Features_Work')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text  as='h4' fontWeight={300} color='white'  fontSize={'xs'}>{t('Features_Work_Subtitle')}</Text>
                                    </Box>   
                                </ScrollAnimation>

                                <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                    <Box bg='brand.text_blue'  borderRadius={'1rem'} p='20px'>
                                        <Flex gap='15px' alignItems={'center'} color='white'> 
                                            <Icon as={IoSettingsSharp}  boxSize={'35px'}/>
                                            <Text  as='h3' fontSize={'lg'} fontWeight={500}>{t('Features_Edit')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text as='h4' fontWeight={300} color='white'  fontSize={'xs'}>{t('Features_Edit_Subtitle')}</Text>
                                    </Box>
                                </ScrollAnimation>
                            </Flex>

                            {/*FOURTH LINE*/}
                            <Flex maxW="1000px" width="100%"  gap={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  mt={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  flexDir={{ base: "column", md: "column", lg: "row-reverse", xl: "row-reverse" }}>  
                                <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                    <Box bg='brand.text_blue'  borderRadius={'1rem'} p='20px' height={'100%'}> 
                                        <Flex gap='15px' alignItems={'center'} color='white'> 
                                            <Icon as={IoShieldCheckmarkSharp}  boxSize={'35px'}/>
                                            <Text  as='h3' fontSize={'lg'} fontWeight={500}>{t('Features_Data')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text  as='h4' fontWeight={300} color='white'  fontSize={'xs'}>{t('Features_Data_Subtitle')}</Text>
                                    </Box>
                                </ScrollAnimation>

                                <ScrollAnimation style={{flex:'2'}} animateIn="fadeInUp" animateOnce >
                                    <Text  as='h3' textAlign={{ base: 'center',sm:'center', md: 'start', lg: 'start' }}  color='white' fontSize={'3xl'}>{t('Matilda_Agents')}</Text>
                                </ScrollAnimation >
                            </Flex>
                        
                    </Flex>
                </Flex>
            </Box>

            <Flex width="100%" py='75px' px='4vw' bg='brand.white_bg' justifyContent={'center'} >
                <Box maxW={'1200px'} width={'100%'}> 
                    <Text  as='h2' fontSize={'2xl'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >{t('IntegrationTitle')}</Text>
                    <Text  as='h3'  fontSize={'sm'} mt='20px'  fontWeight="300" color='brand.text_gray' overflowWrap="break-word" whiteSpace="pre-wrap" >{t('IntegrationTitleDes')}</Text>
                    <Grid maxW="1200px" mt='50px'  width="100%" gap='32px' templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(2, 1fr)", xl: "repeat(2, 1fr)" }}>
                        {integrationProcessList.map((improve, index)=> (
                            <ScrollAnimation delay={100 * index} key={`improve-${index}`} style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                <Image height={40} width={40} alt={t(`AltImage${index + 3}`)} src={improve.icon}/>
                                <Flex mt='20px' gap='10px'> 
                                    <Box height={'25px'} width={'2px'} bg='brand.text_blue'/>
                                    <Box flex='1'> 
                                        <Text as='h3'  zIndex={1} position="relative"  fontSize={'sm'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                        {improve.title}
                                        </Text>
                                        <Text mt='10px' zIndex={1} position="relative" fontSize={'sm'}   color='brand.text_gray' fontWeight={'300'}>
                                            <HighlightText text={improve.description} color1='rgb(100, 116, 145)' color2='rgb(5, 102, 255)'/>
                                        </Text>
                                    </Box>
                                </Flex>
                            </ScrollAnimation>
                        ))}
                    </Grid>
                </Box>
            </Flex> 
            
            <Flex width="100%"   justifyContent={'center'} px='4vw' overflow={'hidden'} >
                <Flex gap='32px' maxW={'1200px'}  flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}width={'100%'}> 
                    <Box py='75px' flex={{ base: "", md: "", lg: "1", xl: "1"}}> 
                        <Text as='h2'  fontSize={'xl'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >{t('OtherIntegrations')}</Text>
                        <Text   as='h3' fontSize={'sm'} mt='20px'  fontWeight="300" color='brand.text_gray' overflowWrap="break-word" whiteSpace="pre-wrap" >{t('OtherIntegrationsDes')}</Text>
                    </Box>
                    <Box flex='1' height={'400px'}overflow={'hidden'}>
                        <CompaniesRiver/>
                    </Box>
                </Flex>
            </Flex>

            <FAQS faqsList={faqsList}/>
        </Flex>

    <Footer/>
    </>)
}

export default Matilda

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}
