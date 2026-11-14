

function Home() {
  return (
    <>
      <section id="hero" className="bg-[#060606]">
        <div className="container mx-auto flex flex-col items-start justify-center px-4 py-20 sm:px-6 md:px-8 lg:py-[160px]">
          <h1 className="max-w-[563px] text-4xl font-[700] leading-tight text-white sm:text-5xl lg:text-[50px]">
            Instant collaboration for remote teams
          </h1>
          <p className="mt-4 max-w-[397px] text-base font-[400] text-white sm:text-lg lg:text-[18px]">
            All-in-one place for your remote team to chat, collaborate and track project progress.
          </p>
          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center lg:mt-[56px]">
            <input
              placeholder="Email"
              className="w-full rounded-[4px] border border-white px-4 py-3 text-sm font-[400] text-[#7676B2] placeholder:text-[#7676B2] sm:w-[240px] lg:text-[14px]"
              type="email"
            />
            <button className="w-full rounded-[4px] bg-blue-500 px-6 py-3 text-base font-[400] text-white transition hover:bg-blue-600 sm:w-auto lg:px-[44px] lg:py-[10px] lg:text-[18px]">
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-4 py-16 sm:px-6 md:flex-row md:px-8 md:py-[160px]">
          <div className="w-full md:max-w-[460px]">
            <h1 className="text-3xl font-[700] leading-tight text-[#232340] sm:text-4xl lg:text-[50px]">
              Chats for your distributed teams
            </h1>
            <p className="mt-6 mb-10 text-base font-[400] text-[#232340E5] sm:text-lg lg:text-[18px]">
              Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
            </p>
            <a href="*" className="text-blue-500 transition hover:text-blue-600">
              Learn more
            </a>
          </div>
          <div className="w-full md:flex md:justify-end">
            <img className="mx-auto w-full max-w-[600px] md:mx-0" src="/mockup.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-4 py-10 sm:px-6 md:flex-row md:px-8 md:py-[40px]">
          <div className="w-full md:max-w-[460px]">
            <img className="mx-auto w-full max-w-[460px] md:mx-0" src="/img-group.png" alt="" />
          </div>
          <div className="w-full md:max-w-[460px]">
            <h1 className="text-3xl font-[700] leading-tight text-[#232340] sm:text-4xl lg:text-[50px]">
              Chats for your distributed teams
            </h1>
            <p className="mt-6 mb-10 text-base font-[400] text-[#232340E5] sm:text-lg lg:text-[18px]">
              Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
            </p>
            <a href="*" className="text-blue-500 transition hover:text-blue-600">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-4 py-16 sm:px-6 md:flex-row md:px-8 md:py-[120px]">
          <div className="w-full md:max-w-[460px]">
            <h1 className="text-3xl font-[700] leading-tight text-[#232340] sm:text-4xl lg:text-[50px]">
              Choose how you want to work
            </h1>
            <p className="mt-6 mb-10 text-base font-[400] text-[#232340E5] sm:text-lg lg:text-[18px]">
              In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
            </p>
            <a href="*" className="text-blue-500 transition hover:text-blue-600">
              Learn more
            </a>
          </div>
          <div className="w-full md:flex md:justify-end">
            <img className="mx-auto w-full max-w-[460px] md:mx-0" src="/img-group (1).png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-4 py-16 sm:px-6 md:flex-row md:px-8 md:py-[120px]">
          <div className="w-full md:max-w-[460px]">
            <img className="mx-auto w-full max-w-[460px] md:mx-0" src="/img-group (2).png" alt="" />
          </div>
          <div className="w-full md:max-w-[460px]">
            <h1 className="text-3xl font-[700] leading-tight text-[#232340] sm:text-4xl lg:text-[50px]">
              Move faster with your Team tools
            </h1>
            <p className="mt-6 mb-10 text-base font-[400] text-[#232340E5] sm:text-lg lg:text-[18px]">
              With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.
            </p>
            <a href="*" className="text-blue-500 transition hover:text-blue-600">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center pb-10 pt-8 text-center md:py-[120px]">
            <h1 className="text-3xl font-[700] text-[#000000] sm:text-4xl lg:text-[50px]">
              What people say about Team
            </h1>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:justify-between">
            <div className="flex w-full max-w-[367px] flex-col border border-[#232340] px-5 py-8 sm:px-8">
              <div>
                <img className="max-w-[162px]" src="/Rating (3).png" alt="" />
              </div>
              <p className="mt-6 mb-10 max-w-[300px] text-base font-[400] text-[#232340E5] sm:text-lg lg:text-[18px]">
                Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div>
                  <img className="max-w-[56px] max-h-[56px]" src="/Avatar.png" alt="" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h1 className="text-xl font-[400] text-[#232340] sm:text-[24px]">Chealsea Morgan</h1>
                  <h2 className="text-sm font-[400] text-[#7676B2]">CEO ot Subway</h2>
                </div>
              </div>
            </div>

            <div className="flex w-full max-w-[367px] flex-col border border-[#232340] px-5 py-8 sm:px-8">
              <div>
                <img className="max-w-[162px]" src="/Rating (3).png" alt="" />
              </div>
              <p className="mt-6 mb-10 max-w-[300px] text-base font-[400] text-[#232340E5] sm:text-lg lg:text-[18px]">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div>
                  <img className="max-w-[56px] max-h-[56px]" src="/Avatar (1).png" alt="" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h1 className="text-xl font-[400] text-[#232340] sm:text-[24px]">Nick Cave</h1>
                  <h2 className="text-sm font-[400] text-[#7676B2]">CMO ot Nokia</h2>
                </div>
              </div>
            </div>

            <div className="flex w-full max-w-[367px] flex-col border border-[#232340] px-5 py-8 sm:px-8">
              <div>
                <img className="max-w-[162px]" src="/Rating (3).png" alt="" />
              </div>
              <p className="mt-6 mb-10 max-w-[300px] text-base font-[400] text-[#232340E5] sm:text-lg lg:text-[18px]">
                Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div>
                  <img className="max-w-[56px] max-h-[56px]" src="/Avatar (2).png" alt="" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h1 className="text-xl font-[400] text-[#232340] sm:text-[24px]">Lana Rosenfeld</h1>
                  <h2 className="text-sm font-[400] text-[#7676B2]">Pinterest</h2>
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