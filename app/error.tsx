
"use client"

const Error = ({error , reset} : {error : Error ; reset : () => void }) => {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-5'>
        <div className="text-2xl">Opsss nimadir xato ketdi</div>
        <div className="text-3xl">500</div>
        <div className="text-2xl">Errorning xabari: {error.message} </div>

    </div>
  )
}

export default Error