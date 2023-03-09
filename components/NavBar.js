import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { useSession } from "@supabase/auth-helpers-react";

export default function NavBar() {
  const session = useSession();

  return (
    <div className="checkingSession">
      <Navbar isCompact isBordered variant="static">
        <Text hideIn="xs">CollyFit</Text>
       
        {/* <Navbar.Link href="workouts"> Workouts </Navbar.Link> */}
        
        <Navbar.Content variant="highlight-rounded">
          {session && <Navbar.Link href="Home"> Home </Navbar.Link>}
          {session && <Navbar.Link href="statistics"> Statistics </Navbar.Link>}
          {/* {!session ? (<Navbar.Link href="/"> Sign In Here </Navbar.Link> ) : (<Navbar.Link href="/"> Account </Navbar.Link>)} */}
          {session ? (<Navbar.Link href="/"> Account </Navbar.Link>) : (<Navbar.Link href="/"> Sign In Here </Navbar.Link> )}
        </Navbar.Content>
      </Navbar>
    </div>
  );
}
