

function Header() {
  return (
    <div className=" bg-[#060606]">
      <div className="container mx-auto flex justify-between items-center py-[40px]">
        <a href="/">
          <img className="max-w-33 max-h-13" src="/Team.png" alt="Team" />
        </a>
        <div className="flex gap-[56px] items-center">
          <a className="text-white hover:text-blue-500 text-[16px] font-[500]" href="*">Product</a>
          <a className="text-white hover:text-blue-500 text-[16px] font-[500]" href="/blog">Blog</a>
          <a className="text-white hover:text-blue-500 text-[16px] font-[500]" href="*">Support</a>
          <a className="text-white hover:text-blue-500 text-[16px] font-[500]" href="*">Log In</a>
          <button className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer py-[10px] px-[44px] rounded-[4px] text-[18px] font-[400]">Get Access</button>
        </div>
      </div>
    </div>
  )
}

export default Header