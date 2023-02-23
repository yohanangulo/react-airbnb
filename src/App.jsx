import CardSection from "./components/CardSection";
import Challengue from "./components/Challengue";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <CardSection /> */}

      <Challengue
        img={"https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg"}
        name={"Pachequito"}
        phoneNum={"04129613339"}
        email={"pacheco@gmail.com"}
      />
      
      <Challengue
        img={"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"}
        name={"Sinforozo"}
        phoneNum={"04122176985"}
        email={"siforozo@gmail.com"}
      />

      <Challengue
        img={"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
        name={"michi"}
        phoneNum={"04121334374"}
        email={"michi@gmail.com"}
      />

      <Challengue
        img={"https://lanaicatsanctuary.org/wp-content/uploads/2022/11/Hilo-copy3.png"}
        name={"venustiano"}
        phoneNum={"04121202054"}
        email={"venustiano@gmail.com"}
      />
    </>
  )
}