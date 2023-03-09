import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import Layout from "@/components/Layout";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <Layout>
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
        providers={["google","discord",'twitter']}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <Account session={session} />
      )}
    </div>
    </Layout>
  );
};

export default Home;
