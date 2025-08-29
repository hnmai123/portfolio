"use client";

import { useMemo } from "react";
import { ReactTyped } from "react-typed";
import ProfileImage from "../ProfileImage";

export default function About() {
  const typedStrings = useMemo(
    () => [
      '<span class="text-blue-500 text-3xl sm:text-4xl font-bold">Full Stack Developer</span>',
      '<span class="text-green-500 text-3xl sm:text-4xl font-bold">Software Engineer</span>',
      '<span class="text-purple-500 text-3xl sm:text-4xl font-bold">Programmer</span>',
    ],
    [],
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Text */}
        <div className="md:col-span-3 order-1">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Hi, this is <span className="text-blue-600">Huy Mai</span>
          </h2>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
            I am a{" "}
            <ReactTyped
              strings={typedStrings}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1500}
              loop
              contentType="html"
            />
          </h3>

          {/* Image shows here on mobile only */}
          <div className="md:hidden mb-8 flex justify-center">
            <div className="relative w-60 h-60 sm:w-64 sm:h-64">
              <ProfileImage
                src="/me.jpg"
                alt="Portrait of Huy Mai"
                size={256}
              />
            </div>
          </div>

          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            I love solving problems and finding patterns, with a strong passion
            for mathematics. Outside of coding, I enjoy relaxing, getting proper
            rest, and playing the piano as a way to ease stress. Life feels
            balanced when curiosity, creativity, and calmness come together, and
            my career goal is to grow into a well-rounded software engineer who
            builds impactful solutions and makes technology simple and
            accessible for everyone.
          </p>
        </div>

        {/* Image (desktop only) */}
        <div className="md:col-span-2 order-2 hidden md:flex justify-end">
          <div className="relative w-72 h-72">
            <ProfileImage src="/me.jpg" alt="Portrait of Huy Mai" size={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
