import "./App.css";
import { Greet } from "./Components/Greet";
import Welcome from "./Components/welcome";
import Message from "./Components/Message";
import Counter from "./Components/counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBinding from "./Components/EventBinding";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
import StyleSheet from "./Components/StyleSheet";
import Inline from "./Components/Inline";
import "./appStyle.css";
import ComponentC from "./Components/ComponentC";
import { UserProvider } from "./Components/UserContext";
import ClickCounter2 from "./Components/ClickCounter2";
import HoverCounter2 from "./Components/HoverCounter2";
import User from "./Components/User";
import Counter2 from "./Components/Counter2";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import Hero from "./Components/Hero";
import ErrorHandeling from "./Components/ErrorHandeling";
import PortalDemo from "./Components/PortalDemo";
import FRParentInput from "./Components/FRParentInput";
import FocusInput from "./Components/FocusInput";
import RefsMemo from "./Components/RefsMemo";
import ParentComp from "./Components/ParentComp";
import Table from "./Components/Table";
import LifeCycleA from "./Components/LifeCycleA";
import styles from "./appStyle.module.css";
import Form from "./Components/Form";
import FragmentDemo from "./Components/FragmentDemo";
import PureComp from "./Components/PureComp";

function App() {
  return (
    <div className="App">
      <UserProvider value={"farzad"}>
        <ComponentC />
      </UserProvider>
      <Counter2>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter2>
      <Counter2>
        {(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter2>
      <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => (isLoggedIn ? "farzad" : "Guest")} />
      <ClickCounter name="farzad" />
      <HoverCounter />
      <ErrorHandeling>
        <Hero heroName="Joker" />
      </ErrorHandeling>
      <ErrorHandeling>
        <Hero heroName="farzad" />
      </ErrorHandeling>
      <PortalDemo />
      <FRParentInput />
      <FocusInput />
      <RefsMemo />
      <ParentComp />
      <PureComp />
      <Table />
      <FragmentDemo />
      <LifeCycleA />
      <Form />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <StyleSheet primary={true} />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBinding />
      <ClassClick />
      <FunctionClick />
      <Counter />
      <Message />
      <Greet name="farzad" heroName="sanjarani">
        <p>This is my name!</p>
      </Greet>
      <Greet name="farzad" heroName="sanjarani">
        <button>Action</button>
      </Greet>
      <Welcome name="farzad" heroName="sanjarani" />
    </div>
  );
}

export default App;
