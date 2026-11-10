

function Home() {
  return (
    <>
      <section id="hero" className="bg-[#060606]">
        <div className="container mx-auto flex flex-col justify-center items-start py-[160px]">
          <h1 className="text-[50px] font-[700] text-[white] max-w-[563px]">Instant collaboration for remote teams</h1>
          <p className="text-[18px] font-[400] text-[white] mt-[16px] max-w-[397px]">All-in-one place for your remote team to chat, collaborate and track project progress.</p>
          <div className="flex gap-[16px] mt-[56px]">
            <input placeholder="Email" className="text-[14px] font-[400] text-[#7676B2] rounded-[4px] py-[12px] px-[16px] border border-[white]" type="email" />
            <button className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer py-[10px] px-[44px] rounded-[4px] text-[18px] font-[400]">Get Early Access</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex justify-between items-center py-[160px]">
          <div>
            <h1 className="text-[50px] font-[700] text-[#232340] max-w-[460px]">Chats for your distributed teams</h1>
            <p className="text-[18px] font-[400] text-[#232340E5] max-w-[460px] mt-[24px] mb-[48px]">Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.</p>
            <a href="*" className="text-blue-500 hover:text-blue-600">Learn more</a>
          </div>
          <div>
            <img className="max-w-[600px] max-h-[600px]" src="/mockup.png" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex justify-between items-center py-[40px]">
          <div>
            <img className="max-w-[460px]" src="/img-group.png" alt="" />
          </div>
          <div>
            <h1 className="text-[50px] font-[700] text-[#232340] max-w-[460px]">Chats for your distributed teams</h1>
            <p className="text-[18px] font-[400] text-[#232340E5] max-w-[460px] mt-[24px] mb-[48px]">Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.</p>
            <a href="*" className="text-blue-500 hover:text-blue-600">Learn more</a>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex justify-between items-center py-[120px]">
          <div>
            <h1 className="text-[50px] font-[700] text-[#232340] max-w-[460px]">Choose how you want to work</h1>
            <p className="text-[18px] font-[400] text-[#232340E5] max-w-[460px] mt-[24px] mb-[48px]">In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.</p>
            <a href="*" className="text-blue-500 hover:text-blue-600">Learn more</a>
          </div>
          <div>
            <img className="max-w-[460px]" src="/img-group (1).png" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex justify-between items-center py-[120px]">
          <div>
            <img className="max-w-[460px]" src="/img-group (2).png" alt="" />
          </div>
          <div>
            <h1 className="text-[50px] font-[700] text-[#232340] max-w-[460px]">Move faster with your Team tools</h1>
            <p className="text-[18px] font-[400] text-[#232340E5] max-w-[460px] mt-[24px] mb-[48px]">With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.</p>
            <a href="*" className="text-blue-500 hover:text-blue-600">Learn more</a>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center py-[120px]">
            <h1 className="text-[50px] font-[700] text-[#000000]">What people say about Team</h1>
          </div>
          <div className="flex justify-between items-center gap-[30px]">
            <div className="flex flex-col  py-[44px] px-[33px] border border-[#232340] max-h-[429px] max-w-[367px] w-full">
              <div>
                <img className="max-w-[162px]" src="/Rating (3).png" alt="" />
              </div>
              <p className="text-[18px] font-[400] text-[#232340E5] max-w-[300px] mt-[24px] mb-[40px]">Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.</p>
              <div className="flex gap-[16px] items-center">
                <div>
                  <img className="max-w-[56px] max-h-[56px]" src="/Avatar.png" alt="" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h1 className="text-[24px] font-[400] text-[#232340]">Chealsea Morgan</h1>
                  <h2 className="text-[14px] font-[400] text-[#7676B2]">CEO ot Subway</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col  py-[44px] px-[33px] border border-[#232340] max-h-[375px] max-w-[367px] w-full">
              <div>
                <img className="max-w-[162px]" src="/Rating (3).png" alt="" />
              </div>
              <p className="text-[18px] font-[400] text-[#232340E5] max-w-[300px] mt-[24px] mb-[40px]">In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.</p>
              <div className="flex gap-[16px] items-center">
                <div>
                  <img className="max-w-[56px] max-h-[56px]" src="/Avatar (1).png" alt="" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h1 className="text-[24px] font-[400] text-[#232340]">Nick Cave</h1>
                  <h2 className="text-[14px] font-[400] text-[#7676B2]">CMO ot Nokia</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col  py-[44px] px-[33px] border border-[#232340] max-h-[402px] max-w-[367px] w-full">
              <div>
                <img className="max-w-[162px]" src="/Rating (3).png" alt="" />
              </div>
              <p className="text-[18px] font-[400] text-[#232340E5] max-w-[300px] mt-[24px] mb-[40px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.</p>
              <div className="flex gap-[16px] items-center">
                <div>
                  <img className="max-w-[56px] max-h-[56px]" src="/Avatar (2).png" alt="" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h1 className="text-[24px] font-[400] text-[#232340]">Lana Rosenfeld</h1>
                  <h2 className="text-[14px] font-[400] text-[#7676B2]">Pinterest</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home