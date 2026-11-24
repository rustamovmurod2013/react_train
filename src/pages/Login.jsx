import { useNavigate } from "react-router-dom";

function Login({setAuth}) {

    const navigate = useNavigate();

    function loginWithPassword(e) {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        if(email === "rustamovmurod2013@gmail.com" && password === "20132502") {
            setAuth(true)
            navigate("/")
            localStorage.setItem("auth", email)
        }

    }

  return (
    <div>


          <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"  className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
              Toggle modal
          </button>

          <div id="authentication-modal" tabindex="-1" aria-hidden="true"  className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div className="relative p-4 w-full h-screen flex justify-center items-center">
                  <div  className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                      <form onSubmit={loginWithPassword} action="#"  className="pt-4 md:pt-6">
                          <div  className="mb-4">
                              <label for="email"  className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                              <input type="email" id="email"  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="example@company.com" required />
                          </div>
                          <div className="mb-4">
                              <label for="password"  className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                              <input type="password" id="password"  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
                          </div>
                          <button type="submit"  className="text-white bg-[blue] box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3">Login to your account</button>
                          <div  className="text-sm font-medium text-body">Not registered? <a href="#"  className="text-fg-brand hover:underline">Create account</a></div>
                      </form>
                  </div>
              </div>
          </div> 

    </div>
  )
}

export default Login