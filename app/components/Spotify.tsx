import Image from "next/image";
import Link from "next/link";

async function getSpotifyData() {
    try {
        const res = await fetch(
            "https://spotify-recently-played-readme.vercel.app/api?user=31jfxvvbzi7huheyi3mq33janywq",
            { next: { revalidate: 60 } }
        );
        const text = await res.text();

        // Regex extraction
        // Extract Image (Base64)
        const imgMatch = text.match(/img src="([^"]+)"/);
        const image = imgMatch ? imgMatch[1] : null;

        // Extract Title (from title attribute of the link)
        // Note: The curl output showed <a ... href="..." title="No Idea">
        const titleMatch = text.match(/<a[^>]+title="([^"]+)"/);
        const title = titleMatch ? titleMatch[1] : null;

        // Extract Artist (from title attribute of the span in description)
        // The curl output showed <span ... title="Don Toliver">
        const artistMatch = text.match(/<span[^>]+title="([^"]+)"/);
        const artist = artistMatch ? artistMatch[1] : null;

        // Extract Link
        const linkMatch = text.match(/href="(https:\/\/open\.spotify\.com\/track\/[^"]+)"/);
        const link = linkMatch ? linkMatch[1] : "https://open.spotify.com/user/31jfxvvbzi7huheyi3mq33janywq";

        if (!title || !artist) {
            return null;
        }

        return {
            title,
            artist,
            image,
            link,
        };
    } catch (error) {
        console.error("Error fetching spotify data:", error);
        return null;
    }
}

export default async function Spotify() {
    const data = await getSpotifyData();

    if (!data) {
        return null; // Or return a skeleton/error state if preferred, but user just showed the loading skeleton in page.tsx
    }

    return (
        <div className="pt-1 px-1 pb-1 rounded-xl bg-muted dark:bg-black border border-border shadow-sm">
            <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg border border-border bg-card text-card-foreground hover:bg-secondary/50 transition-colors group"
            >
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden bg-gray-200 dark:bg-neutral-800 shrink-0 border border-black/5 dark:border-white/5">
                        {data.image ? (
                            <Image
                                src={data.image}
                                alt={data.title}
                                fill
                                className="object-cover"
                                unoptimized // Needed for data URIs sometimes or external domains not in next.config
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                                ?
                            </div>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors">
                            {data.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {data.artist}
                        </p>
                    </div>
                </div>
            </a>
            <div className="flex items-center gap-1.5 mt-1 px-2.5 pb-1">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-gray-400 dark:text-neutral-500 font-medium">
                    Recently Played
                </span>
            </div>
        </div>
    );
}
