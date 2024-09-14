import React from 'react'
import { Reactions } from './Reactions'
import { useRef, useState } from 'react'
import { GoMute, GoUnmute } from "react-icons/go";
import { IoPlay } from "react-icons/io5";

export const SinglePostVideo = ({ post }) => {
    const videoRef = useRef(null)
    const [isMuted, setIsMuted] = useState(true)
    const [isPlaying,setPlay ] = useState(true)

    const toggleMute = () => {
        const video = videoRef.current
        if (video) {
            video.muted = !video.muted
            setIsMuted(!video.muted)
        }
    }

    const togglePlay = () => {
        const video = videoRef.current
        if (video) {
            if (video.paused) {
                video.play()
            } else {
                video.pause()
            }
            setPlay(play => !play)
        }
    }


    return (
        <>
            <p className="text-pretty font-sans md:text-2xl text-[var(--textsoft)]">{post.title}</p>
            <div className="w-[100%] bg-black">
                <div className="relative max-w-full mx-auto bg-black shadow-lg overflow-hidden">
                    <video
                        ref={videoRef}
                        className="w-full"
                        autoPlay
                        controls={false}
                        preload="auto"
                        muted={true}
                        loop
                        onClick={togglePlay}
                    >
                        <source src={post.media} type="video/mp4" />
                    </video>
                    {!isPlaying && (
                        <div
                            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-10 rounded-lg"
                            onClick={togglePlay}
                        >
                            <IoPlay className="text-white text-6xl cursor-pointer" />
                        </div>
                    )}
                    <button
                        className="absolute bottom-2 right-2 text-white bg-opacity-60 bg-black rounded-full p-2 shadow-lg"
                        onClick={toggleMute}
                    >
                        {isMuted ? (
                            <GoMute />
                        ) : (
                            <GoUnmute />
                        )}
                    </button>
                </div>
            </div>
            <Reactions />
        </>)
}
