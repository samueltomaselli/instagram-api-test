import Header from "@/components/Header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";

export default function Home({ feed }: any) {
  const images = feed.data;

  return (
    <>
      <Header />
      <div className="h-20"></div>
      <main className="flex justify-center py-20 px-4 bg-gray-100">
        <div className="max-w-[1140px]">
          <div className="flex gap-10 flex-wrap justify-center">
            {images &&
              images.map((image: any, i: any) => (
                <div key={image.id}>
                  <Link href={image.permalink} className="">
                    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow 0">
                      <img className="rounded-t-lg h-[300px] w-full" src={image.media_url} alt="" />
                      <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                          {format(new Date(image.timestamp), "dd 'de' MMMM 'de' yyyy", {
                            locale: ptBR,
                          })}
                        </h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">
                          {image.caption}
                        </p>
                        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none ">
                          Ler mais
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
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
