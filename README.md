# Hasthaartha Portfolio

**AI-Powered Sinhala Sign Language Translation**

Hasthaartha is a research-driven project focused on bridging the communication gap for the hearing and speech impaired in Sri Lanka. This repository contains the source code for the project's official portfolio website.

## Project Overview

The system uses a wearable device equipped with EMG and IMU sensors to capture muscle activity and motion data. This data is processed using Edge AI (ONNX models) to recognize Sinhala Sign Language gestures in real-time.

### Key Features
- **Real-time Inference**: Low-latency gesture recognition.
- **High Accuracy**: Achieving 84.4% model accuracy.
- **Edge AI Deployment**: Utilizing ONNX for efficient on-device processing.
- **Seamless Integration**: Connects wearable firmware with a host application via BLE.

## Technology Stack

- **Frontend**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hasthartha-SignLangAI/hasthaartha-portfolio.git
   cd hasthaartha-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js application routes and components.
- `public/`: Static assets (images, logos).
- `app/components/sections/`: Individual portfolio sections (Hero, Project Scope, Team, etc.).

---

Developed as part of the Hasthaartha Research Project.
