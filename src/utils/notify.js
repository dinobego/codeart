import { toast } from 'react-toastify';

export default function Notify(message, type) {
  if(["info", "success", "warn", "error"].includes(type)) {
    return toast[type](message)
  }

  return toast(message)
}
