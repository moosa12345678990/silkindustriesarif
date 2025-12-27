"use client"

import React, { useRef, useState, useEffect } from "react"
import { Leaf } from "../svg"

const VideoTwo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [showSoundPrompt, setShowSoundPrompt] = useState<boolean>(false)
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  /* ================= CHECK DEVICE TYPE ================= */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  /* ================= VIDEO LOADED ================= */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoaded = () => {
      setTimeout(() => {
        setShowSoundPrompt(true)
      }, 2000)
    }

    video.addEventListener("loadeddata", handleLoaded)
    return () => video.removeEventListener("loadeddata", handleLoaded)
  }, [])

  /* ================= AUTO HIDE PROMPT ================= */
  useEffect(() => {
    if (!showSoundPrompt) return

    const timer = setTimeout(() => {
      setShowSoundPrompt(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [showSoundPrompt])

  /* ================= MUTE / UNMUTE ================= */
  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    const newMutedState = !isMuted
    video.muted = newMutedState

    setIsMuted(newMutedState)
    setHasUserInteracted(true)
    setShowSoundPrompt(false)

    // Button animation
    if (buttonRef.current) {
      buttonRef.current.style.transform = "scale(0.9)"
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.style.transform = "scale(1)"
        }
      }, 150)
    }
  }

  /* ================= JSX ================= */
  return (
    <div className="video-section">
      <div className="video-container">
        <div className="video-wrapper">
          {/* VIDEO BACKGROUND */}
          <div className="video-overlay" />
          <video
            ref={videoRef}
            className="background-video"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          >
            <source src="/assets/video/1118.mp4" type="video/mp4" />
          </video>

          {/* SOUND PROMPT - TOP RIGHT CORNER */}
          {showSoundPrompt && !hasUserInteracted && (
            <div className={`sound-prompt ${isMobile ? 'mobile-prompt' : ''}`}>
              <div className="prompt-content">
                <div className="prompt-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="prompt-text">
                  <span className="prompt-title">
                    Sound controls
                  </span>
                  <span className="prompt-subtitle">
                    Top left corner
                  </span>
                </div>
              </div>
              <div className="prompt-close" onClick={() => setShowSoundPrompt(false)}>
                ×
              </div>
            </div>
          )}

          {/* COMPACT SOUND CONTROLS - TOP LEFT SIDE */}
          <div className={`sound-controls ${isMobile ? 'mobile-controls' : ''}`}>
            <button
              ref={buttonRef}
              onClick={toggleMute}
              className={`sound-button ${isMuted ? 'muted' : 'unmuted'} ${isMobile ? 'mobile-button' : ''}`}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              <div className="button-content">
                {isMuted ? (
                  <svg className="sound-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3L21 21M9 9V5L13 3V9M13 15V21L9 19V15M5 9V15H9L15 21V3L9 9H5Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg className="sound-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M15.5 8.5C16.0304 9.03043 16.3284 9.75 16.3284 10.5C16.3284 11.25 16.0304 11.9696 15.5 12.5M18 6C19.6569 7.65685 20.5 10 20.5 12.5C20.5 15 19.6569 17.3431 18 19M5 9V15H9L15 21V3L9 9H5Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                <span className="button-text">
                  {isMuted ? "Sound Off" : "Sound On"}
                </span>
              </div>
              <div className={`status-indicator ${isMuted ? 'muted' : 'unmuted'}`} />
            </button>
          </div>

          {/* CONTENT */}
          <div className="video-content">
            <div className="content-inner">
              <div className="leaf-icon">
                <Leaf />
              </div>
              <h2 className="video-message">
                We believe in <span className="highlight">Eco-Friendly Chemicals</span> and sustainable production
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* FIXED STYLES FOR VIDEO DISPLAY */}
      <style jsx>{`
        .video-section {
          padding: 0 1rem 3rem;
        }

        .video-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .video-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #000;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
        }

        @media (min-width: 1400px) {
          .video-wrapper {
            border-radius: 24px;
          }
        }

        .background-video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          display: block;
        }

        /* For mobile portrait, adjust the aspect ratio */
        @media (max-width: 768px) and (orientation: portrait) {
          .video-wrapper {
            padding-bottom: 75%; /* 4:3 Aspect Ratio for mobile portrait */
          }
          
          .background-video {
            width: 100%;
            height: auto;
            min-width: auto;
            min-height: auto;
          }
        }

        /* For mobile landscape */
        @media (max-width: 768px) and (orientation: landscape) {
          .video-wrapper {
            padding-bottom: 40%; /* Wider aspect ratio for landscape */
          }
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.1) 30%,
            rgba(0, 0, 0, 0.7) 100%
          );
          z-index: 1;
        }

        /* SOUND PROMPT - TOP RIGHT */
        .sound-prompt {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 30;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: slideDown 0.3s ease;
          max-width: 220px;
        }

        .mobile-prompt {
          top: 15px;
          right: 15px;
          padding: 10px 14px;
          max-width: 180px;
          border-radius: 10px;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .prompt-content {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .prompt-icon {
          color: #4CAF50;
          flex-shrink: 0;
        }

        .mobile-prompt .prompt-icon {
          font-size: 18px;
        }

        .prompt-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .prompt-title {
          font-size: 13px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.2;
        }

        .prompt-subtitle {
          font-size: 11px;
          color: #666;
          line-height: 1.2;
        }

        .mobile-prompt .prompt-title {
          font-size: 12px;
        }

        .mobile-prompt .prompt-subtitle {
          font-size: 10px;
        }

        .prompt-close {
          font-size: 18px;
          color: #999;
          cursor: pointer;
          padding: 0 4px;
          line-height: 1;
          user-select: none;
        }

        .mobile-prompt .prompt-close {
          font-size: 16px;
        }

        /* COMPACT SOUND CONTROLS - TOP LEFT SIDE */
        .sound-controls {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 20;
        }

        .mobile-controls {
          top: 15px;
          left: 15px;
        }

        .sound-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          min-height: 40px;
        }

        .mobile-button {
          padding: 6px 14px;
          min-height: 36px;
          gap: 6px;
        }

        .sound-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .sound-button:active {
          transform: translateY(0);
        }

        .sound-button.muted {
          border: 1px solid rgba(255, 68, 68, 0.3);
        }

        .sound-button.unmuted {
          border: 1px solid rgba(76, 175, 80, 0.3);
        }

        .button-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mobile-button .button-content {
          gap: 6px;
        }

        .sound-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .mobile-button .sound-icon {
          width: 16px;
          height: 16px;
        }

        .button-text {
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
          white-space: nowrap;
        }

        .mobile-button .button-text {
          font-size: 13px;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: background-color 0.3s ease;
        }

        .mobile-button .status-indicator {
          width: 6px;
          height: 6px;
        }

        .status-indicator.muted {
          background-color: #ff4444;
          box-shadow: 0 0 8px rgba(255, 68, 68, 0.4);
        }

        .status-indicator.unmuted {
          background-color: #4CAF50;
          box-shadow: 0 0 8px rgba(76, 175, 80, 0.4);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(76, 175, 80, 0); }
          100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
        }

        /* VIDEO CONTENT */
        .video-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          z-index: 10;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.6) 30%,
            transparent 70%
          );
        }

        @media (max-width: 768px) {
          .video-content {
            padding: 1.5rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .video-content {
            padding: 1rem 0.75rem;
          }
        }

        .content-inner {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .leaf-icon {
          margin-bottom: 12px;
          display: inline-flex;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .video-message {
          font-size: clamp(1.25rem, 4vw, 2.5rem);
          font-weight: 600;
          color: white;
          line-height: 1.3;
          margin: 0;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 768px) {
          .video-message {
            line-height: 1.4;
          }
        }

        .highlight {
          color: #9ebf32;
          position: relative;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: #9ebf32;
          border-radius: 1px;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1024px) {
          .video-wrapper {
            max-height: none;
          }
          
          .sound-prompt {
            max-width: 200px;
          }
        }

        @media (max-width: 768px) {
          .video-section {
            padding: 0 0.75rem 2rem;
          }
          
          .video-wrapper {
            border-radius: 16px;
            max-height: none;
          }
          
          .sound-prompt {
            top: 12px;
            right: 12px;
            padding: 10px 12px;
            max-width: 170px;
            border-radius: 10px;
          }
          
          .sound-controls {
            top: 15px;
            left: 15px;
          }
          
          .sound-button {
            padding: 7px 14px;
            min-height: 36px;
          }
          
          .button-text {
            font-size: 13px;
          }
        }

        @media (max-width: 640px) {
          .video-wrapper {
            max-height: none;
            min-height: 0;
          }
          
          .sound-prompt {
            max-width: 160px;
            padding: 8px 12px;
          }
          
          .prompt-title {
            font-size: 12px;
          }
          
          .prompt-subtitle {
            font-size: 11px;
          }
          
          .sound-button {
            padding: 6px 12px;
            min-height: 34px;
          }
          
          .button-text {
            font-size: 12px;
          }
          
          .sound-icon {
            width: 16px;
            height: 16px;
          }
        }

        @media (max-width: 480px) {
          .video-wrapper {
            max-height: none;
            min-height: 0;
            border-radius: 12px;
          }
          
          .video-section {
            padding: 0 0.5rem 1.5rem;
          }
          
          .sound-prompt {
            top: 10px;
            right: 10px;
            max-width: 140px;
            padding: 6px 10px;
          }
          
          .prompt-content {
            gap: 8px;
          }
          
          .prompt-icon {
            font-size: 16px;
          }
          
          .prompt-title {
            font-size: 11px;
          }
          
          .prompt-subtitle {
            font-size: 10px;
          }
          
          .prompt-close {
            font-size: 16px;
          }
          
          .sound-controls {
            top: 12px;
            left: 12px;
          }
          
          .sound-button {
            padding: 5px 10px;
            min-height: 32px;
          }
          
          .button-text {
            font-size: 11px;
          }
          
          .sound-icon {
            width: 14px;
            height: 14px;
          }
          
          .status-indicator {
            width: 6px;
            height: 6px;
          }
          
          .video-message {
            font-size: clamp(1rem, 3.5vw, 1.5rem);
          }
        }

        @media (max-width: 360px) {
          .sound-prompt {
            max-width: 130px;
            padding: 5px 8px;
          }
          
          .prompt-title {
            font-size: 10px;
          }
          
          .prompt-subtitle {
            font-size: 9px;
          }
          
          .sound-button {
            padding: 4px 8px;
            min-height: 30px;
          }
          
          .button-text {
            font-size: 10px;
          }
          
          .sound-icon {
            width: 14px;
            height: 14px;
          }
          
          .status-indicator {
            width: 5px;
            height: 5px;
          }
          
          .video-message {
            font-size: 1rem;
          }
        }

        /* TOUCH DEVICE OPTIMIZATIONS */
        @media (hover: none) and (pointer: coarse) {
          .sound-button:hover {
            transform: none;
          }
          
          .sound-button:active {
            transform: scale(0.95);
          }
          
          .prompt-close {
            padding: 8px 4px;
          }
        }

        /* EXTRA SMALL SCREENS - HIDE TEXT, SHOW ICON ONLY */
        @media (max-width: 320px) {
          .sound-button {
            padding: 6px 8px;
          }
          
          .button-text {
            display: none;
          }
          
          .status-indicator {
            display: none;
          }
          
          .sound-prompt {
            max-width: 120px;
            padding: 4px 6px;
          }
          
          .prompt-title {
            font-size: 9px;
          }
          
          .prompt-subtitle {
            display: none;
          }
        }

        /* ENSURE VIDEO IS VISIBLE ON ALL SCREENS */
        @media (max-height: 500px) and (orientation: landscape) {
          .video-wrapper {
            padding-bottom: 40vh;
          }
        }
      `}</style>
    </div>
  )
}

export default VideoTwo