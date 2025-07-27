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
  "programs": "Undergraduate programs:\n1. B.Tech Computer Science (AI/ML specialization)\n2. B.Tech Electronics (IoT focus)\n3. B.Tech Mechanical (Robotics track)\n4. B.Tech Civil (Smart Infrastructure)",
  "courses": "Our course offerings:\n- 4-year B.Tech programs\n- 2-year M.Tech programs\n- 5-year integrated M.Tech\n- PhD in Engineering disciplines",
  "btech": "B.Tech programs (4 years):\n1. Computer Science & Engineering\n2. Electronics & Communication\n3. Mechanical Engineering\n4. Electrical & Electronics\n5. Civil Engineering",
  "mtech": "M.Tech specializations:\n- Artificial Intelligence\n- VLSI Design\n- Thermal Engineering\n- Structural Engineering\n- Power Systems",
  "specializations": "Program specializations:\n- AI/ML Engineering\n- Cyber Security\n- Data Science\n- Robotics & Automation\n- Renewable Energy Systems",
  "new programs": "Latest program additions:\n1. B.Tech in Artificial Intelligence (from 2023)\n2. M.Tech in Quantum Computing (from 2024)\n3. Integrated program in Space Technology",
  "diploma": "Diploma programs (3 years):\n- Computer Engineering\n- Electronics\n- Mechanical\n- Civil\n- Electrical",
  "phd": "PhD research areas:\n- Machine Learning\n- Nanoelectronics\n- Sustainable Energy\n- Smart Materials\n- IoT Systems",
  "certification": "Value-added certifications:\n- Google Cloud Fundamentals\n- AWS Academy\n- Cisco Networking\n- Siemens Automation\n- MATLAB Programming",
  "syllabus": "Our curriculum includes:\n- Core engineering subjects\n- Industry-relevant electives\n- Hands-on projects\n- Internship program\n- Research components",

  // Admissions (10 variations)
  "admission": "Admission process:\n1. Submit application form\n2. Appear for entrance test\n3. Personal interview\n4. Document verification\n5. Fee payment",
  "eligibility": "B.Tech eligibility:\n- 60% in 10+2 (PCM)\n- Valid KEAM/JEE score\nM.Tech eligibility:\n- B.Tech with 60% marks\n- Valid GATE score preferred",
  "application": "How to apply:\n1. Online: www.kmctadmissions.in\n2. Application fee: ₹1000\n3. Documents needed:\n   - Mark sheets\n   - ID proof\n   - Passport photo",
  "deadline": "Admission deadlines:\n- Round 1: May 30\n- Round 2: June 30\n- Late applications: July 15 (with late fee)\n- Classes begin: August 1",
  "fees": "Fee structure (annual):\n- B.Tech: ₹1,25,000\n- M.Tech: ₹95,000\n- Hostel: ₹60,000\n- One-time admission fee: ₹25,000",
  "scholarship": "Scholarship options:\n- Merit-based (100% fee waiver for top rankers)\n- Need-based\n- Special scholarships for girls\n- Sports quota scholarships",
  "international": "International admissions:\n- Eligibility: Equivalent qualification\n- English proficiency required\n- Visa assistance provided\n- Special orientation program",
  "lateral": "Lateral entry (to 2nd year):\n- For diploma holders\n- 3-year B.Tech completion\n- Entrance test required\n- Limited seats available",
  "transfer": "Credit transfer policy:\n- Max 50% credits transferable\n- From recognized universities only\n- Course equivalence evaluation needed",
  "documents": "Required documents:\n1. 10th & 12th mark sheets\n2. Transfer certificate\n3. Migration certificate\n4. Entrance scorecard\n5. ID proof\n6. Passport photos",

  // Placements (10 variations)
  "placement": "Placement highlights:\n- 90% placement rate\n- Highest package: ₹42 LPA\n- Average package: ₹6.5 LPA\n- 200+ recruiting companies",
  "recruiters": "Top recruiters:\n- TCS, Infosys, Wipro\n- Bosch, Siemens, Schneider\n- Amazon, Microsoft, Google\n- L&T, Tata Motors, Ashok Leyland",
  "internship": "Internship program:\n- 6-month compulsory internship\n- Stipend range: ₹10,000-₹25,000\n- Industry projects\n- Startup incubation options",
  "training": "Placement training includes:\n- Aptitude preparation\n- Technical interviews\n- Group discussions\n- Resume building\n- Mock interviews",
  "alumni": "Notable alumni:\n- Rajesh Kumar (Google)\n- Priya Nair (Microsoft)\n- Arun Menon (Bosch)\n- Sneha Pillai (ISRO)",
  "stats": "Placement statistics 2023:\n- CS: 95% placed\n- ECE: 92% placed\n- ME: 88% placed\n- Civil: 85% placed",
  "higher studies": "Higher education options:\n- 20% pursue MS abroad\n- Top destinations: USA, Germany, Canada\n- GRE/GMAT training available\n- University tie-ups",
  "startup": "Startup support:\n- Incubation center\n- Seed funding up to ₹10 lakhs\n- Mentorship program\n- Industry connections",
  "research": "Research opportunities:\n- Funded projects\n- Industry collaborations\n- Conference support\n- Publication incentives",
  "services": "Career services:\n- Resume workshops\n- Company presentations\n- Recruitment drives\n- Career counseling",

  // Contacts (10 variations)
  "contact": "Main contacts:\n📍 Address: KMCT College, NIT Campus P.O., Kozhikode\n📞 Phone: +91 495 1234567\n📧 Email: info@kmct.edu",
  "department": "Department contacts:\n- CSE: cse@kmct.edu\n- ECE: ece@kmct.edu\n- ME: me@kmct.edu\n- Office: 0495-2345678",
  "location": "Campus location:\n- 12km from Calicut Railway Station\n- 25km from Calicut Airport\n- Google Maps: https://maps.kmct.edu",
  "transport": "Transportation options:\n- College buses from major points\n- KSRTC bus stop at gate\n- Auto stand at entrance\n- Parking available",
  "timings": "Working hours:\n- Office: 9AM-5PM (Mon-Sat)\n- Library: 8AM-8PM\n- Labs: 9AM-6PM\n- Cafeteria: 8AM-8PM",
  "social": "Connect with us:\n- Facebook: @KMCTOfficial\n- LinkedIn: KMCT College\n- Instagram: kmct_college\n- Twitter: @KMCT_Updates",
  "emergency": "Emergency contacts:\n- Security: +91 9495123456\n- Medical: +91 9495123457\n- Admin: +91 9495123458",
  "visit": "Campus visit:\n- Open days: Every Friday\n- Tour timings: 10AM-3PM\n- Register at reception\n- ID proof required",
  "feedback": "Provide feedback:\n- Email: feedback@kmct.edu\n- Online form: www.kmct.edu/feedback\n- Suggestion boxes on campus",
  "complaint": "Grievance redressal:\n- Committee headed by Principal\n- Online portal available\n- Confidentiality maintained\n- Resolution within 7 days",

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

