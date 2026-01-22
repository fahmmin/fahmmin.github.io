export interface MediumPost {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    thumbnail: string;
    description: string;
    content: string;
    enclosure: object;
    categories: string[];
}

export async function getMediumPosts() {
    try {
        const res = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fahmindot",
            { next: { revalidate: 3600 } } // Revalidate every hour
        );
        const data = await res.json();
        return (data.items || []) as MediumPost[];
    } catch (error) {
        console.error("Error fetching Medium posts:", error);
        return [];
    }
}

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    return {
        year: date.getFullYear(),
        date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    };
}
