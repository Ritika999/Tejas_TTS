
function getVoices(){

  let voices = speechSynthesis.getVoices();
   if(!voices.length){
  let utterance=new SpeechSynthesisUtterance("");
  speechSynthesis.speak(utterance);
  voices=speechSynthesis.getVoices()
   }
   return voices
  }
  
  function speak(text, voice, rate, pitch, volume) {
  // create a SpeechSynthesisUtterance to configure the how text to be spoken
  let speakData = new SpeechSynthesisUtterance();
  speakData.volume = volume;
  speakData.pitch = pitch; // From 0 to 2
  speakData.text=text;
  speakData. lang = 'en';
  speakData.voice = voice;
  
  // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking
  speechSynthesis.speak(speakData) ;
  }
  
  if ('speechSynthesis' in window) {
  let voices=getVoices()
  let rate=1,pitch=2,volume=1;
  let text = "Speaking with volume = 1 rate =1 pitch =2 ";
  
  speak(text, voices[5], rate, pitch, volume);
  
  setTimeout(()=>{
      rate = 0.5; pitch = 1.5, volume = 0.5;
      text = "Speaking with volume = 0.5 rate = 0.5 pitch = 1.5 ";
      speak(text, voices[10], rate, pitch, volume );
      
      
  },2000)
  }
  else{
      console.log(' Speech Synthesis Not Supported')
  }
