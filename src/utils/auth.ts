import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET as string

export const useAuthenticate = async () => {
  const cookie = cookies()
  const token = cookie.get('access_token')

  if (!token) {
    redirect('/')
  }

  try {
    const user = jwt.verify(token.value, secret)
    return
  } catch (error) {
    redirect('/')
  }
}
