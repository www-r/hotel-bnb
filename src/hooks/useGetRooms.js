import { useQuery } from 'react-query'
import { queryKeys } from '../utils/queryKeys'
import { axiosFirebase } from '@/apis/axios'

const getRooms = async () => {
  const res = await axiosFirebase.get('/rooms.json')
  //   console.log('getRooms', res.data)
  return res.data
}

export const useGetRooms = () => {
  const fallback = []
  const { data: rooms = fallback } = useQuery(queryKeys.rooms, () => getRooms(), {
    staleTime: Infinity,
    cacheTime: Infinity,
    keepPreviousData: true,
  })
  return { rooms }
}
