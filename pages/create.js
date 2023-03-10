import Layout from "@/components/Layout";
import { Input, Grid, Button } from "@nextui-org/react";
import Link from "next/link";

const Create = () => {
   

    return(
    <Layout>
        <div className="inputGrid">
   
        <Input className="inputCss"
          underlined 
          labelPlaceholder="Workout Type" 
          color="default" 
          css={{width:'25%', flex:'wrap'}}/>
   
        <Input className="inputCss"
          underlined 
          labelPlaceholder="Length" 
          color="primary" 
          css={{width:'25%', flex:'wrap'}}
        />
   
        <Input className="inputCss"
          underlined 
          labelPlaceholder="Day" 
          color="secondary" 
          css={{width:'25%', flex:'wrap'}}
        />
 
      </div>
        <div className="submitGrid">
      <Button className="submitButton" color="warning">
          <Link href="create" color="warning">
            Submit Data{" "}
          </Link>
        </Button>
        </div>
    </Layout>
    )
}

export default Create;