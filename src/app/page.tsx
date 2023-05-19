import { FaHome } from 'react-icons/fa'

export default function Home() {
  
  return (
    <main>
      <FaHome size={50} />
      <h1 className="text-black-500">Next.JS {process.env.customKey}</h1>
    </main>
  )
}
