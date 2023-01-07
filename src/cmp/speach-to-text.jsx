import React, { useState, useEffect } from 'react';
import MicNoneIcon from '@mui/icons-material/MicNone';
import PauseIcon from '@mui/icons-material/Pause';

export const SpeechToText = () => {
  const [transcription, setTranscription] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');
        setTranscription(transcript);
      };
      setRecognition(recognition);
    }
  }, []);

  const startRecording = () => {
    if (recognition) {
      recognition.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
    }
  };

  return (
    <div>
      {isRecording ? (
        <div onClick={stopRecording} ><PauseIcon/></div> 
        
        ) : (
          <div onClick={startRecording}><MicNoneIcon/></div>
        )}
      {/* <MainChat transcription={transcription} stopRecording={stopRecording} startRecording={startRecording}/> */}
    </div>
  );
};
