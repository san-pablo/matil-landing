import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Box, Flex, Text, IconButton, Icon } from '@chakra-ui/react'
import { FaFile, FaFolder } from "react-icons/fa"

import { useTranslations } from 'next-intl'
import Logo from '../../../public/images/matil-logos/logo-word-white.svg';


interface Message {
    text: string
    botMessage: boolean
  }

  
function obtenerSaludo() {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();

    if (hora >= 6 && hora < 12) {
        return "Buenos días"
    } else if (hora >= 12 && hora < 21) {
        return "Buenas tardes"
    } else {
        return "Buenas noches"
    }
}

interface ChatbotProps{
    currentChat:[number, Message][]
}
const Chatbot = ({ currentChat }:ChatbotProps) =>{
        
    const t = useTranslations('Header')

    const [messages, setMessages] = useState<any>([])
    const indexRef = useRef(0)
    const timeoutsRef = useRef<any>([])
    const [currentSeries, setCurrentSeries] = useState<any>([])
 
    const clearAllTimeouts = () => {
        timeoutsRef.current.forEach(clearTimeout)
        timeoutsRef.current = []
    }

    useEffect(() => {
        const addMessage = () => {
            if (indexRef.current >= currentSeries.length) return
            const currentMessage = currentSeries[indexRef.current];
            setMessages((prev:any) => [...prev, currentMessage[1]]);
            if (!currentMessage[1].botMessage) {
                const timeout1 = setTimeout(() => {
                    setMessages((prev:any) => [...prev, { text: 'Cargando...', botMessage: true }])
                    const timeout2 = setTimeout(() => {
                        setMessages((prev:any) => prev.filter((_:any, idx:number) => idx !== prev.length - 1))
                        continueToNextMessage();
                    }, 2000);
                    timeoutsRef.current.push(timeout2)
                }, 500)
                timeoutsRef.current.push(timeout1)
            } else {
                continueToNextMessage();
            }
        };

        const continueToNextMessage = () => {
            indexRef.current += 1;
            if (indexRef.current < currentSeries.length) {
                const timeout = setTimeout(addMessage, currentSeries[indexRef.current][0]);
                timeoutsRef.current.push(timeout);
            }
        };

        if (currentSeries.length > 0) {
            const timeout = setTimeout(addMessage, currentSeries[0][0]);
            timeoutsRef.current.push(timeout);
        }

        return clearAllTimeouts;
    }, [currentSeries]);

    useEffect(() => {
        const changeConversation = () => {
            clearAllTimeouts()
            indexRef.current = 0
            setMessages([]);         
            setCurrentSeries(currentChat)
        }
        changeConversation()
    }, [currentChat])


    const scrollRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (scrollRef.current) {
            const scrollableElement = scrollRef.current;
            const maxScrollTop = scrollableElement.scrollHeight - scrollableElement.clientHeight;
            if (scrollableElement.scrollTop > maxScrollTop - 300) scrollableElement.scrollTop = scrollableElement.scrollHeight
        }
    }, [messages])
   

     
  return(<> 
        <Flex flexDir={'column'}  height={'95%'}> 
            <div style={{height:'50px', background:`linear-gradient(to right, #58daf4, rgb(5, 102, 255))`, display:'flex', alignItems:'center', padding:'0 4%', justifyContent:'space-between', zIndex:10}} > 
            
                <div style={{display:'flex', gap:'5px', flex:'1', padding:'0 0 0 7px', alignItems:'center'}}>
                    <div style={{display:'flex', alignItems:'center', flexDirection:'row', gap:'10px', marginTop:'10px'}} >    
                        <Logo style={{ width: 80, color:'white' }} />
                     </div>
                </div>
                    
            </div>


            <div style={{width:'100%', height:'40px', overflow:'hidden', lineHeight:0, transform:'rotate(180deg)', marginTop:'-2vh'}}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'rgb(5, 102, 255)', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#58daf4', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path d="M0,50 C150,125 350,25 500,50 L500,150 L0,150 Z" fill="url(#waveGradient)"></path>
                </svg>
            </div>
            <Box ref={scrollRef} py='30px' px='10px' flex='1' overflow={'scroll'}> 
                {messages.map((message:any, index:number)=>{

                    const isNextMessageBot = messages[index + 1] ? messages[index + 1].botMessage : false
                    const isLastMessageBot = messages[index - 1] ? messages[index - 1].botMessage : false
                    const isLastMessage = index == messages.length - 1 
                    
                    return(
                    <Flex   key={`message-${index}`} fontWeight={300} fontSize={'.9em'}  gap='10px' width={'100%'}  mt = {index == 0 ? '0px' : (message.botMessage == messages[index - 1].botMessage? '3px':'15px')} alignItems={'end'} flexDir={message.botMessage ? 'row':'row-reverse'} animation = {message.botMessage ? 'expandFromLeft 0.5s ease-out' : 'expandFromRight 0.5s ease-out'}>
                        {(message.botMessage && !isNextMessageBot)&& 
                        
                        <Image src='/images/matilda.svg' width={20} height={20} alt={t('AltImage2')}/>}
                        <Box  maxW='80%' ml={(message.botMessage && !isNextMessageBot)?'0':'30px'} bg={message.botMessage?'gray.100':'linear-gradient(to right,  rgb(5, 102, 255), #58daf4)'} color={message.botMessage?'black':'white'} p = '8px' borderRadius = {message.botMessage ? (isNextMessageBot && isLastMessageBot)? '.2rem .7rem .7rem .2rem' : isNextMessageBot?'.7rem .7rem .7rem .2rem': isLastMessageBot ? '.2rem .7rem .7rem .7rem':'.7rem' : (!isNextMessageBot && !isLastMessageBot && !isLastMessage)? '.7rem .2rem .2rem .7rem' : (isNextMessageBot || isLastMessage)?'.7rem .2rem .7rem .7rem':'.7rem .7rem .2rem .7rem'}>
                            {message.text === 'Cargando...' ?
                            <div className="writing-animation">
                                <span className="bounce-dot"></span>
                                <span className="bounce-dot"></span>
                                <span className="bounce-dot"></span>
                            </div>:
                            <> 
                           {message.text.split('-')[0] === 'FILE'||  message.text.split('-')[0] === 'FOLDER' ? 
                             <Box>
                                <Flex gap='7px' alignItems={'center'}>
                                    <Icon as={ message.text.split('-')[0] === 'FOLDER'?FaFolder:FaFile}/>
                                    <Text>{message.text.split('-')[1]}</Text>
                                </Flex>
                                <Text fontWeight={300}  color='gray.300'>2 KB</Text>
                             </Box>:
                             <Text fontWeight={300}>
                                {message.text.split(/(\*\*.*?\*\*)/).map((part:string, index2:number) => {
                                    if (part.startsWith('**') && part.endsWith('**')) return <Text as="span" fontWeight="500" key={`fragment-${index2}`}>{part.replace(/\*\*/g, '')}</Text>
                                    return <Text as="span" key={`fragment-${index2}`}>{part}</Text>
                                })}
                                </Text>                             
                             }</>}
                        </Box>
                    </Flex>
                    )
                })}
            </Box>

        </Flex>
 
    </>)
   
}

export default Chatbot