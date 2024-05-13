import Header from "./Header"
import Nav from "./Nav"
import Post from "./Post"

const Main = ({user}) => {
  return (
    <main className="bg-[#E8E8E8] mb-20">
        <Header user={user}/>
        <section className="pt-24 w-[95%] mx-auto pb-2">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </section>
        <Nav/>
    </main>
  )
}

export default Main