const Loading = ({ isActive }) => {
  return(
    <div className={`${!isActive && 'hidden'} absolute top-0 left-0 w-full h-full bg-base-300 flex items-center justify-center z-40`}>
      <span className="loading loading-bars text-primary loading-lg"></span>
    </div>
  )
}

export default Loading