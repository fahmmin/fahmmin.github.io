import { SOCIAL_LINKS } from "@/lib/data";

export default function Contact() {
    const xLink = SOCIAL_LINKS.find((link) => link.name === 'X');

    return (
        <div className="py-6 px-4 screen-line-before screen-line-after">
            <h1 className="text-2xl font-playfair font-medium tracking-tight mb-1 text-gray-900 dark:text-gray-100">
                Are you building on AI or Web3?
            </h1>
            <p className="my-5 lowercase text-gray-600 dark:text-gray-400 text-sm">
                Have a great idea and looking to collaborate? I&#x27;d love to help
                build it. Whether you&#x27;re building on AI, Web3 or any other
                cutting-edge technology, I can help you turn your vision into a reality.
                Let&#x27;s work together and build something amazing!
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
                message me on x at{" "}
                {xLink && (
                    <a
                        className="font-medium italic text-gray-900 dark:text-gray-100 relative group inline-block"
                        href={xLink.url}
                    >
                        <span className="relative z-10">{xLink.url.split('/').pop()?.replace('_', '')}</span>
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-out group-hover:w-full"></span>
                    </a>
                )}
                .
            </p>
        </div>
    );
}
