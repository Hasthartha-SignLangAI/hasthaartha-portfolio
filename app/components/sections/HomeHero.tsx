import Image from "next/image";

export function HomeHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-b from-blue-50/80 to-white"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(59 130 246 / 0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgb(147 197 253 / 0.25), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Label */}
            {/* <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              Research Portfolio
            </p> */}

            {/* Title */}
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Hasthaartha
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg font-medium text-blue-800">
              AI-Powered Sinhala Sign Language Translation
            </p>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              A wearable EMG + IMU based system enabling real-time gesture recognition
              using edge AI. Designed to bridge communication gaps through accurate
              and personalized translation.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projectscope"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 hover:scale-105"
              >
                Explore Project
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition hover:bg-blue-50 hover:scale-105"
              >
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-10 text-sm text-slate-600">
              <div>
                <p className="text-xl font-bold text-blue-700">84.4%</p>
                <p>Model Accuracy</p>
              </div>
              <div>
                <p className="text-xl font-bold text-blue-700">Real-time</p>
                <p>Inference</p>
              </div>
              <div>
                <p className="text-xl font-bold text-blue-700">Edge AI</p>
                <p>ONNX Deployment</p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative">
              
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-blue-200/30 blur-3xl rounded-full" />

              {/* Main image */}
              <Image
                src="/deviceprop.png"
                alt="Device prototype"
                width={420}
                height={420}
                className="relative w-80 rounded-2xl shadow-lg transition duration-300 hover:scale-105"
                priority
              />

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-md border border-blue-100">
                <p className="text-xs text-slate-500">Prediction</p>
                <p className="text-sm font-semibold text-blue-700">“Hello”</p>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -top-6 -right-6 rounded-xl bg-white p-4 shadow-md border border-blue-100">
                <p className="text-xs text-slate-500">Status</p>
                <p className="text-sm font-semibold text-green-600">Live</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}