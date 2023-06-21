import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home({ feed }: any) {
  const images = feed.data;

  return (
    <>
      <Header />
      <div className="h-20"></div>
      <main className="flex justify-center py-20 px-4">
        <div className="max-w-[1140px]">
          <div className="flex gap-10 flex-wrap justify-center">
            {images &&
              images.map((image: any, i: any) => (
                <Link href={image.permalink} key={image.id} className="">
                  <div className="rounded-xl">
                    <img
                      src={image.media_url}
                      alt={image.caption}
                      className="w-[350px] h-80 grayscale hover:grayscale-0 rounded-lg shadow shadow-lg"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </>
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
