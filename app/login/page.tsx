import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextAuth]/route"
import { LoginForm } from "../../components/login"

export default async function LoginPage() {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    redirect("/")
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Kirish</h1>
        <LoginForm />
      </div>
    </div>
  )
}