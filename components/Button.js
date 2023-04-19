
const Button = ({ children, onClick }) => {
  return (
    <button
      className={` space-x-3 mr-8 font-semibold bg-gradient-to-r from-blue-500 to-purple-600
      text-gray-100 rounded-full ring-2 ring-slate-400 px-3 py-2 
      hover:bg-white hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-slate-800/100`}
      onClick={onClick}
    >{children}</button>
  )
}

export default Button