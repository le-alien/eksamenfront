import Navigationbar from '../components/Navigationbar'
import Headerxl from "../components/Headerxl"

const FAQ = () => {
  return (
    
    <div className='bg-neutral-700 h-screen'>
      <Navigationbar/>
      <div className="flex justify-center items-center flex-col">
        <h1 className='text-3xl'>
            FAQ:
        </h1>
        <Headerxl>
            Q: How do I create a post?
        </Headerxl>
        <p>Select a bord and then a thread that you want to contribute to</p>
        <p>press the new create post button and solve the capcha, youre done!</p>
        <br />
        <Headerxl>
            Q: How to reply to a post?
        </Headerxl>
        <p>Click on the post number of the post you want to reply to, write</p>
        <p>the reply and post!</p>
        <Headerxl>
            Q: What are the rules of the forum?
        </Headerxl>
        <p>The footer includes a link to our terms and rules</p>
        <Headerxl>
            Q: How do I report an user?
        </Headerxl>
        <p>To report an user click the arrow next to the post id, a droppdown</p>
        <p>menu will apear, click report user and give your reason</p>
      </div>
    </div>
  )
}

export default FAQ
