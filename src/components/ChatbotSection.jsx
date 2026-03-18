import { useState, useRef, useEffect } from 'react'

const SYSTEM = `You are the expert sign advisor for Piros Signs, a third-generation family-owned commercial sign company founded in 1957 in Barnhart, Missouri. You have 68 years of institutional knowledge. Your job is to qualify leads and position Piros as the obvious expert choice.
PERSONALITY: Warm, confident, knowledgeable — like a trusted expert, not a chatbot. Give real insights demonstrating deep expertise. Never recommend competitors or DIY.
CONVERSATION GOALS — collect naturally (never as a form dump):
1. Name and business name
2. Location / city (affects permitting)
3. Phone or email
4. Sign type and timeline
FLOW:
- Open with the 68-year expertise and immediate answers hook
- Ask about existing branding / website naturally
- Raise permitting naturally — position Piros's in-house permit team as key advantage
- Generate sign concept image when you have enough info using: <image_request>{"prompt":"..."}</image_request>
HARD RULES:
- NEVER give specific pricing
- NEVER recommend a competitor or DIY
- ALWAYS end with exactly one question
- Keep responses under ~120 words unless explaining something technical`

const QUICK_REPLIES = ['Channel letters', 'Cabinet sign', 'Monument sign', 'Not sure yet']

export default function ChatbotSection() {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hey there — I'm the sign advisor here at Piros Signs. With 68 years in the business, I can answer just about any sign question right now, no waiting for a callback.\n\nWhat kind of sign project are you working on?",
    },
  ])
  const [input, setInput] = useState('')
  const [waiting, setWaiting] = useState(false)
  const [showChips, setShowChips] = useState(true)
  const [history, setHistory] = useState([])
  const messagesRef = useRef(null)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages])

  async function send(text) {
    if (!text.trim() || waiting) return
    setInput('')
    setWaiting(true)
    setShowChips(false)

    const userMsg = { role: 'user', text }
    setMessages((prev) => [...prev, userMsg])

    const newHistory = [...history, { role: 'user', content: text }]
    setHistory(newHistory)

    // Show typing indicator
    setMessages((prev) => [...prev, { role: 'bot', text: '__typing__' }])

    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM,
          messages: newHistory,
        }),
      })

      const data = await res.json()

      setMessages((prev) => prev.filter((m) => m.text !== '__typing__'))

      if (data.error) {
        const errText =
          data.error.type === 'authentication_error' || !apiKey
            ? '⚠️ API key not set. Add VITE_ANTHROPIC_API_KEY to your .env file.'
            : `Error: ${data.error.message}`
        setMessages((prev) => [...prev, { role: 'bot', text: errText }])
      } else {
        const full = data.content[0].text
        const clean = full.replace(/<image_request>[\s\S]*?<\/image_request>/g, '').trim()
        setHistory((prev) => [...prev, { role: 'assistant', content: full }])
        setMessages((prev) => [...prev, { role: 'bot', text: clean }])
      }
    } catch (e) {
      setMessages((prev) => prev.filter((m) => m.text !== '__typing__'))
      setMessages((prev) => [...prev, { role: 'bot', text: `Connection error: ${e.message}` }])
    }

    setWaiting(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <section className="ai-section" id="chatbot">
      <div className="ai-layout">
        <div className="ai-left fade-in">
          <div className="section-tag">
            <div className="section-tag-line"></div>
            <span>AI-Powered</span>
          </div>
          <h2 className="section-title">Meet Your<br />Sign Advisor.</h2>
          <p className="section-body">
            No forms. No waiting for a callback. Ask our AI advisor anything about your sign
            project right now — and get answers backed by 68 years of expertise.
          </p>
          <div className="ai-features">
            <div className="ai-feature">
              <div className="ai-feature-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
              </div>
              <div className="ai-feature-text">
                <strong>Instant Expert Answers</strong>
                <span>Sign types, materials, timelines, permitting — answered immediately, not in 48 hours.</span>
              </div>
            </div>
            <div className="ai-feature">
              <div className="ai-feature-icon">
                <svg viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
              </div>
              <div className="ai-feature-text">
                <strong>Permitting Made Easy</strong>
                <span>Our in-house permit team handles everything. The advisor explains what to expect in your city.</span>
              </div>
            </div>
            <div className="ai-feature">
              <div className="ai-feature-icon">
                <svg viewBox="0 0 24 24"><path d="M21 6.5l-4-4-9.96 9.96-2.54 4.54 4.54-2.54L21 6.5zm-14 9l-2.5 1.5 1.5-2.5 7.46-7.46 1 1L7 15.5z" /></svg>
              </div>
              <div className="ai-feature-text">
                <strong>Visualize Your Concept</strong>
                <span>The advisor generates a custom sign concept image based on your project details.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-right fade-in" style={{ transitionDelay: '.15s' }}>
          <div className="live-tag">
            <div className="live-dot"></div>
            <span>Live Demo — Try It Now</span>
          </div>
          <div className="chatbot-frame">
            <div className="cb-header">
              <div className="cb-avatar">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
              </div>
              <div>
                <div className="cb-name">Piros Sign Advisor</div>
                <div className="cb-sub">68 years of expertise · Est. 1957</div>
              </div>
              <div className="cb-online"></div>
            </div>

            <div className="cb-messages" ref={messagesRef}>
              {messages.map((msg, i) => (
                <div className={`cb-msg ${msg.role}`} key={i}>
                  <div className="cb-bubble">
                    {msg.text === '__typing__' ? (
                      <div className="typing-dots">
                        <span></span><span></span><span></span>
                      </div>
                    ) : (
                      msg.text.split('\n').map((line, j) => (
                        <span key={j}>{line}{j < msg.text.split('\n').length - 1 && <br />}</span>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            {showChips && (
              <div className="cb-qr">
                {QUICK_REPLIES.map((chip) => (
                  <button key={chip} className="cb-chip" onClick={() => send(chip)}>
                    {chip}
                  </button>
                ))}
              </div>
            )}

            <div className="cb-input-row">
              <input
                className="cb-input"
                type="text"
                placeholder="Describe your sign project…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button className="cb-send" onClick={() => send(input)} disabled={waiting}>
                <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
