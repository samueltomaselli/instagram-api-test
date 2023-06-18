import Image from "next/image";
import Link from "next/link";

export default function Home({ feed }: any) {
  const images = feed.data;

  return (
    <main className="bg-gray-200 h-screen w-screen p-10">
      <div className="flex flex-wrap gap-10 items-center justify-center h-full w-full">
        {images &&
          images.map((image: any, i: any) => (
            <Link
              href={image.permalink}
              key={image.id}
              className="relative w-[350px] h-[400px] transition-all duration-500 group"
            >
              <Image
                src={image.media_url}
                alt={image.caption}
                fill
                className="group-hover:opacity-0 transition-all duration-500 "
              />
              <h3 className="group-hover:block hidden transition-all duration-500">
                {image.caption}
              </h3>
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
