 const aboutSection = document.getElementById("about");
 const phishingInfo =  document.getElementById("phishingInfo");
 const ransomwareInfo = document.getElementById("ransomwareInfo");


 const hackingDefinition = [
        "Hacking refers to the act of gaining unauthorized access to data in a system or a computer.(Fortinet , 2024)",
        "The central  part of understanding hacking is understanding the intent behind it...",
        "This usually involves the hacker seeking access to digital infrastructure...", 
        "application data, and stealing private sensitive customer information that could affect companies if exposed publicly.(Fortinet , 2024)",
        "In Cybersecurity , when the intention of hacking is done to target an element of a computerized systems to change, destroy or steal data...",
        "as well as exploit or harm the network, it is called a Cyber-Attack.",
        "There are three types of Hackers:",
        "1. Black Hat Hackers (the main focus)...",
        "2. White Hat Hackers...",
        "3. Grey Hat Hackers...",
        "Black hat Hackers are the “bad guys” and they go out of their way to discover vulnerabilities in computers systems.", 
        "They take advantages of those vulnerabilities by using them against the owners of computer systems for malicious purposes and for financial gain.",
        "Black Hat Hackers are notoriously known for the following cyber-attacks :"
    ]
    
    let definitionIndex = 0; 
    
    function addDefinition() {
      if (definitionIndex < hackingDefinition.length) {
        const definitionLine = document.createElement('span');
        definitionLine.textContent = hackingDefinition[definitionIndex];
        aboutSection.appendChild(definitionLine);
        aboutSection.scrollTop = aboutSection.scrollHeight; 
        definitionIndex++; 
      } else {
        clearInterval(definitionInterval); 
        showAttackInfoContainers();
        console.log("All definitions points have been  displayed!.");
      }
    }
    
    // Add a new defintion key point  every 2 second 
    const definitionInterval = setInterval(addDefinition, 2000);

    function showAttackInfoContainers() {
        phishingInfo.classList.add("slideIn");
        ransomwareInfo.classList.add("slideIn");
      }


    // Add event listeners to  the "Read More" buttons
  document.querySelector("#phishingInfo .readMore").addEventListener("click", function() {
    console.log("Phishing 'Read More' clicked!");
    window.location.href = "https://www.fortinet.com/resources/cyberglossary/phishing";
  });

  document.querySelector("#ransomwareInfo .readMore").addEventListener("click", function() {
    console.log("Ransomware 'Read More' clicked!");
    window.location.href = "https://www.fortinet.com/resources/cyberglossary/ransomware";
  });

  