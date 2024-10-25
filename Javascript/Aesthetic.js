const terminal = document.getElementById('terminal');

const codelines = [
    "The following lines of code  are supposed to give you a feel of being inside a hacking terminal :",
    "Access Denied!!",
    "Initializing Phishing Attack...",
    "Phishing Attack Successful....",
    "Initializing brute-force attack...",
    "One ransomware group sucessfully attacked!",
    "Personal Files transferrring in Progress...",
    "Decrypting files...",
    "Firewall breach detected.",
    "I demand R2.5M before i encrypt all your files",
    "Ransomware threat loading...",
    "Bypassing security protocols...",
    "Connection established to target server.",
    "Searching for vulnerabilities...",
    "Security compromised. Data extraction in progress.",
    "Encryption bypassed.",
    "Session terminated by the host.",
    "010101010101010010101010101",
    "0100010100010011001010101010",
    "010101010001010101001010010101"
]

let messageIndex = 0; 

function addMessage() {
  if (messageIndex < codelines.length) {
    const messageLine = document.createElement('span');
    messageLine.textContent = codelines[messageIndex];
    terminal.appendChild(messageLine);
    terminal.scrollTop = terminal.scrollHeight; 
    messageIndex++; 
  } else {
    clearInterval(messageInterval); 
    console.log("All messages displayed, terminal animation ended!!.");
  }
}

// Add a new message every 5 second and store the interval ID
const messageInterval = setInterval(addMessage, 5000);