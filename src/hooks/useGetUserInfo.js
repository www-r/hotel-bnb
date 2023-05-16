import { axiosFirebase } from '@/apis/axios'
import { useQuery } from 'react-query'
import { queryKeys } from '../utils/queryKeys'

export const getUserInfo = async (uid) => {
  const res = await axiosFirebase.get(`/users/${uid}.json`)
  //   console.log('getRooms', res.data)
  return res.data
}

export const useGetUserInfo = (uid) => {
  const fallback = []
  const { data: userInfo = fallback } = useQuery(queryKeys.user, () => getUserInfo(uid), {
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 60,
  })
  console.log({ userInfo })
  return { userInfo }
}
