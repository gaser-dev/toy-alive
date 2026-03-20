# 🧸 Vivitoy — Bring Your Toys to Life

Turn any toy into a talking, real character using AI! Snap a photo or upload an image of a stuffed animal, action figure, or any toy — and watch as it comes alive with its own name, personality, and voice.

![Vivitoy](https://img.shields.io/badge/Powered%20By-OpenRouter%20AI-purple)

## ✨ Features

- 📸 **Camera Capture** — Take a photo directly using your device camera
- 🖼️ **Image Upload** — Drag & drop or browse for any toy image
- ✏️ **Toy Description** — Optionally describe your toy for better character creation
- 🤖 **AI Vision Analysis** — Identifies toy type, species, colors, and features
- 🎭 **Character Generation** — Creates a unique name, personality, backstory, and catchphrase
- 🗣️ **Voice Output** — Speaks in character using browser text-to-speech
- 🎤 **Voice Input** — Talk to your toy with speech recognition
- 💬 **Live Chat** — Have conversations with your toy in real-time
- ✨ **Magic Animations** — Glowing, sparkle, and talking effects
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop

## 🚀 Getting Started

### 1. Set Up Vercel

This app uses a Vercel Serverless Function (`api/openrouter.js`) to securely hide your API key from the frontend.

1. Get a free key at [openrouter.ai/keys](https://openrouter.ai/keys)
2. Import this repository into [Vercel](https://vercel.com/new)
3. In the Vercel project settings, add an Environment Variable:
   - **Key**: `OPENROUTER_API_KEY`
   - **Value**: `sk-or-v1-...` (your key)
4. Deploy!

### 2. Run Locally

To run locally with the secure backend, use the Vercel CLI:

```bash
npm install -g vercel
vercel dev
```
*(Make sure to link your project and pull the `.env` file first, or create a `.env.local` file with your `OPENROUTER_API_KEY`)*

### 3. Use the App

1. Snap a photo or upload a toy image
2. Optionally describe your toy
3. Click "Bring to Life" ✨
4. Chat with your new talking friend!

## 🛠️ Tech Stack

- **Frontend**: Pure HTML + CSS + JavaScript (no frameworks)
- **AI Model**: `meta-llama/llama-3.2-11b-vision-instruct:free` via OpenRouter
- **Voice**: Web Speech API (SpeechSynthesis + SpeechRecognition)
- **Camera**: MediaDevices API (getUserMedia)
- **Animations**: CSS keyframes + JavaScript

## 📁 Project Structure

```
├── index.html       # Main page with three screens
├── style.css        # Design system, animations, responsive styles
├── api.js           # OpenRouter API integration
├── speech.js        # Text-to-speech & speech recognition
├── animations.js    # Talking effects & sparkle particles
└── app.js           # Main app controller & orchestration
```

## 📄 License

MIT
