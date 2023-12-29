import { alertType } from '../context/ProjectProvider'

export const Alert = (alert: alertType) => {

    return (
    <h3
    className={`${alert.error ? 'border-red-600' : 'from-sky-400 to-sky-600'} bg-gradient-to-br text-center text-sm font-bold mt-2 p-2 rounded text-red-600 font-poppins border-[2px]`}
    >{alert.msg}</h3>
  )
}
