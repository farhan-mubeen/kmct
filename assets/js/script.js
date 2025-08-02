// DOM Elements
const chatbotBtn = document.getElementById('chatbot-btn');
const chatbotPopup = document.getElementById('chatbot-popup');
const closeChatbot = document.getElementById('close-chatbot');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const messages = document.getElementById('chatbot-messages');
let isFirstOpen = true;

// Expanded 10x Knowledge Base
const knowledgeBase = {
  // About College (10 variations)
  "about": "KMCT College of Engineering is a premier technical institution in Kozhikode, Kerala, established in 2001. We're recognized for our cutting-edge curriculum and industry partnerships.",
  "college": "KMCT stands as a beacon of technical education in South India with:\n- 50+ acres campus\n- 100+ faculty members\n- 5000+ alumni network\n- NAAC 'A' Grade accreditation",
  "history": "Founded in 2001, KMCT has grown from 3 programs to 12 undergraduate and postgraduate programs. Our vision is to create industry-ready engineers with global competence.",
  "campus": "Our 50-acre eco-friendly campus features:\n- Smart classrooms\n- High-tech labs\n- Sports complex\n- Incubation center\n- Digital library with 50,000+ resources",
  "vision": "To be a center of excellence in technical education that transforms students into innovative professionals and entrepreneurs.",
  "mission": "Our mission:\n1. Provide quality technical education\n2. Foster research and innovation\n3. Develop industry partnerships\n4. Promote ethical leadership",
  "ranking": "KMCT rankings:\n- Ranked among top 50 engineering colleges in India by NIRF\n- AAA+ rating by CARE\n- Best emerging engineering college award 2023",
  "achievements": "Notable achievements:\n- 50+ patents filed\n- 100+ research papers published annually\n- Winners of national tech competitions\n- 90% placement record",
  "facilities": "Campus facilities include:\n- 24/7 WiFi\n- Advanced computing labs\n- Innovation hub\n- Hostel accommodation\n- Healthcare center\n- Cafeteria",
  "leadership": "Our leadership team:\n- Dr. Mohammed Ali (Principal)\n- Prof. Shaji Kumar (Dean Academics)\n- Dr. Anitha Thomas (Head of R&D)",

  // Programs (10 variations)

  "programs": "Our academic programs:\n- Undergraduate (UG)\n- Postgraduate (PG)\n- Diploma",
  "courses": "Our course offerings:\n- B.Tech\n- BBA\n- BCA\n- Diploma\n- MCA\n- MBA",
  "btech": "B.Tech Programs:\n1. B.Tech in Artificial Intelligence and Data Science\n2. B.Tech in Computer Science and Engineering\n3. B.Tech in Computer Science and Engineering (Cyber Security)\n4. B.Tech in Electronics and Communication Engineering",
  "diploma": "Diploma Programs:\n1. Computer Science and Engineering\n2. Artificial Intelligence and Machine Learning",



  // Admissions (10 variations)
 
  "admission": "Admission process:\n1. Submit the online application form\n2. Appear for entrance test (if applicable)\n3. Attend personal interview or counseling\n4. Document verification\n5. Pay the admission fee\n\nFor full details, visit: https://www.kmctemergingtechnology.org/",
  "eligibility": "Eligibility Criteria:\n\nB.Tech:\n- Minimum 50% marks in 10+2 with Physics, Chemistry, and Mathematics (PCM)\n- Valid KEAM/JEE score\n\nBBA:\n- Pass in 10+2 or equivalent examination from a recognized board\n\nBCA:\n- Pass in 10+2 with Mathematics/Computer Science as a subject\n\nMCA:\n- Bachelor’s degree in Computer Applications or relevant field with Mathematics at 10+2 level\n\nMBA:\n- Bachelor’s degree with at least 50% marks\n- Valid score in KMAT/CMAT/CAT\n\nDiploma:\n- Pass in SSLC/10th examination from a recognized board\n\nFor updates and exact criteria, visit: https://www.kmctemergingtechnology.org/",
  "application": "How to apply:\n1. Apply online at: www.kmctadmissions.in\n2. Application fee: ₹1000\n3. Keep the following documents ready:\n   - Mark sheets (10th, 12th, UG as applicable)\n   - ID proof\n   - Passport-size photo\n\nRefer website for complete process.",
  "fees": "Fee structure (annual):\n- B.Tech: ₹1,25,000\n- BBA/BCA: ₹65,000 – ₹75,000\n- MCA: ₹85,000\n- MBA: ₹95,000\n- Diploma: ₹45,000 – ₹55,000\n- Hostel: ₹60,000\n- One-time admission fee: ₹25,000",
  "lateral": "Lateral Entry (to 2nd year B.Tech):\n- Eligibility: 3-year diploma in relevant engineering field\n- Duration: 3 years (direct entry to 2nd year)\n- Entrance test or counseling as per university norms\n- Limited seats available\n\nVisit: https://www.kmctemergingtechnology.org/ for details.",
  "documents": "Documents required:\n1. 10th & 12th mark sheets\n2. Transfer Certificate (TC)\n3. Conduct Certificate\n4. Migration Certificate (if applicable)\n5. Entrance exam scorecard (KEAM/JEE/KMAT/etc.)\n6. ID proof (Aadhaar/Passport)\n7. Recent passport-size photos\n\nRefer: https://www.kmctemergingtechnology.org/",

  // Placements (10 variations)
  
  "placement": "Placement Information:\n- Our first batch is set to graduate in 2026.\n- Full-fledged placement drives will begin thereafter.\n- Placement assistance is actively provided, including:\n   - Resume building workshops\n   - Interview preparation sessions\n   - Industry training and internships\n   - Career guidance and mentorship\n\nStay tuned for updates as our placement cell continues to build strong industry connections.",

  // Contacts (10 variations)

  "contact": "Main Contacts:\n📍 Address: KMCT Institute of Emerging Technology and Management,Mukkam, Kozhikode - 673602, Kerala\n📞 Phone: +91 8943072000/+91 4952293040\n📧 Email: ceet@kmct.org\n🌐 Website: https://www.kmctemergingtechnology.org/",
  "location": "Campus Location:\n- Approximately 29 km from Calicut Railway Station\n- Approximately 38 km from Calicut International Airport\n- Google Maps: https://www.kmctemergingtechnology.org/contact",
  "timings": "Working Hours:\n- Office: 9:00 AM to 5:00 PM (Monday to Saturday)",
  "social": "Connect with Us:\n- https://www.kmctemergingtechnology.org/contact",



  // Default Responses (10 variations)
  "default": "I can help with information about:\n- Academic programs\n- Admission process\n- Campus facilities\n- Placement details\n- Contact information",
  "help": "Here's what I can assist with:\n1. Program details\n2. Admission queries\n3. Fee structure\n4. Scholarship info\n5. Placement statistics",
  "options": "Available information:\n- Type 'programs' for courses\n- 'admission' for requirements\n- 'placement' for career info\n- 'contact' for college address",
  "support": "Need help? Try these:\n- 'How to apply?'\n- 'What programs offered?'\n- 'When does admission start?'\n- 'What's the fee structure?'",
  "unknown": "I couldn't understand. Try asking about:\n- Our B.Tech programs\n- Admission deadlines\n- Campus facilities\n- Placement records",
  "start": "Welcome! Ask me about:\n- Our engineering programs\n- How to get admission\n- College facilities\n- Career opportunities",
  "hi": "Hello! I'm KMCT virtual assistant. Ask me about:\n- Courses offered\n- Admission process\n- Campus life\n- Placement support",
  "thanks": "You're welcome! For more information about:\n- Academics: type 'programs'\n- Admissions: type 'eligibility'\n- Placements: type 'recruiters'",
  "bye": "Thank you for chatting! For more information visit www.kmct.edu or contact our office at 0495-1234567.",
  "assistant": "I'm your KMCT guide. I can provide details on:\n- Academic calendar\n- Examination schedule\n- Scholarship deadlines\n- Campus events"
};

// Initialize Chatbot
function initChatbot() {
  // Event Listeners
  chatbotBtn.addEventListener('click', toggleChatbot);
  closeChatbot.addEventListener('click', () => chatbotPopup.style.display = 'none');
  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', (e) => e.key === 'Enter' && sendMessage());
  
  // Welcome message
  if (isFirstOpen) {
    setTimeout(() => {
      appendMessage("Welcome to KMCT College! How can I help you today?", 'bot');
    }, 300);
    isFirstOpen = false;
  }
}

// Toggle chatbot visibility
function toggleChatbot() {
  if (chatbotPopup.style.display === 'flex') {
    chatbotPopup.style.display = 'none';
  } else {
    chatbotPopup.style.display = 'flex';

    // Show welcome message only once
    if (isFirstOpen) {
      setTimeout(() => {
        appendMessage("Welcome to KMCT College! How can I help you today?", 'bot');
      }, 300);
      isFirstOpen = false;
    }
  }
}


// Create typing indicator with three dots animation
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'msg-wrapper bot typing-indicator';
  
  const avatar = document.createElement('img');
  avatar.className = 'avatar';
  avatar.src = 'https://cdn-icons-png.flaticon.com/512/10541/10541409.png';
  
  const content = document.createElement('div');
  content.className = 'msg bot typing-content';
  content.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
  
  typingDiv.append(avatar, content);
  messages.appendChild(typingDiv);
  messages.scrollTop = messages.scrollHeight;
  
  return typingDiv;
}

// Remove typing indicator
function hideTypingIndicator(typingElement) {
  if (typingElement && typingElement.parentNode) {
    typingElement.remove();
  }
}

// Send message handler
function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;
  
  appendMessage(message, 'user');
  userInput.value = '';
  
  // Show typing indicator
  const typingElement = showTypingIndicator();
  
  // Simulate thinking delay
  setTimeout(() => {
    hideTypingIndicator(typingElement);
    const response = getBotResponse(message);
    appendMessage(response, 'bot');
  }, 800 + Math.random() * 700); // Random delay between 800-1500ms
}

// Enhanced Bot Response Function
function getBotResponse(message) {
  const msg = message.toLowerCase().trim();
  
  // Greetings
  if (/hi|hello|hey|greetings|namaste|good morning|good afternoon/.test(msg)) {
    return knowledgeBase.hi || "Hello! Welcome to KMCT College. How can I help you?";
  }

  // Thanks
  if (/thank|thanks|appreciate|grateful|cheers/.test(msg)) {
    return knowledgeBase.thanks || "You're welcome! Let me know if you need anything else.";
  }

  // Goodbye
  if (/bye|goodbye|see you|later|exit|quit/.test(msg)) {
    return knowledgeBase.bye || "Thank you for chatting with KMCT Assistant!";
  }

  // Help/Support
  if (/help|support|what can you do|options|features/.test(msg)) {
    return knowledgeBase.help || knowledgeBase.default;
  }

  // About College (10 variations)
  if (/about|college|kmct|institution|overview|background|history|establish/.test(msg)) {
    if (/mission|vision|goal/.test(msg)) return knowledgeBase.mission;
    if (/history|established|founded/.test(msg)) return knowledgeBase.history;
    if (/campus|facility|infrastructure/.test(msg)) return knowledgeBase.campus;
    if (/rank|rating|accreditation/.test(msg)) return knowledgeBase.ranking;
    if (/achievement|award|success/.test(msg)) return knowledgeBase.achievements;
    if (/facility|amenity|resource/.test(msg)) return knowledgeBase.facilities;
    if (/leader|principal|dean|management/.test(msg)) return knowledgeBase.leadership;
    return knowledgeBase.about;
  }

  // Programs (10 variations)
  if (/program|course|degree|study|academic|curriculum/.test(msg)) {
    if (/b\.?tech|bachelor|undergrad/.test(msg)) return knowledgeBase.btech;
    if (/m\.?tech|master|postgrad/.test(msg)) return knowledgeBase.mtech;
    if (/phd|doctorate|research/.test(msg)) return knowledgeBase.phd;
    if (/diploma|certificate/.test(msg)) return knowledgeBase.diploma;
    if (/specializ|major|focus/.test(msg)) return knowledgeBase.specializations;
    if (/new|latest|recent/.test(msg)) return knowledgeBase["new programs"];
    if (/syllabus|curriculum|subjects/.test(msg)) return knowledgeBase.syllabus;
    if (/certification|addon|value-added/.test(msg)) return knowledgeBase.certification;
    return knowledgeBase.programs;
  }

  // Admissions (10 variations)
  if (/admission|apply|join|enroll|entry|register/.test(msg)) {
    if (/eligib|requirement|criteria/.test(msg)) return knowledgeBase.eligibility;
    if (/how to apply|procedure|process/.test(msg)) return knowledgeBase.application;
    if (/deadline|date|last date|time|when/.test(msg)) return knowledgeBase.deadline;
    if (/fee|payment|cost|tuition/.test(msg)) return knowledgeBase.fees;
    if (/scholarship|financial aid|fund/.test(msg)) return knowledgeBase.scholarship;
    if (/international|foreign|nri/.test(msg)) return knowledgeBase.international;
    if (/lateral|direct|transfer/.test(msg)) return knowledgeBase.lateral;
    if (/credit|transfer|previous/.test(msg)) return knowledgeBase.transfer;
    if (/documents?|required|needed/.test(msg)) return knowledgeBase.documents;
    return knowledgeBase.admission;
  }

  // Placements (10 variations)
  if (/placement|job|career|recruit|company|hire/.test(msg)) {
    if (/recruiter|company|organization/.test(msg)) return knowledgeBase.recruiters;
    if (/intern|training|experience/.test(msg)) return knowledgeBase.internship;
    if (/prepare|train|gd|interview/.test(msg)) return knowledgeBase.training;
    if (/alumnus|alumni|graduate/.test(msg)) return knowledgeBase.alumni;
    if (/stat|data|percentage/.test(msg)) return knowledgeBase.stats;
    if (/higher studies|ms|masters|abroad/.test(msg)) return knowledgeBase["higher studies"];
    if (/startup|entrepreneur|business/.test(msg)) return knowledgeBase.startup;
    if (/research|project|paper/.test(msg)) return knowledgeBase.research;
    if (/service|support|guidance/.test(msg)) return knowledgeBase.services;
    return knowledgeBase.placement;
  }

  // Contacts (10 variations)
  if (/contact|reach|connect|visit|location/.test(msg)) {
    if (/department|hod|head/.test(msg)) return knowledgeBase.department;
    if (/location|address|map|where/.test(msg)) return knowledgeBase.location;
    if (/transport|bus|vehicle|commute/.test(msg)) return knowledgeBase.transport;
    if (/timing|hour|open|close/.test(msg)) return knowledgeBase.timings;
    if (/social|media|facebook|linkedin/.test(msg)) return knowledgeBase.social;
    if (/emergency|urgent|security/.test(msg)) return knowledgeBase.emergency;
    if (/visit|tour|see campus/.test(msg)) return knowledgeBase.visit;
    if (/feedback|review|suggestion/.test(msg)) return knowledgeBase.feedback;
    if (/complaint|grievance|issue/.test(msg)) return knowledgeBase.complaint;
    return knowledgeBase.contact;
  }

  // Default fallbacks
  if (/what|how|when|where|who|why|can you/.test(msg)) {
    return knowledgeBase.default;
  }

  return knowledgeBase.unknown || knowledgeBase.default;
}

// Append message to chat
function appendMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `msg-wrapper ${sender}`;
  
  const avatar = document.createElement('img');
  avatar.className = 'avatar';
  avatar.src = sender === 'user' 
    ? 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' 
    : 'https://cdn-icons-png.flaticon.com/512/10541/10541409.png';
  
  const content = document.createElement('div');
  content.className = `msg ${sender}`;
  content.innerHTML = text.replace(/\n/g, '<br>');
  
  if (sender === 'user') {
    messageDiv.append(content, avatar);
  } else {
    messageDiv.append(avatar, content);
  }
  
  messages.appendChild(messageDiv);
  messages.scrollTop = messages.scrollHeight;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initChatbot);

