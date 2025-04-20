⚖️ Nyaya Jyoti – Frontend (React-based Legal Document Chatbot Platform)
“Making legal documentation accessible, smart, and fast.”

This is the official frontend of the Nyaya Jyoti Project, a chatbot-driven platform that allows users to create legally valid documents like Loan Agreements, Wills, Sale Deeds, Rent Agreements, and Friendly Loan Notices.

Developed as part of the Design Thinking & Innovation course at Bennett University.

🌐 Live Project Features
🧾 Legal Document Generator
User-friendly chatbot UI to collect document parameters

One-click access to backend notebooks (Google Colab)

Real-time .docx file generation

✍️ Digital Signature Verification (Coming Soon)
Upload 5 real signature samples during sign-up

System compares signed document input using AI

Notifies user if the signature is Genuine or Forged

👥 User Authentication
Integrated with Clerk for secure login & onboarding

Plan to store user-specific document history and signatures

📁 Folder Overview

Folder/File	Purpose
src/	Main React codebase for UI
components/	Chatbot, Document Cards, Navbar, Footer
pages/	Individual document generators
utils/	Helper functions and routing
public/	Static assets, logos
tailwind.config.js	Tailwind styling support
package.json	React project dependencies
.env.example	Example config for Clerk or backend links
📄 Supported Legal Documents

Document Type	Colab Notebook Link
📄 Loan Agreement	Open in Colab
🧾 Will Document	Coming Soon
🏠 Sale Deed	Coming Soon
🏢 Lease Agreement	Coming Soon
💵 Friendly Loan Notice	Coming Soon
(All notebooks include clause generation, parameter filling, and .docx download)

🚀 Running the Frontend
📦 Installation
bash
Copy
Edit
git clone https://github.com/bilalsadiq03/nyaya-jyoti.git
cd nyaya-jyoti
npm install
▶️ Start the App
bash
Copy
Edit
npm run dev
The app will be available at: http://localhost:3000

🔐 Clerk Integration (Optional)
Sign up at https://clerk.dev

Copy the Frontend API key

Create a .env.local file with:

env
Copy
Edit
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
🛠️ Technologies Used
⚛️ React.js (Next.js)

💅 TailwindCSS

🧠 GPT-Neo (backend)

🧾 python-docx (for document generation)

🔐 Clerk (authentication)

📎 Google Colab (hosted backend)

🧬 Signature AI model (CNN/Siamese - CEDAR Dataset)

👨‍💻 Project Team
Pulkit Malik – AI model development & backend integration

Bilal Sadiq – Frontend developer & deployment

Sanskar Sengar – Blockchain-based verification

Ansh Sindhu – Dataset collection and preprocessing



📌 Future Scope
✅ Deploy all document models via Colab + Flask backend

✅ Host chatbots via Hugging Face or Gradio

⏳ Blockchain verification of document ownership

⏳ Full signature detection pipeline integration
