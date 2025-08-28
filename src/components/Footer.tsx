import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 py-6 sm:py-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
        {/* Social icons */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
          <a
            href="mailto:nhathuylk0123@email.com"
            aria-label="Mail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-3xl sm:text-4xl text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            />
          </a>
          <a
            href="https://github.com/hnmai123"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-3xl sm:text-4xl text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nhat-huy-mai/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-3xl sm:text-4xl text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Huy Mai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
