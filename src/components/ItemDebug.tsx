import ButtonNav from './ButtonNav'

interface info {
  color: string
  data?: []
  log?: string
}

function ItemDebug({color, data, log}: info) {
  return (
    <div className='p-5 rounded-lg bg-logy-card hover:bg-logy-card/70 hover:cursor-pointer shadow-sm flex gap-5 overflow-hidden'>
      <ButtonNav color={color} />
      <div className='w-full'>
        {!log && <h1 className='text-white text-lg'>My First debug item</h1>}
        {log && <pre className='bg-logy-browm text-white w-full p-3 rounded-lg'>firstName: "Pepe", lastName: "Doe" </pre>}
        <span className='text-[#aaa] font-normal'>src/components/Header/index.js:21</span>
      </div>
    </div>
  )
}

export default ItemDebug
