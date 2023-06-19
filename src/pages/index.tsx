import Image from "next/image";
import Link from "next/link";

export default function Home({ feed }: any) {
  const images = feed.data;

  return (
    <main className="bg-gray-200 h-screen w-screen p-10 overflow-x-hidden">
      <div className="flex flex-wrap gap-10 items-center justify-center h-full w-full">
        {images &&
          images.map((image: any, i: any) => (
            <Link href={image.permalink} key={image.id} className="w-[320px] h-[380px] ">
              <img
                src={image.media_url}
                alt={image.caption}
                className="grayscale hover:grayscale-0 h-full"
              />
            </Link>
          ))}
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      feed,
    },
  };
};
