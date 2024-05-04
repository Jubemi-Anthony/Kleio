import Link from "next/link"

const Register = () => {
  return (
    <main className="h-screen bg-bright">
        <div className="pt-[2vh] w-11/12 mx-auto">
            <div className="w-1/3 mx-auto">
                <img src="/kleio2.png" alt="logo" />
            </div>
            <div className="text-center my-4">
                <h1 className="font-bold text-4xl mb-2">Welcome to the KLEIO</h1>
                <p className="text-grey text-2xl my-4 font-semibold">Connect with friends, discover new communities and share your life with others</p>
            </div>
            <section>
                <div className="flex flex-col gap-4 mt-5">
                    <button className="text-dark bg-white py-3 rounded-xl flex justify-center items-center gap-2 text-xl">
                        <img className="w-7" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-64.png" alt="google" />
                        Sign up with Google
                    </button>
                    <button className="text-dark bg-white py-3 rounded-xl flex justify-center items-center gap-2 text-xl">
                        <img className="w-7" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-64.png" alt="facebook" />
                        Sign up with Facebook
                    </button>
                </div>
                <p className="text-center font-semibold text-xl my-5">or</p>
                <Link href='/'>
                    <p className="bg-army text-white text-center py-3 text-xl font-semibold rounded-xl">Create an Account</p>
                </Link>
            </section>
            <Link href='/login'>
                <p className="text-lg mt-7 text-ash font-semibold">Already have an account? <span className="text-army font-bold">Sign in</span></p>
            </Link>
        </div>
    </main>
  )
}

export default Register