import React, { useState, useEffect } from 'react';

export const  SpeechToText = () => {
  const [transcription, setTranscription] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ('SpeechRecognition' in window) {
      recognition = new window.SpeechRecognition();
      recognition.interimResults = true;
      recognition.addEventListener('result', (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');
        setTranscription(transcript);
      });
    }
  }, []);

  const startRecording = () => {
    recognition.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    recognition.stop();
    setIsRecording(false);
  };

  return (
    <div>
      {isRecording ? (
        <button onClick={stopRecording}>Stop recording</button>
      ) : (
        <button onClick={startRecording}>Start recording</button>
      )}
      <p>{transcription}</p>
    </div>
  );
};

