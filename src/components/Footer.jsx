

function Footer() {
  return (
    <div className="bg-[#232340] mt-[170px]">
      <div className="container mx-auto flex justify-between items-start py-[80px]">
        <div className="flex flex-col gap-[16px]">
          <div>
            <img className="max-w-[138px]" src="/Team.png" alt="" />
          </div>
          <h1 className="text-[14px] font-[400] text-[#F5F5F5] max-w-[168px] mt-[16px]">Collaboration platform for mordern team </h1>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[24px] font-[400] text-[#5468E7]">Company</h1>
          <ul className="text-[14px] font-[400] text-[#F5F5F5] flex flex-col gap-[12px] mt-[16px]">
            <li>Product</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[24px] font-[400] text-[#5468E7]">Features</h1>
          <ul className="text-[14px] font-[400] text-[#F5F5F5] flex flex-col gap-[12px] mt-[16px]">
            <li>Screen Sharing</li>
            <li>iOS & Android Apps</li>
            <li>File Sharing</li>
            <li>User Managment</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[14px]">
          <h1 className="text-[24px] font-[400] text-[#5468E7]">Contact Us</h1>
          <ul className="text-[14px] font-[400] text-[#F5F5F5] flex flex-col gap-[12px] mt-[16px]">
            <li>info@teamapp.com</li>
            <li>1-800-200-300</li>
            <li className="max-w-[138px]">1010 Sunset Blv.Palo Alto, California</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[24px] font-[400] text-[#5468E7]">Stay up to date </h1>
          <p className="text-[14px] font-[400] text-[#F5F5F5]">Subscribe to our newsletter</p>
          <input placeholder="Email" className="text-[14px] font-[400] text-[#F5F5F5] rounded-[4px] py-[12px] px-[16px] bg-[#F5F5F53D]" type="email" />
        </div>
      </div>
    </div>
  )
}

export default Footer