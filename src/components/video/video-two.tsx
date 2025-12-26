'use client';
import React, { useRef, useState, useEffect } from "react";
import { Leaf } from "../svg";

const VideoTwo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showSoundPrompt, setShowSoundPrompt] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Show sound prompt after video loads
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      setTimeout(() => {
        setShowSoundPrompt(true);
      }, 2000);
    };

    video.addEventListener('loadeddata', handleLoaded);
    return () => video.removeEventListener('loadeddata', handleLoaded);
  }, []);

  // Hide prompt when user interacts
  useEffect(() => {
    if (hasUserInteracted && showSoundPrompt) {
      setTimeout(() => {
        setShowSoundPrompt(false);
      }, 500);
    }
  }, [hasUserInteracted, showSoundPrompt]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
    setHasUserInteracted(true);

    // Visual feedback
    const btn = document.querySelector('.video-sound-btn');
    if (btn) {
      btn.style.transform = 'scale(1.2)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
      }, 200);
    }
  };

  // Auto-hide sound prompt after 5 seconds
  useEffect(() => {
    if (showSoundPrompt) {
      const timer = setTimeout(() => {
        setShowSoundPrompt(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSoundPrompt]);

  return (
    <div className="tp-video-area green-about-section" style={{ paddingBottom: '80px' }}>
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-video-wrap p-relative">

              {/* VIDEO */}
              <video
                ref={videoRef}
                className="play-video"
                autoPlay
                loop
                muted={true}
                playsInline
              >
                <source
                  src="/assets/video/1118.mp4"
                  type="video/mp4"
                />
              </video>

              {/* SOUND PROMPT OVERLAY */}
              {showSoundPrompt && !hasUserInteracted && (
                <div className="sound-prompt-overlay">
                  <div className="sound-prompt-content">
                    <div className="sound-icon">🔊</div>
                    <h3>Enable Sound</h3>
                    <p>Click the sound button to experience this video with audio</p>
                    <div className="sound-prompt-arrow">→</div>
                  </div>
                </div>
              )}

              {/* SIDE SOUND CONTROLS */}
              <div className="side-sound-controls">
                <div className="sound-controls-wrapper">
                  {/* MUTE / UNMUTE BUTTON */}
                  <button
                    onClick={toggleMute}
                    className="video-sound-btn"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    title={isMuted ? "Click to unmute" : "Click to mute"}
                  >
                    {isMuted ? '🔇' : '🔊'}
                    <span className="sound-btn-tooltip">
                      {isMuted ? "Sound Off" : "Sound On"}
                    </span>
                  </button>

                  {/* SOUND STATUS INDICATOR */}
                  <div className="side-sound-status">
                    <div className={`side-status-indicator ${isMuted ? 'muted' : 'unmuted'}`} />
                    <span className="side-status-text">
                      {isMuted ? "MUTED" : "SOUND ON"}
                    </span>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="tp-video-content text-center">
                <span className="tp-video-subtitle">
                  <span><Leaf /></span>
                  We believe in Eco-Friendly Chemicals and sustainable production
                </span>

                {/* <h2 className="tp-video-title">
                  {isMuted ? "Watch with Sound" : "Now Playing with Sound"}
                </h2> */}

                <p className="video-description">
                  {/* Add your video description here */}
                </p>

                {/* REMOVED THE DUPLICATE UNMUTE BUTTON FROM CENTER */}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .tp-video-area {
          padding-bottom: 80px; /* Bottom padding added */
        }
        
        .tp-video-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }

        /* SIDE SOUND CONTROLS */
        .side-sound-controls {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        .green-about-section {
          background: linear-gradient(135deg, #f8f9f8 0%, #f0f4eb 100%);
          position: relative;
          overflow: hidden;
        }
        
        .green-about-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(181, 211, 52, 0.1) 0%, rgba(181, 211, 52, 0) 70%);
          border-radius: 50%;
          z-index: 0;
        }
        
        .green-about-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(181, 211, 52, 0.08) 0%, rgba(181, 211, 52, 0) 70%);
          border-radius: 50%;
          z-index: 0;
        }

        .sound-controls-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          padding: 20px 15px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        /* MAIN SOUND BUTTON */
        .video-sound-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #9EBF32, #7a9828);
          color: white;
          border: none;
          font-size: 28px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .video-sound-btn:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
        }

        .video-sound-btn:hover .sound-btn-tooltip {
          opacity: 1;
          transform: translateY(0);
        }

        .sound-btn-tooltip {
          position: absolute;
          left: -140px;
          top: 50%;
          transform: translateY(-50%) translateX(-10px);
          background: rgba(0, 0, 0, 0.95);
          color: white;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
          z-index: 3;
        }

        .sound-btn-tooltip::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -6px;
          transform: translateY(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: transparent transparent transparent rgba(0, 0, 0, 0.95);
        }

        /* SIDE SOUND STATUS */
        .side-sound-status {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .side-status-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .side-status-indicator.muted {
          background-color: #ff4444;
          animation: pulseMuted 1.5s infinite;
        }

        .side-status-indicator.unmuted {
          background-color: #9EBF32;
          animation: pulseUnmuted 2s infinite;
          box-shadow: 0 0 20px rgba(158, 191, 50, 0.5);
        }

        .side-status-text {
          color: white;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          opacity: 0.9;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          margin: 10px 0;
        }

        /* Sound Prompt Overlay */
        .sound-prompt-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 15;
          animation: fadeIn 0.5s ease;
        }

        .sound-prompt-content {
          background: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          max-width: 400px;
          animation: slideUp 0.5s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .sound-icon {
          font-size: 48px;
          margin-bottom: 15px;
          animation: pulse 2s infinite;
        }

        .sound-prompt-content h3 {
          color: #333;
          margin-bottom: 10px;
          font-size: 22px;
        }

        .sound-prompt-content p {
          color: #666;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .sound-prompt-arrow {
          font-size: 32px;
          color: #9EBF32;
          animation: bounceRight 1.5s infinite;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes bounceRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }

        @keyframes pulseMuted {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes pulseUnmuted {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(158, 191, 50, 0.7);
          }
          70% { 
            box-shadow: 0 0 0 15px rgba(158, 191, 50, 0);
          }
          100% { 
            box-shadow: 0 0 0 0 rgba(158, 191, 50, 0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .side-sound-controls {
            right: 15px;
          }
          
          .sound-controls-wrapper {
            padding: 15px 10px;
            gap: 12px;
          }
          
          .video-sound-btn {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }
        }

        @media (max-width: 768px) {
          .side-sound-controls {
            top: auto;
            bottom: 20px;
            right: 50%;
            transform: translateX(50%);
            flex-direction: row;
          }
          
          .sound-controls-wrapper {
            flex-direction: row;
            padding: 15px 25px;
            gap: 20px;
          }
          
          .side-sound-status {
            flex-direction: row;
            gap: 15px;
          }
          
          .side-status-text {
            writing-mode: horizontal-tb;
            transform: none;
            margin: 0;
          }
          
          .sound-btn-tooltip {
            left: 50%;
            top: -50px;
            transform: translateX(-50%) translateY(10px);
          }
          
          .sound-btn-tooltip::after {
            top: 100%;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            border-color: rgba(0, 0, 0, 0.95) transparent transparent transparent;
          }
          
          /* Adjust bottom padding for mobile */
          .tp-video-area {
            padding-bottom: 60px;
          }
        }

        @media (max-width: 480px) {
          .sound-controls-wrapper {
            padding: 12px 20px;
            gap: 15px;
          }
          
          .video-sound-btn {
            width: 45px;
            height: 45px;
            font-size: 22px;
          }
          
          .side-status-text {
            font-size: 11px;
          }
          
          /* Adjust bottom padding for small mobile */
          .tp-video-area {
            padding-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoTwo;