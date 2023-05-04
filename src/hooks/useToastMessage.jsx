import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useToastMessage = (Msg) => {
  toast.success(Msg, {
    position: 'bottom-left',
    autoClose: 2000,
    hideProgressBar: false,
    rtl: false,
    theme: 'light',
    pauseOnHover: false,
  })
}

export default useToastMessage
