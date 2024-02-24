import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div>Sorry, speech recognition is not supported by your browser.</div>
    );
  }

  const handleStart = () => {
    SpeechRecognition.startListening();
    setIsListening(true);
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  const handleReset = () => {
    resetTranscript();
    setIsListening(false);
  };

  const styles = {
    container: {
      textAlign: "center",
      marginTop: "50px",
      height: "300px",
      overflowY: "auto", 
    },
    button: {
      margin: "10px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "5px",
      border: "none",
      backgroundColor: isListening ? "#dc3545" : "#007bff",
      color: "white",
    },
    transcript: {
      marginTop: "20px",
      fontSize: "18px",
      whiteSpace: "pre-wrap",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ fontFamily: ' "Merriweather", serif' }}>
        Speech to Text Conversion
      </h2>
      <button
        style={styles.button}
        onClick={isListening ? handleStop : handleStart}
      >
        {isListening ? "Stop" : "Start"}
      </button>
      <button style={styles.button} onClick={handleReset}>
        Reset
      </button>
      <p style={styles.transcript}>{transcript}</p>
    </div>
  );
};

export default SpeechToText;
