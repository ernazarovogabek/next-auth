import Link from "next/link"


const Header = () => {
  return (
    <header className="flex items-center justify-center gap-5 bg-blue-500 p-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link> 
    </header>
  )
}

export default Header