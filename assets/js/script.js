// assets/js/script.js - SECURE UNIVERSAL AI CHATBOT

// ==================== WEBSITE FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', function() {
    // Your existing website initialization
    console.log('KMCT Website initialized');
    
    // Initialize Universal AI Chatbot
    initUniversalChatbot();
});

// Your existing carousel, animation, counter functions go here...

// ==================== UNIVERSAL AI CHATBOT FUNCTIONALITY ====================

// OpenRouter Configuration - NO API KEY IN CODE
const OPENROUTER_CONFIG = {
    API_KEY: typeof process !== 'undefined' ? process.env.OPENROUTER_API_KEY : window.OPENROUTER_API_KEY,
    MODEL: 'google/gemini-pro-1.5',
    ENDPOINT: 'https://openrouter.ai/api/v1/chat/completions'
};

// KMCT College Knowledge Base
const KMCT_KNOWLEDGE = `
KMCT COLLEGE INFORMATION:

BASIC INFO:
- Name: KMCT Institute of Emerging Technology & Management
- Location: Mukkam, Kozhikode, Kerala
- Contact: +91 8943072000 / +91 4952293040
- Email: ceet@kmct.org
- Website: https://www.kmctemergingtechnology.org/

ACADEMIC PROGRAMS:
- B.Tech in Computer Science, Cyber Security, AI & Data Science, Electronics
- BBA, BCA, MBA, MCA
- Diploma in CSE and AI&ML

DEPARTMENTS:
- Computer Science (Genisys), AI (Intellix), Cyber Security (Astra), Electronics (E-Merge)

ADMISSIONS:
- B.Tech Fees: ₹1,20,000/year (Management), ₹18,650/year (Merit)

FACILITIES:
- Library, Labs, Hostels, Sports, WiFi, Cafeteria

EVENTS:
- Kaleido cultural fest, TedX-KMCT, workshops

PLACEMENTS:
- Training by Aesthetix, 6 students placed
`;

let isFirstOpen = true;

// Initialize Universal Chatbot
function initUniversalChatbot() {
    const chatbotBtn = document.getElementById('chatbot-btn');
    const closeChatbot = document.getElementById('close-chatbot');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    
    console.log('Initializing Universal AI Chatbot...');
    console.log('API Key configured:', !!OPENROUTER_CONFIG.API_KEY);

    if (chatbotBtn) {
        chatbotBtn.addEventListener('click', toggleChatbot);
    }
    
    if (closeChatbot) {
        closeChatbot.addEventListener('click', closeChatbotPopup);
    }
    
    if (sendBtn && userInput) {
        sendBtn.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
}

function toggleChatbot(event) {
    if (event) event.preventDefault();
    
    const chatbotPopup = document.getElementById('chatbot-popup');
    if (!chatbotPopup) return;

    if (chatbotPopup.style.display === 'flex') {
        chatbotPopup.style.display = 'none';
    } else {
        chatbotPopup.style.display = 'flex';
        
        const userInput = document.getElementById('user-input');
        if (userInput) userInput.focus();

        if (isFirstOpen) {
            setTimeout(() => {
                appendMessage("Hello! I'm your AI Assistant 🤖\nI can answer ANY questions - about KMCT College, general knowledge, science, history, current affairs, coding help, writing assistance, and much more!\n\nWhat would you like to know?", 'bot');
            }, 300);
            isFirstOpen = false;
        }
    }
}

function closeChatbotPopup() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    if (chatbotPopup) chatbotPopup.style.display = 'none';
}

function showTypingIndicator() {
    const messages = document.getElementById('chatbot-messages');
    if (!messages) return null;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'msg-wrapper bot typing-indicator';
    typingDiv.id = 'typing-indicator';
    
    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = 'https://cdn-icons-png.flaticon.com/512/10541/10541409.png';
    avatar.alt = 'AI Assistant';
    
    const content = document.createElement('div');
    content.className = 'msg bot typing-content';
    content.innerHTML = '<span>AI is thinking</span><span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    
    typingDiv.append(avatar, content);
    messages.appendChild(typingDiv);
    messages.scrollTop = messages.scrollHeight;
    
    return typingDiv;
}

function hideTypingIndicator() {
    const typingElement = document.getElementById('typing-indicator');
    if (typingElement?.parentNode) typingElement.remove();
}

async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    
    if (!userInput || !sendBtn) return;
    
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage(message, 'user');
    userInput.value = '';
    userInput.disabled = true;
    sendBtn.disabled = true;
    
    showTypingIndicator();
    
    try {
        const response = await getUniversalAIResponse(message);
        hideTypingIndicator();
        appendMessage(response, 'bot');
    } catch (error) {
        hideTypingIndicator();
        console.error('AI Error:', error);
        
        if (error.message.includes('API key not configured')) {
            appendMessage("🔐 AI Service Setup Required:\n\nTo enable the AI chatbot, please:\n1. Get a free API key from https://openrouter.ai/\n2. Add it to your Vercel environment variables\n3. Redeploy your site\n\nFor now, you can contact KMCT directly:\n📞 +91 8943072000\n📧 ceet@kmct.org", 'bot');
        } else {
            appendMessage("I'm here to help with any questions! You can ask me about KMCT College, general knowledge, current affairs, science, history, or anything else. What would you like to know? 😊", 'bot');
        }
    } finally {
        userInput.disabled = false;
        sendBtn.disabled = false;
        userInput.focus();
    }
}

// UNIVERSAL AI RESPONSE - Answers ALL questions
async function getUniversalAIResponse(userMessage) {
    // Check if API key is configured
    if (!OPENROUTER_CONFIG.API_KEY) {
        throw new Error('API key not configured');
    }

    try {
        console.log('Making AI request...');
        
        const response = await fetch(OPENROUTER_CONFIG.ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENROUTER_CONFIG.API_KEY}`,
                'HTTP-Referer': 'https://kmct.vercel.app', 
                'X-Title': 'Universal AI Assistant'
            },
            body: JSON.stringify({
                model: OPENROUTER_CONFIG.MODEL,
                messages: [
                    {
                        role: 'system',
                        content: `You are a helpful, knowledgeable AI assistant that can answer ANY questions.

SPECIAL KNOWLEDGE ABOUT KMCT COLLEGE:
${KMCT_KNOWLEDGE}

GUIDELINES:
1. ANSWER ALL QUESTIONS: Whether about KMCT College, general knowledge, science, history, current affairs, etc.
2. BE ACCURATE: Provide factual, up-to-date information
3. BE HELPFUL: Assist with any topic - education, technology, daily life, etc.
4. BE FRIENDLY: Use a warm, conversational tone
5. BE COMPREHENSIVE: If you don't know something, be honest but try to help

EXAMPLES OF WHAT YOU CAN ANSWER:
- "Who is the prime minister of India?" → Provide current information
- "Explain quantum computing" → Give a clear explanation  
- "Help me write an email" → Provide writing assistance
- "What courses does KMCT offer?" → Use the KMCT knowledge
- "Tell me about space exploration" → Share scientific knowledge
- "How to learn programming?" → Give learning guidance

You are empowered to answer ANY and ALL questions helpfully!`
                    },
                    {
                        role: 'user', 
                        content: userMessage
                    }
                ],
                max_tokens: 600,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(`API Error: ${data.error.message}`);
        }

        const aiResponse = data.choices[0]?.message?.content;
        
        if (!aiResponse) {
            throw new Error('No response from AI');
        }

        console.log('AI response received successfully');
        return aiResponse;

    } catch (error) {
        console.error('AI Error:', error);
        throw error;
    }
}

function appendMessage(text, sender) {
    const messages = document.getElementById('chatbot-messages');
    if (!messages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `msg-wrapper ${sender}`;
    
    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = sender === 'user' 
        ? 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' 
        : 'https://cdn-icons-png.flaticon.com/512/10541/10541409.png';
    avatar.alt = sender === 'user' ? 'User' : 'AI Assistant';
    
    const content = document.createElement('div');
    content.className = `msg ${sender}`;
    content.textContent = text;
    
    if (sender === 'user') {
        messageDiv.append(content, avatar);
    } else {
        messageDiv.append(avatar, content);
    }
    
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

// Your existing website functions continue below...
