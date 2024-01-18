import Layout from "@/components/Layout";
import {useSession} from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
    <div className="text-white bg-blue-900 px-4 py-4 rounded-xl flex justify-between">
      <h2 className="">
        Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
        <img src={session?.user?.image} alt="" className="w-8 h-8"/>
        <span className="px-2 py-1">
          {session?.user?.name}
        </span>
      </div>
    </div>
  </Layout>
}
