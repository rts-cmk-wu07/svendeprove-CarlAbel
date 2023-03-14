import axios from "axios"
import useCookie from "react-use-cookie"
import { useState, useContext, useEffect } from "react"
import { TokenContext } from "../components/TokenProvider"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { SyncLoader } from 'react-spinners';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [, setTokenCookie] = useCookie("trainer-cookie", undefined)
  const { token, setToken } = useContext(TokenContext)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  async function onSubmit(data) {
    setIsLoading(true)

    try {
      const response = await axios.post("http://localhost:4000/auth/token", {
        username: data.username,
        password: data.password
      })
      if (response.status === 200) {
        if (data.remember) {
          const milliseconds = response.data.validUntil - Date.now()
          const validFor = milliseconds / (1000 * 60 * 60 * 24)
          setTokenCookie(JSON.stringify(response.data), {
            days: validFor,
            SameSite: "Strict"
          })
        }
        setToken(response.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(function() {
    if (token) {
      navigate("/profile")
    }
  }, [token, navigate])

  return (
    <>
		<div className="Login">
			<h1 className="text-2xl font-bold mb-4">Log in</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
				<label className="mb-2">
				Username
				<input type="text" name="username" {...register("username", { required: true })} className={`border rounded py-1 px-2 ${errors.username && "border-red-500"}`} />
				{errors.username && <span className="text-red-500">This field is required</span>}
				</label>
				<label className="mb-2">
				Password
				<input type="password" name="password" {...register("password", { required: true })} className={`border rounded py-1 px-2 ${errors.password && "border-red-500"}`} />
				{errors.password && <span className="text-red-500">This field is required</span>}
				</label>
				<label className="mb-2">
				<input type="checkbox" name="remember" {...register("remember")} />
				Remember me
				</label>
				<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={isLoading}>
				{isLoading ? <SyncLoader color="#36d7b7" /> : "Log in"}
				</button>
			</form>
		</div>
    </>
  )
}

